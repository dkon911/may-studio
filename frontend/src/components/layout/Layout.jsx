import { useState } from 'react';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="px-4 pt-16 pb-20 text-gray-900 dark:text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout; 