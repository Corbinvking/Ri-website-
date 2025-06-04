import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { StagewiseToolbar } from "@stagewise/toolbar-next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rivers Intelligence - AI Integration for Richmond Businesses",
  description:
    "Transform your Richmond business with intelligent AI solutions. Expert AI integration services for local companies.",
    generator: 'v0.dev'
}

const stagewiseConfig = {
  plugins: [],
  autoConnect: false,
  port: 5746
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
        {process.env.NODE_ENV === 'development' && (
          <StagewiseToolbar config={stagewiseConfig} />
        )}
      </body>
    </html>
  )
}
