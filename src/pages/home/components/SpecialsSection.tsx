export default function SpecialsSection() {
  const specials = [
    {
      title: 'Russian Lips & Lip Filler 0,5–1 ml',
      description:
        'Russian Lips oder klassischer Lip Filler – 0,5 oder 1 ml zum Paketpreis von 199 € inkl. Analyse und Formplanung.',
      badge: 'LIPS SPECIAL',
      badgeColor: 'bg-neutral-900',
      image: '/images/specials/russian-lips-offer.jpg'
    },
    {
      title: 'Kombi: Lippen + Kinn + Jawline',
      description:
        'Kombi-Paket für harmonische Profilkorrektur – z. B. Lippen + Kinn + Jawline zu vergünstigten Paketpreisen.',
      badge: 'FULL FACE',
      badgeColor: 'bg-neutral-800',
      image: '/images/specials/correction-offer.jpg'
    },
    {
      title: 'Lemon Bottle Bodycontouring',
      description:
        'Lemon Bottle Behandlung für lokale Problemzonen – z. B. Kinnbereich oder Körperzonen. Behandlungen ab 99 € pro Area.',
      badge: 'LEMON BOTTLE',
      badgeColor: 'bg-amber-900',
      image: '/images/specials/halfml-offer.jpg'
    }
  ];

  return (
    <section id="specials" className="py-20 md:py-24 bg-[#f6f2ec]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-neutral-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Aktuelle Specials
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto text-neutral-800 opacity-90"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ausgewählte Angebote für Russian Lips, Full Face Pakete und Lemon Bottle – zeitlich begrenzt und nur in begrenzter Stückzahl verfügbar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <div
              key={index}
              className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-lg/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative">
                <img 
                  src={special.image} 
                  alt={special.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className={`absolute top-4 left-4 ${special.badgeColor} text-white rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide`}>
                  {special.badge}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 text-neutral-900"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {special.title}
                </h3>

                <p
                  className="mb-6 opacity-90 flex-grow text-sm md:text-base text-neutral-800"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {special.description}
                </p>

                <a
                  href="https://wa.me/491737158636"
                  className="w-full py-3 bg-neutral-900 text-white rounded-xl text-sm font-medium transition-all duration-300 hover:bg-black mt-auto text-center"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Angebot sichern
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14 md:mt-16">
          <p
            className="text-base md:text-lg mb-6 text-neutral-800"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Hast du Fragen zu den Specials oder möchtest ein Paket passend zu deinem Gesicht planen lassen?
          </p>
          <a
            href="https://wa.me/491737158636"
            className="inline-flex items-center justify-center px-8 py-3 bg-white border border-black/10 font-semibold text-sm md:text-base rounded-full hover:bg-neutral-50 transition-all duration-300 cursor-pointer whitespace-nowrap text-neutral-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Nachricht via WhatsApp senden
          </a>
        </div>
      </div>
    </section>
  );
}
