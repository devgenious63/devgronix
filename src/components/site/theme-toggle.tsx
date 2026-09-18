import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Light is the default. A manually chosen theme is stored in localStorage and
 * respected on future visits; system preference is deliberately ignored.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("devgronix-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setIsDark(next);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "focus-ring inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors duration-200 hover:border-accent hover:text-accent",
        className,
      )}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
