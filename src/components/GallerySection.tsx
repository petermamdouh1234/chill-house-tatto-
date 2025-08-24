import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// Import all tattoo images
import tattoo1 from '@/assets/108.jpg';
import tattoo2 from '@/assets/208.jpg';
import tattoo3 from '@/assets/100.jpg';
import tattoo4 from '@/assets/104.jpg';
import tattoo5 from '@/assets/110.jpg';
import tattoo6 from '@/assets/206.jpg';
import tattoo7 from '@/assets/101.jpg';
import tattoo8 from '@/assets/103.jpg';
import tattoo9 from '@/assets/109.jpg';
import tattoo10 from '@/assets/105.jpg';
import tattoo11 from '@/assets/115.jpg';
import tattoo12 from '@/assets/112.jpg';
import tattoo13 from '@/assets/113.jpg';
import tattoo14 from '@/assets/114.jpg';
import tattoo15 from '@/assets/200.jpg';
import tattoo16 from '@/assets/201.jpg';
import tattoo17 from '@/assets/202.jpg';
import tattoo18 from '@/assets/203.jpg';
import tattoo19 from '@/assets/204.jpg';
import tattoo20 from '@/assets/205.jpg';
import tattoo21 from '@/assets/106.jpg';
import tattoo22 from '@/assets/207.jpg';
import tattoo23 from '@/assets/102.jpg';
import tattoo24 from '@/assets/209.jpg';
import tattoo25 from '@/assets/210.jpg';

import Logo from "../assets/logo.png";

const tattooImages = [
  { src: tattoo1, alt: 'Realistic Portrait Tattoo' },
  { src: tattoo2, alt: 'Geometric Mandala Tattoo' },
  { src: tattoo3, alt: 'Lion Portrait Tattoo' },
  { src: tattoo4, alt: 'Rose Tattoo Design' },
  { src: tattoo5, alt: 'Eagle Wing Tattoo' },
  { src: tattoo6, alt: 'Skull Art Tattoo' },
  { src: tattoo7, alt: 'Dragon Wrap Tattoo' },
  { src: tattoo8, alt: 'Nautical Compass Tattoo' },
  { src: tattoo9, alt: 'Wolf Portrait Tattoo' },
  { src: tattoo10, alt: 'Vintage Clock Tattoo' },
  { src: tattoo11, alt: 'Butterfly Wing Tattoo' },
  { src: tattoo12, alt: 'Tree of Life Tattoo' },
  { src: tattoo13, alt: 'Phoenix Rising Tattoo' },
  { src: tattoo14, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo15, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo16, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo17, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo18, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo19, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo20, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo21, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo22, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo23, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo24, alt: 'Anchor Nautical Tattoo' },
  { src: tattoo25, alt: 'Koi Fish Tattoo' },
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % tattooImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + tattooImages.length) % tattooImages.length);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const visibleImages = showFullGallery ? tattooImages : tattooImages.slice(0, 6);

  return (
    <section id="gallery" className="section-padding bg-tattoo-darker">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-tattoo-light mb-4">
            FEATURED <span className="text-tattoo-red">DESIGNS</span>
          </h2>
          <p className="text-xl text-tattoo-light/80 max-w-2xl mx-auto">
            Explore our collection of custom tattoos and realistic artwork
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-lg tattoo-card">
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src={tattooImages[currentIndex].src}
                alt={tattooImages[currentIndex].alt}
               className="w-full h-full object-contain bg-black transition-opacity duration-300"

              />
              
              {/* Watermark */}
              <div className="absolute bottom-4 right-4">
            <img
              src={Logo}
              alt="Chill House Tattoo"
              className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.9)] hover:scale-125 transition-transform duration-300"
            />
          </div>

            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {tattooImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-tattoo-red' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              variant="tattoo-primary"
              size="lg"
              onClick={scrollToBooking}
              className="px-8"
            >
              Book Now
            </Button>
            <Button
              variant="tattoo-outline"
              size="lg"
              onClick={() => setShowFullGallery(!showFullGallery)}
              className="px-8"
            >
              <Eye className="mr-2" />
              {showFullGallery ? 'Show Less' : 'View Gallery'}
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-500 ${
          showFullGallery ? 'opacity-100 max-h-none' : 'opacity-80 max-h-96 overflow-hidden'
        }`}>
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg tattoo-card"
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
              </div>
              
              {/* Watermark */}
              <div className="absolute bottom-4 right-4">
  <img
    src={Logo}
    alt="Chill House Tattoo"
    className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.9)] hover:scale-125 transition-transform duration-300"
  />
</div>
            </div>
          ))}
        </div>

        {!showFullGallery && tattooImages.length > 6 && (
          <div className="text-center mt-8">
            <Button
              variant="tattoo-secondary"
              onClick={() => setShowFullGallery(true)}
            >
              View All {tattooImages.length} Designs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;