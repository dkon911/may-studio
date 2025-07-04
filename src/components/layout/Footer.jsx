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
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d239.84342856236782!2d108.3694013!3d15.8831251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420d8eb596cf5f%3A0x134614410a67e61b!2sMay%20studio%20Hoi%20An!5e0!3m2!1svi!2s!4v1751531843043!5m2!1svi!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded max-w-full"
            ></iframe>
          </div>
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/Duan.Maystudio.Hoian"
                  target="_blank"
                  className="hover:text-gray-400 transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/duanngo88/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
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
              Contact Us
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
