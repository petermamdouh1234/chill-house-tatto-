import { Button } from './ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="tattoo-hero-text mb-6">
          READY FOR YOUR NEXT
          <br />
          <span className="text-tattoo-red">TATTOO</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-tattoo-light/90 mb-8 font-light">
          Professional custom tattoos by Michael - where realism meets artistry
        </p>
        
        <Button
          variant="tattoo-primary"
          size="lg"
          onClick={scrollToBooking}
          className="text-lg px-8 py-6 h-auto tattoo-glow"
        >
          Book Your Session
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-tattoo-red to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;