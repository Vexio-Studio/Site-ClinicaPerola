import { useState } from "react";
import { MessageCircle, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CLINIC_CONFIG, WHATSAPP_MESSAGES } from "@/lib/config";
import { buildWhatsAppLink, buildContactWhatsAppMessage } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: CLINIC_CONFIG.whatsappFormatted,
    href: buildWhatsAppLink(WHATSAPP_MESSAGES.informacoes),
    isExternal: true,
  },
  {
    icon: Phone,
    title: "Telefone",
    values: [
      {
        display: CLINIC_CONFIG.phoneFormatted,
        href: `tel:+${CLINIC_CONFIG.phone}`,
      },
      {
        display: CLINIC_CONFIG.phoneSecondaryFormatted,
        href: `tel:+${CLINIC_CONFIG.phoneSecondary}`,
      }
    ],
    isExternal: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@clinicaperola",
    href: CLINIC_CONFIG.instagram,
    isExternal: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    value: CLINIC_CONFIG.email,
    href: `mailto:${CLINIC_CONFIG.email}`,
    isExternal: true,
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: CLINIC_CONFIG.address.full,
    href: null,
    isExternal: false,
  },
];

const motivos = [
  "Agendar consulta",
  "Informações sobre exames",
  "Sexta Solidária",
  "Dúvidas gerais",
  "Outro",
];

export function ContactSection() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome && telefone && motivo) {
      const message = buildContactWhatsAppMessage(nome, telefone, motivo);
      window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Fale Conosco
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Estamos aqui para ajudar. Entre em contato pelo canal de sua preferência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods and Map */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.filter(method => method.title !== 'Endereço').map((method) => (
                <div
                  key={method.title}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <method.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{method.title}</h3>
                  {method.values ? (
                    <div className="flex flex-col gap-1">
                      {method.values.map((val, idx) => (
                        <a
                          key={idx}
                          href={val.href}
                          className="text-sm text-primary hover:underline group-hover:text-accent transition-colors"
                        >
                          {val.display}
                        </a>
                      ))}
                    </div>
                  ) : method.href ? (
                    <a
                      href={method.href}
                      target={method.isExternal ? "_blank" : undefined}
                      rel={method.isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm text-primary hover:underline group-hover:text-accent transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  )}
                </div>
              ))}
            </div>
            
            {/* Map Card */}
            <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-colors">
               <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Endereço</h3>
                    <p className="text-sm text-muted-foreground">{CLINIC_CONFIG.address.full}</p>
                  </div>
               </div>
               <div className="w-full h-48 rounded-lg overflow-hidden border border-border/50">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9482811370258!2d-34.8471449!3d-7.1319202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81b1bcaec23%3A0xcad46facc6330c6a!2sEco%20Business%20Center!5e0!3m2!1spt-BR!2sbr!4v1710600000000!5m2!1spt-BR!2sbr" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Localização da Clínica Pérola"
                 ></iframe>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nome" className="text-foreground">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="telefone" className="text-foreground">
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="motivo" className="text-foreground">
                  Motivo do contato
                </Label>
                <Select value={motivo} onValueChange={setMotivo} required>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Selecione um motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    {motivos.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!nome || !telefone || !motivo}
              >
                Enviar via WhatsApp
              </Button>
            </form>

            {/* LGPD Notice */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Ao enviar, você concorda com nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                política de privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
