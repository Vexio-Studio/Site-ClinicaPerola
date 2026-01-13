import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGES } from "@/lib/config";
import { openWhatsApp } from "@/lib/whatsapp";
import { ShellDecoration } from "./WaveDecoration";

export function Hero() {
  const handleAgendarClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.agendamento);
  };

  const handleFalarClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.informacoes);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Decorative elements */}
      <ShellDecoration className="absolute top-20 right-10 text-accent rotate-12 hidden md:block" />
      <ShellDecoration className="absolute bottom-32 left-10 text-accent -rotate-12 scale-75 hidden lg:block" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow relative z-10 text-center pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Mastologia e Imagem da Mama
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 text-balance">
            Onde cada mulher encontra{" "}
            <span className="text-accent italic">direção</span>,{" "}
            <span className="text-accent italic">cuidado</span> e{" "}
            <span className="text-accent italic">transformação</span>.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Mastologia e imagem da mama com acolhimento, clareza e decisões seguras.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleAgendarClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base"
              aria-label="Agendar atendimento via WhatsApp"
            >
              Agendar atendimento
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleFalarClick}
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-8 py-6 text-base"
              aria-label="Falar com a clínica via WhatsApp"
            >
              Falar com a clínica
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-wider uppercase">Saiba mais</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
