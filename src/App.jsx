import React from "react";
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import PortfolioPage from "@/pages/PortfolioPage";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

