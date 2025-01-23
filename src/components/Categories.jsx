import React from "react"
import { useLanguage } from "../LanguageContext"
import { translations } from "../i18n"

const Categories = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const categories = [
    { name: t.baby, image: "/placeholder.svg?height=300&width=400" },
    { name: t.newborn, image: "/placeholder.svg?height=300&width=400" },
    { name: t.family, image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl md:text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

