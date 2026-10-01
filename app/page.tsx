'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { House, SquaresFour } from '@phosphor-icons/react';
import { POUSADA_NAME, type CategoryId, type WhatsAppTopicId } from './guide-data';
import { CategoryDetail } from './components/CategoryDetail';
import { Dashboard } from './components/Dashboard';
import { Hero } from './components/Hero';
import { MountainLogo, WhatsAppIcon } from './components/icons';
import { useWeather } from './components/Weather';
import { WhatsAppSheet } from './components/WhatsAppSheet';

type View = 'hero' | 'menu' | CategoryId;

const headerLinks: { label: string; view: View }[] = [
  { label: 'Tela Inicial', view: 'hero' },
  { label: 'Menu Principal', view: 'menu' },
  { label: 'Wi-Fi', view: 'wifi' },
  { label: 'Onde Comer', view: 'comer' },
  { label: 'Como Chegar', view: 'chegar' },
];

export default function Page() {
  const [view, setView] = useState<View>('hero');
  const [whatsAppTopic, setWhatsAppTopic] = useState<WhatsAppTopicId | null>(null);
  const weather = useWeather();

  // Keep the browser/phone back button in sync with the in-app screens.
  // The first history entry is left untouched (it belongs to the Next.js router), so no `view` means hero.
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      setView(e.state?.view ?? 'hero');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (nextView: View) => {
    if (nextView === view) return;
    window.history.pushState({ view: nextView }, '');
    setView(nextView);
    window.scrollTo(0, 0);
  };

  const closeWhatsApp = useCallback(() => setWhatsAppTopic(null), []);

  return (
    <div className="min-h-dvh flex flex-col overflow-x-clip bg-[#F7F4EE] text-[#1C1917] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      {view !== 'hero' && (
        <header className="sticky top-0 z-30 box-content h-14 pt-[env(safe-area-inset-top)] bg-[#F7F4EE]/92 backdrop-blur-md border-b border-[#E5DEC9] px-4 sm:px-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate('hero')}
            className="min-w-0 flex items-center gap-2 font-display text-lg sm:text-2xl font-semibold tracking-tight text-[#1E2F23] hover:text-[#6E472B] transition-colors cursor-pointer text-left"
          >
            <MountainLogo className="w-9 h-6 sm:w-11 sm:h-7 text-[#6E472B] shrink-0" />
            <span className="truncate">{POUSADA_NAME}</span>
          </button>
          <nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-[#57534E]">
            {headerLinks.map((link) => (
              <button
                key={link.view}
                type="button"
                onClick={() => navigate(link.view)}
                className={`hover:text-[#1E2F23] hover:underline underline-offset-4 transition-colors whitespace-nowrap cursor-pointer ${
                  view === link.view ? 'text-[#1E2F23] font-semibold underline' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            {view === 'menu' ? (
              <button
                type="button"
                onClick={() => navigate('hero')}
                aria-label="Voltar para a Tela Inicial"
                className="min-h-[44px] flex items-center gap-1.5 rounded-lg bg-[#EFECE4] hover:bg-[#E5DEC9] px-3 py-2 text-xs font-semibold text-[#1E2F23] transition-colors whitespace-nowrap cursor-pointer"
              >
                <House className="w-4 h-4 text-[#6E472B]" />
                <span>Início</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate('menu')}
                aria-label="Voltar ao Menu Principal"
                className="min-h-[44px] flex items-center gap-1.5 rounded-lg bg-[#EFECE4] hover:bg-[#E5DEC9] px-3 py-2 text-xs font-semibold text-[#1E2F23] transition-colors whitespace-nowrap cursor-pointer"
              >
                <SquaresFour className="w-4 h-4 text-[#6E472B]" />
                <span className="sm:hidden">Menu</span>
                <span className="hidden sm:inline">Menu Principal</span>
              </button>
            )}
          </div>
        </header>
      )}

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {view === 'hero' ? (
            <Hero key="hero" weather={weather} onEnter={() => navigate('menu')} />
          ) : view === 'menu' ? (
            <Dashboard
              key="menu"
              weather={weather}
              onSelectCategory={navigate}
              onOpenWhatsApp={() => setWhatsAppTopic('recepcao')}
            />
          ) : (
            <CategoryDetail
              key={view}
              categoryId={view}
              onBackToMenu={() => navigate('menu')}
              onSelectCategory={navigate}
              onOpenWhatsApp={setWhatsAppTopic}
            />
          )}
        </AnimatePresence>
      </main>

      {view !== 'hero' && (
        <footer className="border-t border-[#E5DEC9] bg-[#EFECE4]/60 pt-6 pb-[calc(6rem+env(safe-area-inset-bottom))] sm:pb-6 px-4 sm:px-8 text-center text-xs text-[#78716C]">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="font-display text-base font-semibold text-[#1E2F23]">
              Pousada {POUSADA_NAME} · Monte Verde, MG
            </span>
            <span>© {new Date().getFullYear()} Pousada {POUSADA_NAME}</span>
          </div>
        </footer>
      )}

      {/* Persistent Reception CTA — always reachable from any screen/scroll position */}
      <div className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-40">
        <button
          type="button"
          onClick={() => setWhatsAppTopic('recepcao')}
          aria-label="Contato rápido com a recepção via WhatsApp"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white shadow-lg transition-transform duration-150 active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </button>
      </div>

      <AnimatePresence>
        {whatsAppTopic && <WhatsAppSheet key="whatsapp" initialTopic={whatsAppTopic} onClose={closeWhatsApp} />}
      </AnimatePresence>
    </div>
  );
}
