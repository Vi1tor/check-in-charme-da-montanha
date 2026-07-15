import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Pousada Charme da Montanha - Guia do Hóspede',
  description: 'Guia digital completo com informações de check-in, regras, políticas, indicações e localização da Pousada Charme da Montanha em Monte Verde, MG.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body suppressHydrationWarning className="bg-[#f5f5f0] text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
