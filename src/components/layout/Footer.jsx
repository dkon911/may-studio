import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/i18n"

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{t.contactUs}</h3>
            <p className="text-sm md:text-base">Vạn Lăng, Cẩm Thanh, TP. Hội An, Quảng Nam</p>
            <p className="text-sm md:text-base">maystudio.hoian@gmail.com</p>
            <p className="text-sm md:text-base">+84 905 030 228</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="https://www.facebook.com/Duan.Maystudio.Hoian" className="hover:text-gray-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
              </li>
               <li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
              </li>
              {/*<li>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
              </li> */}
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-sm md:text-base">&copy; 2025 May Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

