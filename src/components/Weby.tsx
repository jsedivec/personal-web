import Reveal from "./Reveal";

const projects = [
  {
    title: "nalekci.cz",
    description:
      "Platforma pro sportovní lekce a instruktory — rezervace online, živé volné místa.",
    url: "https://nalekci.cz",
    tags: "Marketplace · Rezervace",
  },
  {
    title: "pohyb-plzen.cz",
    description: "Rezervační systém a web pro pohybové lekce v Plzni.",
    url: "https://pohyb-plzen.cz",
    tags: "Rezervace · Rozvrh",
  },
  {
    title: "khora-events.com",
    description:
      "Rezervační systém Khora Movement School — workshopy, dálková výuka",
    url: "https://khora-events.com",
    tags: "Eventy · Registrace",
  },
];

export default function Weby() {
  return (
    <section id="weby" className="bg-sand py-16 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Weby
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 sm:mt-6 sm:text-lg">
            Tvořím prezentační weby a rezervační systémy pro lidi z pohybového
            světa. Weby, které fungují — bez zbytečností, s jasnou strukturou a
            příjemným pocitem.
          </p>
        </Reveal>

        <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10 sm:mt-16">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-10"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
                <p className="mt-3 max-w-xl text-foreground/65">{project.description}</p>
                <p className="mt-4 text-sm tracking-[0.18em] text-teal uppercase">
                  {project.tags}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-20 max-w-lg">
            <h3 className="font-display text-2xl text-foreground sm:text-3xl md:text-4xl">
              Potřebujete web?
            </h3>
            <p className="mt-4 text-lg text-foreground/65">
              Pokud hledáte někoho, kdo vám pomůže s webem pro váš pohybový
              projekt, ozvěte se.
            </p>
            <a
              href="?zajem=web#kontakt"
              className="group mt-6 inline-flex items-center gap-2 text-lg"
            >
              Napiš mi
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
