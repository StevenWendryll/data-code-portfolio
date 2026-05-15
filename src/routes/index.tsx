import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";

// Below-the-fold sections lazy-loaded to keep the initial bundle slim.
const About = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("@/components/sections/Skills").then((m) => ({ default: m.Skills })),
);
const Projects = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
);
const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact })),
);
const Footer = lazy(() =>
  import("@/components/sections/Footer").then((m) => ({ default: m.Footer })),
);

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Analista de Dados & Desenvolvedor" },
      {
        name: "description",
        content:
          "Portfolio de Analista de Dados e Desenvolvedor: Power BI, SQL, Microsoft Fabric, Grafana, Vue.js. Transformando dados em decisões.",
      },
      { property: "og:title", content: "Portfolio — Analista de Dados & Desenvolvedor" },
      {
        property: "og:description",
        content: "Power BI, SQL, Microsoft Fabric, Grafana e desenvolvimento web moderno.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Toaster />
    </div>
  );
}
