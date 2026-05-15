import { BarChart3, Activity, Code2 } from "lucide-react";

const groups = [
  {
    icon: BarChart3,
    title: "Análise de Dados",
    accent: "from-primary to-primary-glow",
    skills: ["Power BI", "SQL", "Python", "DAX", "ETL", "Excel", "IA"],
  },
  {
    icon: Activity,
    title: "DevOps & Observabilidade",
    accent: "from-primary-glow to-primary",
    skills: ["Grafana", "Prometheus", "Docker", "IA"],
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    accent: "from-primary to-primary-glow",
    skills: ["JavaScript", "Tailwind CSS", "React", "SPA", "IA"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            // stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ferramentas que uso no <span className="text-gradient">dia a dia</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Combinando análise de dados, infraestrutura observável e desenvolvimento moderno.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-hero text-primary-foreground mb-5">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
