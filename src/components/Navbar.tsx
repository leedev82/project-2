import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase as BriefcaseBusiness } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Hirevetly</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm">Get Started Free</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
            <a href="#pricing" className="block text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
            <div className="flex space-x-4 mt-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started Free</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;