import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

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
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
