export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Analyse & Beratung',
      description:
        'Wir besprechen deine Wünsche, analysieren Lippenform, Gesichtsanatomie und klären, was realistisch ist.'
    },
    {
      number: '02',
      title: 'Behandlungsplan',
      description:
        'Auswahl der passenden Technik (z. B. Russian Lips, klassischer Lip Filler, Full Face) und Menge der ml.'
    },
    {
      number: '03',
      title: 'Behandlung',
      description:
        'Ruhige, strukturierte Injektionsbehandlung mit hochwertigen Hyaluronpräparaten und klarer Kommunikation bei jedem Schritt.'
    },
    {
      number: '04',
      title: 'Nachsorge & Kontrolle',
      description:
        'Pflegehinweise, Abschwell-Tipps und – falls sinnvoll – ein Kontrolltermin zur Einschätzung des Ergebnisses.'
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
            Behandlungsablauf bei MY AESTHETIC
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto text-neutral-800 opacity-90"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Vier klar definierte Schritte – von der ersten Analyse bis zur Nachsorge, damit du genau weißt, was dich erwartet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-left md:text-center bg-white/80 border border-black/5 rounded-2xl px-5 py-6 md:px-6 md:py-7 shadow-sm backdrop-blur-sm"
            >
              <div className="flex md:flex-col items-center md:items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-3 py-1 text-xs font-medium tracking-[0.18em]">
                  {step.number}
                </div>
                <h3
                  className="text-lg font-semibold text-neutral-900 md:mt-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className="text-sm md:text-base text-neutral-800 opacity-90 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 md:mt-14">
          <a
            href="https://wa.me/491737158636"
            className="inline-flex items-center px-8 py-3 bg-white border border-black/10 font-semibold text-sm md:text-base rounded-full hover:bg-neutral-50 transition-all duration-300 cursor-pointer whitespace-nowrap text-neutral-900"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <i className="ri-calendar-line mr-2 text-lg"></i>
            Termin anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
