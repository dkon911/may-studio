import { useTranslation } from "react-i18next"

const PortfolioPage = () => {
  const { t } = useTranslation()

  const portfolioItems = [
    { category: "baby", images: [1, 2, 3, 4] },
    { category: "newborn", images: [1, 2, 3, 4] },
    { category: "family", images: [1, 2, 3, 4] },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-12">{t("portfolio")}</h1>

        {portfolioItems.map((item) => (
          <div key={item.category} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6">{t(item.category)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {item.images.map((image, index) => (
                <div key={index} className="relative overflow-hidden group">
                  <img
                    src={`/placeholder.svg?height=400&width=400&text=${item.category}${image}`}
                    alt={`${t(item.category)} ${image}`}
                    className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                      {t("viewLarge")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioPage

