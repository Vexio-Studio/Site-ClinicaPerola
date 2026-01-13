import { cn } from "@/lib/utils";

interface WaveDecorationProps {
  className?: string;
  variant?: "top" | "bottom";
  color?: string;
}

export function WaveDecoration({ 
  className, 
  variant = "bottom",
  color = "hsl(var(--perola-sand-dark))"
}: WaveDecorationProps) {
  if (variant === "top") {
    return (
      <div className={cn("absolute left-0 right-0 top-0 overflow-hidden", className)}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill={color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("absolute left-0 right-0 bottom-0 overflow-hidden", className)}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function ShellDecoration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-48 h-48 opacity-10", className)}
    >
      <path
        d="M100 10C100 10 40 50 40 120C40 160 65 190 100 190C135 190 160 160 160 120C160 50 100 10 100 10Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 30C100 30 60 60 60 120C60 150 78 175 100 175C122 175 140 150 140 120C140 60 100 30 100 30Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M100 50C100 50 80 70 80 120C80 140 88 158 100 158C112 158 120 140 120 120C120 70 100 50 100 50Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
