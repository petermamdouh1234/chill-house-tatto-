import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Hanan',
    location: 'Cairo',
    rating: 5,
    text: 'The studio is clean, neat and Micheal is very welcoming and very talented! I love the tattoo I got! I sent him the pic via WhatsApp and found it ready to be drawn on my arm. The shading and details as you can see are amazing, He also gave my old tattoo a retouch for free! Great work, great spirit, highly recommended 👍👍.',
    tattoo: 'Portrait Tattoo'
  },
  {
    name: 'Mamdouh Fawzy',
    location: 'Alexandria',
    rating: 5,
    text: 'Honestly, I had many tattoos done in Cairo and Italy, and the most professional and skilled artist I have come across is Michael, the owner of Shell House. All appreciation and respect for your art.',
    tattoo: 'Dragon Design'
  },
  {
    name: 'Jazmin Gonzalez',
    location: 'Cairo',
    rating: 5,
    text: 'Very quick reply, good communication, directions sent, very good price, very professional, very kind, clean studio, good vibes, very respectful, good color range available to choose from, definitely recommend.',
    tattoo: 'Geometric Mandala'
  },
  {
    name: 'Ahmed Seleem',
    location: 'Alexandria',
    rating: 5,
    text: 'Michael, I really thank you for this beautiful drawing. He is a real artist, very clean, and the attention to detail is beyond description. He is the only one in Egypt who draws with light lines, and his hand is light. The quality of the materials and ink is really wonderful. Value for money. I advise everyone who loves tattoos to try Michael’s work. Discover it.',
    tattoo: 'Wolf Portrait'
  },
  {
    name: 'Mahmoud Yasser',
    location: 'Cairo',
    rating: 5,
    text: 'The best way to get a tattoo is to be clear if I will stay texting for 2 days I will not give him his rightFinal word the best of the best 👌🏼❤️thank you so much Michael 💕❤️The best person to deal with and his style and he is very clever in his field and he proved that the wound after the tattoo, I swear, really has no effect. Thank you very much Michael ❤️❤️❤️',
    tattoo: 'Rose Design'
  },
  {
    name: 'Abanoub Melad',
    location: 'Alexandria',
    rating: 5,
    text: 'Seriously, guys, he is very clever, and all the equipment is modern, and the place is clean and sterile. I advise anyone who wants to get a tattoo not to think about the price because this is something that is permanent. Either you do it right or you don’t think about it ',
    tattoo: 'Custom Design'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-tattoo-darker">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tattoo-light mb-6">
            CLIENT <span className="text-tattoo-red">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-tattoo-light/80 max-w-2xl mx-auto">
            Hear from our satisfied clients about their Chill House Tattoo experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="tattoo-card p-6 h-full hover:scale-105 transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-tattoo-red/20 group-hover:text-tattoo-red/40 transition-colors">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-tattoo-yellow fill-current" size={20} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-tattoo-light/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-tattoo-red/20 pt-4">
                  <h4 className="font-bold text-tattoo-light group-hover:text-tattoo-yellow transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-tattoo-light/60 text-sm">{testimonial.location}</p>
                  <p className="text-tattoo-red text-sm font-medium mt-1">
                    {testimonial.tattoo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="tattoo-card p-6">
            <div className="text-3xl font-bold text-tattoo-red mb-2">500+</div>
            <div className="text-tattoo-light/70">Happy Clients</div>
          </div>
          <div className="tattoo-card p-6">
            <div className="text-3xl font-bold text-tattoo-red mb-2">4.9</div>
            <div className="text-tattoo-light/70">Average Rating</div>
          </div>
          <div className="tattoo-card p-6">
            <div className="text-3xl font-bold text-tattoo-red mb-2">8+</div>
            <div className="text-tattoo-light/70">Years Experience</div>
          </div>
          <div className="tattoo-card p-6">
            <div className="text-3xl font-bold text-tattoo-red mb-2">2</div>
            <div className="text-tattoo-light/70">Studio Locations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;