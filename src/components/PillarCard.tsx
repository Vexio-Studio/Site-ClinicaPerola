import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export function PillarCard({ icon: Icon, title, description, className, style }: PillarCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-300",
        className
      )}
      style={style}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
        <Icon className="w-7 h-7 text-accent" />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
        <div className="absolute top-0 right-0 w-12 h-12 bg-accent/5 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:bg-accent/10 transition-colors" />
      </div>
    </div>
  );
}
