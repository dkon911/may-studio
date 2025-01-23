import React, { useState } from "react"
import { useLanguage } from "../LanguageContext"
import { translations } from "../i18n"
import { Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-gray-800">Logo</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                {t.home}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                {t.aboutUs}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                {t.portfolio}
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleLanguage} className="bg-gray-200 px-3 py-1 rounded">
            {language === "vi" ? "EN" : "VI"}
          </button>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

export default Header

