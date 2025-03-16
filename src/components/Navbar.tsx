import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-white text-2xl font-bold" onClick={() => scrollToSection('hero')}>KITCHEN</Link>
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="#hero" 
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => scrollToSection('hero')}
              >
                About
              </a>
              <a href="#services" className="text-white hover:text-gray-300 transition-colors">Services</a>
              <a href="#portfolio" className="text-white hover:text-gray-300 transition-colors">Portfolio</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
          
          <button 
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors md:hidden"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a 
                href="#hero" 
                className="block text-white hover:text-gray-300 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('hero');
                }}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block text-white hover:text-gray-300 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('services');
                }}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="block text-white hover:text-gray-300 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('portfolio');
                }}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="block text-white hover:text-gray-300 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
