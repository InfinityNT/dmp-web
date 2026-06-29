import {
  Laptop,
  Command,
  Users,
  ArrowLeftRight,
  CircleCheck,
  ChartColumn,
  Server,
  ShieldCheck,
  MonitorDown,
  Apple,
  Terminal,
  Download,
  MousePointerClick,
  Globe,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Laptop,
  Command,
  Users,
  ArrowLeftRight,
  CircleCheck,
  ChartColumn,
  Server,
  ShieldCheck,
  MonitorDown,
  Apple,
  Terminal,
  Download,
  MousePointerClick,
  Globe,
};

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Cmp = MAP[name] ?? Command;
  return <Cmp size={size} strokeWidth={1.6} />;
}
