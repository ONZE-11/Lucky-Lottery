import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"
import { Vazirmatn } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" })

export const metadata: Metadata = {
  title: "Immigrant Law Firm - Your Path to a New Future",
  description: "Expert legal services for immigration, visas, green cards, and citizenship.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${vazirmatn.variable} antialiased`}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>{children}</ThemeProvider>
        </I18nextProvider>
      </body>
    </html>
  )
}
