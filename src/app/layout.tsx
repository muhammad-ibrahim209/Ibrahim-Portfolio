import './globals.css'
import { ClientLayout } from './client-layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Web Developer Portfolio',
  description: 'Showcase of my web development projects and skills',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

