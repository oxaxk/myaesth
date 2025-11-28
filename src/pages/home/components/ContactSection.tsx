export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-[#f6f2ec]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6 text-neutral-900"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Bereit für dein Ergebnis bei MY AESTHETIC?
        </h2>
        
        <p
          className="text-base md:text-lg mb-10 md:mb-12 text-neutral-800 opacity-90"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Terminanfragen und Fragen laufen direkt über Instagram-DM. Schreib einfach eine Nachricht an
          <span className="font-semibold"> @my_aestheticss_berlin</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
          <a
            href="https://instagram.com/my_aestheticss_berlin"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-10 py-4 md:px-12 md:py-5 font-semibold text-sm md:text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl bg-neutral-900 text-white whitespace-nowrap cursor-pointer"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <i className="ri-instagram-line mr-3 text-xl md:text-2xl"></i>
            Instagram-DM öffnen
          </a>
          
          <a
            href="https://instagram.com/my_aestheticss_berlin"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-10 py-3 md:px-11 md:py-4 border border-black/10 bg-white/80 text-neutral-900 font-medium text-sm md:text-base rounded-full hover:bg-white transition-all duration-300 whitespace-nowrap cursor-pointer"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Profil ansehen
          </a>
        </div>

        <div className="mb-12">
          <div className="max-w-3xl mx-auto bg-white/90 border border-black/5 rounded-2xl shadow-md p-6 md:p-8 text-left">
            <h3
              className="text-xl md:text-2xl font-semibold mb-4 text-neutral-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Kontaktformular
            </h3>
            <p
              className="text-sm md:text-base text-neutral-700 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Wenn du kein Instagram nutzen möchtest, kannst du uns deine Anfrage auch hier hinterlassen. Wir melden uns
              mit einer Rückmeldung zu Behandlungsoptionen und möglichen Terminen.
            </p>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70"
                    placeholder="Vor- und Nachname"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    E-Mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70"
                    placeholder="E-Mail für Rückmeldung"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-instagram"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Instagram (optional)
                  </label>
                  <input
                    id="contact-instagram"
                    type="text"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-treatment"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Behandlung
                  </label>
                  <select
                    id="contact-treatment"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Behandlung auswählen
                    </option>
                    <option value="russian-lips">Russian Lips</option>
                    <option value="lip-filler-0-5">Lip Filler 0,5 ml</option>
                    <option value="lip-filler-1">Lip Filler 1 ml</option>
                    <option value="full-face">Full Face Contouring (Kinn & Jawline)</option>
                    <option value="lemon-bottle">Lemon Bottle Behandlung</option>
                    <option value="other">Sonstiges / nicht sicher</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-date"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Wunschdatum (optional)
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-time"
                    className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Bevorzugte Uhrzeit (optional)
                  </label>
                  <input
                    id="contact-time"
                    type="text"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70"
                    placeholder="z. B. nachmittags, 15–18 Uhr"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-[0.16em] text-neutral-600 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Nachricht
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/70 focus:border-neutral-900/70 resize-none"
                  placeholder="Kurze Beschreibung deiner Wünsche (z. B. Form, Volumen, vorherige Behandlungen)."
                ></textarea>
              </div>

              <div className="flex justify-start md:justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold shadow-md hover:bg-black transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="rounded-xl p-6 bg-white/80 border border-black/5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 bg-neutral-900">
              <i className="ri-instagram-line text-white text-lg"></i>
            </div>
            <h3 className="font-semibold mb-2 text-neutral-900">Instagram</h3>
            <p className="text-sm text-neutral-700">
              @my_aestheticss_berlin<br />
              Direktnachrichten für Termine & Fragen.
            </p>
          </div>
          
          <div className="rounded-xl p-6 bg-white/80 border border-black/5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 bg-neutral-900">
              <i className="ri-map-pin-line text-white text-lg"></i>
            </div>
            <h3 className="font-semibold mb-2 text-neutral-900">Standort</h3>
            <p className="text-sm text-neutral-700">
              Berlin<br />
              Genaue Adresse nach Terminbestätigung.
            </p>
          </div>
          
          <div className="rounded-xl p-6 bg-white/80 border border-black/5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 bg-neutral-900">
              <i className="ri-calendar-line text-white text-lg"></i>
            </div>
            <h3 className="font-semibold mb-2 text-neutral-900">Termine</h3>
            <p className="text-sm text-neutral-700">
              Termine nach Vereinbarung<br />
              ausschließlich über Instagram-DM.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
