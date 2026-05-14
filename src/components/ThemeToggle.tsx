import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // Initial state mirrors the pre-hydration script in __root.tsx, so the
  // first paint matches the persisted preference and avoids FOWT.
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    const root = document.documentElement;
    // Habilita transição de tema apenas durante o toggle (~500ms),
    // evitando o custo contínuo de um seletor `*` global.
    root.classList.add("theme-transition");
    root.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    window.setTimeout(() => root.classList.remove("theme-transition"), 550);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={dark}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
