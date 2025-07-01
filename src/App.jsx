import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileMenu from "@/components/layout/MobileMenu"; // Import MobileMenu
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import PortfolioPage from "@/pages/PortfolioPage";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n";

// Main App component logic
function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/about", label: t.aboutUs },
    { href: "/portfolio", label: t.portfolio },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header onMenuOpen={() => setIsMobileMenuOpen(true)} navLinks={navLinks} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
      <Footer />
      {/* Render MobileMenu at the top level */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </div>
  );
}

// Wrapper component to provide LanguageContext
function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

