import Image from "next/image";

const PORTRAIT_IMAGE = {
  src: "/images/portrait-rovnovaha.jpg",
  alt: "Jiří Šedivec, rovnováha ve studiu",
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
              <Image
                src={PORTRAIT_IMAGE.src}
                alt={PORTRAIT_IMAGE.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              Pohyb v Plzni.
              <br />
              <span className="text-zinc-500">A weby, které k tomu patří.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 mb-12 max-w-lg">
              Jsem Jirka Šedivec. Učím pohyb a tvořím weby pro ty, kteří chtějí
              sdílet to, čemu věří.
            </p>

            <div className="grid gap-6">
              <a
                href="#pohyb"
                className="group block p-6 bg-zinc-50 rounded-2xl hover:bg-amber-50 transition-all duration-300 border border-zinc-100 hover:border-amber-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-amber-900 transition-colors">
                      Pohyb
                    </h2>
                    <p className="text-zinc-600 group-hover:text-amber-800 transition-colors">
                      Skupinové lekce a individuální tréninky v Plzni.
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-zinc-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>

              <a
                href="#weby"
                className="group block p-6 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-all duration-300 border border-zinc-100 hover:border-zinc-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-900 mb-2 transition-colors">
                      Weby
                    </h2>
                    <p className="text-zinc-600 transition-colors">
                      Prezentační weby pro lidi z pohybového světa.
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
