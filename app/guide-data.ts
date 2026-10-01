import {
  Bathtub,
  BellSimple,
  Broom,
  CalendarCheck,
  ChatCircleDots,
  Clock,
  Coffee,
  Compass,
  Fire,
  ForkKnife,
  Gift,
  Lightning,
  MapPin,
  Package,
  PawPrint,
  Sun,
  Users,
  Warning,
  WifiHigh,
  type Icon,
} from '@phosphor-icons/react';

export const POUSADA_NAME = 'Charme da Montanha';

export const WIFI_PASSWORD = 'Charme2024@';

export const contactInfo = {
  emergencyPhone: '35 99264-4342',
  emergencyTel: '+5535992644342',
  whatsappNumber: '35 99196-2847',
  whatsappPhone: '5535991962847',
  instagramHandle: 'pousadacharmedamontanha',
  instagramUrl: 'https://instagram.com/pousadacharmedamontanha',
  address: 'Avenida Monte Verde, 381, Monte Verde, Camanducaia - MG, CEP 37650-000',
  addressDetails: 'Apenas 200 metros após a primeira rotatória do Portal de Entrada de Monte Verde, à esquerda.',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1645063371904!2d-46.0359858!3d-22.6083884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc03aa0845a709%3A0xe54e39ecbb914565!2sAv.%20Monte%20Verde%2C%20381%20-%20Monte%20Verde%2C%20Camanducaia%20-%20MG%2C%2037650-000!5e0!3m2!1spt-BR!2sbr!4v1714227000000!5m2!1spt-BR!2sbr',
};

const routeDestination = encodeURIComponent(contactInfo.address);

export const routeLinks = {
  waze: `https://waze.com/ul?q=${routeDestination}&navigate=yes`,
  googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${routeDestination}`,
};

// --- Categories ---

export const groups = [
  { id: 'quarto', title: 'Guia do Quarto' },
  { id: 'regras', title: 'Políticas & Regras' },
  { id: 'regiao', title: 'Monte Verde' },
] as const;

export type GroupId = (typeof groups)[number]['id'];

export type CategoryId =
  | 'wifi'
  | 'cafe'
  | 'recepcao'
  | 'areas-sociais'
  | 'lareira'
  | 'hidromassagem'
  | 'tomadas'
  | 'arrumacao'
  | 'cortesias'
  | 'checkin-checkout'
  | 'convivencia-geral'
  | 'pet-friendly'
  | 'danos-avarias'
  | 'objetos-esquecidos'
  | 'estorno-cancela'
  | 'comer'
  | 'fazer'
  | 'chegar';

export interface Category {
  id: CategoryId;
  group: GroupId;
  number: string;
  icon: Icon;
  title: string;
  subtitle: string;
  quickHighlight: string;
  keywords: string[];
}

const categoryList: Omit<Category, 'number'>[] = [
  {
    id: 'wifi',
    group: 'quarto',
    icon: WifiHigh,
    title: 'Wi-Fi & Conexão',
    subtitle: 'Conectividade rápida em todo o chalé',
    quickHighlight: `Senha: ${WIFI_PASSWORD}`,
    keywords: ['wifi', 'wi-fi', 'internet', 'senha', 'rede', 'conexao'],
  },
  {
    id: 'cafe',
    group: 'quarto',
    icon: Coffee,
    title: 'Café da Manhã',
    subtitle: 'Uma seleção artesanal de quitutes',
    quickHighlight: 'Das 08:30 às 10:30 · Salão principal',
    keywords: ['cafe', 'manha', 'paes', 'bolos', 'salao', 'horario'],
  },
  {
    id: 'recepcao',
    group: 'quarto',
    icon: BellSimple,
    title: 'Horário da Recepção',
    subtitle: 'Suporte e auxílio presencial',
    quickHighlight: 'Dom a Qui até 22:00 · Sex e Sáb até 23:00',
    keywords: ['recepcao', 'atendimento', 'equipe', 'horario', 'suporte'],
  },
  {
    id: 'areas-sociais',
    group: 'quarto',
    icon: Sun,
    title: 'Áreas Sociais',
    subtitle: 'Espaços de convivência e lazer',
    quickHighlight: 'Uso das 09:00 às 22:00',
    keywords: ['areas', 'sociais', 'jardim', 'deck', 'lazer', 'piscina', 'silencio'],
  },
  {
    id: 'lareira',
    group: 'quarto',
    icon: Fire,
    title: 'Lareira & Lenha',
    subtitle: 'Aconchego e aquecimento para o frio',
    quickHighlight: '1 saco de lenha cortesia',
    keywords: ['lareira', 'lenha', 'fogo', 'aquecimento', 'frio'],
  },
  {
    id: 'hidromassagem',
    group: 'quarto',
    icon: Bathtub,
    title: 'Hidromassagem & Água Quente',
    subtitle: 'Instruções para o seu bem-estar',
    quickHighlight: 'Água quente no registro esquerdo',
    keywords: ['hidromassagem', 'banheira', 'agua', 'quente', 'registro', 'banho'],
  },
  {
    id: 'tomadas',
    group: 'quarto',
    icon: Lightning,
    title: 'Eletricidade (Tomadas)',
    subtitle: 'Carregamento de dispositivos',
    quickHighlight: 'Rede padrão 110V',
    keywords: ['eletricidade', 'tomada', 'tomadas', 'voltagem', '110v', '220v', 'energia'],
  },
  {
    id: 'arrumacao',
    group: 'quarto',
    icon: Broom,
    title: 'Arrumação de Quarto',
    subtitle: 'Manutenção do chalé impecável',
    quickHighlight: 'Solicitar na recepção até às 13:00',
    keywords: ['arrumacao', 'limpeza', 'camareira', 'quarto', '13:00'],
  },
  {
    id: 'cortesias',
    group: 'quarto',
    icon: Gift,
    title: 'Cortesias Especiais',
    subtitle: 'Pequenos mimos de boas-vindas',
    quickHighlight: '2 garrafas de água mineral sem gás',
    keywords: ['cortesia', 'cortesias', 'agua', 'mimos', 'boas-vindas'],
  },
  {
    id: 'checkin-checkout',
    group: 'regras',
    icon: Clock,
    title: 'Check-in & Check-out',
    subtitle: 'Horários e procedimentos',
    quickHighlight: 'Entrada 15:00 · Saída até 12:00',
    keywords: ['checkin', 'check-in', 'checkout', 'check-out', 'entrada', 'saida', 'late', 'taxa', 'horario'],
  },
  {
    id: 'convivencia-geral',
    group: 'regras',
    icon: Users,
    title: 'Regras de Convivência',
    subtitle: 'Harmonia e respeito na serra',
    quickHighlight: 'Silêncio após as 22h e antes das 08h',
    keywords: ['regras', 'convivencia', 'silencio', 'som', 'barulho', 'visitas', 'acesso'],
  },
  {
    id: 'pet-friendly',
    group: 'regras',
    icon: PawPrint,
    title: 'Pet Friendly',
    subtitle: 'Nossos amiguinhos peludos',
    quickHighlight: 'Hospedagem do pet gratuita',
    keywords: ['pet', 'cachorro', 'gato', 'animal', 'animais'],
  },
  {
    id: 'danos-avarias',
    group: 'regras',
    icon: Warning,
    title: 'Danos e Avarias',
    subtitle: 'Zelo pela estrutura',
    quickHighlight: 'Avaliados e cobrados no check-out',
    keywords: ['danos', 'avarias', 'quebra', 'cobranca', 'moveis'],
  },
  {
    id: 'objetos-esquecidos',
    group: 'regras',
    icon: Package,
    title: 'Objetos Esquecidos',
    subtitle: 'Devolução de pertences',
    quickHighlight: 'Postagem · R$ 150,00 + frete',
    keywords: ['objetos', 'esquecidos', 'pertences', 'achados', 'perdidos', 'postagem', 'frete'],
  },
  {
    id: 'estorno-cancela',
    group: 'regras',
    icon: CalendarCheck,
    title: 'Política de Estorno',
    subtitle: 'Cancelamento e reembolso',
    quickHighlight: 'Estorno em até 7 dias úteis',
    keywords: ['estorno', 'cancelamento', 'reembolso', 'no-show', 'noshow', 'cdc'],
  },
  {
    id: 'comer',
    group: 'regiao',
    icon: ForkKnife,
    title: 'Onde Comer',
    subtitle: 'Nossas indicações gastronômicas',
    quickHighlight: '5 restaurantes indicados',
    keywords: ['comer', 'restaurante', 'restaurantes', 'jantar', 'almoco', 'bistro', 'cantina', 'gastronomia'],
  },
  {
    id: 'fazer',
    group: 'regiao',
    icon: Compass,
    title: 'O que Fazer',
    subtitle: 'Dicas & experiências locais',
    quickHighlight: '11 passeios e pontos turísticos',
    keywords: ['fazer', 'passeio', 'passeios', 'trilha', 'atividades', 'turismo', 'quadriciclo', 'cavalo', 'chocolate'],
  },
  {
    id: 'chegar',
    group: 'regiao',
    icon: MapPin,
    title: 'Como Chegar',
    subtitle: 'Mapa e instruções até a pousada',
    quickHighlight: 'Avenida Monte Verde, 381',
    keywords: ['chegar', 'localizacao', 'endereco', 'mapa', 'rota', 'waze', 'google maps', 'gps', 'portal'],
  },
];

export const categories: Category[] = categoryList.map((category, idx) => ({
  ...category,
  number: String(idx + 1).padStart(2, '0'),
}));

// --- Recommendations ---

export const restaurantRecommendations = [
  {
    name: 'Villa Dona Bistrô',
    instagram: '@villadonnabistro',
    link: 'https://instagram.com/villadonnabistro',
    desc: 'Cozinha autoral requintada, ambiente romântico perfeito para casais.',
  },
  {
    name: 'Cantina Potali di Napoli',
    instagram: '@cantinaportaledinapoli',
    link: 'https://instagram.com/cantinaportaledinapoli',
    desc: 'Massas artesanais fantásticas e excelente seleção de vinhos e culinária italiana.',
  },
  {
    name: 'Boteco do Lago',
    instagram: '@botecodolago',
    link: 'https://instagram.com/botecodolago',
    desc: 'Pratos regionais, petiscos e chopes artesanais na beira do lago em clima descontraído.',
  },
  {
    name: 'Donna Mucama',
    instagram: '@donamucamamv',
    link: 'https://instagram.com/donamucamamv',
    desc: 'Comida mineira tradicional e lanches excepcionais com tempero da serra.',
  },
  {
    name: 'Rancho da Picanha',
    instagram: '@ranchodapicanhamonteverde',
    link: 'https://instagram.com/ranchodapicanhamonteverde',
    desc: 'Grelhados nobres e picanha de alta qualidade servida na chapa.',
  },
];

export const activityRecommendations = [
  {
    name: 'Passeio City Tour e Trilhas (Pedra Redonda)',
    instagram: '@souza_passeios_',
    link: 'https://instagram.com/souza_passeios_',
    desc: 'Descubra os principais pontos de Monte Verde e aventure-se na famosa trilha da Pedra Redonda com guias experientes.',
  },
  {
    name: 'Passeio de UTV e Quadriciclo',
    instagram: '@claudiopasseios',
    link: 'https://instagram.com/claudiopasseios',
    desc: 'Adrenalina pura desbravando estradas de terra e cenários de tirar o fôlego da nossa região.',
  },
  {
    name: 'ICEBAR Monte Verde',
    instagram: '@icebarmv',
    link: 'https://instagram.com/icebarmv',
    desc: 'O 1º Bar de Gelo do estado de Minas Gerais. Viva a experiência incrível de tomar um drink a temperaturas negativas.',
  },
  {
    name: 'Patinação no Gelo',
    instagram: '@patinacaomonteverde',
    link: 'https://instagram.com/patinacaomonteverde',
    desc: 'Uma das pistas de patinação no gelo mais tradicionais do Brasil, diversão garantida para toda a família.',
  },
  {
    name: 'Passeio à Cavalo',
    instagram: '@haras_mv_encanto_horse',
    link: 'https://instagram.com/haras_mv_encanto_horse',
    desc: 'Cavalgadas tranquilas em meio às matas de araucárias e vales verdes da serra com o Haras Encanto.',
  },
  {
    name: 'Cachaçaria Monte Verde',
    instagram: '@destilariamonteverde',
    link: 'https://instagram.com/destilariamonteverde',
    desc: 'Experimente as melhores cachaças artesanais da região, licores finos e queijos típicos mineiros.',
  },
  {
    name: 'Trutário Monte Verde',
    instagram: '@otrutario',
    link: 'https://instagram.com/otrutario',
    desc: 'Saiba como funciona a criação de trutas e aprecie pratos requintados à base do peixe local fresquíssimo.',
  },
  {
    name: 'Fábricas de Chocolate',
    instagram: '@chocolateria.monte.verde',
    link: 'https://instagram.com/chocolateria.monte.verde',
    desc: 'Visite as lojas e chocolaterias locais, desfrutando de deliciosos chocolates artesanais e fondue montanhês.',
  },
  {
    name: 'Fazenda Radical',
    instagram: '@fazendaradical',
    link: 'https://instagram.com/fazendaradical',
    desc: 'Parque de aventura completo com megatirolesa, arborismo, arco e flecha e parede de escalada.',
  },
  {
    name: 'Mirante - Aeroporto',
    instagram: null,
    link: null,
    desc: 'O aeroporto mais alto do Brasil oferece um mirante com pôr do sol espetacular sobre o mar de morros de Monte Verde.',
  },
  {
    name: 'Lojas e restaurantes - Avenida Monte Verde',
    instagram: null,
    link: null,
    desc: 'O vibrante centro comercial de Monte Verde, perfeito para caminhadas tranquilas, compras de artesanatos, malhas, vinhos e chocolates.',
  },
];

export type Recommendation = (typeof activityRecommendations)[number];

// --- WhatsApp ---

export const whatsappTopics = [
  {
    id: 'lenha',
    icon: Fire,
    label: 'Pedir Lenha para Lareira',
    detail: 'Sacos adicionais ou auxílio no acendimento',
    message: 'Olá! Estou hospedado na pousada e gostaria de solicitar lenha para a lareira',
  },
  {
    id: 'arrumacao',
    icon: Broom,
    label: 'Arrumação de Quarto',
    detail: 'Solicitação até às 13:00',
    message: 'Olá! Estou hospedado na pousada e gostaria de solicitar a arrumação do meu chalé',
  },
  {
    id: 'late-checkout',
    icon: Clock,
    label: 'Late Check-out',
    detail: 'Consultar disponibilidade e valores',
    message: 'Olá! Estou hospedado na pousada e gostaria de consultar a disponibilidade e os valores do late check-out',
  },
  {
    id: 'objetos',
    icon: Package,
    label: 'Objeto Esquecido',
    detail: 'Solicitar postagem — R$ 150,00 + frete',
    message: 'Olá! Esqueci um objeto na pousada e gostaria de solicitar a postagem',
  },
  {
    id: 'recepcao',
    icon: ChatCircleDots,
    label: 'Falar com a Recepção',
    detail: 'Dúvidas sobre o chalé ou Monte Verde',
    message: 'Olá! Estou hospedado na pousada e gostaria de uma informação',
  },
] as const;

export type WhatsAppTopicId = (typeof whatsappTopics)[number]['id'];
