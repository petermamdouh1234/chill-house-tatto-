import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tattoo-dark">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
