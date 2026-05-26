import { useId, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Send, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  message: z.string().trim().min(10, "Mensagem muito curta").max(1000),
  consent: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar a Política de Privacidade" }),
  }),
});
type ContactData = z.infer<typeof schema>;

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/steven-wendryll/" },
  { icon: Github, label: "GitHub", href: "https://github.com/StevenWendryll" },
  { icon: Mail, label: "E-mail", href: "mailto:stevenwendryll@hotmail.com" },
  { icon: FileText, label: "Baixar Currículo", href: "/curriculo.pdf" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const safeSocials = useMemo(
    () => socials.map((s) => ({ ...s, href: safeHref(s.href) })).filter((s): s is typeof s & { href: string } => s.href !== null),
    [],
  );

  const onSubmit = (data: ContactData) => {
    setLoading(true);
    setTimeout(() => {
      toast.success("Mensagem enviada! Retornarei em breve.");
      reset();
      setLoading(false);
    }, 700);
    void data;
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              // contato
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Vamos conversar sobre <span className="text-gradient">o seu próximo projeto</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Aberto a oportunidades em análise de dados, observabilidade e desenvolvimento.
              Responderei o quanto antes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {safeSocials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (abre em nova aba)`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-labelledby="contact-form-heading"
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5"
          >
            <h3 id="contact-form-heading" className="sr-only">
              Formulário de contato
            </h3>

            <div className="space-y-2">
              <Label htmlFor={nameId}>Nome</Label>
              <Input
                id={nameId}
                placeholder="Seu nome"
                maxLength={100}
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? `${nameId}-err` : undefined}
                {...register("name")}
              />
              {errors.name && (
                <p
                  id={`${nameId}-err`}
                  role="alert"
                  className="text-xs font-medium text-destructive"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={emailId}>Email</Label>
              <Input
                id={emailId}
                type="email"
                placeholder="voce@email.com"
                maxLength={255}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${emailId}-err` : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p
                  id={`${emailId}-err`}
                  role="alert"
                  className="text-xs font-medium text-destructive"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={messageId}>Mensagem</Label>
              <Textarea
                id={messageId}
                placeholder="Conte um pouco sobre o projeto..."
                rows={5}
                maxLength={1000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `${messageId}-err` : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p
                  id={`${messageId}-err`}
                  role="alert"
                  className="text-xs font-medium text-destructive"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={loading} className="w-full shadow-elegant">
              <Send className="mr-2 h-4 w-4" aria-hidden="true" />
              {loading ? "Enviando..." : "Enviar mensagem"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
function safeHref(href: string): string | null {
  if (!href || typeof href !== "string") {
    return null;
  }

  const trimmed = href.trim();

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    try {
      new URL(trimmed);
      return trimmed;
    } catch {
      return null;
    }
  }

  if (trimmed.startsWith("mailto:")) {
    const email = trimmed.slice(7);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return trimmed;
    }
    return null;
  }

  if (trimmed.startsWith("/")) {
    return trimmed;
  }

  return null;
}

