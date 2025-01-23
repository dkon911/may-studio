import React from "react"
import { LanguageProvider } from "./LanguageContext"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Categories from "./components/Categories"
import About from "./components/About"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Welcome />
          <Categories />
          <About />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

