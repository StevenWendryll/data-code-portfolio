import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import finance from "@/assets/project-finance.jpg";
import physio from "@/assets/project-physio.jpg";
import grafana from "@/assets/project-grafana.jpg";

const projects = [
  {
    img: finance,
    title: "Sistema de Controle Financeiro",
    desc: "Aplicação web para gestão de finanças pessoais com categorização, gráficos e metas.",
    tags: ["Desenvolvimento Web", "Lógica de Negócios"],
    link: "https://github.com",
    label: "Acessar GitHub",
    icon: Github,
  },
  {
    img: physio,
    title: "Plataforma de Fisioterapia Suzany",
    desc: "Site institucional com painel administrativo no Sanity CMS e blog editorial.",
    tags: ["Vue.js", "CMS", "Tailwind"],
    link: "#",
    label: "Ver Detalhes",
    icon: ExternalLink,
  },
  {
    img: grafana,
    title: "Dashboards de Observabilidade",
    desc: "Monitoramento de infraestrutura com métricas em tempo real e alertas inteligentes.",
    tags: ["Grafana", "Prometheus", "Docker"],
    link: "#",
    label: "Ver Detalhes",
    icon: ExternalLink,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// portfólio</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projetos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma seleção do que tenho construído entre dados, infraestrutura e produto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-accent text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="mt-5 w-fit">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <p.icon className="mr-2 h-4 w-4" /> {p.label}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
