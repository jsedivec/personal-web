import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-balance.svg"
          alt="Jirka Šedivec při balanční práci"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
            Pohyb v Plzni.
            <br />
            <span className="text-zinc-600">A weby, které k tomu patří.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-md">
            Jsem Jirka Šedivec. Učím pohyb a tvořím weby pro ty, kteří chtějí
            sdílet to, čemu věří.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://pohyb-plzen.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Lekce
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-900 bg-white border-2 border-zinc-200 rounded-full hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
            >
              Napsat
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a
          href="#pohyb"
          className="flex flex-col items-center text-zinc-400 hover:text-zinc-600 transition-colors"
          aria-label="Posunout dolů"
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
