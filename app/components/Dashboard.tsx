'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowSquareOut,
  CaretRight,
  ChatsCircle,
  Check,
  Copy,
  InstagramLogo,
  MagnifyingGlass,
  MapPin,
  NavigationArrow,
  Phone,
  WifiHigh,
  X,
} from '@phosphor-icons/react';
import {
  categories,
  contactInfo,
  groups,
  routeLinks,
  WIFI_PASSWORD,
  type Category,
  type CategoryId,
} from '../guide-data';
import { WhatsAppIcon } from './icons';
import { useCopy } from './use-copy';
import { WeatherCard, type WeatherData } from './Weather';

// Lowercase + strip accents so "cafe" matches "Café"
const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

const matchesSearch = (category: Category, query: string) =>
  [category.title, category.subtitle, category.quickHighlight, ...category.keywords].some((text) =>
    normalize(text).includes(query)
  );

export function Dashboard({
  weather,
  onSelectCategory,
  onOpenWhatsApp,
}: {
  weather: WeatherData | null;
  onSelectCategory: (id: CategoryId) => void;
  onOpenWhatsApp: () => void;
}) {
  const [search, setSearch] = useState<string>('');
  const [copiedKey, copy] = useCopy();

  const query = normalize(search.trim());
  const filteredCategories = query ? categories.filter((category) => matchesSearch(category, query)) : categories;

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-5xl mx-auto px-4 sm:px-8 pt-5 sm:pt-8 pb-28"
    >
      {/* Welcome card */}
      <div className="rounded-2xl bg-[#1E2F23] text-[#F7F4EE] p-5 sm:p-8 border border-[#2E4635]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs text-[#E6C786] font-medium">
              <span>Guia de Boas-Vindas</span>
              <span aria-hidden="true">·</span>
              <span>Monte Verde, MG</span>
            </div>
            <h1 className="font-display text-[28px] leading-tight sm:text-4xl font-semibold mt-1 text-[#F7F4EE]">
              Manual do Hóspede
            </h1>
            <p className="mt-2 text-sm sm:text-base text-[#D8CFBE] leading-relaxed">
              Preparamos nosso chalé com o maior carinho para sua estada. Toque em qualquer categoria abaixo para
              consultar horários, senhas e regras.
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="w-full md:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A059] hover:bg-[#D4B26A] text-[#141E17] px-4 py-2.5 text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Falar com a Recepção</span>
            </button>
          </div>
        </div>
        <dl className="mt-5 sm:mt-6 pt-5 border-t border-[#F7F4EE]/15 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 text-xs text-[#EFECE4]">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-1">
            <dt className="text-[#E6C786]">Check-in:</dt>
            <dd className="font-mono tabular-nums font-medium">15:00</dd>
          </div>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-1">
            <dt className="text-[#E6C786]">Check-out:</dt>
            <dd className="font-mono tabular-nums font-medium">Até 12:00</dd>
          </div>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-1">
            <dt className="text-[#E6C786]">Café da manhã:</dt>
            <dd className="font-mono tabular-nums font-medium">08:30 – 10:30</dd>
          </div>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-1">
            <dt className="text-[#E6C786]">Arrumação:</dt>
            <dd className="font-mono tabular-nums font-medium">Solicitar até 13:00</dd>
          </div>
        </dl>
      </div>

      {weather && (
        <div className="mt-6">
          <WeatherCard weather={weather} />
        </div>
      )}

      {/* Search */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1">
          <MagnifyingGlass className="w-4 h-4 text-[#78716C] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar: Wi-Fi, café, lenha…"
            aria-label="Buscar informações no guia do hóspede"
            className="w-full min-h-[48px] pl-11 pr-12 py-2.5 rounded-xl bg-white border border-[#D8CFBE] text-base sm:text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#1E2F23] focus:outline-none transition-colors"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Limpar busca"
              className="min-h-[40px] min-w-[40px] absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#78716C] hover:text-[#1C1917] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      {filteredCategories.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-white border border-[#E5DEC9] p-8 text-center">
          <p className="text-base font-medium text-[#1E2F23]">Nenhuma categoria encontrada para “{search}”.</p>
          <p className="text-xs text-[#78716C] mt-1">
            Tente buscar por termos como Wi-Fi, café, lareira, check-out ou restaurantes.
          </p>
          <button
            type="button"
            onClick={() => setSearch('')}
            className="mt-4 min-h-[44px] px-4 py-2 rounded-xl bg-[#EFECE4] text-xs font-semibold text-[#1E2F23] hover:bg-[#E5DEC9] transition-colors cursor-pointer"
          >
            Mostrar todas as categorias
          </button>
        </div>
      ) : (
        groups.map((group) => {
          const groupCategories = filteredCategories.filter((category) => category.group === group.id);
          if (groupCategories.length === 0) return null;

          return (
            <div key={group.id} className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[22px] sm:text-2xl font-semibold text-[#1E2F23]">{group.title}</h2>
                <span className="text-xs text-[#78716C] font-mono tabular-nums">
                  {groupCategories.length} {groupCategories.length === 1 ? 'item' : 'itens'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {groupCategories.map((category) => {
                  const CategoryIcon = category.icon;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => onSelectCategory(category.id)}
                      className="group text-left rounded-2xl bg-white border border-[#E5DEC9] hover:border-[#6E472B] p-4 sm:p-5 transition-all duration-150 hover:-translate-y-0.5 flex flex-col justify-between sm:min-h-[156px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E2F23]"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="w-11 h-11 rounded-xl bg-[#F7F4EE] border border-[#E5DEC9] group-hover:bg-[#1E2F23] group-hover:border-[#1E2F23] flex items-center justify-center transition-colors">
                            <CategoryIcon className="w-6 h-6 text-[#6E472B] group-hover:text-[#C5A059] transition-colors" />
                          </div>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-[#78716C]">
                            <span>{category.number}</span>
                            <CaretRight className="w-4 h-4 text-[#A8A29E] group-hover:text-[#6E472B] group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-[#1E2F23] mt-3 sm:mt-4 group-hover:text-[#6E472B] transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-[#57534E] mt-1 leading-relaxed">{category.subtitle}</p>
                      </div>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-[#F7F4EE] flex items-center justify-between text-xs text-[#6E472B] font-medium">
                        <span className="truncate">{category.quickHighlight}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })
      )}

      {/* Quick Wi-Fi access */}
      <div className="mt-8 rounded-2xl bg-[#EFECE4] border border-[#D8CFBE] p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E2F23] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
              <WifiHigh className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1E2F23]">Acesso Rápido ao Wi-Fi</h3>
              <p className="text-xs text-[#57534E]">Toque para copiar a senha diretamente sem sair do menu:</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => copy(WIFI_PASSWORD, 'wifi')}
            className="min-h-[48px] lg:min-w-[280px] flex items-center justify-between gap-3 rounded-xl bg-white hover:bg-[#F7F4EE] border border-[#D8CFBE] px-4 py-2.5 text-left transition-colors cursor-pointer"
          >
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#1E2F23] truncate">Wi-Fi da Pousada</div>
              <div className="font-mono text-xs text-[#6E472B]">Senha: {WIFI_PASSWORD}</div>
            </div>
            <div className="shrink-0 flex items-center gap-1 text-xs font-medium text-[#1E2F23]">
              {copiedKey === 'wifi' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#1E5E3A]" />
                  <span>Copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#6E472B]" />
                  <span>Copiar</span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Direct contact channels */}
      <div className="mt-4 rounded-2xl bg-[#EFECE4] border border-[#D8CFBE] p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1E2F23] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <ChatsCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1E2F23]">Canais de Comunicação Direta</h3>
            <p className="text-xs text-[#57534E]">Dúvidas sobre o chalé ou Monte Verde? Fale conosco instantaneamente.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="min-h-[48px] flex items-center gap-3 rounded-xl bg-white hover:bg-[#F7F4EE] border border-[#D8CFBE] px-4 py-2.5 text-left transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#1E5E3A] shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#1E2F23] truncate">Recepção (WhatsApp)</div>
              <div className="font-mono text-xs text-[#6E472B] tabular-nums">{contactInfo.whatsappNumber}</div>
            </div>
          </button>
          <a
            href={`tel:${contactInfo.emergencyTel}`}
            className="min-h-[48px] flex items-center gap-3 rounded-xl bg-white hover:bg-[#F7F4EE] border border-[#D8CFBE] px-4 py-2.5 text-left transition-colors"
          >
            <Phone className="w-4 h-4 text-[#6E472B] shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#1E2F23] truncate">Emergências (Apenas Ligações)</div>
              <div className="font-mono text-xs text-[#6E472B] tabular-nums">{contactInfo.emergencyPhone}</div>
            </div>
          </a>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] flex items-center justify-between gap-3 rounded-xl bg-white hover:bg-[#F7F4EE] border border-[#D8CFBE] px-4 py-2.5 text-left transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <InstagramLogo className="w-4 h-4 text-[#6E472B] shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-semibold text-[#1E2F23] truncate">Siga Nosso Instagram</div>
                <div className="font-mono text-xs text-[#6E472B] truncate">@{contactInfo.instagramHandle}</div>
              </div>
            </div>
            <ArrowSquareOut className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
          </a>
        </div>
      </div>

      {/* How to get there */}
      <div className="mt-4 rounded-2xl bg-[#EFECE4] border border-[#D8CFBE] overflow-hidden">
        <div className="p-5 sm:p-6 flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1E2F23] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1E2F23]">Como Chegar</h3>
            <p className="text-xs text-[#57534E]">Avenida Monte Verde, 381 · Monte Verde, Camanducaia - MG</p>
          </div>
        </div>
        <div className="aspect-[4/3] sm:aspect-[21/9] w-full bg-[#E5DEC9] border-y border-[#D8CFBE]">
          <iframe
            src={contactInfo.mapEmbedUrl}
            title="Mapa da Pousada Charme da Montanha"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          />
        </div>
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={routeLinks.waze}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-white hover:bg-[#F7F4EE] border border-[#D8CFBE] px-4 py-2.5 text-sm font-semibold text-[#1E2F23] transition-colors text-center"
          >
            <NavigationArrow weight="fill" className="w-5 h-5 text-[#33CCFF]" />
            <span>Ir com o Waze</span>
          </a>
          <a
            href={routeLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-white hover:bg-[#F7F4EE] border border-[#D8CFBE] px-4 py-2.5 text-sm font-semibold text-[#1E2F23] transition-colors text-center"
          >
            <MapPin weight="fill" className="w-5 h-5 text-[#4285F4]" />
            <span>Ir com o Google Maps</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
