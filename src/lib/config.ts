// PÉROLA - Configurações centralizadas
// Substitua os valores placeholder pelos dados reais da clínica

export const CLINIC_CONFIG = {
  name: "PÉROLA",
  fullName: "PÉROLA – Clínica & Imagem da Mama",
  doctor: "Dra. Joana Barros",
  doctorTitle: "Mastologista e Imaginologista Mamária",
  
  // Contatos - SUBSTITUIR pelos valores reais
  whatsapp: "5500000000000", // Formato: 55 + DDD + número (sem espaços ou hífens)
  instagram: "https://instagram.com/clinicaperola", // URL completa do Instagram
  email: "contato@clinicaperola.com.br",
  
  // Endereço - SUBSTITUIR pelo endereço real ou deixar vazio
  address: {
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    zip: "",
    full: "Em breve", // Exibido quando não há endereço
  },
  
  // Horários
  hours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
  },
} as const;

// Mensagens pré-definidas para WhatsApp
export const WHATSAPP_MESSAGES = {
  agendamento: "Olá! Gostaria de agendar um atendimento na Clínica Pérola.",
  informacoes: "Olá! Gostaria de mais informações sobre a Clínica Pérola.",
  sextaSolidaria: "Olá! Gostaria de informações sobre a Sexta Solidária.",
  contato: (nome: string, telefone: string, motivo: string) =>
    `Olá! Meu nome é ${nome}, meu telefone é ${telefone}. Motivo do contato: ${motivo}`,
} as const;

// Links das redes sociais
export const SOCIAL_LINKS = {
  instagram: CLINIC_CONFIG.instagram,
  whatsapp: `https://wa.me/${CLINIC_CONFIG.whatsapp}`,
} as const;
