import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.853!2d108.3277778!3d15.8801389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUyJzQ4LjUiTiAxMDjCsDE5JzQwLjAiRQ!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="10%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/Duan.Maystudio.Hoian"
                  className="hover:text-gray-400 transition-colors"
                >
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
            <p className="text-sm md:text-base align-bottom mt-4 ">
              &copy; 2025 May Studio. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {t.contactUs}
            </h3>
            <p className="text-sm md:text-base">
              Vạn Lăng, Cẩm Thanh, TP. Hội An, Quảng Nam
            </p>
            <p className="text-sm md:text-base">maystudio.hoian@gmail.com</p>
            <p className="text-sm md:text-base">(+84) 905 030 228</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
