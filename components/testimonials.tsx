import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    text: "Makanan dari Kemangi Catering selalu fresh dan enak. Pelayanannya juga cepat dan ramah. Sudah beberapa kali order untuk meeting kantor dan selalu puas.",
    author: "Bapak Andi, PT Sejahtera",
  },
  {
    id: 2,
    text: "Snack box untuk acara seminar kami sangat memuaskan. Presentasinya rapi dan rasanya enak. Pesanan sesuai dengan yang dijanjikan.",
    author: "Ibu Sari, Universitas Merdeka",
  },
  {
    id: 3,
    text: "Paket tumpeng untuk syukuran anak saya sangat bagus dan lezat. Tamu-tamu semua memuji. Terima kasih Kemangi Catering!",
    author: "Ibu Rina, Jakarta Selatan",
  },
]

export function Testimonials() {
  return (
    <section id="testimoni" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Testimoni Pelanggan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md">
              <CardContent className="p-6">
                <p className="italic mb-4 text-gray-700">"{testimonial.text}"</p>
                <p className="font-semibold text-primary">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
