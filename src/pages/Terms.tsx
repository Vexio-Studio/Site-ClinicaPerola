import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CLINIC_CONFIG } from "@/lib/config";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container-narrow py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-narrow py-12 md:py-16">
        <article className="prose prose-stone max-w-none">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
            Termos de Uso
          </h1>

          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Ao acessar e utilizar este site, você concorda em cumprir e estar 
              vinculado aos seguintes termos e condições de uso. Se você não concordar 
              com qualquer parte destes termos, não deverá usar nosso site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              2. Uso do Site
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Este site é de propriedade da {CLINIC_CONFIG.fullName} e tem caráter 
              exclusivamente informativo. O conteúdo aqui apresentado não substitui 
              uma consulta médica presencial.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Você concorda em usar o site apenas para fins lícitos e de acordo com 
              estes Termos de Uso e todas as leis e regulamentos aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              3. Informações Médicas
            </h2>
            <p className="text-foreground/80 leading-relaxed font-medium mb-4">
              AVISO IMPORTANTE:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>
                As informações contidas neste site são apenas para fins educacionais 
                e informativos gerais
              </li>
              <li>
                Não devem ser usadas como substituto de orientação médica profissional, 
                diagnóstico ou tratamento
              </li>
              <li>
                Sempre procure o conselho de um profissional de saúde qualificado 
                para quaisquer dúvidas sobre sua condição médica
              </li>
              <li>
                Nunca desconsidere orientação médica profissional ou demore a 
                procurá-la por causa de algo que leu neste site
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              4. Propriedade Intelectual
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos, 
              ícones e design, é de propriedade da {CLINIC_CONFIG.fullName} ou 
              de terceiros que autorizaram seu uso, estando protegido pelas leis 
              de direitos autorais e propriedade intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              5. Links Externos
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Este site pode conter links para sites de terceiros. Não temos controle 
              sobre o conteúdo desses sites e não assumimos responsabilidade por 
              qualquer informação, conteúdo ou práticas de terceiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              6. Limitação de Responsabilidade
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Em nenhuma circunstância a {CLINIC_CONFIG.fullName} será responsável 
              por quaisquer danos diretos, indiretos, incidentais, especiais ou 
              consequentes decorrentes do uso ou incapacidade de uso deste site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              7. Modificações
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação no site. 
              O uso continuado do site após tais alterações constitui sua aceitação 
              dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              8. Lei Aplicável
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa 
              do Brasil. Qualquer disputa será submetida à jurisdição exclusiva 
              dos tribunais brasileiros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              9. Contato
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Para dúvidas sobre estes Termos de Uso, entre em contato pelo 
              e-mail: {CLINIC_CONFIG.email}
            </p>
          </section>
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container-narrow text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {CLINIC_CONFIG.fullName}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
