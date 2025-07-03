import React, { useState, useEffect } from "react"
import { getImagesFromDrive } from "@/services/googleDrive"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/i18n"
import { Loader } from "lucide-react" // Loading spinner icon
import { useTranslation } from "react-i18next"

const PortfolioPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const { t: i18nT } = useTranslation()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true)
      const imageList = await getImagesFromDrive()
      setImages(imageList)
      setLoading(false)
    }

    fetchImages()
  }, [])

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-12">
          {t.portfolio}
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="ml-4 text-lg">{t.loadingImages}</p>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden group rounded-lg shadow-md"
              >
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Future feature: Open a lightbox/modal on click */}
                  <p className="text-white text-center p-2">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              {t.noImagesFound}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.noImagesFoundDesc}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioPage

