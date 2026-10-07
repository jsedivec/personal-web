import Image from "next/image";
import Reveal from "./Reveal";

const classes = [
  {
    title: "Movement s Jirkou Šedivcem",
    day: "čtvrtek",
    time: "17:00–18:00",
    link: "https://www.balanceplzen.cz/lekce/pohybova-terapie-s-jirkou-sedivcem/",
  },
  {
    title: "Pohybový restart",
    day: "pátek",
    time: "7:15–8:15",
    link: "https://www.balanceplzen.cz/lekce/pohybovy-restart-s-jirkou-sedivcem-patky-715-815/",
  },
];

export default function Pohyb() {
  return (
    <section id="pohyb" className="pt-10 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
            Pohyb
          </h2>
        </Reveal>

        <div className="mt-4 grid gap-8 sm:mt-6 lg:grid-cols-2 lg:items-start lg:gap-20">
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg">
              Vedu skupinové lekce, individuální tréninky a firemní workshopy.
              Pohyb učím jako cestu, ne jako cíl — bez dogmat, s respektem k tomu, kde právě jsi.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm tracking-[0.2em] text-teal uppercase">Kde učím</p>
            <p className="mt-2 font-display text-2xl text-foreground">Studio Balance</p>
            <p className="mt-1 text-foreground/60">Kollárova 34, Plzeň</p>
          </Reveal>
        </div>

        <Reveal variant="photo" className="mt-10 sm:mt-16">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] md:aspect-[21/9]">
            <Image
              src="/images/lekce-partner.jpg"
              alt="Sál Studia Balance v Plzni, kde probíhají lekce"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>

        <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10 sm:mt-16">
          {classes.map((cls, index) => (
            <Reveal key={cls.title} delay={index * 90}>
              <a
                href={cls.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 py-6"
              >
                <span>
                  <span className="block font-display text-xl text-foreground sm:text-2xl md:text-3xl">
                    {cls.title}
                  </span>
                  <span className="mt-1 block text-foreground/55">
                    {cls.day} · {cls.time}
                  </span>
                </span>
                <span className="shrink-0 text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-base">
            <a
              href="https://pohyb-plzen.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              pohyb-plzen.cz
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="https://www.khoramovementschool.com/asistujici-studenti/jiri-sedivec/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground/60"
            >
              Khora Movement School
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
