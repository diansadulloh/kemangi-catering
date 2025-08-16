import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Star } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="hero-bg bg-cover bg-center min-h-screen flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Sparkles className="h-6 w-6 text-lavender-200" />
      </div>
      <div className="absolute top-32 right-16 animate-bounce delay-300">
        <Star className="h-5 w-5 text-lavender-300" />
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-700">
        <Sparkles className="h-4 w-4 text-lavender-200" />
      </div>

      <div className="text-center max-w-4xl px-4 animate-fade-in">
        <div className="mb-6">
          <h2 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-lavender-100 bg-clip-text text-transparent">
            Kemangi Catering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lavender-300 to-lavender-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-lavender-50">
          Menyediakan berbagai macam menu katering makanan dan snack untuk acara Anda dengan cita rasa yang lezat dan
          penyajian yang menarik.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-600 hover:to-lavender-700 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="#pesan">Pesan Sekarang</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-lavender-700 font-bold px-8 py-4 text-lg transition-all duration-300 bg-transparent"
          >
            <Link href="#menu">Lihat Menu</Link>
          </Button>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 text-lavender-100">
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Acara Sukses</div>
          </div>
          <div className="w-px h-12 bg-lavender-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-sm">Pelanggan Puas</div>
          </div>
          <div className="w-px h-12 bg-lavender-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold">9+</div>
            <div className="text-sm">Tahun Pengalaman</div>
          </div>
        </div>
      </div>
    </section>
  )
}
