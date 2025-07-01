import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/i18n"

const Categories = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const categories = [
    {
      name: t.family,
      image: "/placeholder.svg?height=600&width=800",
      className: "col-span-2 row-span-1 md:col-span-1 md:row-span-2",
    },
    {
      name: t.baby,
      image: "/placeholder.svg?height=400&width=400",
      className: "col-span-1 row-span-1",
    },
    {
      name: t.newborn,
      image: "/placeholder.svg?height=400&width=400",
      className: "col-span-1 row-span-1",
    },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          {t.ourServices}
        </h2>
        <div className="grid grid-cols-2 md:grid-rows-2 gap-4 md:gap-6 h-[500px] md:h-[600px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group rounded-lg shadow-lg ${category.className}`}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl md:text-3xl font-playfair font-bold">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
