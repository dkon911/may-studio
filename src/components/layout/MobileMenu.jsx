import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-background shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/"
            className="font-bold text-lg font-serif"
            onClick={onClose}
          >
            May Studio
          </Link>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-lg text-foreground hover:text-muted-foreground"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
