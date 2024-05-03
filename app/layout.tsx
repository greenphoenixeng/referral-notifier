import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AOSInit } from "@/components/Aos"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Green Phoenix",
    template: `%s | Green Phoenix`,
  },
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
