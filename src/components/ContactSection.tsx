import { useState } from "react";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
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
    value: "Enviar mensagem",
    href: buildWhatsAppLink(WHATSAPP_MESSAGES.informacoes),
    isExternal: true,
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
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <method.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{method.title}</h3>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.isExternal ? "_blank" : undefined}
                    rel={method.isExternal ? "noopener noreferrer" : undefined}
                    className="text-sm text-primary hover:underline"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                )}
              </div>
            ))}
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
