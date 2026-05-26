import { GraduationCap, Lightbulb, Workflow } from "lucide-react";
import profile from "@/assets/profile.jpg";

const highlights = [
  {
    icon: Workflow,
    title: "Indústria → TI",
    text: "Transição do setor elétrico/industrial para tecnologia.",
  },
  { icon: GraduationCap, title: "Formação", text: "Análise e Desenvolvimento de Sistemas." },
  { icon: Lightbulb, title: "Mindset", text: "Pensamento analítico para problemas complexos." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-2xl rounded-3xl" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-elegant">
              <img
                src={profile}
                alt="Retrato profissional do analista de dados e desenvolvedor"
                width={768}
                height={768}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl px-5 py-4 shadow-card font-mono text-sm">
              <div className="text-xs text-muted-foreground">status</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-2 rounded-full bg-primary animate-blink" />
                <span className="font-semibold">analyzing data</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              // sobre mim
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Da bancada industrial às <span className="text-gradient">queries SQL</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Minha trajetória começou no ambiente militar, onde aprendi valores que carrego até hoje: disciplina, resiliência, liderança e capacidade de tomar decisões sob pressão. Posteriormente, migrei para o setor de elétrica industrial, atuando em ambientes técnicos e operacionais de alta complexidade.

                Agora, direciono essa mesma mentalidade para a área de tecnologia e dados, unindo experiência prática, raciocínio analítico e resolução de problemas para construir soluções orientadas a performance e eficiência.

                Acredito que recomeçar não é voltar ao início, é evoluir com bagagem.
              </p>
              <p>
                Formado em{" "}
                <span className="text-foreground font-medium">
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                atuo construindo pipelines e dashboards de observabilidade que
                conectam dados brutos a decisões de negócio.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-border bg-card/50 p-4">
                  <h.icon className="h-5 w-5 text-primary mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">{h.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{h.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
