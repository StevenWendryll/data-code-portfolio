import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
});

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "E-mail", href: "mailto:contato@exemplo.com" },
];

export function Contact() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Mensagem enviada! Retornarei em breve.");
      setData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 700);
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// contato</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Vamos conversar sobre <span className="text-gradient">o seu próximo projeto</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Aberto a oportunidades em análise de dados, observabilidade e desenvolvimento. Responderei o quanto antes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={submit}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Seu nome"
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="voce@email.com"
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                placeholder="Conte um pouco sobre o projeto..."
                rows={5}
                maxLength={1000}
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full shadow-elegant">
              <Send className="mr-2 h-4 w-4" />
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
