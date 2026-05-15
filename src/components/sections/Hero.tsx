import { ArrowRight, Linkedin, TerminalSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background/40 via-background/80 to-background" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs font-mono text-muted-foreground mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-blink" /> disponível para novos
            projetos
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-slide-up">
            Transformando <span className="text-gradient">dados em decisões</span> e sistemas em
            soluções.
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up"
            style={{ animationDelay: "120ms" }}
          >
            Analista de Dados <span className="text-foreground">|</span> Power BI, SQL , Python &
            Excel <span className="text-foreground">|</span> Foco em automação e observabilidade.
          </p>

          <p
            className="mt-4 text-base text-muted-foreground max-w-2xl animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            Base sólida em raciocínio lógico e troubleshooting de processos industriais, agora
            aplicados à área de TI para resolver problemas complexos com pensamento analítico.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-3 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button asChild size="lg" className="shadow-elegant">
              <a href="#projetos">
                Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/steven-wendryll/" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> Meu LinkedIn
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="/curriculo.pdf" target="_blank" rel="noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Baixar Currículo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
