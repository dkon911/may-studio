import React from "react";
import { useLanguage } from "../LanguageContext";
import { translations } from "../i18n";
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-6">
        <button onClick={onClose}>
          <X className="mt-2 h-6 w-6" />
        </button>
        <div className="flex justify-between items-center mt-10 mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800"
                onClick={onClose}
              >
                {t.home}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800"
                onClick={onClose}
              >
                {t.aboutUs}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800"
                onClick={onClose}
              >
                {t.portfolio}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
