import Reveal from "./Reveal";

const services = [
  {
    title: "Skupinové lekce",
    text: "Společný pohyb v malé skupině ve studiu Balance v Plzni. Bez soutěžení, s respektem k tomu, kde právě jsi.",
    href: "#pohyb",
    cta: "Podívat se na rozvrh",
  },
  {
    title: "Individuální lekce",
    text: "Jeden na jednoho v Plzni. Tempo, téma i zátěž podle tebe — ať už začínáš, nebo chceš jít dál.",
    href: "?zajem=individual#kontakt",
    cta: "Napsat mi",
    book: {
      label: "Rezervovat online",
      href: "https://pohyb-plzen.cz/calendar-booking",
    },
  },
  {
    title: "Workshopy a semináře",
    text: "Delší formát pro skupiny i firmy. Jednorázově, nebo jako série — v Plzni i jinde.",
    paths: [
      {
        label: "Události",
        note: "Semináře a otevřené termíny",
        href: "?zajem=workshop#kontakt",
        book: {
          label: "Termíny online",
          href: "https://pohyb-plzen.cz/events",
        },
      },
      {
        label: "Pro firmy",
        note: "Workshopy na míru pro týmy",
        href: "?zajem=firma#kontakt",
        book: {
          label: "Více info",
          href: "https://pohyb-plzen.cz/workshopy-pro-firmy",
        },
      },
    ],
  },
];

export default function Sluzby() {
  return (
    <section id="sluzby" className="pt-16 pb-10 sm:pt-24 sm:pb-12 lg:pt-36 lg:pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Služby
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 sm:mt-6 sm:text-lg">
            Pohyb vedu skupinově, individuálně i formou workshopů. Napiš mi —
            domluvíme detaily. Online rezervace je jen zkratka, když už víš, co
            chceš.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10 sm:mt-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="py-8 sm:py-10 md:py-12">
                {"paths" in service && service.paths ? (
                  <>
                    <h3 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-foreground/65">{service.text}</p>
                    <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                      {service.paths.map((path) => (
                        <div
                          key={path.label}
                          className="border border-foreground/10 px-5 py-4 transition-colors hover:border-teal/40 hover:bg-paper/60"
                        >
                          <a href={path.href} className="group flex items-center justify-between gap-4">
                            <span>
                              <span className="block font-display text-xl text-foreground">
                                {path.label}
                              </span>
                              <span className="mt-1 block text-sm text-foreground/55">
                                {path.note}
                              </span>
                              <span className="mt-3 inline-flex items-center gap-1 text-sm text-teal">
                                Napsat mi
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                  →
                                </span>
                              </span>
                            </span>
                          </a>
                          {path.book && (
                            <a
                              href={path.book.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-block text-sm text-foreground/45 underline-offset-4 hover:text-foreground/70 hover:underline"
                            >
                              {path.book.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>
                    <a href={service.href} className="group block">
                      <div className="flex items-baseline justify-between gap-6">
                        <h3 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                          {service.title}
                        </h3>
                        <span className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                      <p className="mt-3 max-w-xl text-foreground/65">{service.text}</p>
                      {"cta" in service && service.cta && (
                        <p className="mt-4 text-sm text-teal">{service.cta}</p>
                      )}
                    </a>
                    {"book" in service && service.book && (
                      <a
                        href={service.book.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm text-foreground/45 underline-offset-4 hover:text-foreground/70 hover:underline"
                      >
                        {service.book.label}
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
