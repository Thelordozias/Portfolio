/**
 * app/page.tsx
 *
 * Home page (route: "/")
 *
 * This is a SERVER component by default in Next.js App Router.
 * It simply composes section components together.
 * All interactivity lives inside the individual section components
 * (which are marked "use client" where needed).
 */

import Hero             from "@/components/sections/Hero";
import About            from "@/components/sections/About";
import Education        from "@/components/sections/Education";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ResearchTeaser   from "@/components/sections/ResearchTeaser";
import Contact          from "@/components/sections/Contact";
import Footer           from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <FeaturedProjects />
      <ResearchTeaser />
      <Contact />
      <Footer />
    </>
  );
}
