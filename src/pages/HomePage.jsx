import { useTranslation } from "react-i18next"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const HomePage = () => {
  const { t } = useTranslation()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div>
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4 md:mb-8">
            {t("welcome")}
          </h1>
          <p className="text-black text-lg md:text-xl text-center max-w-2xl mx-auto">{t("welcomeMessage")}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-10">
            <Slider {...sliderSettings}>
              <div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Baby"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Newborn"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Family"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-8">{t("ourPortfolio")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Baby"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{t("baby")}</h3>
              <p className="mb-4">{t("babyDescription")}</p>
              <Link to="/portfolio" className="text-blue-600 hover:text-blue-800">
                {t("viewMore")}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Newborn"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{t("newborn")}</h3>
              <p className="mb-4">{t("newbornDescription")}</p>
              <Link to="/portfolio" className="text-blue-600 hover:text-blue-800">
                {t("viewMore")}
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Family"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{t("family")}</h3>
              <p className="mb-4">{t("familyDescription")}</p>
              <Link to="/portfolio" className="text-blue-600 hover:text-blue-800">
                {t("viewMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-8">{t("aboutStudio")}</h2>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-8">{t("studioDescription")}</p>
          <div className="text-center">
            <Link to="/about" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 inline-block">
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-8">{t("contactUs")}</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                {t("name")}
              </label>
              <input type="text" id="name" className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                {t("email")}
              </label>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                {t("message")}
              </label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 w-full md:w-auto"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HomePage

