import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const navigation = {
    en: [
      { name: "Home", href: "/" },
      { name: "Gallery", href: "/gallery" },
      { name: "Book Now", href: "/booking" },
      { name: "Packages", href: "/packages" },
    ],
  vi: [
    { name: "Trang chủ", href: "/" },
    { name: "Thư viện", href: "/gallery" },
    { name: "Đặt lịch", href: "/booking" },
    { name: "Gói chụp", href: "/packages" },
  ],
};

export default function MobileMenu({ isOpen, onClose }) {
  const { language } = useLanguage();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Dialog.Panel className="w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Menu
                      </Dialog.Title>
                      <button
                        type="button"
                        className="rounded-md p-2 hover:bg-gray-100"
                        onClick={onClose}
                      >
                        <XMarkIcon className="h-6 w-6 text-gray-900" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flex-1 px-4 sm:px-6">
                    <nav className="space-y-4">
                      {navigation[language].map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-3 py-2 text-lg text-gray-900 hover:bg-gray-100 rounded-md"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
