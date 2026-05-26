import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Portfolio" },
      {
        name: "description",
        content:
          "Política de Privacidade e tratamento de dados pessoais conforme a LGPD (Lei nº 13.709/2018).",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Política de Privacidade" },
      {
        property: "og:description",
        content: "Como tratamos seus dados pessoais de acordo com a LGPD.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const updatedAt = "26 de maio de 2026";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar para o início
        </Link>

        <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
          // legal
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {updatedAt}
        </p>

        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">1. Quem é o controlador</h2>
            <p className="text-muted-foreground mt-2">
              Este site é um portfólio pessoal. O controlador dos dados, conforme o art. 5º, VI da
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), é o titular deste
              portfólio, contatável pelo e-mail divulgado na seção de Contato.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Quais dados coletamos</h2>
            <p className="text-muted-foreground mt-2">
              Coletamos apenas os dados que você nos envia voluntariamente pelo{" "}
              <strong>formulário de contato</strong>:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
              <li>Nome</li>
              <li>Endereço de e-mail</li>
              <li>Conteúdo da mensagem</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Não utilizamos cookies de rastreamento, ferramentas de analytics ou pixels de
              publicidade. Utilizamos apenas armazenamento técnico no navegador (
              <code>localStorage</code>) para lembrar sua preferência de tema (claro/escuro), o que
              não é considerado dado pessoal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Finalidade e base legal</h2>
            <p className="text-muted-foreground mt-2">
              Os dados são tratados exclusivamente para <strong>responder seu contato</strong> e
              eventualmente discutir oportunidades profissionais. A base legal é o{" "}
              <strong>consentimento</strong> (art. 7º, I da LGPD), manifestado ao marcar a caixa
              de aceite antes do envio do formulário.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Compartilhamento</h2>
            <p className="text-muted-foreground mt-2">
              Seus dados <strong>não são vendidos, alugados ou compartilhados</strong> com
              terceiros para fins de marketing. Podem trafegar por provedores de e-mail e
              hospedagem estritamente necessários à entrega da mensagem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Retenção</h2>
            <p className="text-muted-foreground mt-2">
              Mensagens são mantidas pelo tempo necessário ao atendimento da solicitação e, no
              máximo, por <strong>12 meses</strong>, salvo obrigação legal de guarda por prazo
              superior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Seus direitos (art. 18 da LGPD)</h2>
            <p className="text-muted-foreground mt-2">
              Você pode, a qualquer momento, solicitar:
            </p>
            <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos seus dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação;</li>
              <li>Portabilidade;</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Para exercer qualquer um desses direitos, envie um e-mail pelo canal de contato
              indicado no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Segurança</h2>
            <p className="text-muted-foreground mt-2">
              Adotamos medidas técnicas e organizacionais razoáveis (HTTPS, Content Security
              Policy, validação de entrada) para proteger seus dados contra acessos não
              autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Alterações</h2>
            <p className="text-muted-foreground mt-2">
              Esta política pode ser atualizada. A data de "última atualização" no topo desta
              página indica a versão vigente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
