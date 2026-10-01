'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CaretRight } from '@phosphor-icons/react';
import { POUSADA_NAME } from '../guide-data';
import { WeatherChip, type WeatherData } from './Weather';
import bgImage1 from '../assets/WhatsApp Image 2026-07-15 at 16.22.51.jpeg';
import bgImage2 from '../assets/WhatsApp Image 2026-07-15 at 16.22.51 (1).jpeg';
import bgImage3 from '../assets/WhatsApp Image 2026-07-15 at 16.22.51 (2).jpeg';
import bgImage4 from '../assets/WhatsApp Image 2026-07-15 at 16.22.51 (3).jpeg';
import bgImage5 from '../assets/WhatsApp Image 2026-07-15 at 16.22.52.jpeg';
import bgImage6 from '../assets/WhatsApp Image 2026-07-15 at 16.22.52 (1).jpeg';

const heroSlides = [
  { src: bgImage1, alt: 'Fachada da pousada sob céu azul', caption: 'Um refúgio em Monte Verde' },
  { src: bgImage2, alt: 'Entrada da pousada com chalés e mata ao fundo', caption: 'Chalés cercados pela mata da serra' },
  { src: bgImage3, alt: 'Piscina e área de lazer coberta da pousada', caption: 'Piscina e área de lazer' },
  { src: bgImage4, alt: 'Jardim gramado entre os chalés da pousada', caption: 'Jardins entre os chalés' },
  { src: bgImage5, alt: 'Chalé de tijolinho com sacada e pinheiros', caption: 'Aconchego em cada chalé' },
  { src: bgImage6, alt: 'Pôr do sol refletido na piscina da pousada', caption: 'Pôr do sol na serra' },
];

export function Hero({ weather, onEnter }: { weather: WeatherData | null; onEnter: () => void }) {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-dvh w-full flex flex-col justify-between overflow-hidden bg-[#141E17] text-[#F7F4EE]"
    >
      <div
        role="region"
        aria-label={`Conheça a Pousada ${POUSADA_NAME}`}
        className="relative isolate flex flex-1 flex-col overflow-hidden"
      >
        {/* Background carousel */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.src.src}
              aria-hidden={idx !== slideIndex}
              className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
                idx === slideIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1712]/90 via-[#141E17]/55 to-[#141E17]/30" />
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-5 sm:px-8 pt-[calc(1.25rem+env(safe-area-inset-top))] sm:pt-[calc(1.5rem+env(safe-area-inset-top))]">
          <div className="flex flex-wrap items-center gap-x-2 text-xs font-medium text-[#E5DEC9]/90 tracking-wide">
            <span>Monte Verde, MG</span>
            <span aria-hidden="true">·</span>
            <span>Serra da Mantiqueira</span>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl w-full mx-auto px-5 sm:px-8 my-auto py-10 sm:py-12 text-center">
          <div className="mb-6 flex justify-center">
            <WeatherChip weather={weather} />
          </div>
          <p className="text-xs sm:text-sm font-medium tracking-widest text-[#E6C786] uppercase">Guia do Hóspede</p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-[#F7F4EE] mt-3 tracking-tight leading-[1.08]">
            Pousada {POUSADA_NAME}
          </h1>
          <div className="w-16 h-[1px] bg-[#C5A059]/70 mx-auto my-6" />
          <p className="text-[15px] sm:text-lg text-[#EFECE4]/95 max-w-xl mx-auto leading-relaxed font-normal">
            Sejam muito bem-vindos! Preparamos nosso chalé com o maior carinho para sua estada. Neste guia digital estão
            todas as informações para aproveitar a pousada e Monte Verde.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onEnter}
              className="min-h-[52px] w-full sm:w-auto max-w-xs inline-flex items-center justify-center gap-2.5 rounded-xl bg-transparent hover:bg-[#F7F4EE]/10 border border-[#F7F4EE]/70 hover:border-[#F7F4EE] text-[#F7F4EE] px-8 py-3.5 text-sm sm:text-base font-semibold tracking-wide transition-colors duration-150 active:scale-98 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E6C786]"
            >
              <span>Ver Informações</span>
              <CaretRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="relative z-10 mx-auto mb-6 px-4 text-center text-xs text-[#EFECE4]">
          {heroSlides[slideIndex].caption}
        </p>
      </div>

      {/* Quick stats bar */}
      <div className="relative z-10 border-t border-[#F7F4EE]/15 bg-[#0F1712]/70 backdrop-blur-md">
        <div className="max-w-5xl mx-auto pl-5 pr-20 sm:pl-8 sm:pr-24 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] flex flex-wrap items-center justify-start sm:justify-between gap-x-6 gap-y-2 text-xs text-[#D8CFBE]">
          <div className="flex items-center gap-2">
            <span className="text-[#E6C786] font-medium">Check-in:</span>
            <span className="font-mono tabular-nums">15:00</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#E6C786] font-medium">Check-out:</span>
            <span className="font-mono tabular-nums">até 12:00</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E6C786] font-medium">Café da manhã:</span>
            <span className="font-mono tabular-nums">08:30 às 10:30</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[#E6C786] font-medium">Arrumação:</span>
            <span>Solicitar na recepção até 13:00</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
