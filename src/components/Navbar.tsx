import { useEffect, useId, useRef, useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("inicio");
  const menuId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy → drives aria-current
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Mobile menu: Escape to close + focus management
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegação principal"
        className="container mx-auto px-6 h-16 flex items-center justify-between"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 font-mono font-semibold tracking-tight"
          aria-label="Ir para o início"
        >
          <BarChart3 className="h-5 w-5 text-primary" aria-hidden="true" />
          <span>
            portfolio<span className="text-primary">.</span>dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <Button
            ref={triggerRef}
            variant="ghost"
            size="icon"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls={menuId}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div
        id={menuId}
        hidden={!open}
        className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg animate-fade-in"
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
          {links.map((l, i) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3 py-2.5 text-sm rounded-md hover:bg-accent",
                  isActive ? "text-foreground font-medium" : "text-muted-foreground",
                )}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
