import Link from "next/link"
import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Kemangi Catering</h3>
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <Facebook size={24} />
          </Link>
          <Link href="https://www.instagram.com/kemangi.delicious/" className="hover:opacity-80 transition-opacity">
            <Instagram size={24} />
          </Link>
          <Link href="https://wa.me/6281327746081" className="hover:opacity-80 transition-opacity">
            <MessageCircle size={24} />
          </Link>
        </div>
        <p>&copy; 2024 Kemangi Catering. Semua Hak Dilindungi.</p>
      </div>
    </footer>
  )
}
