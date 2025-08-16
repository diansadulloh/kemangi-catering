import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex items-center justify-center">
      <Card className="max-w-md mx-4 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardContent className="text-center py-12">
          <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Menu Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, menu yang Anda cari tidak tersedia atau mungkin sudah tidak aktif.</p>
          <div className="space-y-4">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
            >
              <Link href="/#menu">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Menu
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/">Ke Beranda</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
