import './index.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: "Início",
  description: "Insert - Rede Social",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // opcional (para uso com CSS)
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-full flex flex-col bg-neutral-900">{children}</body>
    </html>
  );
}
