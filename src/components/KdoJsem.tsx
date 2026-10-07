import Image from "next/image";
import Reveal from "./Reveal";

export default function KdoJsem() {
  return (
    <section id="o-mne" className="py-16 sm:py-24 lg:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl lg:text-5xl">
              O mně
            </h2>
          </Reveal>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/70 sm:mt-10 sm:space-y-6 sm:text-lg">
            <Reveal delay={80}>
              <p>
                Jmenuju se Jirka Šedivec a pohybu se věnuju od malička. Začal
                jsem fotbalem, později přišel stolní tenis, kalistenika,
                posilovna i CrossFit — zkoušel jsem hodně a hledal, co mi
                opravdu sedí.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p>
                Na vysoké škole s technickým zaměřením jsem se učil rozkládat věci na části, hledat souvislosti a přemýšlet
                v systémech. I tato perspektiva mi dobře slouží v pohybu. Zároveň
                znám, jaké to je sedět osm hodin u počítače. Vím, jak tělo
                reaguje na sedavou práci a jak ho následně rozhýbat, protože to žiju taky.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p>
                V roce 2019 jsem potkal Adrienu Pecinovou a její přístup k
                pohybu mě nasměroval jinam. Od té doby se u ní učím a od roku
                2024 asistuju při výuce v Khora Movement School. Dnes vedu
                vlastní skupinové i individuální lekce v Plzni.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <p>
                Kromě pohybu tvořím weby. Nejsem velká agentura — dělám weby pro
                lidi z pohybového světa, kteří chtějí sdílet to, čemu věří.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs sm:max-w-sm lg:max-w-none lg:h-[36rem] lg:aspect-auto">
            <Image
              src="/images/portrait-rovnovaha.jpg"
              alt="Jirka Šedivec, rovnováha ve studiu"
              fill
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-contain object-bottom mix-blend-multiply"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
