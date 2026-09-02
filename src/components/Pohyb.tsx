import Image from "next/image";

// TODO: Replace with actual teaching photos once uploaded
// Expected: 2 photos for this section
//   - Main: teaching/coaching moment (e.g., squat instruction)
//   - Overlay: staff/equipment work
const POHYB_IMAGES = {
  main: { src: "", alt: "Jirka vede pohybovou lekci", pending: true },
  overlay: { src: "", alt: "Práce s tyčí při lekci", pending: true },
};

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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
              Pohyb
            </h2>

            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Vedu skupinové lekce, individuální tréninky a firemní workshopy.
              Pohyb učím jako cestu, ne jako cíl — bez dogmat, bez soutěžení,
              s respektem k tomu, kde právě jsi.
            </p>

            {/* Studio info - note: Studio Balance is where he teaches, not his brand */}
            <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
              <p className="text-sm text-zinc-500 mb-1">Kde učím</p>
              <h3 className="font-semibold text-zinc-900 mb-1">Studio Balance</h3>
              <p className="text-zinc-600 mb-6">Kollárova 34, Plzeň</p>

              <div className="space-y-3">
                {classes.map((cls) => (
                  <a
                    key={cls.title}
                    href={cls.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-zinc-50 rounded-xl hover:bg-amber-50 transition-colors group border border-zinc-100 hover:border-amber-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-zinc-900 group-hover:text-amber-900 transition-colors">
                          {cls.title}
                        </h4>
                        <p className="text-sm text-zinc-500 mt-1">
                          {cls.day} · {cls.time}
                        </p>
                      </div>
                      <svg
                        className="w-5 h-5 text-zinc-400 group-hover:text-amber-600 transition-colors flex-shrink-0"
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
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="https://pohyb-plzen.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors font-medium"
              >
                pohyb-plzen.cz
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
                href="https://www.khoramovementschool.com/asistujici-studenti/jiri-sedivec/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-zinc-700 rounded-full hover:bg-zinc-100 transition-colors border border-zinc-200"
              >
                Khora Movement
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl bg-zinc-100">
              {POHYB_IMAGES.main.pending ? (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  <div className="text-center p-8">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-zinc-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">Hlavní foto – čeká</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={POHYB_IMAGES.main.src}
                  alt={POHYB_IMAGES.main.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
            </div>
            <div className="absolute -bottom-6 -left-4 md:-left-8 w-2/3 aspect-[4/3] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-zinc-100">
              {POHYB_IMAGES.overlay.pending ? (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  <div className="text-center p-4">
                    <svg
                      className="w-8 h-8 mx-auto mb-2 text-zinc-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs">Overlay foto</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={POHYB_IMAGES.overlay.src}
                  alt={POHYB_IMAGES.overlay.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 66vw, 33vw"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
