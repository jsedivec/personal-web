import Reveal from "./Reveal";

const services = [
  {
    title: "Skupinové lekce",
    text: "Společný pohyb v malé skupině ve studiu Balance v Plzni. Bez soutěžení, s respektem k tomu, kde právě jsi.",
    href: "#pohyb",
  },
  {
    title: "Individuální lekce",
    text: "Jeden na jednoho v Plzni. Tempo, téma i zátěž podle tebe — ať už začínáš, nebo chceš jít dál.",
    href: "#kontakt?zajem=individual",
  },
  {
    title: "Workshopy a semináře",
    text: "Delší formát pro skupiny i firmy. Jednorázově, nebo jako série — v Plzni i jinde.",
    href: "#kontakt?zajem=workshop",
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
            Pohyb vedu skupinově, individuálně i formou workshopů. Vyber, co ti
            sedí — prezenčně v Plzni.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10 sm:mt-16">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="py-8 sm:py-10 md:py-12">
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
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
