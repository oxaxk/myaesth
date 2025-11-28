export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#f6f2ec]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-[0.2em] uppercase mb-4 text-neutral-700"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Russian Lips · Full Face · Berlin
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8 text-neutral-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Über MY AESTHETIC Berlin
            </h2>
            
            <div
              className="space-y-5 md:space-y-6 text-neutral-800 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                MY AESTHETIC ist ein Studio für Russian Lips, Lip Filler und Full Face Contouring in Berlin. Der Fokus liegt auf klaren Konturen, harmonischen Proportionen und einem natürlich wirkenden Ergebnis.
              </p>
              
              <p>
                Jede Behandlung wird individuell geplant – anhand deiner Gesichtsanatomie, Lippenform und Wünsche. Es wird mit hochwertigen Hyaluron-Fillern und modernen Techniken gearbeitet, um Form, Volumen und Symmetrie fein abzustimmen.
              </p>
              
              <p>
                Der Ablauf bleibt ruhig und strukturiert: Analyse, Beratung, Behandlungsplan und Nachsorge werden klar erklärt, damit du jeden Schritt nachvollziehen kannst.
              </p>
            </div>
            
            <div className="mt-10 md:mt-12 grid grid-cols-2 gap-6 md:gap-8">
              <div className="text-left md:text-center">
                <div className="w-14 h-14 mx-0 md:mx-auto mb-3 md:mb-4 bg-white/70 border border-black/5 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-xl md:text-2xl text-neutral-900"></i>
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base text-neutral-900">Zertifizierte Behandlungen</h3>
                <p className="text-xs md:text-sm text-neutral-700">Fortbildungen in Russian Lips &amp; Full Face Techniken.</p>
              </div>
              
              <div className="text-left md:text-center">
                <div className="w-14 h-14 mx-0 md:mx-auto mb-3 md:mb-4 bg-white/70 border border-black/5 rounded-full flex items-center justify-center">
                  <i className="ri-heart-3-line text-xl md:text-2xl text-neutral-900"></i>
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base text-neutral-900">Fokus auf Harmonie</h3>
                <p className="text-xs md:text-sm text-neutral-700">Ergebnisse, die zu Gesicht, Profil und Mimik passen.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about/team.jpg"
                alt="MY AESTHETIC Berlin Studio"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-11 h-11 bg-[#f6f2ec] border border-black/5 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-heart-line text-lg text-neutral-900"></i>
                </div>
                <div>
                  <div className="font-semibold text-sm uppercase tracking-[0.16em] text-neutral-500">
                    MY AESTHETIC
                  </div>
                  <div className="font-semibold text-base text-neutral-900">
                    Russian Lips &amp; Full Face Studio
                  </div>
                  <div className="text-xs mt-1 text-neutral-600">
                    Klare Abläufe, strukturierte Beratung & Nachsorge.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
