import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Companies } from "@/components/sections/Companies";
import { Courses } from "@/components/sections/Courses";
import { CallToAction } from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Companies />
        <Features />
        <Stats />
        <Courses />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
