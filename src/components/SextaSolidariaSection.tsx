import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_MESSAGES } from "@/lib/config";
import { openWhatsApp } from "@/lib/whatsapp";
import backgroundImage from "@/assets/brand/idv perola_page-0021.jpg";

export function SextaSolidariaSection() {
  const handleClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.sextaSolidaria);
  };

  return (
    <section
      id="sexta-solidaria"
      className="aspect-[25/10] relative overflow-hidden flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      <div className="container-wide flex items-center mx-auto justify-center relative z-10">
        <div className="bg-card rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg border border-border/50 text-center">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
            <Heart className="w-10 h-10 text-accent" />
          </div>

          {/* Badge */}
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Projeto Especial
          </span>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Sexta Solidária
          </h2>

          {/* Description */}
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Um projeto recorrente da Clínica PÉROLA para ampliar o acesso ao cuidado
            da saúde mamária. Acreditamos que toda mulher merece atenção especializada,
            independente de suas condições. A Sexta Solidária é nossa forma de contribuir
            para um cuidado mais inclusivo e acessível.
          </p>

          {/* CTA */}
          <Button
            size="lg"
            variant="outline"
            onClick={handleClick}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium px-8"
            aria-label="Saber mais sobre a Sexta Solidária via WhatsApp"
          >
            Quero saber como funciona
          </Button>

          {/* Note */}
          <p className="text-sm text-muted-foreground mt-6">
            Entre em contato para mais informações sobre o projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
