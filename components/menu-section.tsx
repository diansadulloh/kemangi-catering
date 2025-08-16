import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Clock, ArrowRight } from "lucide-react"

const menuItems = [
  {
    id: 1,
    slug: "nasi-kotak-premium",
    title: "Nasi Kotak Premium",
    price: "Rp 35.000/porsi",
    description: "Nasi putih, ayam bakar, tempe orek, sayur asem, sambal, dan kerupuk.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Nasi Kotak",
    rating: 4.8,
    prepTime: "30 menit",
    minOrder: 10,
  },
  {
    id: 2,
    slug: "snack-box-meeting",
    title: "Snack Box Meeting",
    price: "Rp 25.000/box",
    description: "Sandwich, risoles, pastel, buah potong, dan minuman.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Snack Box",
    rating: 4.7,
    prepTime: "20 menit",
    minOrder: 20,
  },
  {
    id: 3,
    slug: "paket-tumpeng",
    title: "Paket Tumpeng",
    price: "Rp 500.000 (untuk 10 orang)",
    description: "Tumpeng nasi kuning dengan lauk-pauk lengkap dan hiasan tradisional.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Tradisional",
    rating: 4.9,
    prepTime: "2 jam",
    minOrder: 1,
  },
  {
    id: 4,
    slug: "paket-prasmanan",
    title: "Paket Prasmanan",
    price: "Mulai dari Rp 50.000/orang",
    description: "Berbagai pilihan menu prasmanan untuk acara besar dengan variasi menu yang beragam.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Prasmanan",
    rating: 4.8,
    prepTime: "3 jam",
    minOrder: 50,
  },
  {
    id: 5,
    slug: "paket-kue-dessert",
    title: "Paket Kue & Dessert",
    price: "Mulai dari Rp 20.000/porsi",
    description: "Berbagai pilihan kue tradisional dan modern untuk acara spesial Anda.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Dessert",
    rating: 4.6,
    prepTime: "1 jam",
    minOrder: 15,
  },
  {
    id: 6,
    slug: "paket-sehat",
    title: "Paket Sehat",
    price: "Rp 40.000/porsi",
    description: "Menu sehat dengan brown rice, grilled chicken, salad, dan buah segar.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    category: "Sehat",
    rating: 4.5,
    prepTime: "25 menit",
    minOrder: 10,
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Menu Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilihan menu terbaik dengan cita rasa autentik dan penyajian yang menarik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden card-hover border-0 shadow-lg bg-white/90 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-violet-500 hover:bg-violet-600 text-white">{item.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 text-amber-500 fill-current" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">
                  {item.price}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{item.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Min. {item.minOrder}</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white"
                >
                  <Link href={`/menu/${item.slug}`}>
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
