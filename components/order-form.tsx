"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MessageCircle, Send, Phone, Mail, Calendar, Users, Package, MessageSquare } from "lucide-react"
import Link from "next/link"

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const orderData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      event: formData.get("event") as string,
      date: formData.get("date") as string,
      guests: Number.parseInt(formData.get("guests") as string),
      package: formData.get("package") as string,
      message: formData.get("message") as string,
      status: "pending",
    }

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (response.ok) {
        toast({
          title: "🎉 Pesanan Berhasil Dikirim!",
          description: "Kami akan menghubungi Anda segera untuk konfirmasi.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to submit order")
      }
    } catch (error) {
      toast({
        title: "❌ Terjadi Kesalahan",
        description: "Silakan coba lagi atau hubungi kami via WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappMessage = encodeURIComponent("Halo Kemangi Catering, saya ingin memesan katering")
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`

  return (
    <section id="pesan" className="py-20 bg-gradient-to-br from-lavender-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-lavender-900">Pesan Sekarang</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lavender-400 to-lavender-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-lavender-700 max-w-2xl mx-auto">
            Siap melayani acara istimewa Anda dengan cita rasa terbaik
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-r from-green-500 to-green-600 text-white overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <MessageCircle className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Hubungi Kami via WhatsApp</h3>
              <p className="mb-6 text-green-100 text-lg">
                Untuk pemesanan cepat dan konsultasi menu, klik tombol di bawah ini
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat WhatsApp Sekarang
                </Link>
              </Button>
            </CardContent>
          </Card>

          
        </div>
      </div>
    </section>
  )
}
