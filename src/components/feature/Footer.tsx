export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-4 text-white tracking-[0.18em] uppercase"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              MY AESTHETIC BERLIN
            </h3>
            <p className="text-sm md:text-base text-neutral-400 mb-6 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
              Studio für Russian Lips, Lip Filler, Full Face Contouring und ästhetische Behandlungen in Berlin.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/my_aestheticss_berlin/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
              >
                <i className="ri-instagram-line text-neutral-100 text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-neutral-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Leistungen</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#specials" className="text-neutral-400 hover:text-white transition-colors">Angebote</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-neutral-100">Kontakt & Termine</h4>
            <div className="space-y-3 text-sm text-neutral-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="flex items-center">
                <i className="ri-instagram-line mr-2 text-neutral-200"></i>
                <span>@my_aestheticss_berlin – Termine & Fragen per DM</span>
              </p>
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2 text-neutral-200"></i>
                <span>Berlin · genaue Adresse nach Terminbestätigung</span>
              </p>
              <p className="flex items-start text-xs text-neutral-500 leading-relaxed">
                <i className="ri-information-line mr-2 mt-0.5 text-neutral-400"></i>
                <span>Behandlungen finden nur nach vorheriger Absprache und bestätigtem Termin statt.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs md:text-sm">
            © 2025 MY AESTHETIC Berlin. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="text-neutral-500 hover:text-white text-xs md:text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-neutral-500 hover:text-white text-xs md:text-sm transition-colors">
              Datenschutz
            </a>
            <a href="https://slicker.agency/" className="text-neutral-500 hover:text-white text-xs md:text-sm transition-colors">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
