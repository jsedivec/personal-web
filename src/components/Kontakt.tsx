"use client";

import { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zpráva od ${formData.name}`);
    const body = encodeURIComponent(
      `Jméno: ${formData.name}\nE-mail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:jiri.sedivec@seznam.cz?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Kontakt
            </h2>

            <p className="text-lg text-zinc-600 mb-10">
              Chcete se domluvit na individuální lekci, máte zájem o web, nebo
              se jen chcete na něco zeptat? Napište mi.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:jiri.sedivec@seznam.cz"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-zinc-100 transition-colors shadow-sm">
                  <svg
                    className="w-5 h-5 text-zinc-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">E-mail</p>
                  <p className="text-zinc-900 font-medium group-hover:text-zinc-600 transition-colors">
                    jiri.sedivec@seznam.cz
                  </p>
                </div>
              </a>

              <a href="tel:+420728873668" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-zinc-100 transition-colors shadow-sm">
                  <svg
                    className="w-5 h-5 text-zinc-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Telefon</p>
                  <p className="text-zinc-900 font-medium group-hover:text-zinc-600 transition-colors">
                    +420 728 873 668
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/jirka_sedivec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-zinc-100 transition-colors shadow-sm">
                  <svg
                    className="w-5 h-5 text-zinc-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Instagram</p>
                  <p className="text-zinc-900 font-medium group-hover:text-zinc-600 transition-colors">
                    @jirka_sedivec
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  Jméno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                  placeholder="Vaše jméno"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all"
                  placeholder="vas@email.cz"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all resize-none"
                  placeholder="Vaše zpráva..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 text-base font-semibold text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Odeslat zprávu
              </button>

              <p className="text-sm text-zinc-500 text-center">
                Po odeslání se otevře váš e-mailový klient s předvyplněnou
                zprávou.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
