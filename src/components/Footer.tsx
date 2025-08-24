
import { Instagram, Facebook, Phone } from "lucide-react";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tattoo-darker border-t border-tattoo-red/20">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-tattoo-light">
                <span className="text-tattoo-red">CHILL HOUSE</span> TATTOO
              </h3>
            </div>
            <p className="text-tattoo-light/80 mb-6 max-w-md leading-relaxed">
              Led by realism artist Michael, we specialize in custom tattoos and portrait work — 
              combining fine art with precision in a clean, professional studio.
            </p>
            
            {/* Studio Locations */}
            <div className="space-y-2 text-tattoo-light/70">
  <h4 className="font-semibold text-tattoo-yellow mb-3">Studio Locations:</h4>

  <p>
    📍{" "}
    <a
      href="https://maps.app.goo.gl/mRcwj6tkxoAmxSng8?g_st=ipc"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-tattoo-light/80 hover:text-tattoo-red transition-colors group"
    >
      Zamalek, Cairo
    </a>
  </p>

  <p>
    📍{" "}
    <a
      href="https://maps.app.goo.gl/YSsMDmpyxoELnXnW6"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-tattoo-light/80 hover:text-tattoo-red transition-colors group"
    >
      Zezenia, Alexandria
    </a>
  </p>
</div>

          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="font-semibold text-tattoo-yellow mb-6">Follow Us</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/chillhousetattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-tattoo-light/80 hover:text-tattoo-red transition-colors group"
              >
                <Instagram className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                @chillhousetattoo
              </a>
              
              <a
                href="https://www.facebook.com/profile.php?id=61572565110582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-tattoo-light/80 hover:text-tattoo-red transition-colors group"
              >
                <Facebook className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                Chill House Tattoo
              </a>
              
              <a
                href="https://www.tiktok.com/@chillhousetattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-tattoo-light/80 hover:text-tattoo-red transition-colors group"
              >
                <div className="w-5 h-5 mr-3 bg-tattoo-light rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-tattoo-dark text-xs font-bold">TT</span>
                </div>
                @chillhousetattoo
              </a>
              <a
                href="https://wa.me/201288744555"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-tattoo-light/80 hover:text-tattoo-red transition-colors group"
              >             
                 <Phone className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                   WhatsApp
              </a>

                 
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-tattoo-yellow mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-tattoo-light/80 hover:text-tattoo-red transition-colors"
                >
                  About Michael
                </button>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-tattoo-light/80 hover:text-tattoo-red transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-tattoo-light/80 hover:text-tattoo-red transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tattoo-red/20 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-tattoo-light/60 text-sm mb-4 md:mb-0">
              © 2024 Chill House Tattoo. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-tattoo-light/60">
                Professional Tattoo Services in Cairo & Alexandria
              </span>
              <button
                onClick={scrollToTop}
                className="text-tattoo-red hover:text-tattoo-yellow transition-colors font-medium"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;