import { Bebas_Neue, Work_Sans } from 'next/font/google'
import './globals.css'

const bodyFont = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-body'
})

const headingFont = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading'
})

export const metadata = {
  title: 'Ego - Elevate Your Social Presence',
  description: 'Transform your social media presence and unlock your personal development potential'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
