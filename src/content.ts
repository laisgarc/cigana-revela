import type { SiteContent } from './types/content';

/** Edite aqui os textos e os dados públicos da página. */
export const site = {
  name: 'Raissa Vitória',
  brand: 'A Cigana Revela',
  instagram: 'https://www.instagram.com/a_ciganarevela/',
  instagramHandle: '@a_ciganarevela',
  // Número internacional, somente dígitos. Ex.: 55 + DDD + número.
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '5511996749499',
  message: 'Oi, Raissa! Vim pelo site e gostaria de conhecer as leituras online de Baralho Cigano. Pode me informar as opções, os valores e os horários disponíveis?',
  hero: {
    eyebrow: 'Baralho Cigano · Atendimento online',
    title: 'Um novo olhar para suas dúvidas e',
    emphasis: 'seus caminhos.',
    description: 'Conheça as leituras de Baralho Cigano com Raissa Vitória e encontre um espaço para refletir sobre relacionamentos, escolhas e o momento que você está vivendo.',
  },
  themes: [
    { icon: 'heart', title: 'Relacionamentos', text: 'Um olhar para seus vínculos, sentimentos e as perguntas que o coração traz.' },
    { icon: 'compass', title: 'Escolhas e mudanças', text: 'Novas perspectivas para refletir sobre decisões e possibilidades.' },
    { icon: 'moon', title: 'Novos ciclos', text: 'Um momento para olhar com atenção para encerramentos e recomeços.' },
    { icon: 'sparkles', title: 'Autoconhecimento', text: 'Uma pausa para se ouvir e dedicar atenção às suas próprias perguntas.' },
  ],
  steps: [
    { icon: 'message', title: 'Vamos conversar', text: 'Entre em contato e conte o que gostaria de trazer para sua leitura.' },
    { icon: 'cards', title: 'Conheça as opções', text: 'Saiba mais sobre as leituras, os valores e a duração de cada atendimento.' },
    { icon: 'calendar', title: 'Combine seu momento', text: 'Consulte os horários e escolha a opção que faz sentido para você.' },
    { icon: 'screen', title: 'Receba sua leitura', text: 'O atendimento é online, no formato combinado com a Raissa.' },
  ],
  about: {
    title: 'Por trás das cartas, uma conversa com Raissa.',
    paragraphs: [
      'Minha proposta é abrir um espaço de reflexão sobre suas dúvidas, seus relacionamentos e os caminhos que você deseja explorar. Um convite para olhar para o seu momento com mais atenção.',
      'Antes de agendar, podemos conversar sobre como funciona a leitura e qual opção faz sentido para você.',
    ],
  },
  faqs: [
    { question: 'Como funciona a leitura online?', answer: 'O primeiro passo é conversar com a Raissa. Nesse contato, você conhece as opções de leitura e combina o formato, a duração e o horário do atendimento. A consulta acontece online, sem precisar se deslocar.' },
    { question: 'Nunca consultei Baralho Cigano. Posso começar por aqui?', answer: 'Você pode entrar em contato mesmo sem conhecer o Baralho Cigano. Converse com a Raissa para entender a proposta da leitura e tirar suas dúvidas antes de decidir pelo agendamento.' },
    { question: 'Preciso preparar perguntas?', answer: 'Se já tem perguntas em mente, pode anotá-las para a conversa inicial. Se ainda não sabe como organizá-las, explique o que gostaria de compreender e pergunte à Raissa como preparar sua leitura.' },
    { question: 'Quanto custa e quanto tempo dura?', answer: 'Consulte a Raissa para conhecer as opções, os valores e a duração das leituras disponíveis. Essas informações são combinadas antes do agendamento.' },
    { question: 'Quais assuntos posso trazer?', answer: 'Relacionamentos, escolhas, mudanças e autoconhecimento podem ser pontos de partida para a conversa. Fale sobre o que deseja abordar para confirmar se a proposta da leitura atende à sua necessidade.' },
    { question: 'Como funcionam pagamento e remarcação?', answer: 'As formas de pagamento e as condições de agendamento ou remarcação devem ser consultadas diretamente com a Raissa antes de confirmar seu atendimento.' },
  ],
} as const satisfies SiteContent;
