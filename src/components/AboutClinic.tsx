import { Compass, Heart, Shield } from "lucide-react";
import { PillarCard } from "./PillarCard";

const pillars = [
  {
    icon: Compass,
    title: "Direção",
    description:
      "Navegamos juntas cada etapa do cuidado, do diagnóstico às decisões, para que você nunca se sinta perdida.",
  },
  {
    icon: Heart,
    title: "Acolhimento",
    description:
      "Um espaço seguro onde suas dúvidas são ouvidas e suas preocupações são tratadas com empatia e respeito.",
  },
  {
    icon: Shield,
    title: "Confiança",
    description:
      "Decisões baseadas em evidência científica, transparência e compromisso com o que é melhor para você.",
  },
];

export function AboutClinic() {
  return (
    <section id="clinica" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            A Clínica
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Navegação em Saúde
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Na PÉROLA, acreditamos que cada mulher merece uma jornada de cuidado guiada, 
            do primeiro contato ao acompanhamento contínuo. Reduzimos barreiras, oferecemos 
            acesso ágil e construímos uma relação de confiança em cada consulta.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
