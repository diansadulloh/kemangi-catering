export interface MenuPackage {
  name: string
  price: string
  description: string
  includes: string[]
  suitable: string[]
}

export interface MenuItem {
  id: number
  slug: string
  title: string
  subtitle: string
  description: string
  image: string
  gallery: string[]
  category: string
  rating: number
  prepTime: string
  minOrder: number
  packages: MenuPackage[]
  features: string[]
  nutritionInfo?: {
    calories: string
    protein: string
    carbs: string
    fat: string
  }
}

export const menuData: MenuItem[] = [
  {
    id: 1,
    slug: "nasi-kotak-premium",
    title: "Nasi Kotak Premium",
    subtitle: "Solusi praktis untuk meeting dan acara kantor",
    description:
      "Paket nasi kotak premium dengan menu lengkap dan bergizi. Dikemas dengan rapi dan higienis, cocok untuk berbagai acara formal maupun informal.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    category: "Nasi Kotak",
    rating: 4.8,
    prepTime: "30 menit",
    minOrder: 10,
    packages: [
      {
        name: "Paket Ekonomis",
        price: "Rp 25.000/porsi",
        description: "Paket hemat dengan menu standar",
        includes: [
          "Nasi putih 200gr",
          "Ayam goreng/bakar",
          "Tempe orek",
          "Sayur lodeh",
          "Sambal",
          "Kerupuk",
          "Air mineral",
        ],
        suitable: ["Meeting internal", "Rapat rutin", "Acara informal"],
      },
      {
        name: "Paket Premium",
        price: "Rp 35.000/porsi",
        description: "Paket lengkap dengan menu premium",
        includes: [
          "Nasi putih 250gr",
          "Ayam bakar bumbu kecap",
          "Tempe bacem",
          "Sayur asem",
          "Sambal terasi",
          "Kerupuk udang",
          "Buah potong",
          "Air mineral",
        ],
        suitable: ["Meeting klien", "Seminar", "Workshop", "Acara formal"],
      },
      {
        name: "Paket Deluxe",
        price: "Rp 45.000/porsi",
        description: "Paket mewah dengan menu istimewa",
        includes: [
          "Nasi putih/nasi kuning 250gr",
          "Ayam bakar madu",
          "Rendang daging",
          "Tempe bacem",
          "Sayur asem",
          "Sambal terasi + sambal matah",
          "Kerupuk udang",
          "Buah potong segar",
          "Dessert mini",
          "Air mineral + teh kotak",
        ],
        suitable: ["Acara VIP", "Meeting eksekutif", "Peluncuran produk"],
      },
    ],
    features: [
      "Kemasan food grade dan ramah lingkungan",
      "Tahan hingga 4 jam dalam suhu ruang",
      "Bisa custom menu sesuai permintaan",
      "Gratis antar untuk minimal order 50 porsi",
      "Tersedia pilihan vegetarian",
      "Halal dan higienis",
    ],
    nutritionInfo: {
      calories: "650-850 kal",
      protein: "25-35g",
      carbs: "80-100g",
      fat: "20-30g",
    },
  },
  {
    id: 2,
    slug: "snack-box-meeting",
    title: "Snack Box Meeting",
    subtitle: "Camilan praktis untuk coffee break dan meeting",
    description:
      "Koleksi snack dan camilan berkualitas yang dikemas dalam box praktis. Cocok untuk coffee break, meeting singkat, atau acara networking.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    category: "Snack Box",
    rating: 4.7,
    prepTime: "20 menit",
    minOrder: 20,
    packages: [
      {
        name: "Paket Light",
        price: "Rp 15.000/box",
        description: "Snack ringan untuk coffee break singkat",
        includes: ["Mini sandwich", "Kue sus mini (2 pcs)", "Biskuit premium", "Buah potong", "Air mineral"],
        suitable: ["Coffee break", "Meeting singkat", "Networking event"],
      },
      {
        name: "Paket Standard",
        price: "Rp 25.000/box",
        description: "Kombinasi snack manis dan gurih",
        includes: [
          "Sandwich club",
          "Risoles (2 pcs)",
          "Pastel (1 pc)",
          "Kue sus mini (2 pcs)",
          "Buah potong segar",
          "Jus buah kotak",
          "Air mineral",
        ],
        suitable: ["Seminar", "Workshop", "Training", "Meeting panjang"],
      },
      {
        name: "Paket Premium",
        price: "Rp 35.000/box",
        description: "Snack lengkap dengan variasi menu",
        includes: [
          "Sandwich premium (2 varian)",
          "Risoles mayo (2 pcs)",
          "Pastel ayam (2 pcs)",
          "Kue sus coklat (3 pcs)",
          "Fruit salad cup",
          "Mini cake slice",
          "Jus buah segar",
          "Air mineral",
          "Permen mint",
        ],
        suitable: ["Acara formal", "Client meeting", "Conference", "Launching"],
      },
    ],
    features: [
      "Kemasan individual yang higienis",
      "Variasi rasa manis dan gurih",
      "Bahan segar dan berkualitas",
      "Tahan 6 jam dalam suhu ruang",
      "Custom label untuk corporate event",
      "Pilihan vegetarian tersedia",
    ],
    nutritionInfo: {
      calories: "400-600 kal",
      protein: "12-20g",
      carbs: "45-70g",
      fat: "15-25g",
    },
  },
  {
    id: 3,
    slug: "paket-tumpeng",
    title: "Paket Tumpeng",
    subtitle: "Tradisi Indonesia untuk momen spesial",
    description:
      "Tumpeng nasi kuning dengan lauk-pauk tradisional lengkap. Cocok untuk syukuran, ulang tahun, peresmian, dan berbagai acara adat.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    category: "Tradisional",
    rating: 4.9,
    prepTime: "2 jam",
    minOrder: 1,
    packages: [
      {
        name: "Tumpeng Mini",
        price: "Rp 300.000 (5-8 orang)",
        description: "Tumpeng kecil untuk acara intimate",
        includes: [
          "Nasi kuning bentuk tumpeng",
          "Ayam goreng (4 potong)",
          "Telur pindang (4 butir)",
          "Tempe orek",
          "Tahu bacem",
          "Urap sayuran",
          "Sambal terasi",
          "Kerupuk",
          "Hiasan daun pisang",
        ],
        suitable: ["Syukuran keluarga", "Ulang tahun anak", "Arisan"],
      },
      {
        name: "Tumpeng Sedang",
        price: "Rp 500.000 (10-15 orang)",
        description: "Tumpeng standar untuk acara menengah",
        includes: [
          "Nasi kuning bentuk tumpeng besar",
          "Ayam goreng/bakar (8 potong)",
          "Telur pindang (8 butir)",
          "Rendang daging",
          "Tempe bacem",
          "Tahu isi",
          "Urap sayuran",
          "Gudeg",
          "Sambal terasi + sambal kecap",
          "Kerupuk udang",
          "Hiasan tradisional lengkap",
        ],
        suitable: ["Syukuran kantor", "Peresmian", "Acara RT/RW"],
      },
      {
        name: "Tumpeng Besar",
        price: "Rp 800.000 (20-25 orang)",
        description: "Tumpeng jumbo untuk acara besar",
        includes: [
          "Nasi kuning bentuk tumpeng jumbo",
          "Ayam goreng kremes (12 potong)",
          "Telur pindang (12 butir)",
          "Rendang daging sapi",
          "Opor ayam",
          "Tempe bacem",
          "Tahu isi",
          "Perkedel kentang",
          "Urap sayuran",
          "Gudeg jogja",
          "Sambal terasi + sambal kecap + sambal matah",
          "Kerupuk udang + kerupuk rambak",
          "Hiasan tradisional mewah",
          "Buah potong",
        ],
        suitable: ["Syukuran besar", "Grand opening", "Acara adat", "Perayaan perusahaan"],
      },
    ],
    features: [
      "Nasi kuning dengan bumbu tradisional",
      "Lauk-pauk autentik Indonesia",
      "Hiasan daun pisang dan janur",
      "Presentasi tradisional yang menarik",
      "Bisa custom sesuai tradisi daerah",
      "Tersedia ritual potong tumpeng",
    ],
  },
  {
    id: 4,
    slug: "paket-prasmanan",
    title: "Paket Prasmanan",
    subtitle: "Buffet lengkap untuk acara besar",
    description:
      "Sistem prasmanan dengan berbagai pilihan menu Indonesia dan internasional. Cocok untuk wedding, gathering, dan acara besar lainnya.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    category: "Prasmanan",
    rating: 4.8,
    prepTime: "3 jam",
    minOrder: 50,
    packages: [
      {
        name: "Paket Bronze",
        price: "Rp 50.000/orang",
        description: "Prasmanan ekonomis dengan menu pilihan",
        includes: [
          "Nasi putih + nasi kuning",
          "Ayam goreng kremes",
          "Rendang daging",
          "Sayur lodeh",
          "Tempe orek",
          "Tahu bacem",
          "Sambal terasi",
          "Kerupuk",
          "Buah potong",
          "Es teh manis",
        ],
        suitable: ["Gathering keluarga", "Acara RT/RW", "Syukuran sederhana"],
      },
      {
        name: "Paket Silver",
        price: "Rp 75.000/orang",
        description: "Prasmanan standar dengan variasi menu",
        includes: [
          "Nasi putih + nasi kuning + nasi goreng",
          "Ayam bakar madu",
          "Rendang daging sapi",
          "Ikan gurame asam manis",
          "Sayur asem",
          "Cap cay",
          "Tempe bacem",
          "Tahu isi",
          "Perkedel kentang",
          "Sambal terasi + sambal matah",
          "Kerupuk udang",
          "Buah potong + rujak",
          "Es teh + air mineral",
        ],
        suitable: ["Wedding", "Ulang tahun", "Gathering kantor", "Seminar besar"],
      },
      {
        name: "Paket Gold",
        price: "Rp 100.000/orang",
        description: "Prasmanan premium dengan menu internasional",
        includes: [
          "Rice station (3 jenis nasi)",
          "Grilled chicken honey mustard",
          "Beef rendang premium",
          "Fish fillet lemon butter",
          "Prawn curry",
          "Mixed vegetables",
          "Pasta aglio olio",
          "Tempe bacem",
          "Tahu isi",
          "Potato wedges",
          "Soup of the day",
          "Salad bar",
          "Sambal station (3 jenis)",
          "Kerupuk premium",
          "Fresh fruit bar",
          "Dessert corner",
          "Beverage station",
        ],
        suitable: ["Corporate event", "Wedding mewah", "Conference", "Gala dinner"],
      },
    ],
    features: [
      "Setup buffet table profesional",
      "Peralatan makan lengkap",
      "Pramusaji berpengalaman",
      "Dekorasi meja buffet",
      "Food warmer untuk menjaga suhu",
      "Bisa tambah live cooking station",
    ],
  },
  {
    id: 5,
    slug: "paket-kue-dessert",
    title: "Paket Kue & Dessert",
    subtitle: "Manis untuk melengkapi acara spesial",
    description:
      "Koleksi kue tradisional dan modern, dessert, dan sweet treats untuk berbagai acara. Dibuat fresh dengan bahan berkualitas tinggi.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    category: "Dessert",
    rating: 4.6,
    prepTime: "1 jam",
    minOrder: 15,
    packages: [
      {
        name: "Paket Tradisional",
        price: "Rp 20.000/porsi",
        description: "Kue-kue tradisional Indonesia",
        includes: [
          "Klepon (3 pcs)",
          "Onde-onde (2 pcs)",
          "Kue lapis (2 slice)",
          "Nagasari (2 pcs)",
          "Kue talam (2 pcs)",
          "Es cendol",
          "Teh hangat",
        ],
        suitable: ["Acara adat", "Arisan", "Pengajian", "Syukuran tradisional"],
      },
      {
        name: "Paket Modern",
        price: "Rp 35.000/porsi",
        description: "Dessert dan cake modern",
        includes: [
          "Mini cake slice (2 varian)",
          "Chocolate mousse cup",
          "Fruit tart mini",
          "Eclair (2 pcs)",
          "Macarons (3 pcs)",
          "Fresh fruit salad",
          "Iced coffee/tea",
        ],
        suitable: ["Birthday party", "Anniversary", "Corporate event", "Modern gathering"],
      },
      {
        name: "Paket Premium Mix",
        price: "Rp 50.000/porsi",
        description: "Kombinasi tradisional dan modern",
        includes: [
          "Signature cake slice",
          "Klepon premium (3 pcs)",
          "Chocolate lava cake",
          "Fruit tart",
          "Kue lapis modern",
          "Panna cotta",
          "Macarons (5 pcs)",
          "Fresh fruit platter",
          "Premium beverage",
          "Traditional sweet soup",
        ],
        suitable: ["Wedding dessert", "VIP event", "Grand celebration", "Luxury gathering"],
      },
    ],
    features: [
      "Bahan premium dan fresh",
      "Presentasi menarik dan Instagram-worthy",
      "Bisa custom design dan rasa",
      "Kemasan individual atau sharing",
      "Halal dan higienis",
      "Tersedia sugar-free option",
    ],
  },
  {
    id: 6,
    slug: "paket-sehat",
    title: "Paket Sehat",
    subtitle: "Menu bergizi untuk gaya hidup sehat",
    description:
      "Menu sehat dengan kalori terkontrol, tinggi protein, dan nutrisi seimbang. Cocok untuk diet, program kesehatan, dan gaya hidup aktif.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    category: "Sehat",
    rating: 4.5,
    prepTime: "25 menit",
    minOrder: 10,
    packages: [
      {
        name: "Paket Diet",
        price: "Rp 35.000/porsi",
        description: "Menu rendah kalori untuk program diet",
        includes: [
          "Brown rice 150gr",
          "Grilled chicken breast",
          "Steamed vegetables",
          "Mixed green salad",
          "Boiled egg",
          "Fresh fruit",
          "Lemon water",
          "Nutrition info card",
        ],
        suitable: ["Program diet", "Lunch sehat", "Meal prep", "Fitness enthusiast"],
      },
      {
        name: "Paket Protein",
        price: "Rp 45.000/porsi",
        description: "High protein untuk muscle building",
        includes: [
          "Quinoa rice 200gr",
          "Grilled salmon/chicken",
          "Roasted sweet potato",
          "Protein salad bowl",
          "Greek yogurt",
          "Mixed nuts",
          "Protein smoothie",
          "Boiled eggs (2 pcs)",
          "Nutrition guide",
        ],
        suitable: ["Gym goers", "Athletes", "Muscle building", "Post workout meal"],
      },
      {
        name: "Paket Detox",
        price: "Rp 40.000/porsi",
        description: "Menu detox untuk cleansing",
        includes: [
          "Cauliflower rice",
          "Grilled fish fillet",
          "Organic vegetables medley",
          "Superfood salad",
          "Avocado slices",
          "Fresh berries",
          "Green juice",
          "Herbal tea",
          "Chia seed pudding",
          "Detox guide",
        ],
        suitable: ["Detox program", "Cleansing diet", "Health recovery", "Wellness retreat"],
      },
    ],
    features: [
      "Kalori dan nutrisi terhitung",
      "Bahan organik dan segar",
      "Rendah sodium dan gula",
      "Tinggi serat dan protein",
      "Konsultasi nutrisi gratis",
      "Custom sesuai dietary needs",
    ],
    nutritionInfo: {
      calories: "350-550 kal",
      protein: "30-45g",
      carbs: "25-40g",
      fat: "10-20g",
    },
  },
]

export function getMenuBySlug(slug: string): MenuItem | undefined {
  return menuData.find((item) => item.slug === slug)
}
