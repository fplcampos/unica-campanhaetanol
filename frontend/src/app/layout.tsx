import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';


const Prometo = localFont({
  src: [
    {
      path: '../../public/fonts/Prometo.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Prometo-Thin.ttf',
      weight: '100'
    },
    {
      path: '../../public/fonts/Prometo-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Prometo-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Prometo-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-prometo'
})

export const metadata: Metadata = {
  openGraph: {
    title: '#VAIDEETANOL',
    description: 'Limpeza para o motor, potência ao carro, e economia no bolso. Bom para você, o Brasil e o Planeta!',
    url: 'https://www.vaideetanol.com.br/',
    images: [
      {
        url: 'https://www.vaideetanol.com.br/images/vaideetanol.jpg',
        width: 1200,
        height: 630,
        alt: '#VAIDEETANOL',
      },
    ],
    locale: 'pt_BR',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>#VaideEtanol - UNICA</title>
      </head>
      <body className={`${Prometo.variable}`}>{children}</body>
    </html>
  )
}
