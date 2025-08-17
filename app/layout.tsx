import type React from "react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"  // 🔥 ganti ke Urbanist
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

// Atur style, weight, dll sesuai kebutuhan
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // bisa pilih sesuai kebutuhan
})

export const metadata: Metadata = {
  title: "Kemangi Catering - Katering Makanan & Snack",
  description:
    "Menyediakan berbagai macam menu katering makanan dan snack untuk acara Anda dengan cita rasa yang lezat dan penyajian yang menarik.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      {/* 🔥 pakai Urbanist di seluruh body */}
      <body className={urbanist.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
