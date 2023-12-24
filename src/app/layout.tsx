import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Sidebar } from '@/shared/components/sidebar'
import { Toaster } from '@/shared/components/ui/toast'
import { cn } from '@/shared/helpers/class-name'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'The One Linked',
  description: 'The One Linked',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        <main>{children}</main>
        <Sidebar />
        <Toaster />
      </body>
    </html>
  )
}
