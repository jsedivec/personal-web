const projects = [
  {
    title: "pohyb-plzen.cz",
    description: "Rezervační systém a web pro mé pohybové lekce v Plzni.",
    url: "https://pohyb-plzen.cz",
    tags: ["Rezervace", "Rozvrh"],
  },
  {
    title: "khora-events.com",
    description:
      "Event a registrační platforma pro Khora Movement School — workshopy, výcviky a rezidence.",
    url: "https://khora-events.com",
    tags: ["Eventy", "Registrace"],
  },
];

export default function Weby() {
  return (
    <section id="weby" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            Weby
          </h2>

          <p className="text-lg text-zinc-600 leading-relaxed">
            Tvořím prezentační weby a rezervační systémy pro lidi z pohybového
            světa. Weby, které fungují — bez zbytečností, s jasnou strukturou a
            příjemným pocitem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-zinc-50 rounded-2xl p-8 hover:bg-zinc-100 transition-all duration-300 border border-zinc-100 hover:border-zinc-200"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
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

              <p className="text-zinc-600 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white text-zinc-600 rounded-full border border-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 p-8 bg-zinc-900 rounded-2xl">
          <div className="max-w-lg">
            <h3 className="text-xl font-semibold text-white mb-3">
              Potřebujete web?
            </h3>
            <p className="text-zinc-400 mb-6">
              Pokud hledáte někoho, kdo vám pomůže s webem pro váš pohybový
              projekt, ozvěte se.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-zinc-900 bg-white rounded-full hover:bg-zinc-100 transition-colors"
            >
              Napsat mi
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
          </div>
        </div>
      </div>
    </section>
  );
}
