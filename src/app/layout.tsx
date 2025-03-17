import type { Metadata } from 'next'
import { Inter, Oxanium, Exo_2, Libre_Baskerville } from 'next/font/google'
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

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

export const metadata: Metadata = {
  title: 'UpLeveling - Level Up Your Career',
  description: 'Master new skills with AI-powered learning paths. Join UpLeveling to accelerate your career growth with personalized learning experiences.',
  keywords: ['career development', 'AI learning', 'skill development', 'online education', 'professional growth', 'mentorship', 'tech skills', 'upskilling'],
  authors: [{ name: 'UpLeveling' }],
  creator: 'UpLeveling',
  publisher: 'UpLeveling',
  metadataBase: new URL('https://upleveling.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UpLeveling - Level Up Your Career',
    description: 'Master new skills with AI-powered learning paths. Join UpLeveling to accelerate your career growth with personalized learning experiences.',
    url: 'https://upleveling.xyz',
    siteName: 'UpLeveling',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'UpLeveling Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UpLeveling - Level Up Your Career',
    description: 'Master new skills with AI-powered learning paths. Join UpLeveling to accelerate your career growth.',
    images: ['/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code', // Add your Google Search Console verification code
  // },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oxanium.variable} ${exo2.variable} ${libreBaskerville.variable}`}>
      <body className={`font-libre-baskerville ${inter.className} min-h-screen w-full m-0 p-0 overflow-x-hidden bg-blue-600`}>
        {children}
      </body>
    </html>
  )
}
