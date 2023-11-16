import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

import Navbar from '@/app/components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import LoginModal from './components/Modals/LoginModal'
import ToasterProvider from './components/providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/Modals/RentModal'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb copy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>        
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser = {currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
