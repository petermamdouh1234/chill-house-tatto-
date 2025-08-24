import artistMichael from '@/assets/artist-michael.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-tattoo-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-tattoo-light mb-4">
                ABOUT THE <span className="text-tattoo-red">ARTIST</span>
              </h2>
              <p className="text-xl text-tattoo-yellow font-semibold mb-6">
                Meet Michael — the artist behind Chill House Tattoo.
              </p>
            </div>
            
            <div className="space-y-4 text-tattoo-light/90 leading-relaxed">
              <p>
                A seasoned tattoo artist and portrait painter, Michael has built his reputation on one guiding belief: <strong className="text-tattoo-red">"Mastering realism means mastering any style."</strong>
              </p>
              
              <p>
                With a deep foundation in fine art and years of experience in realism, Michael brings a painter's precision to every tattoo. His work blends technical mastery with storytelling whether it's a custom piece, a lifelike portrait, or a bold concept brought to life through ink.
              </p>
              
              <p>
                From Alexandria's coast to Cairo's streets, Michael has become a go-to artist for those seeking tattoos that go beyond trends — pieces that are personal, timeless, and artfully crafted.
              </p>
            </div>

          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg tattoo-card">
              <img
                src="/109.jpg"
                alt="Michael - Realism Tattoo Artist"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-tattoo-red text-white px-4 py-2 rounded-md font-semibold">
                REALISM TATTOO ARTIST
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;