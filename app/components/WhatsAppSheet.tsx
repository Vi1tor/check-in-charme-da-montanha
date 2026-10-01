'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowSquareOut, Check, Copy, X } from '@phosphor-icons/react';
import { contactInfo, POUSADA_NAME, whatsappTopics, type WhatsAppTopicId } from '../guide-data';
import { WhatsAppIcon } from './icons';
import { useCopy } from './use-copy';

export function WhatsAppSheet({ initialTopic, onClose }: { initialTopic: WhatsAppTopicId; onClose: () => void }) {
  const [topicId, setTopicId] = useState<WhatsAppTopicId>(initialTopic);
  const [chale, setChale] = useState<string>('');
  const [copiedKey, copy] = useCopy();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    // Lock page scroll while the sheet is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const topic = whatsappTopics.find((item) => item.id === topicId) || whatsappTopics[whatsappTopics.length - 1];
  const message = `${topic.message}${chale.trim() ? ` — Chalé: ${chale.trim()}.` : '.'}`;
  const whatsappLink = `https://wa.me/${contactInfo.whatsappPhone}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/55 backdrop-blur-xs p-0 sm:p-4"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Atendimento ao hóspede via WhatsApp"
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        exit={{ y: 24 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md max-h-[92dvh] overflow-y-auto overscroll-contain rounded-t-3xl sm:rounded-2xl bg-[#F7F4EE] border-t sm:border border-[#D8CFBE] px-5 pt-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:p-6 shadow-2xl text-[#1C1917]"
      >
        <div className="w-10 h-1.5 bg-[#D8CFBE] rounded-full mx-auto mb-4 sm:hidden" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[#6E472B] font-medium">Atendimento ao Hóspede · {POUSADA_NAME}</p>
            <h3 className="text-2xl font-semibold text-[#1E2F23] mt-0.5">Como podemos ajudar?</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar atendimento WhatsApp"
            className="min-h-[44px] min-w-[44px] -mr-2 -mt-2 flex items-center justify-center rounded-xl text-[#57534E] hover:text-[#1C1917] hover:bg-[#EFECE4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4">
          <label htmlFor="chale-input" className="block text-xs font-medium text-[#57534E] mb-1.5">
            Número ou nome do seu Chalé (opcional)
          </label>
          <input
            id="chale-input"
            type="text"
            value={chale}
            onChange={(e) => setChale(e.target.value)}
            placeholder="Ex.: Chalé 03"
            className="w-full min-h-[44px] rounded-xl border border-[#D8CFBE] bg-white px-3.5 py-2 text-base sm:text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#1E2F23] focus:outline-none"
          />
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xs font-medium text-[#57534E]">Selecione o assunto para agilizar:</p>
          <div className="grid grid-cols-1 gap-2">
            {whatsappTopics.map((item) => {
              const isSelected = item.id === topicId;
              const TopicIcon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTopicId(item.id)}
                  aria-pressed={isSelected}
                  className={`w-full min-h-[52px] flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1E2F23] text-[#F7F4EE] border-[#1E2F23]'
                      : 'bg-white text-[#1C1917] border-[#E5DEC9] hover:border-[#C5A059]'
                  }`}
                >
                  <TopicIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#C5A059]' : 'text-[#6E472B]'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium truncate">{item.label}</div>
                    <div className={`text-xs truncate ${isSelected ? 'text-[#D8CFBE]' : 'text-[#78716C]'}`}>
                      {item.detail}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#EFECE4] p-3 border border-[#E5DEC9]">
          <p className="text-xs text-[#57534E] leading-relaxed">“{message}”</p>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-h-[48px] flex items-center justify-center gap-2 rounded-xl bg-[#1E5E3A] hover:bg-[#17492D] px-4 py-3 text-sm font-semibold text-[#F7F4EE] transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Abrir no WhatsApp</span>
            <ArrowSquareOut className="w-3.5 h-3.5 opacity-80" />
          </a>
          <button
            type="button"
            onClick={() => copy(message, 'message')}
            className="min-h-[48px] flex items-center justify-center gap-2 rounded-xl border border-[#D8CFBE] bg-white hover:bg-[#EFECE4] px-4 py-3 text-xs font-medium text-[#1C1917] transition-colors whitespace-nowrap cursor-pointer"
          >
            {copiedKey === 'message' ? (
              <>
                <Check className="w-4 h-4 text-[#1E5E3A]" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#6E472B]" />
                <span>Copiar Texto</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
