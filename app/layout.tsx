import type {Metadata, Viewport} from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Pousada Charme da Montanha - Guia do Hóspede',
  description: 'Guia digital completo com informações de check-in, regras, políticas, indicações e localização da Pousada Charme da Montanha em Monte Verde, MG.',
};

export const viewport: Viewport = {
  themeColor: '#1E2F23',
  viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body suppressHydrationWarning className="bg-[#F7F4EE] text-[#1C1917] antialiased selection:bg-[#1E2F23] selection:text-[#F7F4EE]">
        {children}
      </body>
    </html>
  );
}
