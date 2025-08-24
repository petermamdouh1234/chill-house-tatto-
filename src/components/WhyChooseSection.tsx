import { Award, Palette, Shield, MapPin, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Artistry Rooted in Realism',
    description: "Michael's mastery of portrait painting ensures every tattoo carries depth, emotion, and lifelike quality."
  },
  {
    icon: Award,
    title: 'Fully Customized Designs',
    description: 'No pre-made templates — each piece is designed in collaboration with the client for a truly personal result.'
  },
  {
    icon: Shield,
    title: 'Strict Hygiene Standards',
    description: 'We adhere to the highest industry protocols to ensure a clean, safe, and professional environment.'
  },
  {
    icon: MapPin,
    title: 'Prime Studio Locations',
    description: 'Located in Zamalek (Cairo) and Zezenia (Alexandria), both branches are fully equipped and welcoming.'
  },
  {
    icon: Users,
    title: 'Clear, Client-Focused Process',
    description: 'From consultation to aftercare, our team is committed to transparency, respect, and client satisfaction.'
  },
  {
    icon: Star,
    title: 'Exceptional Quality',
    description: 'Every tattoo is treated as a masterpiece, with attention to detail that sets us apart from the rest.'
  }
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-tattoo-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tattoo-light mb-6">
            WHY CHOOSE <span className="text-tattoo-red">CHILL HOUSE TATTOO</span>
          </h2>
          <p className="text-xl text-tattoo-light/80 max-w-4xl mx-auto leading-relaxed">
            At Chill House Tattoo, we combine artistic integrity with professional execution to deliver exceptional, 
            custom tattoos tailored to each client. Founded and led by Michael, a seasoned tattoo artist and portrait painter, 
            the studio is built on a deep understanding of realism, detail, and precision.
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-tattoo-yellow mb-4">
            What Sets Us Apart:
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className="tattoo-card p-6 h-full hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-tattoo-red/20 rounded-full mb-6 group-hover:bg-tattoo-red/30 transition-colors">
                    <IconComponent className="text-tattoo-red" size={32} />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-tattoo-light mb-3 group-hover:text-tattoo-yellow transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-tattoo-light/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 tattoo-card">
          <h3 className="text-2xl font-bold text-tattoo-light mb-4">
            Experience the <span className="text-tattoo-red">Chill House</span> Difference
          </h3>
          <p className="text-tattoo-light/80 mb-6 max-w-2xl mx-auto">
            With a background in fine art, Michael approaches every tattoo as a unique canvas — 
            transforming ideas into lasting, meaningful artwork.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-tattoo-light/70">
            <span className="bg-tattoo-red/20 px-3 py-1 rounded-full">Professional Equipment</span>
            <span className="bg-tattoo-red/20 px-3 py-1 rounded-full">Sterile Environment</span>
            <span className="bg-tattoo-red/20 px-3 py-1 rounded-full">Custom Designs</span>
            <span className="bg-tattoo-red/20 px-3 py-1 rounded-full">Aftercare Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;