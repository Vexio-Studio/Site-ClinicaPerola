// PÉROLA - Configurações centralizadas
// Substitua os valores placeholder pelos dados reais da clínica

export const CLINIC_CONFIG = {
  name: "PÉROLA",
  fullName: "PÉROLA – Clínica & Imagem da Mama",
  legalName: "LIVRE CENTRO DE ATENCAO A MAMA LTDA",
  doctor: "Dra. Joana Barros",
  doctorTitle: "Mastologista e Imaginologista Mamária",
  doctorRegistration: "CRM PB 4952 | RQE 4293 | RQE 10530",
  
  // Contatos - SUBSTITUIR pelos valores reais
  whatsapp: "5583991312919", // Formato: 55 + DDD + número (sem espaços ou hífens)
  whatsappFormatted: "(83) 99131-2919",
  phone: "558331857464",
  phoneFormatted: "(83) 3185-7464",
  phoneSecondary: "558330213032",
  phoneSecondaryFormatted: "(83) 3021-3032",
  instagram: "https://instagram.com/clinicaperola", // URL completa do Instagram
  email: "perolaclinicaeimagemdamama@gmail.com",
  
  // Endereço - SUBSTITUIR pelo endereço real ou deixar vazio
  address: {
    street: "Eco Business Center, 23° Andar, Salas 2307/2309",
    neighborhood: "Miramar",
    city: "João Pessoa",
    state: "PB",
    zip: "",
    full: "Eco Business Center, 23° Andar, Salas 2307/2309 - Miramar, João Pessoa - PB", // Exibido quando não há endereço
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
