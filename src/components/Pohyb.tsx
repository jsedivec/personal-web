import Image from "next/image";

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
    <section id="pohyb" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/teaching-squat.svg"
                alt="Jirka vede pohybovou lekci"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-2/3 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/images/staff.svg"
                alt="Práce s tyčí při lekci"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 66vw, 33vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Pohyb
            </h2>

            <p className="text-lg text-zinc-600 mb-8">
              Vedu skupinové lekce, individuální tréninky a firemní workshopy.
              Pohyb učím jako cestu, ne jako cíl — bez dogmat, bez soutěžení,
              s respektem k tomu, kde právě jsi.
            </p>

            {/* Studio info */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-2">Studio Balance</h3>
              <p className="text-zinc-600 mb-4">Kollárova 34, Plzeň</p>

              <div className="space-y-4">
                {classes.map((cls) => (
                  <a
                    key={cls.title}
                    href={cls.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-zinc-50 rounded-lg hover:bg-zinc-100 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">
                          {cls.title}
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1">
                          {cls.day} · {cls.time}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 transition-colors flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://pohyb-plzen.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-zinc-900 font-medium hover:text-zinc-600 transition-colors"
              >
                pohyb-plzen.cz
                <svg
                  className="ml-1.5 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <span className="text-zinc-300">·</span>

              <a
                href="https://www.balanceplzen.cz/lektor/jirka-sedivec/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Profil na Balance
                <svg
                  className="ml-1.5 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <span className="text-zinc-300">·</span>

              <a
                href="https://www.khoramovementschool.com/asistujici-studenti/jiri-sedivec/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                Khora Movement
                <svg
                  className="ml-1.5 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
