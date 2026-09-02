import Image from "next/image";

const GALLERY_PHOTOS: Array<{ src: string; alt: string }> = [
  { src: "/images/lekce-korekce.jpg", alt: "Korekce postoje na lekci" },
  { src: "/images/lekce-hul.jpg", alt: "Práce s dřevěnou holí" },
  { src: "/images/lekce-zem.jpg", alt: "Pohyb na zemi" },
  { src: "/images/lekce-micek-rovnovaha.jpg", alt: "Rovnováha s míčkem" },
  { src: "/images/lekce-micek-blizko.jpg", alt: "Individuální práce s míčkem" },
  { src: "/images/lekce-partner.jpg", alt: "Partnerské cvičení" },
  { src: "/images/lekce-stena.jpg", alt: "Práce u stěny" },
  { src: "/images/lekce-vede-skupinu.jpg", alt: "Vedení skupiny" },
];

export default function PhotoGallery() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
          Z lekcí
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative flex-shrink-0 w-72 md:w-80 lg:w-96 aspect-[4/3] rounded-xl overflow-hidden snap-center bg-zinc-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
