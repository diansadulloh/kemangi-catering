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

          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl text-lavender-900 flex items-center justify-center gap-2">
                <Send className="h-6 w-6" />
                Form Pemesanan Lengkap
              </CardTitle>
              <p className="text-lavender-600">Isi form di bawah untuk pemesanan detail</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lavender-900 font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lavender-900 font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lavender-900 font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Nomor Telepon (WhatsApp)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="event" className="text-lavender-900 font-medium">
                      Jenis Acara
                    </Label>
                    <Select name="event" required>
                      <SelectTrigger className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500">
                        <SelectValue placeholder="Pilih jenis acara" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="meeting">🏢 Meeting/Rapat</SelectItem>
                        <SelectItem value="seminar">📚 Seminar/Pelatihan</SelectItem>
                        <SelectItem value="birthday">🎂 Ulang Tahun</SelectItem>
                        <SelectItem value="wedding">💒 Pernikahan</SelectItem>
                        <SelectItem value="corporate">🏛️ Acara Perusahaan</SelectItem>
                        <SelectItem value="other">📋 Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-lavender-900 font-medium flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Tanggal Acara
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-lavender-900 font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Jumlah Peserta
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      required
                      className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500"
                      placeholder="Contoh: 50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package" className="text-lavender-900 font-medium flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Paket yang Diminati
                    </Label>
                    <Select name="package" required>
                      <SelectTrigger className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500">
                        <SelectValue placeholder="Pilih paket catering" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nasi-kotak">🍱 Nasi Kotak Premium</SelectItem>
                        <SelectItem value="snack-box">🥪 Snack Box Meeting</SelectItem>
                        <SelectItem value="tumpeng">🏔️ Paket Tumpeng</SelectItem>
                        <SelectItem value="prasmanan">🍽️ Paket Prasmanan</SelectItem>
                        <SelectItem value="dessert">🧁 Paket Kue & Dessert</SelectItem>
                        <SelectItem value="sehat">🥗 Paket Sehat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lavender-900 font-medium flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Pesan Tambahan
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="border-lavender-200 focus:border-lavender-500 focus:ring-lavender-500"
                    placeholder="Ceritakan detail acara Anda, preferensi menu, atau permintaan khusus..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim Pesanan...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Kirim Pesanan Sekarang
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
