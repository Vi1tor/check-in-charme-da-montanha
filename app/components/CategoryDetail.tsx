'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  Check,
  Copy,
  Info,
  InstagramLogo,
  MapPin,
  NavigationArrow,
  Plug,
  Scales,
  SignIn,
  SignOut,
  Warning,
  type Icon,
} from '@phosphor-icons/react';
import {
  activityRecommendations,
  categories,
  contactInfo,
  POUSADA_NAME,
  restaurantRecommendations,
  routeLinks,
  WIFI_PASSWORD,
  type CategoryId,
  type Recommendation,
  type WhatsAppTopicId,
} from '../guide-data';
import { WhatsAppIcon } from './icons';
import { useCopy } from './use-copy';
import leisureImage from '../assets/WhatsApp Image 2026-07-15 at 16.22.51 (2).jpeg';

// --- Building blocks ---

const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-2xl bg-white border border-[#E5DEC9] p-5 sm:p-8 ${className}`}>{children}</div>
);

const CardIntro = ({ icon: IntroIcon, title, children }: { icon: Icon; title: string; children?: ReactNode }) => (
  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-3.5">
    <div className="w-11 h-11 rounded-xl bg-[#EFECE4] flex items-center justify-center shrink-0">
      <IntroIcon className="w-5 h-5 text-[#6E472B]" />
    </div>
    <div>
      <h2 className="text-2xl font-semibold text-[#1E2F23]">{title}</h2>
      {children && <p className="mt-2 text-sm sm:text-base text-[#44403C] leading-relaxed">{children}</p>}
    </div>
  </div>
);

const StatBox = ({
  label,
  value,
  note,
  icon: StatIcon,
}: {
  label: string;
  value: string;
  note?: ReactNode;
  icon?: Icon;
}) => (
  <div className="rounded-xl bg-[#F7F4EE] p-5 border border-[#E5DEC9]">
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-[#6E472B]">{label}</span>
      {StatIcon && <StatIcon className="w-4 h-4 text-[#6E472B]" />}
    </div>
    <div className="mt-2 text-2xl font-semibold text-[#1E2F23] font-mono tabular-nums">{value}</div>
    {note && <p className="mt-1 text-xs text-[#57534E]">{note}</p>}
  </div>
);

const Notice = ({ icon: NoticeIcon = Info, title, children }: { icon?: Icon; title?: string; children: ReactNode }) => (
  <div className="rounded-xl bg-[#F7F4EE] border border-[#C5A059]/60 p-5 sm:p-6">
    <div className="flex items-start gap-3">
      <NoticeIcon className="w-5 h-5 text-[#6E472B] shrink-0 mt-0.5" />
      <div className="space-y-2">
        {title && <p className="text-sm sm:text-base font-medium text-[#1C1917] leading-relaxed">{title}</p>}
        <p className="text-sm text-[#44403C] leading-relaxed">{children}</p>
      </div>
    </div>
  </div>
);

const Highlight = ({
  label,
  value,
  note,
  children,
}: {
  label: string;
  value: string;
  note?: ReactNode;
  children?: ReactNode;
}) => (
  <div className="rounded-xl bg-[#F7F4EE] border border-[#D8CFBE] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
      <div className="text-xs text-[#6E472B] font-medium">{label}</div>
      <div className="text-2xl font-semibold text-[#1E2F23] font-mono tabular-nums mt-1">{value}</div>
      {note && <div className="text-xs text-[#57534E] mt-1">{note}</div>}
    </div>
    {children}
  </div>
);

const WhatsAppButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E2F23] hover:bg-[#263B2C] px-4 py-2.5 text-xs font-semibold text-[#F7F4EE] transition-colors text-center shrink-0 cursor-pointer"
  >
    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
    <span>{label}</span>
  </button>
);

const RecommendationList = ({ items }: { items: Recommendation[] }) => (
  <div className="mt-6 divide-y divide-[#EFECE4] border-t border-b border-[#EFECE4]">
    {items.map((item) => (
      <div key={item.name} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="min-w-0 flex-1">
          <div className="text-base font-medium text-[#1C1917]">{item.name}</div>
          <p className="text-xs text-[#78716C] mt-0.5 leading-relaxed">{item.desc}</p>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] self-start sm:self-auto shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#F7F4EE] hover:bg-[#EFECE4] border border-[#D8CFBE] px-3.5 py-2 text-xs font-medium text-[#1E2F23] transition-colors"
          >
            <InstagramLogo className="w-4 h-4 text-[#6E472B]" />
            <span className="font-mono">{item.instagram}</span>
            <ArrowSquareOut className="w-3.5 h-3.5 opacity-70" />
          </a>
        )}
      </div>
    ))}
  </div>
);

const RuleList = ({ items }: { items: { title: string; text: string }[] }) => (
  <div className="mt-6 divide-y divide-[#EFECE4] border-t border-b border-[#EFECE4]">
    {items.map((item) => (
      <div key={item.title} className="py-3.5 px-2">
        <div className="text-sm font-medium text-[#1C1917]">{item.title}</div>
        <div className="text-xs text-[#78716C] mt-0.5 leading-relaxed">{item.text}</div>
      </div>
    ))}
  </div>
);

const directions = [
  {
    title: 'Passando pelo Portal de Entrada',
    text: <>Logo ao cruzar o icônico Portal de Entrada de Monte Verde, você avistará uma rotatória principal à frente.</>,
  },
  {
    title: 'Mantenha-se na Avenida Principal',
    text: (
      <>
        Basta contornar a rotatória e continuar reto, seguindo pela própria <strong>Avenida Monte Verde</strong>.
      </>
    ),
  },
  {
    title: 'Chegada em 200 metros',
    text: (
      <>
        Rode por cerca de <strong>200 metros</strong> adicionais após a rotatória. A Pousada Charme da Montanha estará
        localizada perfeitamente ao seu <strong>lado esquerdo</strong>.
      </>
    ),
  },
];

// Illustrated Custom Route Map SVG Diagram
const RouteMap = () => (
  <svg viewBox="0 0 500 240" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa ilustrativo do trajeto do Portal de Entrada até a pousada">
    {/* Roads and Paths */}
    <rect x="0" y="100" width="500" height="45" fill="#E5DEC9" />
    <line x1="0" y1="122" x2="500" y2="122" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />

    {/* Sidestreets */}
    <rect x="180" y="0" width="32" height="100" fill="#E5DEC9" />
    <rect x="350" y="145" width="32" height="100" fill="#E5DEC9" />

    {/* Gas Station */}
    <g transform="translate(240, 155)">
      <rect width="65" height="40" rx="4" fill="#EFECE4" stroke="#D8CFBE" strokeWidth="1" />
      <text x="32" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#57534E">POSTO</text>
    </g>

    {/* Portal */}
    <g transform="translate(430, 85)">
      <rect width="50" height="75" rx="5" fill="#C5A059" opacity="0.4" />
      <line x1="10" y1="0" x2="10" y2="75" stroke="#1E2F23" strokeWidth="3" />
      <line x1="40" y1="0" x2="40" y2="75" stroke="#1E2F23" strokeWidth="3" />
      <rect x="0" y="5" width="50" height="15" fill="#1E2F23" />
      <text x="25" y="15" textAnchor="middle" fontSize="7" fill="#F7F4EE" fontWeight="bold">PORTAL</text>
    </g>

    {/* Rotatória */}
    <g transform="translate(300, 122)">
      <circle r="24" fill="#A8A29E" stroke="#ffffff" strokeWidth="2" />
      <circle r="12" fill="#1E2F23" />
    </g>

    {/* Route Arrows */}
    <path d="M 430 112 L 340 112" stroke="#B93A2B" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
    <path d="M 324 105 A 18 18 0 0 0 285 110" stroke="#B93A2B" strokeWidth="2" fill="none" />
    <path d="M 282 112 L 150 112" stroke="#B93A2B" strokeWidth="2" fill="none" />

    {/* Marker arrow definition */}
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#B93A2B" />
      </marker>
    </defs>

    {/* Pousada Block */}
    <g transform="translate(70, 40)">
      <rect width="90" height="50" rx="8" fill="#1E2F23" stroke="#C5A059" strokeWidth="1.5" />
      <text x="45" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#F7F4EE">POUSADA</text>
      <text x="45" y="38" textAnchor="middle" fontSize="7" fill="#E6C786">Charme da Montanha</text>
    </g>

    {/* Markers & Labels */}
    <circle cx="115" cy="112" r="5" fill="#B93A2B" />
    <text x="115" y="160" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#44403C">Chegada à Esquerda</text>

    {/* Text details */}
    <text x="300" y="88" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#44403C">Rotatória Principal</text>
    <text x="455" y="175" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#57534E">Portal de Entrada</text>
    <text x="216" y="140" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#B93A2B">Av. Monte Verde</text>
  </svg>
);

// --- Detail view ---

export function CategoryDetail({
  categoryId,
  onBackToMenu,
  onSelectCategory,
  onOpenWhatsApp,
}: {
  categoryId: CategoryId;
  onBackToMenu: () => void;
  onSelectCategory: (id: CategoryId) => void;
  onOpenWhatsApp: (topic: WhatsAppTopicId) => void;
}) {
  const [copiedKey, copy] = useCopy();

  const categoryIndex = categories.findIndex((category) => category.id === categoryId);
  const category = categories[categoryIndex] || categories[0];
  const nextCategory = categories[(categoryIndex + 1) % categories.length];
  const CategoryIcon = category.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-24">
        <div className="flex items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#E5DEC9]">
          <button
            type="button"
            onClick={onBackToMenu}
            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-white border border-[#D8CFBE] px-4 py-2.5 text-sm font-medium text-[#1E2F23] hover:bg-[#EFECE4] hover:border-[#C5A059] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#6E472B]" />
            <span>Voltar ao Menu Principal</span>
          </button>
          <div className="text-xs text-[#78716C] font-mono tabular-nums hidden sm:block">
            Seção {category.number} / {String(categories.length).padStart(2, '0')}
          </div>
        </div>

        <div className="mt-5 sm:mt-6">
          <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#6E472B] font-medium">
            <span className="font-mono">{category.number}.</span>
            <span>·</span>
            <span>{POUSADA_NAME}</span>
            <span>·</span>
            <span>Guia do Hóspede</span>
          </div>
          <h1 className="text-[28px] leading-tight sm:text-4xl font-semibold text-[#1E2F23] mt-1 tracking-tight">
            {category.title}
          </h1>
          <p className="text-[15px] sm:text-base text-[#57534E] mt-1.5 leading-relaxed">{category.subtitle}</p>
        </div>

        <div className="mt-6 sm:mt-8 space-y-6">
          {/* WI-FI & CONEXÃO */}
          {categoryId === 'wifi' && (
            <Card className="space-y-6">
              <CardIntro icon={CategoryIcon} title="Conexão de Alta Velocidade">
                Aproveite nossa conexão de alta velocidade sem custo adicional. Toque em <strong>Copiar senha</strong>{' '}
                para conectar seu celular ou notebook rapidamente.
              </CardIntro>
              <div className="rounded-xl bg-[#F7F4EE] border border-[#D8CFBE] p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-0.5 text-xs text-[#6E472B] font-medium">
                  <span className="font-mono">Rede da Pousada</span>
                  <span aria-hidden="true" className="hidden sm:inline">·</span>
                  <span>Sem custo adicional</span>
                </div>
                <dl className="mt-3 rounded-lg bg-white border border-[#E5DEC9] p-3.5">
                  <div className="min-w-0">
                    <dt className="text-[11px] text-[#78716C]">Senha do Wi-Fi</dt>
                    <dd className="font-mono text-[15px] sm:text-base font-semibold text-[#1E2F23] break-all mt-0.5">
                      {WIFI_PASSWORD}
                    </dd>
                  </div>
                </dl>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => copy(WIFI_PASSWORD, 'wifi')}
                    className="w-full min-h-[44px] px-3 py-2 rounded-lg text-xs font-semibold bg-[#1E2F23] hover:bg-[#263B2C] text-[#F7F4EE] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedKey === 'wifi' ? (
                      <>
                        <Check className="w-4 h-4 text-[#C5A059]" />
                        <span>Copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#C5A059]" />
                        <span>Copiar senha</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-3 text-xs text-[#57534E]">Conectividade rápida em todo o chalé.</p>
              </div>
            </Card>
          )}

          {/* CAFÉ DA MANHÃ */}
          {categoryId === 'cafe' && (
            <Card>
              <div className="flex items-center gap-2 text-xs text-[#6E472B] font-medium">
                <CategoryIcon className="w-4 h-4" />
                <span>Salão Principal</span>
                <span>·</span>
                <span>Servido diariamente</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E2F23] mt-2">
                Uma seleção artesanal de quitutes
              </h2>
              <div className="mt-5">
                <Highlight
                  label="Horário de Atendimento"
                  value="08:30 às 10:30"
                  note={
                    <>
                      Servido diariamente em nosso <strong>salão principal</strong>.
                    </>
                  }
                >
                  <div className="text-xs text-[#57534E] sm:text-right max-w-xs">
                    Pães caseiros, bolos fresquinhos e delícias regionais de Monte Verde.
                  </div>
                </Highlight>
              </div>
            </Card>
          )}

          {/* HORÁRIO DA RECEPÇÃO */}
          {categoryId === 'recepcao' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Suporte e Auxílio Presencial">
                Nossa equipe está à disposição para tornar sua estada memorável nos seguintes períodos:
              </CardIntro>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EFECE4]">
                <StatBox label="Dom a Qui" value="08:30 às 22:00" />
                <StatBox label="Sex e Sáb" value="08:30 às 23:00" />
              </div>
              <div className="mt-6 pt-6 border-t border-[#EFECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#57534E] leading-relaxed">
                  Dúvidas sobre o chalé ou Monte Verde? Fale conosco instantaneamente.
                </div>
                <WhatsAppButton label="Falar com a Recepção" onClick={() => onOpenWhatsApp('recepcao')} />
              </div>
            </Card>
          )}

          {/* ÁREAS SOCIAIS */}
          {categoryId === 'areas-sociais' && (
            <div className="rounded-2xl bg-white border border-[#E5DEC9] overflow-hidden">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#1E2F23]">
                <Image
                  src={leisureImage}
                  alt="Piscina e área de lazer coberta da pousada"
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-[#6E472B] font-medium">
                  <CategoryIcon className="w-4 h-4" />
                  <span>Jardins</span>
                  <span>·</span>
                  <span>Deck</span>
                  <span>·</span>
                  <span>Áreas de lazer</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E2F23] mt-2">Convivência e Lazer</h2>
                <p className="mt-2 text-sm sm:text-base text-[#44403C] leading-relaxed">
                  Nossos jardins, deck e áreas de lazer estão disponíveis para uso e relaxamento.
                </p>
                <div className="mt-6 space-y-4">
                  <Highlight label="Horário de uso" value="09:00 às 22:00" />
                  <Notice icon={Warning}>
                    Após as 22h, é fundamental manter o silêncio para preservar o descanso e a tranquilidade de todos
                    os hóspedes.
                  </Notice>
                </div>
              </div>
            </div>
          )}

          {/* LAREIRA & LENHA */}
          {categoryId === 'lareira' && (
            <Card>
              <div className="flex items-center gap-2 text-xs text-[#6E472B] font-medium">
                <CategoryIcon className="w-4 h-4" />
                <span>Noites Serranas</span>
                <span>·</span>
                <span>Aquecimento no Chalé</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E2F23] mt-2">Lareira & Lenha</h2>
              <p className="mt-2 text-sm sm:text-base text-[#44403C] leading-relaxed">
                Caso necessite de sacos de lenha adicionais ou queira solicitar auxílio para o acendimento, basta
                solicitar na recepção.
              </p>
              <div className="mt-6 rounded-xl bg-[#F7F4EE] border border-[#D8CFBE] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#6E472B] font-medium">Incluso na sua reserva</div>
                  <div className="text-2xl sm:text-3xl font-semibold text-[#1E2F23] font-mono tabular-nums mt-1">
                    1 saco de lenha
                  </div>
                  <div className="text-xs text-[#57534E] mt-1">Cortesia para aquecer suas noites serranas.</div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenWhatsApp('lenha')}
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#6E472B] hover:bg-[#583821] px-5 py-3 text-sm font-semibold text-[#F7F4EE] transition-colors text-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Pedir Lenha via WhatsApp</span>
                </button>
              </div>
            </Card>
          )}

          {/* HIDROMASSAGEM & ÁGUA QUENTE */}
          {categoryId === 'hidromassagem' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Instruções de Uso" />
              <div className="mt-8 space-y-4 pt-6 border-t border-[#EFECE4]">
                <StatBox
                  label="Água Quente"
                  value="Lado esquerdo"
                  note={
                    <>
                      O registro de água quente fica posicionado do <strong>lado esquerdo</strong>.
                    </>
                  }
                />
                <Notice title="Hidromassagem">
                  Por gentileza, <strong>esvazie toda a água da hidromassagem</strong> imediatamente após a utilização.
                </Notice>
              </div>
            </Card>
          )}

          {/* ELETRICIDADE (TOMADAS) */}
          {categoryId === 'tomadas' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Rede Elétrica">
                A rede elétrica padrão da pousada é de <strong>110V</strong>.
              </CardIntro>
              <div className="mt-8 space-y-4 pt-6 border-t border-[#EFECE4]">
                <StatBox label="Voltagem padrão" value="110V" icon={Plug} />
                <Notice>
                  Eventuais tomadas com voltagem especial de <strong>220V</strong> estarão explicitamente identificadas
                  com adesivo indicador de segurança.
                </Notice>
              </div>
            </Card>
          )}

          {/* ARRUMAÇÃO DE QUARTO */}
          {categoryId === 'arrumacao' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Limpeza e Arrumação">
                Para solicitar a limpeza e arrumação de seu chalé, pedimos a gentileza de comunicar nossa recepção.
              </CardIntro>
              <div className="mt-6">
                <Highlight label="Prazo limite para solicitação" value="Até às 13:00">
                  <WhatsAppButton label="Solicitar Arrumação" onClick={() => onOpenWhatsApp('arrumacao')} />
                </Highlight>
              </div>
            </Card>
          )}

          {/* CORTESIAS ESPECIAIS */}
          {categoryId === 'cortesias' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Mimos de Boas-Vindas">
                Para sua maior comodidade na chegada, disponibilizamos{' '}
                <strong>duas garrafas de águas minerais sem gás como cortesia</strong> em seu quarto.
              </CardIntro>
              <div className="mt-6">
                <Highlight label="Cortesia no quarto" value="2 águas minerais" note="Sem gás." />
              </div>
            </Card>
          )}

          {/* CHECK-IN & CHECK-OUT */}
          {categoryId === 'checkin-checkout' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Horários e Procedimentos" />
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EFECE4]">
                <StatBox label="Check-in" value="A partir das 15:00" icon={SignIn} />
                <StatBox label="Check-out" value="Até às 12:00" icon={SignOut} />
              </div>
              <div className="mt-6">
                <Notice icon={Warning} title="Check-out Automático">
                  Caso o horário limite de 12:00 seja ultrapassado sem comunicação prévia, o sistema cobrará
                  automaticamente uma taxa adicional de <strong>R$ 390,00</strong>.
                </Notice>
              </div>
              <div className="mt-6 pt-6 border-t border-[#EFECE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#57534E] leading-relaxed">
                  Late-checkout: consultar previamente a disponibilidade e valores correspondentes com a nossa
                  recepção.
                </div>
                <WhatsAppButton label="Consultar Late Check-out" onClick={() => onOpenWhatsApp('late-checkout')} />
              </div>
            </Card>
          )}

          {/* REGRAS DE CONVIVÊNCIA */}
          {categoryId === 'convivencia-geral' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Harmonia e Respeito na Serra" />
              <RuleList
                items={[
                  {
                    title: 'Lei do Silêncio',
                    text: 'Silêncio total estabelecido após as 22h e antes das 08h.',
                  },
                  {
                    title: 'Som e Aparelhos',
                    text: 'É expressamente proibido o uso de som alto nas áreas comuns da pousada.',
                  },
                  {
                    title: 'Acesso às cabines',
                    text: 'Permitido única e exclusivamente para hóspedes devidamente registrados em nosso sistema.',
                  },
                ]}
              />
            </Card>
          )}

          {/* PET FRIENDLY */}
          {categoryId === 'pet-friendly' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="A hospedagem para o seu pet é gratuita!">
                Pedimos apenas que preze pelo bom senso: mantenha seu animalzinho sempre próximo nas áreas sociais e
                comuns da pousada para garantir o conforto de todos.
              </CardIntro>
            </Card>
          )}

          {/* DANOS E AVARIAS */}
          {categoryId === 'danos-avarias' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Zelo pela Estrutura">
                Qualquer dano ou avaria intencional causado aos móveis, enxovais, utensílios ou estrutura da acomodação
                será devidamente avaliado e cobrado diretamente no momento do check-out.
              </CardIntro>
            </Card>
          )}

          {/* OBJETOS ESQUECIDOS */}
          {categoryId === 'objetos-esquecidos' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Devolução de Pertences">
                Caso tenha esquecido algum objeto em nossas instalações, entre em contato imediatamente conosco via
                WhatsApp para solicitar a postagem.
              </CardIntro>
              <div className="mt-6">
                <Highlight
                  label="Taxa fixa administrativa"
                  value="R$ 150,00 + frete"
                  note="Processamento e postagem de objetos esquecidos."
                >
                  <WhatsAppButton label="Solicitar Postagem" onClick={() => onOpenWhatsApp('objetos')} />
                </Highlight>
              </div>
            </Card>
          )}

          {/* POLÍTICA DE ESTORNO */}
          {categoryId === 'estorno-cancela' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Cancelamento e Reembolso" />
              <RuleList
                items={[
                  {
                    title: 'No-Show',
                    text: 'Em caso de não comparecimento sem aviso (No-Show), será cobrado o valor integral da reserva.',
                  },
                  {
                    title: 'Cancelamentos dentro do prazo',
                    text: 'Cancelamentos dentro do prazo recebem o estorno correspondente em até 7 dias úteis.',
                  },
                ]}
              />
              <div className="mt-6">
                <Notice icon={Scales}>
                  Conforme o Art. 49 do Código de Defesa do Consumidor (CDC), garante-se o direito de reembolso total
                  para cancelamentos realizados em até 7 dias após a confirmação da reserva. Após este prazo legal, não
                  haverá reembolso.
                </Notice>
              </div>
            </Card>
          )}

          {/* ONDE COMER (RESTAURANTES) */}
          {categoryId === 'comer' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Nossas Indicações Gastronômicas">
                Alguns dos locais que mais frequentamos na vila e temos a plena certeza de que entregam uma experiência
                gastronômica impecável:
              </CardIntro>
              <RecommendationList items={restaurantRecommendations} />
            </Card>
          )}

          {/* O QUE FAZER (ATIVIDADES) */}
          {categoryId === 'fazer' && (
            <Card>
              <CardIntro icon={CategoryIcon} title="Dicas & Experiências Locais">
                Curta intensamente o melhor que Monte Verde tem a oferecer. Abaixo, separamos os passeios, pontos
                turísticos e marcas recomendadas:
              </CardIntro>
              <RecommendationList items={activityRecommendations} />
            </Card>
          )}

          {/* COMO CHEGAR (MAPS & INSTRUÇÕES) */}
          {categoryId === 'chegar' && (
            <>
              <div className="rounded-2xl bg-white border border-[#E5DEC9] overflow-hidden">
                <div className="aspect-[4/3] sm:aspect-[16/9] w-full bg-[#EFECE4]">
                  <iframe
                    src={contactInfo.mapEmbedUrl}
                    title="Mapa da Pousada Charme da Montanha"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-5 sm:p-8">
                  <div className="flex items-center gap-2 text-xs text-[#6E472B] font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>Monte Verde · Camanducaia, MG</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E2F23] mt-2">
                    Como Chegar até a Pousada
                  </h2>
                  <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                    Estamos localizados na <strong>Avenida Monte Verde, 381</strong>. É extremamente fácil e
                    descomplicado de chegar. Endereço completo:{' '}
                    <span className="font-medium text-[#1E2F23]">{contactInfo.address}</span>
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={routeLinks.waze}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E2F23] hover:bg-[#263B2C] px-5 py-3 text-sm font-semibold text-[#F7F4EE] transition-colors text-center"
                    >
                      <NavigationArrow weight="fill" className="w-5 h-5 text-[#33CCFF]" />
                      <span>Ir com o Waze</span>
                      <ArrowSquareOut className="w-3.5 h-3.5 opacity-70" />
                    </a>
                    <a
                      href={routeLinks.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[52px] inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-[#EFECE4] border border-[#D8CFBE] px-5 py-3 text-sm font-semibold text-[#1E2F23] transition-colors text-center"
                    >
                      <MapPin weight="fill" className="w-5 h-5 text-[#4285F4]" />
                      <span>Ir com o Google Maps</span>
                      <ArrowSquareOut className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>

              <Card>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <NavigationArrow className="w-4 h-4 text-[#6E472B]" />
                    <h3 className="text-lg font-semibold text-[#1E2F23]">Passo a Passo a partir do Portal</h3>
                  </div>
                  <span className="text-xs font-mono tabular-nums text-[#78716C] shrink-0">
                    {directions.length} passos
                  </span>
                </div>
                <ol className="divide-y divide-[#EFECE4] border-t border-b border-[#EFECE4]">
                  {directions.map((step, idx) => (
                    <li key={step.title} className="py-3.5 px-2 flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-md bg-[#1E2F23] text-[#E6C786] font-mono text-xs font-semibold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-[#1C1917]">{step.title}</div>
                        <div className="text-xs text-[#78716C] mt-0.5 leading-relaxed">{step.text}</div>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-[#57534E] leading-relaxed">{contactInfo.addressDetails}</p>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-[#1E2F23]">Mapa do Trajeto Ilustrativo</h3>
                <div className="mt-4 rounded-xl bg-[#F7F4EE] border border-[#E5DEC9] p-2 overflow-hidden">
                  <RouteMap />
                </div>
              </Card>
            </>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackToMenu}
            className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E2F23] hover:bg-[#263B2C] px-5 py-3 text-sm font-semibold text-[#F7F4EE] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            <span>Voltar ao Menu Principal</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory(nextCategory.id)}
            className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-[#EFECE4] border border-[#D8CFBE] px-5 py-3 text-sm font-medium text-[#1C1917] transition-colors cursor-pointer"
          >
            <span>Próximo: {nextCategory.title}</span>
            <ArrowRight className="w-4 h-4 text-[#6E472B]" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
