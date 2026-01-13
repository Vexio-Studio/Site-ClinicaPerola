import { Badge } from "@/components/ui/badge";
import { ClipboardList, Route, Users } from "lucide-react";
import doctorPhoto from "@/assets/brand/idv_perola_18.jpg";

const badges = [
  "Mastologista",
  "Imaginologista Mamária",
  "Cuidado Integral",
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Escuta e Avaliação",
    description: "Entendemos sua história, suas preocupações e realizamos uma avaliação completa.",
  },
  {
    icon: Route,
    step: "02",
    title: "Orientação e Plano",
    description: "Construímos juntas um plano de cuidado personalizado, com clareza sobre cada etapa.",
  },
  {
    icon: Users,
    step: "03",
    title: "Acompanhamento",
    description: "Seguimos ao seu lado em toda a jornada, oferecendo suporte contínuo.",
  },
];

export function DoctorSection() {
  return (
    <section id="dra-joana" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={doctorPhoto} 
                alt="Dra. Joana Barros - Mastologista e Imaginologista Mamária"
                className="w-full h-full object-cover object-left"
              />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Quem Cuida de Você
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Dra. Joana Barros
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/20 font-medium"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Bio */}
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Médica especialista em mastologia e imagem da mama, dedicada a oferecer 
              um atendimento que vai além do diagnóstico. Com formação sólida e olhar 
              humanizado, acompanho cada paciente em sua jornada de cuidado, buscando 
              sempre as melhores evidências para decisões seguras e personalizadas.
            </p>

            {/* How it works */}
            <div className="space-y-1">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Como é o Atendimento
              </h3>
              <div className="space-y-4">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-accent">{item.step}</span>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
