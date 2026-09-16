import {
  Cloud,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Hammer,
  KeyRound,
  PenTool,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Cloud,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Hammer,
  KeyRound,
  PenTool,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? Sparkles;
  return <Component className={className} aria-hidden="true" />;
}
