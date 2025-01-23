import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useLanguage } from "../LanguageContext"
import { translations } from "../i18n"

const Welcome = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  }

  return (
    <section className="py-8 md:py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">{t.welcome}</h1>
        <div className="border-2 border-gray-300 rounded-lg p-1">
          <Slider {...settings}>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Slide 1"
                className="w-full h-64 md:h-96 object-cover rounded"
              />
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Slide 2"
                className="w-full h-64 md:h-96 object-cover rounded"
              />
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Slide 3"
                className="w-full h-64 md:h-96 object-cover rounded"
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Welcome
