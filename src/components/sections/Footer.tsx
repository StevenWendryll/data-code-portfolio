import { Link } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-mono">
          <BarChart3 className="h-4 w-4 text-primary" />
          <span>
            portfolio<span className="text-primary">.</span>dev
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <Link
            to="/politica-de-privacidade"
            className="hover:text-primary transition-colors"
          >
            Política de Privacidade
          </Link>
          <p>© {year} — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
