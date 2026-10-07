import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[100svh]">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-2">
        <div className="relative flex flex-col justify-center px-5 pt-24 pb-8 sm:px-8 lg:px-12 lg:py-28 xl:px-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(31,111,106,0.1),transparent_55%)]"
          />

          <div className="relative max-w-lg">
            <p className="rise text-sm leading-snug text-teal sm:text-base">
              učím lidi se lépe hýbat a tvořím weby
            </p>

            <h1 className="rise rise-d1 mt-3 font-display text-4xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-5xl lg:mt-4 lg:text-7xl">
              Jirka Šedivec
            </h1>

            <p className="rise rise-d2 mt-6 max-w-sm text-base text-foreground/65">
              Plzeň · pohybové lekce · weby na míru
            </p>

            <div className="rise rise-d3 mt-8 flex flex-wrap gap-x-8 gap-y-3 text-lg">
              <a href="#sluzby" className="group inline-flex items-center gap-2">
                Služby
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a href="#kontakt" className="group inline-flex items-center gap-2 text-foreground/65">
                Napiš mi
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-photo relative aspect-[5/4] min-h-[38vh] lg:aspect-auto lg:min-h-full">
          <Image
            src="/images/gym-drep.jpg"
            alt="Jirka Šedivec při pohybové lekci"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover object-[40%_30%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
