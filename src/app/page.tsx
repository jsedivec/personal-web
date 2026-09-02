import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PhotoGallery from "@/components/PhotoGallery";
import KdoJsem from "@/components/KdoJsem";
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
        <PhotoGallery />
        <KdoJsem />
        <Pohyb />
        <Weby />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
