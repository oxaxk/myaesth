export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aylin K.',
      rating: 5,
      text: 'Meine Russian Lips sind perfekt geworden – volle, aber natürliche Form. Schwellung ging schnell zurück. 10/10.',
      image: null
    },
    {
      name: 'Svetlana P.',
      rating: 5,
      text: 'Ich hatte asymmetrische Lippen. Die Korrektur war unglaublich professionell. Endlich perfekte Form.',
      image: null
    },
    {
      name: 'Meryem A.',
      rating: 5,
      text: 'Sehr sanfte Behandlung. Die Heilpraktikerin hat mir alles erklärt und genau nach Wunsch umgesetzt.',
      image: null
    },
    {
      name: 'Lara N.',
      rating: 5,
      text: 'Meine 0,5 ml sehen so natürlich aus. Genau das, was ich wollte. Studio ist super sauber.',
      image: null
    },
    {
      name: 'Daria S.',
      rating: 5,
      text: 'Ich komme extra aus Potsdam her. Ergebnisse jedes Mal perfekt, besonders Russian Lips.',
      image: null
    },
    {
      name: 'Olga M.',
      rating: 5,
      text: 'Korrektur + neue Form = beste Entscheidung. Endlich keine alten Klumpen mehr. Sehr professionell.',
      image: null
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#f6f2ec]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-neutral-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Erfahrungen bei MY AESTHETIC
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto text-neutral-800 opacity-90"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ausgewählte Rückmeldungen zu Russian Lips, Lip Filler und Korrekturen – natürliche Ergebnisse, klare Formen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl p-6 shadow-md hover:shadow-lg border border-black/5 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className="ri-user-line text-xl text-gray-400"></i>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              <p
                className="opacity-90 italic text-sm md:text-base text-neutral-800"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
