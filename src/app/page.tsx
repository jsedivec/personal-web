import Image from "next/image";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Pohyb from "@/components/Pohyb";
import Weby from "@/components/Weby";
import KdoJsem from "@/components/KdoJsem";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Pohyb />
        <Weby />
        <KdoJsem />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
