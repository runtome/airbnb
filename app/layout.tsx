import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

import Navbar from '@/app/components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'

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
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
