import { Link } from "react-router-dom";
import { CLINIC_CONFIG } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-background mb-2">
              {CLINIC_CONFIG.name}
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Clínica & Imagem da Mama
            </p>
            <p className="text-background/70 text-sm">
              {CLINIC_CONFIG.doctor}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium text-background mb-4">Horários</h4>
            <p className="text-background/70 text-sm mb-1">
              {CLINIC_CONFIG.hours.weekdays}
            </p>
            <p className="text-background/70 text-sm">
              {CLINIC_CONFIG.hours.saturday}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-background mb-4">Links</h4>
            <div className="space-y-2">
              <Link
                to="/politica-de-privacidade"
                className="block text-background/70 text-sm hover:text-background transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="block text-background/70 text-sm hover:text-background transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          {/* Ethical Disclaimer */}
          <p className="text-background/60 text-xs text-center mb-4 max-w-2xl mx-auto">
            Este site tem caráter informativo e não substitui uma consulta médica. 
            As informações aqui apresentadas não devem ser utilizadas para autodiagnóstico 
            ou automedicação. Consulte sempre um profissional de saúde.
          </p>

          {/* Copyright */}
          <p className="text-background/40 text-xs text-center">
            © {currentYear} {CLINIC_CONFIG.fullName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
