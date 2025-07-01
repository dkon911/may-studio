import React from "react"
import Welcome from "@/components/sections/Welcome"
import Categories from "@/components/sections/Categories"
import About from "@/components/sections/About"
import ContactForm from "@/components/sections/ContactForm"

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Categories />
      <About />
      <ContactForm />
    </div>
  )
}

export default HomePage

