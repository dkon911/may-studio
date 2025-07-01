import React from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/i18n"

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">{t.aboutUs}</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm md:text-base">{t.aboutStudio}</p>
      </div>
    </section>
  )
}

export default About
