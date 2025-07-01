import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../i18n";
import googleDriveService from "../config/googleDrive";

const Gallery = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [images, setImages] = useState({
    baby: [],
    newborn: [],
    family: []
  });
  const [loading, setLoading] = useState(true);

  // ID thư mục Google Drive cho từng danh mục
  const folderIds = {
    baby: 'YOUR_BABY_FOLDER_ID',
    newborn: 'YOUR_NEWBORN_FOLDER_ID', 
    family: 'YOUR_FAMILY_FOLDER_ID'
  };

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const imagePromises = Object.keys(folderIds).map(async (category) => {
          const categoryImages = await googleDriveService.getImageUrls(folderIds[category]);
          return { category, images: categoryImages };
        });

        const results = await Promise.all(imagePromises);
        const newImages = {};
        
        results.forEach(({ category, images: categoryImages }) => {
          newImages[category] = categoryImages;
        });

        setImages(newImages);
      } catch (error) {
        console.error('Lỗi tải ảnh từ Google Drive:', error);
        // Fallback về ảnh mặc định nếu có lỗi
        setImages({
          baby: [{ url: "https://streamersvisuals.com/cdn/shop/articles/gg-good-game-definition-et-origine-587772.jpg?v=1725800301", name: "baby1" }],
          newborn: [],
          family: []
        });
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4">Đang tải ảnh...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{t.portfolio}</h2>

        {Object.keys(images).map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4">{t[category]}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images[category].map((image, index) => (
                <div key={image.id || index} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={`${t[category]} ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg?height=300&width=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => window.open(image.viewLink, '_blank')}
                      className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;