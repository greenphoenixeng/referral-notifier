import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AOSInit } from "@/components/Aos"
import Container from "@/layouts/Container"
import { cn } from "@/lib/utils"
import { Toaster } from "react-hot-toast"
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
      <body className={cn(inter.className, "w-full bg-slate-50")}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          containerClassName="text-sm text-slate-600"
        />
        <Container>{children}</Container>
      </body>
    </html>
  )
}
