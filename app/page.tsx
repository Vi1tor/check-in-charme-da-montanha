'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Wifi, 
  Clock, 
  ShieldCheck, 
  PawPrint, 
  Users, 
  AlertTriangle, 
  Package, 
  Phone, 
  MapPin,
  Calendar,
  Compass,
  Utensils,
  Sun,
  Moon,
  Flame,
  Droplet,
  Zap,
  Brush,
  Coffee,
  Heart,
  ExternalLink,
  Instagram,
  Navigation
} from 'lucide-react';
import Image from 'next/image';
import bgImage1 from './assets/WhatsApp Image 2026-07-15 at 16.22.51.jpeg';
import bgImage2 from './assets/WhatsApp Image 2026-07-15 at 16.22.51 (1).jpeg';
import bgImage3 from './assets/WhatsApp Image 2026-07-15 at 16.22.51 (2).jpeg';
import bgImage4 from './assets/WhatsApp Image 2026-07-15 at 16.22.51 (3).jpeg';
import bgImage5 from './assets/WhatsApp Image 2026-07-15 at 16.22.52.jpeg';
import bgImage6 from './assets/WhatsApp Image 2026-07-15 at 16.22.52 (1).jpeg';

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.15 6.38 2.15 11.76c0 1.73.47 3.41 1.35 4.91L2 22l5.48-1.46c1.44.77 3.06 1.18 4.68 1.18h.01c5.46 0 9.89-4.38 9.89-9.76 0-2.61-1.05-5.06-2.95-6.91A10.07 10.07 0 0 0 12.04 2Zm0 17.8h-.01a8.83 8.83 0 0 1-4.48-1.22l-.32-.19-3.25.87.87-3.16-.21-.34a8.3 8.3 0 0 1-1.3-4.42c0-4.57 3.77-8.28 8.4-8.28 2.25 0 4.36.86 5.95 2.43a8.07 8.07 0 0 1 2.47 5.85c0 4.57-3.77 8.26-8.12 8.46Zm4.6-6.05c-.25-.12-1.5-.74-1.74-.82-.23-.09-.4-.12-.57.12-.17.25-.66.82-.8.99-.15.17-.3.19-.56.06-.25-.12-1.06-.38-2.02-1.2-.75-.67-1.25-1.49-1.39-1.74-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.45.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.07-.12-.57-1.36-.78-1.86-.2-.48-.41-.42-.57-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.12.17 1.78 2.73 4.32 3.83.6.26 1.07.41 1.44.53.61.19 1.16.16 1.59.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

// --- Custom Brand Mountain SVG Logo ---
const MountainLogo = ({ className = "w-20 h-14" }: { className?: string }) => (
  <svg viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Mountain peaks */}
    <path d="M10 45 L35 15 L50 30 L75 8 L90 45 Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 45 L42 27 L56 40 L78 16 L94 45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    
    {/* Araucária tree left */}
    <g transform="translate(42, 26) scale(0.65)" stroke="currentColor" strokeWidth="1.4" fill="none">
      <line x1="10" y1="2" x2="10" y2="24" />
      <path d="M2 15 C4 11, 16 11, 18 15" strokeLinecap="round" />
      <path d="M4 11 C6 7, 14 7, 16 11" strokeLinecap="round" />
      <path d="M6 7 C7 4, 13 4, 14 7" strokeLinecap="round" />
      <path d="M8 4 C9 2, 11 2, 12 4" strokeLinecap="round" />
    </g>

    {/* Araucária tree right */}
    <g transform="translate(48, 22) scale(0.8)" stroke="currentColor" strokeWidth="1.4" fill="none">
      <line x1="10" y1="2" x2="10" y2="24" />
      <path d="M2 15 C4 11, 16 11, 18 15" strokeLinecap="round" />
      <path d="M4 11 C6 7, 14 7, 16 11" strokeLinecap="round" />
      <path d="M6 7 C7 4, 13 4, 14 7" strokeLinecap="round" />
      <path d="M8 4 C9 2, 11 2, 12 4" strokeLinecap="round" />
    </g>
  </svg>
);

// --- Data Structures ---

const roomGuideItems = [
  {
    id: 'wifi',
    icon: <Wifi className="w-5 h-5" />,
    title: 'Wi-Fi & Conexão',
    subtitle: 'Conectividade rápida em todo o chalé',
    content: (
      <div className="space-y-3">
        <p>Aproveite nossa conexão de alta velocidade sem custo adicional.</p>
        <div className="p-3 bg-[var(--brand-primary)]/5 rounded-xl border border-[var(--brand-secondary)]/20 inline-block">
          <p className="text-sm font-semibold text-[var(--brand-ink)]">Senha do Wi-Fi:</p>
          <p className="text-lg font-mono tracking-wider font-bold text-[var(--brand-secondary)]">Charme2024@</p>
        </div>
      </div>
    )
  },
  {
    id: 'cafe',
    icon: <Coffee className="w-5 h-5" />,
    title: 'Café da Manhã',
    subtitle: 'Uma seleção artesanal de quitutes',
    content: (
      <div className="space-y-2">
        <p>Servido diariamente em nosso salão principal com pães caseiros, bolos fresquinhos e delícias regionais de Monte Verde.</p>
        <p className="font-semibold text-[var(--brand-secondary)] flex items-center gap-1.5 mt-2">
          <Clock className="w-4 h-4" /> Horário: 08:30 às 10:30
        </p>
      </div>
    )
  },
  {
    id: 'recepcao',
    icon: <Users className="w-5 h-5" />,
    title: 'Horário da Recepção',
    subtitle: 'Suporte e auxílio presencial',
    content: (
      <div className="space-y-3 text-sm">
        <p>Nossa equipe está à disposição para tornar sua estada memorável nos seguintes períodos:</p>
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-ink)]/70">
          <div className="p-2 bg-[var(--brand-primary)]/5 rounded-lg">
            <span className="block text-[10px] opacity-60">Dom a Qui</span>
            08:30 às 22:00
          </div>
          <div className="p-2 bg-[var(--brand-primary)]/5 rounded-lg">
            <span className="block text-[10px] opacity-60">Sex e Sáb</span>
            08:30 às 23:00
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'areas-sociais',
    icon: <Sun className="w-5 h-5" />,
    title: 'Áreas Sociais',
    subtitle: 'Espaços de convivência e lazer',
    content: (
      <div className="space-y-2">
        <p>Nossos jardins, deck e áreas de lazer estão disponíveis para uso e relaxamento.</p>
        <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
          Horário de uso: 09:00 às 22:00
        </p>
        <p className="text-xs text-amber-600 font-semibold bg-amber-50 dark:bg-amber-950/20 p-2.5 rounded-lg border border-amber-200/50">
          ⚠️ Após as 22h, é fundamental manter o silêncio para preservar o descanso e a tranquilidade de todos os hóspedes.
        </p>
      </div>
    )
  },
  {
    id: 'lareira',
    icon: <Flame className="w-5 h-5" />,
    title: 'Lareira & Lenha',
    subtitle: 'Aconchego e aquecimento para o frio',
    content: (
      <div className="space-y-2">
        <p>Incluso <strong className="text-[var(--brand-secondary)]">1 saco de lenha cortesia</strong> na sua reserva para aquecer suas noites serranas.</p>
        <p>Caso necessite de sacos de lenha adicionais ou queira solicitar auxílio para o acendimento, basta solicitar na recepção.</p>
      </div>
    )
  },
  {
    id: 'hidromassagem',
    icon: <Droplet className="w-5 h-5" />,
    title: 'Hidromassagem & Água Quente',
    subtitle: 'Instruções para o seu bem-estar',
    content: (
      <div className="space-y-3">
        <div>
          <h5 className="font-bold text-xs uppercase tracking-wider text-[var(--brand-secondary)] mb-1">Água Quente</h5>
          <p className="text-sm">O registro de água quente fica posicionado do <strong>lado esquerdo</strong>.</p>
        </div>
        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200/50 text-xs">
          <p className="font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-1.5 mb-1">
            🛁 Hidromassagem
          </p>
          <p className="text-blue-700 dark:text-blue-400">Por gentileza, <strong>esvazie toda a água da hidromassagem</strong> imediatamente após a utilização.</p>
        </div>
      </div>
    )
  },
  {
    id: 'tomadas',
    icon: <Zap className="w-5 h-5" />,
    title: 'Eletricidade (Tomadas)',
    subtitle: 'Carregamento de dispositivos',
    content: (
      <div className="space-y-2">
        <p>A rede elétrica padrão da pousada é de <strong>110V</strong>.</p>
        <p className="text-stone-500 text-xs bg-[var(--brand-primary)]/5 p-2.5 rounded-lg border border-[var(--brand-secondary)]/15">
          🔌 Eventuais tomadas com voltagem especial de <strong>220V</strong> estarão explicitamente identificadas com adesivo indicador de segurança.
        </p>
      </div>
    )
  },
  {
    id: 'arrumacao',
    icon: <Brush className="w-5 h-5" />,
    title: 'Arrumação de Quarto',
    subtitle: 'Manutenção do chalé impecável',
    content: (
      <div className="space-y-2">
        <p>Para solicitar a limpeza e arrumação de seu chalé, pedimos a gentileza de comunicar nossa recepção.</p>
        <p className="font-semibold text-xs text-[var(--brand-secondary)] uppercase tracking-wider">
          Prazo limite para solicitação: até às 13:00
        </p>
      </div>
    )
  },
  {
    id: 'cortesias',
    icon: <Heart className="w-5 h-5" />,
    title: 'Cortesias Especiais',
    subtitle: 'Pequenos mimos de boas-vindas',
    content: (
      <p>Para sua maior comodidade na chegada, disponibilizamos <strong>duas garrafas de águas minerais sem gás como cortesia</strong> em seu quarto.</p>
    )
  }
];

const policyItems = [
  {
    id: 'checkin-checkout',
    icon: <Clock className="w-5 h-5" />,
    title: 'Check-in & Check-out',
    subtitle: 'Horários e procedimentos',
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-[var(--brand-primary)]/5 rounded-xl border border-[var(--brand-secondary)]/10 text-center">
            <span className="block text-[10px] uppercase font-bold text-[var(--brand-secondary)] mb-1">Check-in</span>
            <span className="font-cormorant text-2xl font-bold">A partir das 15:00</span>
          </div>
          <div className="p-3 bg-[var(--brand-primary)]/5 rounded-xl border border-[var(--brand-secondary)]/10 text-center">
            <span className="block text-[10px] uppercase font-bold text-[var(--brand-secondary)] mb-1">Check-out</span>
            <span className="font-cormorant text-2xl font-bold">Até às 12:00</span>
          </div>
        </div>
        <p className="text-xs text-stone-500 italic mt-2">Late-checkout: consultar previamente a disponibilidade e valores correspondentes com a nossa recepção.</p>
        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-xl">
          <p className="text-xs font-semibold text-red-800 dark:text-red-300 flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" /> Check-out Automático
          </p>
          <p className="text-xs text-red-700 dark:text-red-400 mt-1">
            Caso o horário limite de 12:00 seja ultrapassado sem comunicação prévia, o sistema cobrará automaticamente uma taxa adicional de <strong>R$ 390,00</strong>.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'convivencia-geral',
    icon: <Users className="w-5 h-5" />,
    title: 'Regras de Convivência',
    subtitle: 'Harmonia e respeito na serra',
    content: (
      <div className="space-y-3">
        <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--brand-ink)]/90">
          <li><strong>Lei do Silêncio:</strong> Silêncio total estabelecido após as 22h e antes das 08h.</li>
          <li><strong>Som e Aparelhos:</strong> É expressamente proibido o uso de som alto nas áreas comuns da pousada.</li>
          <li><strong>Acesso às cabines:</strong> Permitido única e exclusivamente para hóspedes devidamente registrados em nosso sistema.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'pet-friendly',
    icon: <PawPrint className="w-5 h-5" />,
    title: 'Pet Friendly',
    subtitle: 'Nossos amiguinhos peludos',
    content: (
      <div className="space-y-2">
        <p className="font-semibold text-[var(--brand-secondary)]">A hospedagem para o seu pet é gratuita!</p>
        <p className="text-sm">Pedimos apenas que preze pelo bom senso: mantenha seu animalzinho sempre próximo nas áreas sociais e comuns da pousada para garantir o conforto de todos.</p>
      </div>
    )
  },
  {
    id: 'danos-avarias',
    icon: <AlertTriangle className="w-5 h-5" />,
    title: 'Danos e Avarias',
    subtitle: 'Zelo pela estrutura',
    content: (
      <p className="text-sm">Qualquer dano ou avaria intencional causado aos móveis, enxovais, utensílios ou estrutura da acomodação será devidamente avaliado e cobrado diretamente no momento do check-out.</p>
    )
  },
  {
    id: 'objetos-esquecidos',
    icon: <Package className="w-5 h-5" />,
    title: 'Objetos Esquecidos',
    subtitle: 'Devolução de pertences',
    content: (
      <div className="space-y-2">
        <p>Caso tenha esquecido algum objeto em nossas instalações, entre em contato imediatamente conosco via WhatsApp para solicitar a postagem.</p>
        <p className="text-xs bg-[var(--brand-primary)]/5 p-3 rounded-xl border border-[var(--brand-secondary)]/15">
          📦 Taxa fixa administrativa de processamento e postagem de objetos esquecidos: <strong>R$ 150,00 + frete</strong>.
        </p>
      </div>
    )
  },
  {
    id: 'estorno-cancela',
    icon: <Calendar className="w-5 h-5" />,
    title: 'Política de Estorno',
    subtitle: 'Cancelamento e reembolso',
    content: (
      <div className="space-y-3">
        <p className="text-sm">Em caso de não comparecimento sem aviso (No-Show), será cobrado o valor integral da reserva.</p>
        <p className="text-sm">Cancelamentos dentro do prazo recebem o estorno correspondente em até 7 dias úteis.</p>
        <div className="p-3 bg-[var(--brand-primary)]/5 rounded-xl border border-[var(--brand-secondary)]/15 text-xs text-stone-600 dark:text-stone-400">
          ⚖️ Conforme o Art. 49 do Código de Defesa do Consumidor (CDC), garante-se o direito de reembolso total para cancelamentos realizados em até 7 dias após a confirmação da reserva. Após este prazo legal, não haverá reembolso.
        </div>
      </div>
    )
  }
];

const restaurantRecommendations = [
  {
    name: 'Villa Dona Bistrô',
    instagram: '@villadonnabistro',
    link: 'https://instagram.com/villadonnabistro',
    desc: 'Cozinha autoral requintada, ambiente romântico perfeito para casais.'
  },
  {
    name: 'Cantina Potali di Napoli',
    instagram: '@cantinaportaledinapoli',
    link: 'https://instagram.com/cantinaportaledinapoli',
    desc: 'Massas artesanais fantásticas e excelente seleção de vinhos e culinária italiana.'
  },
  {
    name: 'Boteco do Lago',
    instagram: '@botecodolago',
    link: 'https://instagram.com/botecodolago',
    desc: 'Pratos regionais, petiscos e chopes artesanais na beira do lago em clima descontraído.'
  },
  {
    name: 'Donna Mucama',
    instagram: '@donamucamamv',
    link: 'https://instagram.com/donamucamamv',
    desc: 'Comida mineira tradicional e lanches excepcionais com tempero da serra.'
  },
  {
    name: 'Rancho da Picanha',
    instagram: '@ranchodapicanhamonteverde',
    link: 'https://instagram.com/ranchodapicanhamonteverde',
    desc: 'Grelhados nobres e picanha de alta qualidade servida na chapa.'
  }
];

const activityRecommendations = [
  {
    title: 'Passeio City Tour e Trilhas (Pedra Redonda)',
    instagram: '@souza_passeios_',
    link: 'https://instagram.com/souza_passeios_',
    desc: 'Descubra os principais pontos de Monte Verde e aventure-se na famosa trilha da Pedra Redonda com guias experientes.'
  },
  {
    title: 'Passeio de UTV e Quadriciclo',
    instagram: '@claudiopasseios',
    link: 'https://instagram.com/claudiopasseios',
    desc: 'Adrenalina pura desbravando estradas de terra e cenários de tirar o fôlego da nossa região.'
  },
  {
    title: 'ICEBAR Monte Verde',
    instagram: '@icebarmv',
    link: 'https://instagram.com/icebarmv',
    desc: 'O 1º Bar de Gelo do estado de Minas Gerais. Viva a experiência incrível de tomar um drink a temperaturas negativas.'
  },
  {
    title: 'Patinação no Gelo',
    instagram: '@patinacaomonteverde',
    link: 'https://instagram.com/patinacaomonteverde',
    desc: 'Uma das pistas de patinação no gelo mais tradicionais do Brasil, diversão garantida para toda a família.'
  },
  {
    title: 'Passeio à Cavalo',
    instagram: '@haras_mv_encanto_horse',
    link: 'https://instagram.com/haras_mv_encanto_horse',
    desc: 'Cavalgadas tranquilas em meio às matas de araucárias e vales verdes da serra com o Haras Encanto.'
  },
  {
    title: 'Cachaçaria Monte Verde',
    instagram: '@destilariamonteverde',
    link: 'https://instagram.com/destilariamonteverde',
    desc: 'Experimente as melhores cachaças artesanais da região, licores finos e queijos típicos mineiros.'
  },
  {
    title: 'Trutário Monte Verde',
    instagram: '@otrutario',
    link: 'https://instagram.com/otrutario',
    desc: 'Saiba como funciona a criação de trutas e aprecie pratos requintados à base do peixe local fresquíssimo.'
  },
  {
    title: 'Fábricas de Chocolate',
    instagram: '@chocolateria.monte.verde',
    link: 'https://instagram.com/chocolateria.monte.verde',
    desc: 'Visite as lojas e chocolaterias locais, desfrutando de deliciosos chocolates artesanais e fondue montanhês.'
  },
  {
    title: 'Fazenda Radical',
    instagram: '@fazendaradical',
    link: 'https://instagram.com/fazendaradical',
    desc: 'Parque de aventura completo com megatirolesa, arborismo, arco e flecha e parede de escalada.'
  },
  {
    title: 'Mirante - Aeroporto',
    instagram: null,
    link: null,
    desc: 'O aeroporto mais alto do Brasil oferece um mirante com pôr do sol espetacular sobre o mar de morros de Monte Verde.'
  },
  {
    title: 'Lojas e restaurantes - Avenida Monte Verde',
    instagram: null,
    link: null,
    desc: 'O vibrante centro comercial de Monte Verde, perfeito para caminhadas tranquilas, compras de artesanatos, malhas, vinhos e chocolates.'
  }
];

const contactInfo = {
  emergencyPhone: '35 99264-4342',
  whatsappNumber: '35 99196-2847',
  whatsappLink: 'https://wa.me/5535991962847?text=Olá!%20Estou%20hospedado%20na%20pousada%20e%20gostaria%20de%20uma%20informação.',
  instagramHandle: 'pousadacharmedamontanha',
  instagramUrl: 'https://instagram.com/pousadacharmedamontanha',
  address: 'Avenida Monte Verde, 381, Monte Verde, Camanducaia - MG, CEP 37653-000',
  addressDetails: 'Apenas 200 metros após a primeira rotatória do Portal de Entrada de Monte Verde, à esquerda.'
};

interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  conditionText: string;
  icon: string;
  isDay: boolean;
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<'guia' | 'regras' | 'comer' | 'fazer' | 'chegar'>('guia');
  const [openRoomCard, setOpenRoomCard] = useState<string | null>('wifi');
  const [openPolicyCard, setOpenPolicyCard] = useState<string | null>('checkin-checkout');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
  const [backgroundIndex, setBackgroundIndex] = useState<number>(0);

  const backgroundImages = [bgImage1, bgImage2, bgImage3, bgImage4, bgImage5, bgImage6];

  useEffect(() => {
    // Keep a soft elegant clock representing real local time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    
    // Auto detect theme from system
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDarkMode(systemTheme);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('/api/weather');
        if (res.ok) {
          const data = await res.json();
          setWeather(data);
        }
      } catch (err) {
        console.error('Error fetching weather:', err);
      } finally {
        setWeatherLoading(false);
      }
    };
    
    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 600000); // 10 minutes
    return () => clearInterval(weatherInterval);
  }, []);

  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setBackgroundIndex((currentIndex) => (currentIndex + 1) % backgroundImages.length);
    }, 7000);

    return () => clearInterval(backgroundInterval);
  }, [backgroundImages.length]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const tabs = [
    { id: 'guia', label: 'Guia do Quarto', icon: <Coffee className="w-4 h-4" /> },
    { id: 'regras', label: 'Políticas & Regras', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'comer', label: 'Onde Comer', icon: <Utensils className="w-4 h-4" /> },
    { id: 'fazer', label: 'O que Fazer', icon: <Compass className="w-4 h-4" /> },
    { id: 'chegar', label: 'Como Chegar', icon: <Navigation className="w-4 h-4" /> }
  ] as const;

  return (
    <div className={`min-h-screen flex flex-col md:flex-row relative transition-colors duration-500 ${isDarkMode ? 'dark bg-[#1A1A17] text-[#F5F5F0]' : 'bg-[#F5F5F0] text-[#2D2A26]'}`}>
      
      {/* Background carousel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={backgroundIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={backgroundImages[backgroundIndex]}
              alt="Paisagem da pousada"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,245,240,0.22)_0%,rgba(245,245,240,0.55)_45%,rgba(245,245,240,0.88)_100%)] dark:bg-[linear-gradient(180deg,rgba(26,26,23,0.28)_0%,rgba(26,26,23,0.6)_45%,rgba(26,26,23,0.9)_100%)]" />
      </div>

      {/* Aesthetic Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern pointer-events-none z-[1]" />

      {/* --- SIDEBAR (Desktop) / TOP DRAWER (Mobile) --- */}
      <aside className="w-full md:w-80 md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-[#A68A56]/20 flex flex-col justify-between p-6 md:p-8 z-10 bg-white/40 dark:bg-black/20 backdrop-blur-md">
        
        {/* Brand Header */}
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
          <div className="flex items-center md:items-start gap-3 md:flex-col">
            <div className="text-[var(--brand-secondary)] flex items-center justify-center">
              <MountainLogo className="w-16 h-12 md:w-20 md:h-14" />
            </div>
            <div className="text-left">
              <span className="text-[9px] uppercase tracking-[0.25em] opacity-60 font-bold block mb-0.5">
                Pousada
              </span>
              <h1 className="font-cormorant text-2xl md:text-3xl font-bold tracking-tight leading-none text-[var(--brand-ink)]">
                Charme da<br className="hidden md:block"/> Montanha
              </h1>
            </div>
          </div>

          {/* Theme Toggle & Clock */}
          <div className="flex items-center gap-2 md:gap-3">
            {weatherLoading ? (
              <span className="w-8 h-6 rounded-full bg-stone-200/50 dark:bg-stone-800/40 animate-pulse block md:hidden" />
            ) : weather ? (
              <div 
                className="flex items-center gap-1 font-sans text-xs bg-stone-200/50 dark:bg-stone-800/40 px-2.5 py-1 rounded-full cursor-help md:hidden" 
                title={`${weather.conditionText} - Monte Verde`}
              >
                <span>{weather.icon}</span>
                <span className="font-semibold text-stone-700 dark:text-stone-300">{weather.temp}°C</span>
              </div>
            ) : null}
            {currentTime && (
              <span className="font-mono text-xs opacity-50 bg-stone-200/50 dark:bg-stone-800/40 px-2.5 py-1 rounded-full">
                {currentTime}
              </span>
            )}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-[var(--brand-primary)]/10 text-[var(--brand-secondary)] transition-all"
              aria-label="Alternar modo escuro"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-12 h-[1px] bg-[var(--brand-secondary)]/30 my-6" />

        {/* Dynamic Navigation Tabs (Scrollable list on mobile, layout on left inside aside on Desktop) */}
        <div className="hidden md:flex flex-col gap-1.5 flex-grow mt-2">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left ${
                  isSelected 
                    ? 'bg-[#5A5A40] text-white shadow-md' 
                    : 'hover:bg-[var(--brand-primary)]/5 text-[var(--brand-ink)]/70 hover:text-[var(--brand-ink)]'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Quick Help Sidebar Widget */}
        <div className="hidden md:block mt-6 space-y-4">
          {/* Weather Card for Desktop */}
          <div className="card-glass p-4 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-secondary)]">Clima na Serra</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[9px] font-mono opacity-55 uppercase tracking-wide">Monte Verde</span>
            </div>
            
            {weatherLoading ? (
              <div className="flex items-center gap-3 animate-pulse">
                <div className="w-8 h-8 rounded-full bg-[#5A5A40]/10" />
                <div className="space-y-1 flex-1">
                  <div className="h-3 bg-[#5A5A40]/10 rounded w-1/3" />
                  <div className="h-2.5 bg-[#5A5A40]/10 rounded w-2/3" />
                </div>
              </div>
            ) : weather ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl filter drop-shadow-sm leading-none" role="img" aria-label={weather.conditionText}>
                    {weather.icon}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-cormorant text-xl font-bold tracking-tight text-[var(--brand-ink)]">{weather.temp}°C</span>
                      <span className="text-[9px] opacity-60">Sens. {weather.feelsLike}°C</span>
                    </div>
                    <p className="text-[10px] opacity-70 leading-tight font-medium mt-0.5">{weather.conditionText}</p>
                  </div>
                </div>
                <div className="text-right text-[9px] opacity-65 leading-none">
                  <span className="block mb-0.5">Umidade</span>
                  <span className="font-mono font-bold text-[var(--brand-secondary)]">{weather.humidity}%</span>
                </div>
              </div>
            ) : (
              <p className="text-[10px] opacity-50">Não foi possível carregar o clima.</p>
            )}
          </div>

          <div className="card-glass p-4 rounded-2xl text-white relative overflow-hidden bg-[rgba(90,90,64,0.52)] dark:bg-[rgba(90,90,64,0.38)]">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base">💬</span>
                <h3 className="font-bold text-xs uppercase tracking-wider text-white/95">Recepção Digital</h3>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed mb-3">
                Dúvidas sobre o chalé ou Monte Verde? Fale conosco instantaneamente.
              </p>
              <a 
                href={contactInfo.whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-2.5 bg-[#A68A56] hover:bg-[#8e754a] text-white text-center rounded-xl text-[11px] font-bold tracking-wider transition-all"
              >
                FALAR COM RECEPÇÃO
              </a>
            </div>
            {/* Ambient circle accent */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full" />
          </div>

          <div className="text-[10px] opacity-40 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Charme da Montanha
          </div>
        </div>

      </aside>

      {/* Mobile Sticky Tabs Banner */}
      <div className="md:hidden sticky top-0 z-20 w-full overflow-x-auto bg-white/80 dark:bg-[#1A1A17]/90 backdrop-blur-md border-b border-[#A68A56]/10 py-2 px-4 flex gap-2 no-scrollbar">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                document.getElementById('main-scroll-view')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected 
                  ? 'bg-[#5A5A40] text-white shadow-sm' 
                  : 'bg-stone-200/50 dark:bg-stone-800/40 text-[var(--brand-ink)]/70'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* --- MAIN WORKSPACE --- */}
      <main id="main-scroll-view" className="flex-1 p-4 md:p-8 flex flex-col max-w-4xl mx-auto z-10 w-full overflow-y-auto no-scrollbar pb-24 md:pb-8">
        
        {/* Dynamic Greeting */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 gap-4 mt-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--brand-secondary)] font-semibold">
              Guia de Boas-Vindas
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl italic font-bold tracking-tight mt-1 text-[var(--brand-ink)]">
              Manual do Hóspede
            </h2>
          </div>
          
          {/* Quick Stats Widget */}
          <div className="card-glass flex gap-3 text-xs rounded-2xl p-3">
            <div className="text-center px-2">
              <span className="block text-[9px] uppercase tracking-wider opacity-60">Entrada</span>
              <span className="font-bold font-mono">15:00</span>
            </div>
            <div className="w-[1px] bg-[#A68A56]/20" />
            <div className="text-center px-2">
              <span className="block text-[9px] uppercase tracking-wider opacity-60">Saída</span>
              <span className="font-bold font-mono">12:00</span>
            </div>
            <div className="w-[1px] bg-[#A68A56]/20" />
            <div className="text-center px-2">
              <span className="block text-[9px] uppercase tracking-wider opacity-60">Wi-Fi</span>
              <span className="font-bold text-[var(--brand-secondary)]">Disponível</span>
            </div>
          </div>
        </header>

        {/* --- DYNAMIC VIEWPORT RENDER --- */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: GUIA DO QUARTO */}
            {activeTab === 'guia' && (
              <motion.div
                key="guia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-sm opacity-80 leading-relaxed mb-6">
                  Preparamos nosso chalé com o maior carinho para sua estada. Abaixo estão todas as informações e configurações rápidas de funcionamento interno:
                </p>

                <div className="grid gap-3">
                  {roomGuideItems.map((item, idx) => {
                    const isOpen = openRoomCard === item.id;
                    return (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: idx * 0.05, 
                          duration: 0.4, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        className={`card-glass rounded-[20px] overflow-hidden transition-all duration-300 ${
                          isOpen ? 'shadow-md ring-1 ring-[var(--brand-secondary)]/15' : 'hover:bg-white/50 hover:dark:bg-stone-900/10'
                        }`}
                      >
                        <button 
                          onClick={() => setOpenRoomCard(isOpen ? null : item.id)}
                          className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-full bg-[var(--brand-primary)]/10 text-[#5A5A40] dark:text-[#9a9a7a] flex items-center justify-center">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="font-cormorant text-lg font-bold leading-tight text-[var(--brand-ink)]">
                                {item.title}
                              </h3>
                              <p className="text-[11px] opacity-65 leading-none mt-0.5">{item.subtitle}</p>
                            </div>
                          </div>
                          <motion.div 
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="text-[#A68A56]/70"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="px-5 pb-5 pt-1 text-sm text-[var(--brand-ink)]/85 border-t border-[#A68A56]/10 leading-relaxed space-y-2">
                                {item.content}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 2: POLÍTICAS & REGRAS */}
            {activeTab === 'regras' && (
              <motion.div
                key="regras"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <p className="text-sm opacity-80 leading-relaxed mb-6">
                  Para mantermos a harmonia, a preservação do chalé e a melhor convivência entre os hóspedes da serra, atente-se às seguintes políticas e diretrizes essenciais:
                </p>

                <div className="grid gap-3">
                  {policyItems.map((item, idx) => {
                    const isOpen = openPolicyCard === item.id;
                    return (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: idx * 0.05, 
                          duration: 0.4, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        className={`card-glass rounded-[20px] overflow-hidden transition-all duration-300 ${
                          isOpen ? 'shadow-md ring-1 ring-red-500/10' : 'hover:bg-white/50 hover:dark:bg-stone-900/10'
                        }`}
                      >
                        <button 
                          onClick={() => setOpenPolicyCard(isOpen ? null : item.id)}
                          className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-full bg-stone-200/50 dark:bg-stone-800/40 text-[var(--brand-ink)]/80 flex items-center justify-center">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="font-cormorant text-lg font-bold leading-tight text-[var(--brand-ink)]">
                                {item.title}
                              </h3>
                              <p className="text-[11px] opacity-65 leading-none mt-0.5">{item.subtitle}</p>
                            </div>
                          </div>
                          <motion.div 
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            className="text-[#A68A56]/70"
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div className="px-5 pb-5 pt-1 text-sm text-[var(--brand-ink)]/85 border-t border-[#A68A56]/10 leading-relaxed space-y-2">
                                {item.content}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 3: ONDE COMER (RESTAURANTES) */}
            {activeTab === 'comer' && (
              <motion.div
                key="comer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-cormorant text-2xl font-bold mb-1">Nossas Indicações Gastronômicas</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Alguns dos locais locais que mais frequentamos na vila e temos a plena certeza de que entregam uma experiência gastronômica impecável:
                  </p>
                </div>

                <div className="grid gap-4">
                  {restaurantRecommendations.map((rest, idx) => (
                    <motion.div 
                      key={rest.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: idx * 0.05, 
                        duration: 0.4, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="card-glass p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:translate-y-[-2px] transition-all shadow-sm"
                    >
                      <div className="space-y-1 max-w-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🍽️</span>
                          <h4 className="font-cormorant text-xl font-bold leading-none text-[var(--brand-ink)]">
                            {rest.name}
                          </h4>
                        </div>
                        <p className="text-xs text-[var(--brand-ink)]/70">{rest.desc}</p>
                      </div>

                      <a 
                        href={rest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200/50 dark:bg-stone-850/40 hover:bg-[#5A5A40] hover:text-white transition-all text-xs font-semibold"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>{rest.instagram}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 4: O QUE FAZER (ATIVIDADES) */}
            {activeTab === 'fazer' && (
              <motion.div
                key="fazer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-cormorant text-2xl font-bold mb-1">Dicas & Experiências Locais</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Curta intensamente o melhor que Monte Verde tem a oferecer. Abaixo, separamos os passeios, pontos turísticos e marcas recomendadas:
                  </p>
                </div>

                <div className="grid gap-3.5">
                  {activityRecommendations.map((act, idx) => (
                    <motion.div 
                      key={act.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: idx * 0.05, 
                        duration: 0.4, 
                        ease: [0.16, 1, 0.3, 1] 
                      }}
                      className="card-glass p-4 rounded-2xl flex flex-col justify-between gap-3 hover:translate-y-[-2px] transition-all shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="flex items-start gap-2">
                          <span className="text-base mt-0.5">🌲</span>
                          <div>
                            <h4 className="font-cormorant text-lg font-bold leading-tight text-[var(--brand-ink)]">
                              {act.title}
                            </h4>
                            <p className="text-xs text-[var(--brand-ink)]/70 mt-1">{act.desc}</p>
                          </div>
                        </div>
                      </div>

                      {act.instagram && (
                        <div className="flex justify-end pt-1">
                          <a 
                            href={act.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#5A5A40]/5 hover:bg-[#5A5A40] hover:text-white text-[10px] font-bold text-[#5A5A40] dark:text-[#9a9a7a] transition-all"
                          >
                            <Instagram className="w-3 h-3" />
                            <span>{act.instagram}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 5: COMO CHEGAR (MAPS & INSTRUÇÕES) */}
            {activeTab === 'chegar' && (
              <motion.div
                key="chegar"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-cormorant text-2xl font-bold mb-1">Como Chegar até a Pousada</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Estamos localizados na <strong>Avenida Monte Verde, 381</strong>. É extremamente fácil e descomplicado de chegar:
                  </p>
                </div>

                {/* Directions Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glass p-5 rounded-2xl space-y-4"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--brand-ink)]">Passando pelo Portal de Entrada</h4>
                      <p className="text-xs text-[var(--brand-ink)]/80 mt-1 leading-relaxed">
                        Logo ao cruzar o icônico Portal de Entrada de Monte Verde, você avistará uma rotatória principal à frente.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--brand-ink)]">Mantenha-se na Avenida Principal</h4>
                      <p className="text-xs text-[var(--brand-ink)]/80 mt-1 leading-relaxed">
                        Basta contornar a rotatória e continuar reto, seguindo pela própria <strong>Avenida Monte Verde</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#A68A56] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[var(--brand-ink)]">Chegada em 200 metros</h4>
                      <p className="text-xs text-[var(--brand-ink)]/80 mt-1 leading-relaxed">
                        Rode por cerca de <strong>200 metros</strong> adicionais após a rotatória. A Pousada Charme da Montanha estará localizada perfeitamente ao seu <strong>lado esquerdo</strong>.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Illustrated Custom Route Map SVG Diagram */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.10, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glass p-5 rounded-2xl space-y-3"
                >
                  <h4 className="font-cormorant text-lg font-bold text-[var(--brand-ink)]">Mapa do Trajeto Ilustrativo</h4>
                  <div className="border border-[#A68A56]/15 rounded-xl bg-white/60 dark:bg-stone-900/40 p-2 overflow-hidden flex flex-col justify-center items-center">
                    <svg viewBox="0 0 500 240" className="w-full h-auto text-stone-700 dark:text-stone-300 font-sans" xmlns="http://www.w3.org/2000/svg">
                      {/* Roads and Paths */}
                      <rect x="0" y="100" width="500" height="45" fill="#e2e2d5" opacity="0.6" />
                      <line x1="0" y1="122" x2="500" y2="122" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />
                      
                      {/* Sidestreets */}
                      <rect x="180" y="0" width="32" height="100" fill="#e2e2d5" opacity="0.6" />
                      <rect x="350" y="145" width="32" height="100" fill="#e2e2d5" opacity="0.6" />

                      {/* Gas Station */}
                      <g transform="translate(240, 155)">
                        <rect width="65" height="40" rx="4" fill="#a8dadc" stroke="#457b9d" strokeWidth="1" />
                        <text x="32" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d3557">POSTO</text>
                      </g>

                      {/* Portal */}
                      <g transform="translate(430, 85)">
                        <rect width="50" height="75" rx="5" fill="#a68a56" opacity="0.4" />
                        <line x1="10" y1="0" x2="10" y2="75" stroke="#5A5A40" strokeWidth="3" />
                        <line x1="40" y1="0" x2="40" y2="75" stroke="#5A5A40" strokeWidth="3" />
                        <rect x="0" y="5" width="50" height="15" fill="#5A5A40" />
                        <text x="25" y="15" textAnchor="middle" fontSize="7" fill="#ffffff" fontWeight="bold">PORTAL</text>
                      </g>

                      {/* Rotatória */}
                      <g transform="translate(300, 122)">
                        <circle r="24" fill="#8c8c7a" stroke="#ffffff" strokeWidth="2" />
                        <circle r="12" fill="#5A5A40" />
                      </g>

                      {/* Route Arrows */}
                      <path d="M 430 112 L 340 112" stroke="#d62828" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                      <path d="M 324 105 A 18 18 0 0 0 285 110" stroke="#d62828" strokeWidth="2" fill="none" />
                      <path d="M 282 112 L 150 112" stroke="#d62828" strokeWidth="2" fill="none" />
                      
                      {/* Marker arrow definition */}
                      <defs>
                        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" fill="#d62828" />
                        </marker>
                      </defs>

                      {/* Pousada Block */}
                      <g transform="translate(70, 40)">
                        <rect width="90" height="50" rx="8" fill="#5A5A40" stroke="#A68A56" strokeWidth="1.5" />
                        <text x="45" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">POUSADA</text>
                        <text x="45" y="38" textAnchor="middle" fontSize="7" fill="#ffffff" opacity="0.8">Charme da Montanha</text>
                      </g>

                      {/* Markers & Labels */}
                      <circle cx="115" cy="112" r="5" fill="#d62828" />
                      <text x="115" y="132" textAnchor="middle" fontSize="8" fontWeight="bold">Chegada à Esquerda</text>

                      {/* Text details */}
                      <text x="320" y="85" textAnchor="middle" fontSize="8" fontWeight="bold" opacity="0.8">Rotatória Principal</text>
                      <text x="455" y="175" textAnchor="middle" fontSize="8" fontWeight="bold" opacity="0.7">Portal de Entrada</text>
                      <text x="250" y="112" fontSize="9" fontWeight="bold" fill="#d62828">Av. Monte Verde</text>
                    </svg>
                  </div>
                </motion.div>

                {/* Real Google Maps Embed Widget */}
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[24px] overflow-hidden shadow-inner h-72 border border-[#A68A56]/20 relative z-10 bg-stone-200"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.1645063371904!2d-46.0359858!3d-22.6083884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc03aa0845a709%3A0xe54e39ecbb914565!2sAv.%20Monte%20Verde%2C%20381%20-%20Monte%20Verde%2C%20Camanducaia%20-%20MG%2C%2037650-000!5e0!3m2!1spt-BR!2sbr!4v1714227000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* --- BOTTOM QUICK CONTACT PANEL (For Mobile/Tablets) --- */}
        <div className="mt-8 space-y-4">
          
          <div className="card-glass p-4 rounded-2xl text-sm space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--brand-secondary)]">
              Canais de Comunicação Direta
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Emergency lines */}
              <div className="card-glass flex items-center gap-3 p-2.5 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase opacity-60">Emergências (Apenas Ligações)</span>
                  <a href={`tel:${contactInfo.emergencyPhone.replace(/\s+/g, '')}`} className="font-bold hover:underline">
                    {contactInfo.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="card-glass flex items-center gap-3 p-2.5 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-500 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase opacity-60">Siga Nosso Instagram</span>
                  <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline flex items-center gap-1">
                    @{contactInfo.instagramHandle} <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Reception Bar (Mobile Friendly) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="md:hidden"
          >
            <a 
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" /> Falar com a Recepção (WhatsApp)
            </a>
          </motion.div>
        </div>

      </main>

      {/* Persistent Tiny Mobile Footer */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 py-3 bg-white/90 dark:bg-[#1A1A17]/90 backdrop-blur border-t border-[#A68A56]/10 text-center text-[10px] opacity-50 z-10 uppercase tracking-widest">
        © {new Date().getFullYear()} Pousada Charme da Montanha
      </footer>
    </div>
  );
}
