# 🌿 Kemangi Catering - Modern Catering Management System

Sistem manajemen katering modern yang dibangun dengan Next.js 14, PocketBase, dan Tailwind CSS dengan tema lavender yang elegan.

## ✨ Fitur Utama

- 🎨 **UI/UX Modern** - Desain elegan dengan tema lavender dan animasi smooth
- 📱 **Responsive Design** - Tampil sempurna di semua perangkat
- 🗄️ **PocketBase Integration** - Database real-time untuk manajemen pesanan
- 👨‍💼 **Admin Dashboard** - Panel admin lengkap untuk mengelola pesanan
- 💬 **WhatsApp Integration** - Pemesanan langsung via WhatsApp
- 📋 **Order Management** - Sistem pemesanan dengan status tracking
- 🔔 **Toast Notifications** - Notifikasi real-time untuk user feedback
- 🎯 **SEO Optimized** - Metadata dan struktur yang SEO-friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn
- PocketBase

### 1. Clone Repository

\`\`\`bash
git clone <repository-url>
cd kemangi-catering
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# atau
yarn install
\`\`\`

### 3. Setup PocketBase

#### Download dan Install PocketBase

1. Download PocketBase dari [https://pocketbase.io/docs/](https://pocketbase.io/docs/)
2. Extract file dan jalankan:

\`\`\`bash
# Windows
./pocketbase.exe serve

# macOS/Linux
./pocketbase serve
\`\`\`

3. Buka [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/) untuk admin panel
4. Buat akun admin pertama

#### Import Collections

1. Di admin panel PocketBase, buka **Settings > Import collections**
2. Upload file \`pocketbase_schema.json\` yang ada di root project
3. Klik **Import** untuk membuat collections

### 4. Environment Variables

Buat file \`.env.local\` di root project:

\`\`\`env
NEXT_PUBLIC_POCKETBASE_URL=http://127.0.0.1:8090
\`\`\`

### 5. Jalankan Development Server

\`\`\`bash
npm run dev
# atau
yarn dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Struktur Project

\`\`\`
kemangi-catering/
├── app/
│   ├── admin/                 # Admin dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── orders/
│   ├── api/                   # API routes
│   │   └── orders/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/                # React components
│   ├── ui/                    # shadcn/ui components
│   ├── header.tsx
│   ├── hero.tsx
│   ├── menu-section.tsx
│   ├── testimonials.tsx
│   ├── order-form.tsx
│   ├── about.tsx
│   └── footer.tsx
├── lib/
│   └── pocketbase.ts         # PocketBase configuration
├── hooks/
│   └── use-toast.ts
├── pocketbase_schema.json     # PocketBase collections schema
├── tailwind.config.ts
└── README.md
\`\`\`

## 🗄️ Database Schema

### Collections

#### 1. orders
- **name** (text) - Nama pemesan
- **email** (email) - Email pemesan  
- **phone** (text) - Nomor telepon
- **event** (select) - Jenis acara
- **date** (date) - Tanggal acara
- **guests** (number) - Jumlah peserta
- **package** (select) - Paket yang dipilih
- **message** (text) - Pesan tambahan
- **status** (select) - Status pesanan (pending, confirmed, completed, cancelled)

#### 2. menu_items (opsional untuk future development)
- **title** (text) - Nama menu
- **price** (text) - Harga
- **description** (text) - Deskripsi
- **image** (file) - Gambar menu
- **category** (text) - Kategori menu
- **available** (bool) - Status ketersediaan

## 🎨 Customization

### Mengubah Tema Warna

Edit file \`tailwind.config.ts\` untuk mengubah palet warna:

\`\`\`typescript
// Contoh mengubah ke tema biru
lavender: {
  50: "#eff6ff",
  100: "#dbeafe", 
  // ... dst
}
\`\`\`

### Menambah Menu Item

Edit array \`menuItems\` di \`components/menu-section.tsx\`:

\`\`\`typescript
const menuItems = [
  {
    id: 7,
    title: "Menu Baru",
    price: "Rp 45.000/porsi",
    description: "Deskripsi menu baru",
    // ... dst
  }
]
\`\`\`

## 🔧 API Endpoints

### Orders API

- **GET** \`/api/orders\` - Ambil semua pesanan
- **POST** \`/api/orders\` - Buat pesanan baru
- **PATCH** \`/api/orders/[id]\` - Update status pesanan

### Contoh Request

\`\`\`javascript
// Membuat pesanan baru
const response = await fetch('/api/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '08123456789',
    event: 'meeting',
    date: '2024-02-15',
    guests: 50,
    package: 'nasi-kotak',
    message: 'Mohon siapkan vegetarian option',
    status: 'pending'
  })
})
\`\`\`

## 👨‍💼 Admin Dashboard

Akses admin dashboard di \`/admin\`:

### Fitur Admin:
- 📊 **Dashboard Overview** - Statistik pesanan
- 📋 **Order Management** - Kelola semua pesanan
- 🔄 **Status Updates** - Update status pesanan
- 📈 **Analytics** - Laporan dan statistik

### Default Admin Access:
- URL: \`http://localhost:3000/admin\`
- Tidak ada autentikasi (untuk development)
- Untuk production, tambahkan sistem autentikasi

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository di [Vercel](https://vercel.com)
3. Set environment variables:
   - \`NEXT_PUBLIC_POCKETBASE_URL\`
4. Deploy!

### PocketBase Production

1. Deploy PocketBase ke VPS atau cloud provider
2. Update \`NEXT_PUBLIC_POCKETBASE_URL\` dengan URL production
3. Setup SSL certificate untuk PocketBase

## 🛠️ Development

### Menambah Fitur Baru

1. **Komponen UI**: Tambah di \`components/\`
2. **API Routes**: Tambah di \`app/api/\`
3. **Admin Pages**: Tambah di \`app/admin/\`
4. **Database**: Update schema di PocketBase admin

### Testing

\`\`\`bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📞 Support

Untuk bantuan dan pertanyaan:

- 📧 Email: support@kemangicatering.com
- 💬 WhatsApp: +62 812-3456-7890
- 🐛 Issues: [GitHub Issues](repository-url/issues)

## 📄 License

MIT License - lihat file LICENSE untuk detail lengkap.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [PocketBase](https://pocketbase.io/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

---

**Dibuat dengan ❤️ untuk Kemangi Catering**
\`\`\`

Selamat menggunakan sistem manajemen katering modern ini! 🌿✨
\`\`\`

Now let's create the PocketBase schema JSON file:
