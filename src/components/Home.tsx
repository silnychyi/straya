import { Advantages } from "@/components/Advantages";
import { Configurations } from "@/components/Configurations";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Platform } from "@/components/Platform";
import { Specs } from "@/components/Specs";
import { Statement } from "@/components/Statement";
import { Systems } from "@/components/Systems";

export function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Specs />
        <Platform />
        <Systems />
        <Statement />
        <Advantages />
        <Configurations />
      </main>
      <Footer />
    </>
  );
}
