import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rivers Intelligence - AI Integration for Richmond Businesses",
  description:
    "Based in Richmond, Virginia, Rivers Intelligence transforms businesses nationwide with intelligent AI solutions. Expert AI integration services from your trusted local team.",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/rivers-intelligence-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/rivers-intelligence-logo.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/rivers-intelligence-logo.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    shortcut: '/rivers-intelligence-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
