import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { CLINIC_CONFIG } from "@/lib/config";

const PrivacyPolicy = () => {
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
            Política de Privacidade
          </h1>

          <p className="text-muted-foreground mb-6">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              1. Introdução
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A {CLINIC_CONFIG.fullName} ("nós", "nosso" ou "Clínica") está comprometida 
              em proteger a privacidade e os dados pessoais de nossos pacientes e visitantes. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
              protegemos suas informações pessoais, em conformidade com a Lei Geral de 
              Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              2. Dados Coletados
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Dados de identificação: nome completo, CPF, RG, data de nascimento</li>
              <li>Dados de contato: telefone, e-mail, endereço</li>
              <li>Dados de saúde: histórico médico, exames, prontuários</li>
              <li>Dados de navegação: cookies, IP, páginas visitadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              3. Finalidade do Tratamento
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Utilizamos seus dados para:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Prestação de serviços médicos e de saúde</li>
              <li>Agendamento de consultas e exames</li>
              <li>Comunicação sobre seu atendimento</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Melhoria de nossos serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              4. Compartilhamento de Dados
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Seus dados poderão ser compartilhados com:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Profissionais de saúde envolvidos em seu cuidado</li>
              <li>Laboratórios e centros de diagnóstico</li>
              <li>Operadoras de planos de saúde (quando aplicável)</li>
              <li>Autoridades regulatórias, quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              5. Segurança dos Dados
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus 
              dados pessoais contra acesso não autorizado, alteração, divulgação ou 
              destruição. O acesso aos dados é restrito a profissionais autorizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Conforme a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside text-foreground/80 space-y-2 ml-4">
              <li>Confirmar a existência de tratamento de seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar correção de dados incompletos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              7. Contato
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato pelo e-mail: {CLINIC_CONFIG.email}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">
              8. Alterações
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que você 
              a consulte regularmente para estar ciente de eventuais alterações.
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

export default PrivacyPolicy;
