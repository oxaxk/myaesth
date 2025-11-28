import { useState, useRef, useEffect } from 'react';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      title: 'Russian Lips',
      description:
        'Spezialisierte Russian-Lips-Technik für volle, aber harmonische Lippen mit definierter Herzform und klarer Kontur.',
      image: '/images/services/russian-lips.jpg'
    },
    {
      title: 'Lip Filler 0,5 ml',
      description:
        'Dezenter Volumenaufbau für sehr natürliche Ergebnisse – ideal bei ersten Behandlungen oder leichten Asymmetrien.',
      image: '/images/services/lips-0-5ml.jpg'
    },
    {
      title: 'Lip Filler 1 ml',
      description:
        'Klar sichtbarer, aber harmonischer Volumenaufbau mit Fokus auf Form, Symmetrie und eine feminine Lippenlinie.',
      image: '/images/services/lips-1ml.jpg'
    },
    {
      title: 'Lippenkontur & Volumen',
      description:
        'Feine Konturarbeit und gleichmäßige Volumenverteilung für definierte Lippenränder und eine glatte Oberfläche.',
      image: '/images/services/lips-contour.jpg'
    },
    {
      title: 'Full Face Contouring (Kinn & Jawline)',
      description:
        'Kinnkorrektur und Jawline-Aufbau (0,5–2 ml) zur Harmonisierung des Profils und Definition der unteren Gesichtspartie.',
      image: '/images/services/lips-correction.jpg'
    },
    {
      title: 'Lemon Bottle Behandlung',
      description:
        'Fettwegspritzen-Bodycontouring mit Lemon Bottle – für lokale Problemzonen, z. B. Kinnbereich oder Körperzonen (Preise ab 99 €).',
      image: '/images/services/lips-training.jpg'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % services.length;
      const el = mobileScrollRef.current;
      if (el) {
        el.scrollTo({ left: newIndex * el.clientWidth, behavior: 'smooth' });
      }
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + services.length) % services.length;
      const el = mobileScrollRef.current;
      if (el) {
        el.scrollTo({ left: newIndex * el.clientWidth, behavior: 'smooth' });
      }
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    const el = mobileScrollRef.current;
    if (el) {
      el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    }
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Wheel handler for trackpad support
  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;
    
    // Check if it's a horizontal scroll (trackpad gesture)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      
      if (e.deltaX > 30) {
        nextSlide();
      } else if (e.deltaX < -30) {
        prevSlide();
      }
    }
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const currentService = services[currentIndex];
  const visibleServices = [0, 1, 2].map(i => services[(currentIndex + i) % services.length]);

  return (
    <section id="services" className="py-20 md:py-24 bg-[#f6f2ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <span
            className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium tracking-[0.2em] uppercase mb-3 text-neutral-700"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Lips · Full Face · Body
          </span>
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 lg:mb-6 text-neutral-900"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Behandlungen bei MY AESTHETIC
          </h2>
          <p
            className="text-base lg:text-lg opacity-90 max-w-3xl mx-auto text-neutral-800"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Russian Lips, Lip Filler, Full Face Contouring und Lemon Bottle – klar strukturierte Behandlungen mit Fokus auf harmonische, sichtbare Ergebnisse.
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto"
          ref={scrollContainerRef}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Card Container with proper spacing */}
          <div className="w-full px-4 lg:px-20 lg:hidden">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] snap-center">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[520px] flex flex-col">
                    <div className="relative h-[60%] overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pt-3 pb-6 flex flex-col justify-center h-[40%]">
                      <div className="mb-2">
                        <h3
                          className="text-lg font-semibold"
                          style={{ fontFamily: '"Playfair Display", serif', color: '#111827' }}
                        >
                          {svc.title}
                        </h3>
                      </div>
                      <p
                        className="opacity-90 leading-relaxed text-sm md:text-base"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                      >
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid: 3 cards per row */}
          <div className="hidden lg:grid grid-cols-3 gap-8 px-4 lg:px-0">
            {visibleServices.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[560px] flex flex-col">
                <div className="relative h-1/2 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center h-1/2">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: '"Playfair Display", serif', color: '#111827' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="opacity-90 leading-relaxed text-sm md:text-base"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#111827' }}
                  >
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Arrows Navigation */}
          <div className="flex justify-center mt-8 lg:mt-12 space-x-6">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50"
            >
              <i className="ri-arrow-left-line text-2xl text-neutral-900"></i>
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 disabled:opacity-50"
            >
              <i className="ri-arrow-right-line text-2xl text-neutral-900"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
