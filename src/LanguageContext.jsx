import React, { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("vi")

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "vi" ? "en" : "vi"))
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)

