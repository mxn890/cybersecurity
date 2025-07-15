import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

// ✅ Import components

import CustomCursor from './components/CustomCursor' // 👈 import your cursor

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: 'CyberShield - Advanced Security Tools',
  description: 'Professional cybersecurity tools and services for modern digital protection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} font-orbitron bg-black text-white`}>
        <CustomCursor /> {/* 👈 Use your custom cursor */}

       
        <main>{children}</main>
        
      </body>
    </html>
  )
}
