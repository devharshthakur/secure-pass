import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/lib/providers';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: '300',
});

export const metadata: Metadata = {
  title: 'Secure Pass',
  description: 'A simple password manager application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
