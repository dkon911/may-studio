import React, { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("vi")

  // The toggleLanguage function is kept for now, but setLanguage is more flexible
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "vi" ? "en" : "vi"))
  }

  return <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

