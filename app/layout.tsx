import type {Metadata, Viewport} from 'next';
import localFont from 'next/font/local';
import './globals.css';

// Fonts are self-hosted (variable, latin subset) so the build never depends on fetching Google Fonts.
const jakarta = localFont({
  src: './fonts/PlusJakartaSans-Variable.woff2',
  weight: '200 800',
  display: 'swap',
  variable: '--font-jakarta',
});

const cormorant = localFont({
  src: './fonts/CormorantGaramond-Variable.woff2',
  weight: '300 700',
  display: 'swap',
  variable: '--font-cormorant',
});

const jetbrains = localFont({
  src: './fonts/JetBrainsMono-Variable.woff2',
  weight: '100 800',
  display: 'swap',
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
