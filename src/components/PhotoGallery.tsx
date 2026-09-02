import Image from "next/image";

// TODO: Replace with actual teaching photos once uploaded and renamed
// Expected: 6-8 teaching/lesson photos from Balance_studio_2026_*.jpg set
// Suggested subjects based on user description:
//   - balance with ball
//   - squat teaching
//   - wooden staff work
//   - floor work
//   - ball-balance looking down
//   - group instruction
//   - individual coaching
//   - movement exploration
//
// Image slot list (update paths once photos are web-optimized and in repo):
const GALLERY_PHOTOS: Array<{
  src: string;
  alt: string;
  pending: boolean;
}> = [
  { src: "", alt: "Balanční cvičení", pending: true },
  { src: "", alt: "Výuka dřepu", pending: true },
  { src: "", alt: "Práce s tyčí", pending: true },
  { src: "", alt: "Pohyb na zemi", pending: true },
  { src: "", alt: "Balanční práce", pending: true },
  { src: "", alt: "Skupinová lekce", pending: true },
];

export default function PhotoGallery() {
  // Don't render gallery until photos are available
  const hasPhotos = GALLERY_PHOTOS.some((p) => !p.pending);

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
          Z lekcí
        </h2>
      </div>

      {/* Horizontal scrolling gallery */}
      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-72 md:w-80 lg:w-96 aspect-[4/3] rounded-xl overflow-hidden snap-center bg-zinc-100"
            >
              {photo.pending ? (
                // Placeholder slot
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  <div className="text-center p-4">
                    <svg
                      className="w-10 h-10 mx-auto mb-2 text-zinc-300"
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
                    <p className="text-xs">{photo.alt}</p>
                    <p className="text-xs text-zinc-300">čeká na nahrání</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Developer note - remove once photos are wired */}
      {!hasPhotos && (
        <p className="text-center text-xs text-zinc-300 mt-4">
          [DEV: Fotky čekají na nahrání – Balance_studio_2026_*.jpg]
        </p>
      )}
    </section>
  );
}
