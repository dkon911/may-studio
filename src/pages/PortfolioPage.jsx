import React, { useState, useEffect } from "react"
import { getAllImagesFromDrive } from "@/services/googleDrive" 
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/i18n"
import { Loader } from "lucide-react" 
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import Pagination from "@/components/sections/Pagination"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import usePagination from "@/hooks/usePagination" // Import the custom hook

const PortfolioPage = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const { t: i18nT } = useTranslation()
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const fetchAllImages = async () => {
      setLoading(true)
      try {
        const imageList = await getAllImagesFromDrive() // Use the new simplified function
        setImages(imageList)

        // Extract unique categories from the full image list
        const uniqueCategories = [
          "All",
          ...new Set(imageList.map((image) => image.category)),
        ]
        setCategories(uniqueCategories)
      } catch (error) {
        console.error("Failed to fetch images:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllImages()
  }, []) // Runs only once on component mount

  // 1. Filter images by the selected category first
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory)

  // 2. Use the custom hook to manage pagination logic for the filtered images
  const { currentPage, totalPages, handlePageChange, currentItems } = usePagination(
    filteredImages,
    8, // 8 images per page
  )

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-8">
          {t.portfolio}
        </h1>

        {/* Category Filters */}
        {!loading && images.length > 0 && (
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "All" ? i18nT("all Categories") : category}
              </Button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="ml-4 text-lg">{t.loadingImages}</p>
          </div>
        ) : currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentItems.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden group rounded-lg shadow-md"
                >
                  <LazyLoadImage
                    alt={image.name}
                    src={image.url}
                    effect="blur"
                    className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                    wrapperClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Future feature: Open a lightbox/modal on click */}
                    <p className="text-white text-center p-2">{image.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
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

