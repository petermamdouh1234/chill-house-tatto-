import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/logo.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tattoo-darker/95 backdrop-blur-sm border-b border-tattoo-red/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
  <a href="/" className="flex items-center">
    <img
      src={Logo}
      alt="Chill House Tattoo"
      className="h-24 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,0,0,0.8)] transition-all duration-300 hover:scale-110"
    />
  </a>
</div>




          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-tattoo-light hover:text-tattoo-red transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-tattoo-light hover:text-tattoo-red transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-tattoo-light hover:text-tattoo-red transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-tattoo-light hover:text-tattoo-red transition-colors"
            >
              Reviews
            </button>
            <Button
              variant="tattoo-primary"
              onClick={() => scrollToSection('booking')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="tattoo-ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-tattoo-red/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-tattoo-light hover:text-tattoo-red transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-tattoo-light hover:text-tattoo-red transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-tattoo-light hover:text-tattoo-red transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-tattoo-light hover:text-tattoo-red transition-colors text-left"
              >
                Reviews
              </button>
              <Button
                variant="tattoo-primary"
                onClick={() => scrollToSection('booking')}
                className="w-fit"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;