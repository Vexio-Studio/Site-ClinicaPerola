import { CLINIC_CONFIG } from "./config";

/**
 * Gera um link para o WhatsApp com mensagem pré-formatada
 * @param message - Mensagem a ser enviada
 * @returns URL do WhatsApp pronta para uso
 */
export function buildWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CLINIC_CONFIG.whatsapp}?text=${encodedMessage}`;
}

/**
 * Abre o WhatsApp em uma nova aba
 * @param message - Mensagem a ser enviada
 */
export function openWhatsApp(message: string): void {
  const url = buildWhatsAppLink(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Gera link de WhatsApp para formulário de contato
 */
export function buildContactWhatsAppMessage(
  nome: string,
  telefone: string,
  motivo: string
): string {
  return `Olá! Meu nome é ${nome}.\n\nTelefone: ${telefone}\nMotivo do contato: ${motivo}\n\nAguardo retorno. Obrigada!`;
}
