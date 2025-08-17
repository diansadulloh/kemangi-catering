import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="tentang" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Tentang Kami</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Kemangi Catering berdiri sejak tahun 2015 dengan misi menyediakan makanan berkualitas untuk berbagai
                acara. Kami menggunakan bahan-bahan segar dan berkualitas tinggi, diolah oleh chef berpengalaman.
              </p>
              <p className="text-lg leading-relaxed">
                Visi kami adalah menjadi penyedia katering terpercaya dengan memberikan pengalaman kuliner yang
                memuaskan untuk setiap acara pelanggan kami.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Informasi Kontak</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Alamat:</strong> Jl. Kemangi No. 123, Jakarta Selatan
                    </p>
                    <p>
                      <strong>WhatsApp:</strong> +62 813-2774-6081
                    </p>
                    <p>
                      <strong>Email:</strong> info@kemangicatering.com
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Jam Operasional</h3>
                  <p>Senin - Minggu</p>
                  <p>08.00 - 20.00 WIB</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
