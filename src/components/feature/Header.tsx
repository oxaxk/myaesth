import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/5 text-white">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <h1
                className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.18em] uppercase text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                MY AESTHETIC BERLIN
              </h1>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-neutral-200 hover:text-white transition-colors">
              Leistungen
            </a>
            <a href="#about" className="text-sm font-medium text-neutral-200 hover:text-white transition-colors">
              Über uns
            </a>
            <a href="#specials" className="text-sm font-medium text-neutral-200 hover:text-white transition-colors">
              Angebote
            </a>
            <a href="#contact" className="text-sm font-medium text-neutral-200 hover:text-white transition-colors">
              Kontakt
            </a>
            <Button
              href="https://instagram.com/my_aestheticss_berlin"
              size="sm"
              className="bg-white text-neutral-950 hover:bg-neutral-200 px-5 py-2 rounded-full text-xs font-semibold"
            >
              Instagram-DM
            </Button>
          </div>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-white`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="font-medium text-neutral-100 hover:text-white transition-colors">
                Leistungen
              </a>
              <a href="#about" className="font-medium text-neutral-100 hover:text-white transition-colors">
                Über uns
              </a>
              <a href="#specials" className="font-medium text-neutral-100 hover:text-white transition-colors">
                Angebote
              </a>
              <a href="#contact" className="font-medium text-neutral-100 hover:text-white transition-colors">
                Kontakt
              </a>
              <Button
                href="https://instagram.com/my_aestheticss_berlin"
                size="sm"
                className="self-start bg-white text-neutral-950 hover:bg-neutral-200 px-5 py-2 rounded-full text-xs font-semibold"
              >
                Instagram-DM
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
