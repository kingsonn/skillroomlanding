import type { Metadata } from 'next'
import { Inter, Oxanium, Exo_2 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const oxanium = Oxanium({ 
  subsets: ['latin'],
  variable: '--font-oxanium',
});

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
});

export const metadata: Metadata = {
  title: 'UpLeveling - Level Up Your Career',
  description: 'Master new skills with AI-powered learning paths',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oxanium.variable} ${exo2.variable}`}>
      <body className={`font-exo2 ${inter.className} min-h-screen w-full m-0 p-0 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
