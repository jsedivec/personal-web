import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import KdoJsem from "@/components/KdoJsem";
import PhotoGallery from "@/components/PhotoGallery";
import Sluzby from "@/components/Sluzby";
import Pohyb from "@/components/Pohyb";
import Weby from "@/components/Weby";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <KdoJsem />
        <PhotoGallery />
        <Sluzby />
        <Pohyb />
        <Weby />
        <Suspense fallback={null}>
          <Kontakt />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
