import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Me senti acolhida desde o primeiro momento. A Dra. Joana explicou tudo com calma e clareza, tirando todas as minhas dúvidas.",
    initials: "M.S.",
  },
  {
    quote:
      "Depois de anos com medo de fazer exames, encontrei na PÉROLA um espaço onde me sinto segura e respeitada.",
    initials: "A.L.",
  },
  {
    quote:
      "O acompanhamento contínuo faz toda a diferença. Sei que tenho com quem contar em cada etapa do meu cuidado.",
    initials: "C.R.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
            O que dizem nossas pacientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 relative"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              {/* Quote text */}
              <blockquote className="font-body text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">Paciente</span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          * Exemplos ilustrativos. Depoimentos reais podem ser adicionados com autorização.
        </p>
      </div>
    </section>
  );
}
