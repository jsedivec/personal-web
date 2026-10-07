"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const GALLERY_PHOTOS: Array<{ src: string; alt: string }> = [
  { src: "/images/lekce-vede-skupinu.jpg", alt: "Vedení skupiny ve studiu" },
  { src: "/images/lekce-korekce.jpg", alt: "Korekce postoje na lekci" },
  { src: "/images/lekce-micek-rovnovaha.jpg", alt: "Rovnováha s míčkem" },
  { src: "/images/studio-drep.png", alt: "Koučink ve dřepu" },
  { src: "/images/lekce-hul.jpg", alt: "Práce s dřevěnou holí" },
  { src: "/images/lekce-partner.jpg", alt: "Partnerské cvičení" },
  { src: "/images/lekce-flow.jpg", alt: "Pohyb ve flow" },
  { src: "/images/lekce-stena.jpg", alt: "Práce u stěny" },
  { src: "/images/lekce-zem.jpg", alt: "Pohyb na zemi" },
  { src: "/images/lekce-micek-blizko.jpg", alt: "Individuální práce s míčkem" },
];

export default function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      const horizontal =
        event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (horizontal) return;

      event.preventDefault();
      event.stopPropagation();
      window.scrollBy({ top: event.deltaY, behavior: "instant" });
    };

    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      el.scrollLeft = startScroll - (event.clientX - startX);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      pointerId = null;
    };

    el.addEventListener("wheel", onWheel, { passive: false, capture: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);

    return () => {
      el.removeEventListener("wheel", onWheel, true);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section className="overflow-x-clip bg-sand py-14 sm:py-20 lg:py-28">
      <div className="mx-auto mb-6 max-w-6xl px-5 sm:mb-10 sm:px-6">
        <Reveal>
          <h2 className="font-display text-sm tracking-[0.28em] text-teal uppercase">
            Z lekcí
          </h2>
        </Reveal>
      </div>

      <Reveal>
        <div
          ref={scrollerRef}
          className="flex cursor-grab gap-3 overflow-x-auto px-5 pb-4 active:cursor-grabbing scrollbar-hide sm:px-6 md:gap-5"
        >
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-3/4 w-48 shrink-0 overflow-hidden sm:w-56 md:w-72 lg:w-80"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                className="pointer-events-none object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
