import {
  Stethoscope,
  HeartPulse,
  ScanLine,
  Waves,
  Search,
  RefreshCw,
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta Mastológica",
    description:
      "Avaliação completa da saúde mamária com anamnese detalhada e exame clínico cuidadoso.",
  },
  {
    icon: HeartPulse,
    title: "Avaliação e Acompanhamento",
    description:
      "Monitoramento contínuo da saúde da mama, com orientações personalizadas para cada fase da vida.",
  },
  {
    icon: ScanLine,
    title: "Mamografia",
    description:
      "Exame de imagem fundamental para rastreamento e diagnóstico precoce de alterações mamárias.",
  },
  {
    icon: Waves,
    title: "Ultrassonografia Mamária",
    description:
      "Complemento diagnóstico essencial, especialmente para mamas densas e avaliação de nódulos.",
  },
  {
    icon: Search,
    title: "Diagnóstico e Direcionamento",
    description:
      "Investigação de casos suspeitos com encaminhamento adequado e acompanhamento personalizado.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento Contínuo",
    description:
      "Seguimento regular para pacientes em tratamento ou pós-tratamento, com suporte integral.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Cuidado Especializado
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Oferecemos uma estrutura completa para o cuidado integral da saúde mamária, 
            do rastreamento ao acompanhamento especializado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Ethical Note */}
        <div className="mt-12 text-center">
          <p className="inline-block text-sm text-muted-foreground bg-secondary/50 px-6 py-3 rounded-full">
            Cada caso é único. As indicações e condutas são definidas em consulta.
          </p>
        </div>
      </div>
    </section>
  );
}
