import Image from "next/image";

export default function KdoJsem() {
  return (
    <section id="o-mne" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Kdo jsem
            </h2>

            <div className="prose prose-lg prose-zinc">
              <p className="text-lg text-zinc-600 mb-6">
                Jmenuju se Jirka Šedivec a pohybu se věnuju od malička. Začal
                jsem fotbalem v šesti letech, později přišel stolní tenis a
                kalistenika. Posilovna, CrossFit — zkoušel jsem hodně, hledal
                jsem, co mi sedí.
              </p>

              <p className="text-lg text-zinc-600 mb-6">
                V roce 2017 jsem se přestěhoval do Plzně kvůli vysoké škole.
                O dva roky později jsem potkal Adrienu Pecinovou a její přístup
                k pohybu mě zásadně změnil. Od té doby se u ní učím a v roce
                2024 jsem začal asistovat při jejích výcvicích v rámci Khora
                Movement School.
              </p>

              <p className="text-lg text-zinc-600 mb-6">
                Dnes vedu vlastní skupinové i individuální lekce v Plzni. Učím
                pohyb jako cestu k sobě — bez dogmat, bez soutěžení, s respektem
                k tomu, kde právě jsi.
              </p>

              <p className="text-lg text-zinc-600">
                Kromě pohybu tvořím weby. Nejsem velká agentura — dělám weby pro
                lidi z pohybového světa, kteří chtějí sdílet to, čemu věří.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/portrait.svg"
                  alt="Jiří Šedivec"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-zinc-200/50 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-zinc-200/30 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
