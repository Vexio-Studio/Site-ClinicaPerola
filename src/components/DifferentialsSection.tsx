import { Heart, AlertCircle, Clock, ArrowRight, Shield } from "lucide-react";

const differentials = [
  {
    icon: Heart,
    title: "Acolhimento com triagem orientativa",
    description: "Recebemos cada paciente com atenção, entendendo suas necessidades desde o primeiro contato.",
  },
  {
    icon: AlertCircle,
    title: "Identificação de casos sensíveis",
    description: "Avaliação cuidadosa para identificar situações que demandam atenção prioritária.",
  },
  {
    icon: Clock,
    title: "Priorização responsável",
    description: "Organização do atendimento respeitando a urgência de cada caso.",
  },
  {
    icon: ArrowRight,
    title: "Encaminhamento adequado",
    description: "Quando necessário, direcionamento para garantir o tempo adequado à paciente.",
  },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Nossos Diferenciais
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
              Prioridade para quem precisa
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Na PÉROLA, cada atendimento é pensado para oferecer o melhor cuidado possível.
              Nosso modelo de triagem orientativa permite identificar e priorizar casos que
              demandam atenção especial, garantindo que nenhuma paciente fique sem o suporte
              adequado no momento certo.
            </p>

            {/* Differentials List */}
            <div className="space-y-4">
              {differentials.map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Box */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Segurança clínica e respeito ao tempo da paciente.
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Nosso compromisso é garantir que cada mulher receba o cuidado que precisa,
                no tempo certo, com a atenção que merece. Porque sua saúde não pode esperar.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
