import {
  BarChart3,
  Clapperboard,
  Cloud,
  Code2,
  Compass,
  FileText,
  Gauge,
  Globe2,
  Hammer,
  KeyRound,
  Layers,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Shapes,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  BarChart3,
  Clapperboard,
  Cloud,
  Code2,
  Compass,
  FileText,
  Gauge,
  Globe2,
  Hammer,
  KeyRound,
  Layers,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Shapes,
  Share2,
  ShoppingBag,
  Smartphone,
  Sparkles,
  TrendingUp,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = icons[name] ?? Sparkles;
  return <Component className={className} aria-hidden="true" />;
}
