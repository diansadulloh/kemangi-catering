import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Star, Clock, Users, Check, Phone, MessageCircle, Info, Utensils, Heart } from "lucide-react"
import { getMenuBySlug } from "@/lib/menu-data"

interface MenuPageProps {
  params: {
    slug: string
  }
}

export default function MenuPage({ params }: MenuPageProps) {
  const menu = getMenuBySlug(params.slug)

  if (!menu) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(`Halo Kemangi Catering, saya tertarik dengan paket ${menu.title}`)
  const whatsappUrl = `https://wa.me/6281234567890?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/#menu">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Menu
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-200">{menu.category}</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{menu.title}</h1>
              <p className="text-xl text-violet-600 mb-4">{menu.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{menu.description}</p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500 fill-current" />
                <span className="font-medium">{menu.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{menu.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Min. {menu.minOrder} porsi</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
              >
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Pesan via WhatsApp
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#packages">
                  <Utensils className="mr-2 h-4 w-4" />
                  Lihat Paket
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image src={menu.image || "/placeholder.svg"} alt={menu.title} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {menu.gallery.map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${menu.title} ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <Card className="mb-12 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-violet-900">
              <Heart className="h-5 w-5" />
              Keunggulan Produk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menu.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Info */}
        {menu.nutritionInfo && (
          <Card className="mb-12 border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <Info className="h-5 w-5" />
                Informasi Nutrisi (per porsi)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{menu.nutritionInfo.calories}</div>
                  <div className="text-sm text-gray-600">Kalori</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{menu.nutritionInfo.protein}</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{menu.nutritionInfo.carbs}</div>
                  <div className="text-sm text-gray-600">Karbohidrat</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{menu.nutritionInfo.fat}</div>
                  <div className="text-sm text-gray-600">Lemak</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Packages */}
        <div id="packages" className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Pilihan Paket
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.packages.map((pkg, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Utensils className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cocok Untuk:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.suitable.map((use, useIndex) => (
                        <Badge key={useIndex} variant="secondary" className="text-xs">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
                  >
                    <Link href={`${whatsappUrl} - ${pkg.name}`} target="_blank">
                      <Phone className="mr-2 h-4 w-4" />
                      Pesan {pkg.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white">
          <CardContent className="text-center py-12">
            <h3 className="text-3xl font-bold mb-4">Siap Memesan?</h3>
            <p className="text-xl mb-8 text-violet-100">Hubungi kami sekarang untuk konsultasi menu dan pemesanan</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-violet-600 hover:bg-violet-50 font-bold">
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat WhatsApp
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-violet-600 font-bold bg-transparent"
              >
                <Link href="/#pesan">
                  <Utensils className="mr-2 h-5 w-5" />
                  Form Pemesanan
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { slug: "nasi-kotak-premium" },
    { slug: "snack-box-meeting" },
    { slug: "paket-tumpeng" },
    { slug: "paket-prasmanan" },
    { slug: "paket-kue-dessert" },
    { slug: "paket-sehat" },
  ]
}
