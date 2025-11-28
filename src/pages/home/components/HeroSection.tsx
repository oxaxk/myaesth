import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl px-5 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="cursor-pointer">
                <h1
                  className="text-lg md:text-xl font-semibold tracking-[0.18em] uppercase text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  MY AESTHETIC BERLIN
                </h1>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a
                href="#services"
                className="text-white/80 hover:text-white transition-colors"
              >
                Behandlungen
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-white transition-colors"
              >
                Studio
              </a>
              <a
                href="#specials"
                className="text-white/80 hover:text-white transition-colors"
              >
                Angebote
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-white transition-colors"
              >
                Kontakt
              </a>
              <Button href="https://wa.me/491737158636" size="sm">
                Termin anfragen
              </Button>
            </div>

            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-white`}
              ></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-2 border-t border-white/15">
              <div className="flex flex-col space-y-4 pt-4 text-sm font-medium">
                <a
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Behandlungen
                </a>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Studio
                </a>
                <a
                  href="#specials"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Angebote
                </a>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Kontakt
                </a>
                <Button
                  href="https://wa.me/491737158636"
                  size="sm"
                  className="self-start"
                >
                  Termin via WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile video (shown < md) */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Desktop video (shown >= md) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pb-16 md:pb-10 pt-32">
        <div className="w-full max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="max-w-xl mx-auto md:mx-0">
            <p
              className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/70 mb-4 md:mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Russian Lips • Full Face • Lemon Bottle
            </p>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight md:leading-[1.1] mb-4 md:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              BEAUTY STUDIO IN BERLIN
            </h2>

            <p
              className="text-base md:text-lg text-white/85 leading-relaxed md:text-balance mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Russian Lips, Lip Filler, Full Face Contouring und ästhetische Behandlungen in Berlin.
              Fokus: klare Konturen, harmonische Proportionen, natürlich wirkender Look.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start items-stretch sm:items-center">
              <Button
                href="https://wa.me/491737158636"
                size="lg"
                className="text-base md:text-lg px-10 py-4 md:px-12 md:py-5"
              >
                <i className="ri-calendar-line mr-3 text-xl md:text-2xl"></i>
                Termin anfragen
              </Button>

              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-10 py-4 md:px-12 md:py-5 bg-white/8 backdrop-blur-md border-white/60 text-white hover:bg-white/12"
              >
                Behandlungen ansehen
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 text-white max-w-sm md:max-w-md mx-auto md:mx-0">
            <div className="text-left sm:text-center md:text-left bg-white/8 border border-white/20 rounded-[26px] px-6 py-6 md:px-7 md:py-7 backdrop-blur-xl shadow-lg shadow-black/30">
              <div className="w-12 h-12 md:w-14 md:h-14 mb-4 bg-white/15 rounded-full flex items-center justify-center shadow-md shadow-black/30">
                <i className="ri-heart-3-line text-2xl md:text-3xl text-white"></i>
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                Russian Lips &amp; Full Face
              </h3>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed break-words">
                Fokus auf Lippen, Konturen und Gesichtsharmonie mit Hyaluron-Behandlungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
