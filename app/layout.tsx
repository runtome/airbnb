import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

import Navbar from '@/app/components/navbar/Navbar'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb copy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
