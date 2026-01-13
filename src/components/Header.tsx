import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_CONFIG, WHATSAPP_MESSAGES } from "@/lib/config";
import { openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#clinica", label: "Clínica" },
  { href: "#dra-joana", label: "Dra. Joana" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sexta-solidaria", label: "Sexta Solidária" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCTAClick = () => {
    openWhatsApp(WHATSAPP_MESSAGES.agendamento);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-accent hover:text-accent/80 transition-colors"
          >
            {CLINIC_CONFIG.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleCTAClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              aria-label="Agendar atendimento via WhatsApp"
            >
              Agendar atendimento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-border shadow-lg">
            <div className="container-wide py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-3 text-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  onClick={handleCTAClick}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  aria-label="Agendar atendimento via WhatsApp"
                >
                  Agendar atendimento
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
