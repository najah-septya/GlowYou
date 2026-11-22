/**
 * GlowYou Data Store
 * Berisi data produk, artikel/tips edukasi, tipe kulit, dan kuesioner.
 */

const GLOW_DATA = {
  skinTypes: {
    normal: {
      id: "normal",
      name: "Normal",
      tagline: "Kulit Seimbang & Terhidrasi Baik",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
      description: "Kadar minyak dan kelembapan di kulitmu seimbang, jarang mengalami breakout parah, dan elastisitas kulit terjaga dengan sangat baik.",
      characteristics: [
        "Tekstur kulit halus dan kenyal",
        "Pori-pori berukuran kecil dan tersamarkan",
        "Warna kulit merata dan bercahaya alami",
        "Jarang mengalami iritasi atau jerawat meradang"
      ],
      routineMorning: ["Gentle Cleanser", "Hydrating Toner", "Light Moisturizer", "Sunscreen SPF 50"],
      routineNight: ["Micellar Water", "Gentle Cleanser", "Antioxidant Serum", "Barrier Night Cream"],
      recommendedProducts: ["p1", "p3", "p5", "p7"]
    },
    dry: {
      id: "dry",
      name: "Kering (Dry Skin)",
      tagline: "Kurang Kelembapan & Butuh Hidrasi Ekstra",
      badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
      description: "Kulitmu memproduksi lebih sedikit sebum alami, sering terasa kencang setelah mencuci muka, dan rentan mengelupas di area tertentu.",
      characteristics: [
        "Kulit terasa kencang atau 'tertarik' terutama setelah mandi",
        "Tampak kusam dan kurang bercahaya",
        "Garis halus lebih mudah terlihat jika dehidrasi",
        "Kadang terdapat bagian yang kasar atau mengelupas"
      ],
      routineMorning: ["Hydrating Cleanser", "Essence Toner", "Hyaluronic Acid Serum", "Rich Moisturizer", "Moisturizing Sunscreen"],
      routineNight: ["Cleansing Balm", "Hydrating Wash", "Ceramide Serum", "Deep Moisture Cream"],
      recommendedProducts: ["p3", "p4", "p7", "p8"]
    },
    oily: {
      id: "oily",
      name: "Berminyak (Oily Skin)",
      tagline: "Produksi Sebum Berlebih & Pori Tampak Nyata",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
      description: "Kelenjar minyak aktif memproduksi sebum berlebih, wajah cepat tampak mengkilap terutama di siang hari, dan pori-pori cenderung lebih terbuka.",
      characteristics: [
        "Pori-pori terlihat lebih besar terutama di area hidung & pipi",
        "Mudah berjerawat, komedo hitam (blackhead) & komedo putih",
        "Wajah tampak mengkilap dalam 1–2 jam setelah dibersihkan",
        "Makeup cenderung mudah luntur atau bergeser"
      ],
      routineMorning: ["Salicylic Acid Wash", "Pore Clarifying Toner", "Oil-Free Gel Moisturizer", "Matte Finish Sunscreen"],
      routineNight: ["Double Cleansing (Micellar)", "Gentle Acne Wash", "Niacinamide Serum", "Lightweight Water Cream"],
      recommendedProducts: ["p1", "p2", "p5", "p6"]
    },
    combination: {
      id: "combination",
      name: "Kombinasi",
      tagline: "Berminyak di T-Zone, Normal/Kering di Pipi",
      badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
      description: "Memiliki dua karakteristik berbeda: area dahi, hidung, dan dagu (T-Zone) memproduksi lebih banyak minyak, sedangkan area pipi normal atau cenderung kering.",
      characteristics: [
        "Area dahi dan hidung tampak mengkilap dan berpori besar",
        "Area pipi terasa normal atau sedikit kering",
        "Sering muncul komedo di lipatan hidung",
        "Membutuhkan perawatan seimbang yang tidak menyumbat pori"
      ],
      routineMorning: ["Balancing Gel Wash", "Hydrating BHA Toner", "Light Gel Cream", "Hybrid Sunscreen"],
      routineNight: ["Micellar Cleanser", "Balancing Wash", "Centella Asiatica Serum", "Nourishing Gel Cream"],
      recommendedProducts: ["p1", "p3", "p5", "p7"]
    },
    sensitive: {
      id: "sensitive",
      name: "Sensitif",
      tagline: "Mudah Bereaksi & Rentan Kemerahan",
      badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
      description: "Skin barrier cenderung lebih rentan, mudah terasa perih, gatal, atau memerah saat terkena paparan sinar matahari atau bahan aktif skincare tertentu.",
      characteristics: [
        "Mudah timbul kemerahan jika terkena panas atau produk baru",
        "Sering terasa gatal, terbakar, atau perih",
        "Lapisan kulit tampak tipis dengan pembuluh darah halus terlihat",
        "Memerlukan produk bebas parfum dan alkohol keras"
      ],
      routineMorning: ["Gentle Calming Cleanser", "Soothing Toner (Centella)", "Calming Cream", "Physical Sunscreen (Zinc Oxide)"],
      routineNight: ["Ultra-Mild Micellar", "Calming Wash", "Ceramide & Madecassoside Serum", "Barrier Repair Balm"],
      recommendedProducts: ["p3", "p4", "p7", "p8"]
    },
    acne_prone: {
      id: "acne_prone",
      name: "Berjerawat (Acne-Prone)",
      tagline: "Rentan Peradangan & Butuh Perawatan Menenangkan",
      badgeColor: "bg-red-100 text-red-700 border-red-200",
      description: "Pori-pori mudah tersumbat oleh sel kulit mati dan minyak, memicu timbulnya komedo, papula, pustula, atau jerawat kistik yang meradang.",
      characteristics: [
        "Sering muncul jerawat aktif dan bruntusan di dahi/pipi/dagu",
        "Terdapat bekas jerawat kemerahan (PIE) atau kecokelatan (PIH)",
        "Sensitif terhadap gesekan atau produk yang menyumbat pori (komedogenik)",
        "Kulit butuh anti-inflamasi dan eksfoliasi lembut"
      ],
      routineMorning: ["Acne Care Foam", "Calming Toner Cica", "Light Barrier Gel", "Non-Comedogenic Sunscreen"],
      routineNight: ["Acne Cleanser", "BHA 2% Treatment (2-3x seminggu)", "Centella Serum", "Acne Spot Treatment"],
      recommendedProducts: ["p1", "p2", "p4", "p6"]
    }
  },

  // Pertanyaan kuis opsional untuk analisis lebih mendalam
  quizQuestions: [
    {
      id: 1,
      question: "Bagaimana sensasi kulit wajahmu 30 menit setelah mencuci muka tanpa skincare?",
      options: [
        { text: "Terasa nyaman, kenyal, tidak terlalu kering maupun berminyak", type: "normal" },
        { text: "Terasa kaku, kencang seperti ditarik, dan sedikit kasar", type: "dry" },
        { text: "Minyak mulai terlihat mengkilap di seluruh wajah", type: "oily" },
        { text: "Minyak hanya muncul di dahi dan hidung, sedangkan pipi kering", type: "combination" },
        { text: "Terasa perih, panas, atau muncul bercak kemerahan", type: "sensitive" }
      ]
    },
    {
      id: 2,
      question: "Seberapa sering kamu mengalami jerawat atau komedo?",
      options: [
        { text: "Hampir selalu ada jerawat aktif atau bruntusan yang meradang", type: "acne_prone" },
        { text: "Sering berminyak disertai komedo hitam di hidung dan pori besar", type: "oily" },
        { text: "Hanya sesekali saat menjelang menstruasi atau stres", type: "combination" },
        { text: "Sangat jarang berjerawat, namun kulit mudah mengelupas", type: "dry" },
        { text: "Bila salah coba produk baru, langsung timbul bentol merah/gatal", type: "sensitive" }
      ]
    },
    {
      id: 3,
      question: "Apa tujuan atau concern utama yang paling ingin kamu perbaiki saat ini?",
      options: [
        { text: "Mengontrol minyak berlebih & menyamarkan pori-pori besar", type: "oily" },
        { text: "Meredakan jerawat aktif dan memudarkan bekas jerawat", type: "acne_prone" },
        { text: "Memberikan kelembapan intensif dan mengatasi kulit kering kusam", type: "dry" },
        { text: "Menenangkan kemerahan dan memperkuat lapisan pelindung kulit (skin barrier)", type: "sensitive" },
        { text: "Menjaga kulit tetap sehat, cerah bercahaya alami (glowing seimbang)", type: "normal" }
      ]
    }
  ],

  // Produk Skincare Terkurasi
  products: [
    {
      id: "p1",
      name: "Facial Wash Acne Care & Calming",
      category: "Facial Wash",
      price: 75000,
      originalPrice: 95000,
      rating: 4.8,
      soldCount: "1.2k",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["oily", "acne_prone", "combination"],
      tags: ["Tea Tree", "Salicylic Acid", "Centella"],
      shortDesc: "Sabun cuci muka busa lembut yang bersihkan pori secara mendalam tanpa bikin kulit kering.",
      description: "Diformulasikan khusus untuk merawat kulit rentan jerawat dan mengontrol sebum berlebih. Mengandung ekstrak Tea Tree dan Centella Asiatica alami yang menenangkan peradangan jerawat serta membersihkan sisa kotoran hingga ke pori terdalam.",
      benefits: [
        "Mengurangi bakteri penyebab jerawat hingga 99%",
        "Mengontrol minyak berlebih hingga 8 jam",
        "pH balance 5.5 yang aman untuk skin barrier",
        "Bebas SLS/SLES, paraben, dan alkohol"
      ],
      howToUse: "Basahi wajah dengan air, tuang secukupnya pada telapak tangan hingga berbusa lembut. Pijat perlahan ke seluruh wajah selama 60 detik lalu bilas hingga bersih.",
      ingredients: "Water, Cocamidopropyl Betaine, Glycerin, Melaleuca Alternifolia (Tea Tree) Leaf Water, Centella Asiatica Extract, Salicylic Acid (0.5%), Allantoin."
    },
    {
      id: "p2",
      name: "Clarifying BHA Pore Toner",
      category: "Toner",
      price: 85000,
      originalPrice: 110000,
      rating: 4.9,
      soldCount: "850",
      image: "https://images.unsplash.com/photo-1608248597359-009cf012c474?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["oily", "acne_prone", "combination"],
      tags: ["2% BHA", "Witch Hazel", "Niacinamide"],
      shortDesc: "Toner eksfoliasi harian lembut untuk angkat komedo dan kurangi tampilan pori besar.",
      description: "Toner penyegar yang mengandung Salicylic Acid 1% dan Niacinamide 2% untuk membersihkan sel kulit mati, meluruhkan komedo, dan mengecilkan tampilan pori-pori wajah tanpa rasa perih.",
      benefits: [
        "Meluruhkan komedo hitam & putih membandel",
        "Menghaluskan tekstur kulit gradakan",
        "Mencerahkan noda hitam bekas jerawat",
        "Cepat meresap tanpa rasa lengket"
      ],
      howToUse: "Tuang pada kapas atau telapak tangan yang bersih, tepuk-tepuk lembut ke seluruh area wajah dan leher setelah mencuci muka.",
      ingredients: "Water, Butylene Glycol, Salicylic Acid, Niacinamide, Hamamelis Virginiana (Witch Hazel) Extract, Zinc PCA, Sodium Hyaluronate."
    },
    {
      id: "p3",
      name: "Hydrating Ceramide Barrier Essence Toner",
      category: "Toner",
      price: 90000,
      originalPrice: 115000,
      rating: 4.9,
      soldCount: "2.1k",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["dry", "normal", "sensitive", "combination"],
      tags: ["5x Ceramide", "Hyaluronic Acid", "Panthenol"],
      shortDesc: "Essence toner kaya hidrasi untuk memperkuat skin barrier dan mengunci kelembapan.",
      description: "Kombinasi 5 jenis Ceramide esensial dan Triple Hyaluronic Acid yang meresap hingga ke lapisan kulit dalam untuk memulihkan elastisitas kulit yang dehidrasi.",
      benefits: [
        "Menghidrasi kulit secara instan hingga 72 jam",
        "Mengurangi sensasi kulit ketarik atau mengelupas",
        "Memperbaiki skin barrier yang rusak",
        "Formula hipoalergenik teruji klinis"
      ],
      howToUse: "Gunakan pada wajah yang bersih di pagi dan malam hari. Tepuk secara perlahan 2–3 layer untuk kelembapan maksimal.",
      ingredients: "Water, Dipropylene Glycol, Glycerin, Ceramide NP, Ceramide EOP, Ceramide AP, Sodium Hyaluronate, Panthenol, Trehalose."
    },
    {
      id: "p4",
      name: "Centella Soothing Recovery Serum",
      category: "Serum",
      price: 105000,
      originalPrice: 135000,
      rating: 4.9,
      soldCount: "3.4k",
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["sensitive", "acne_prone", "dry"],
      tags: ["85% Centella", "Madecassoside", "Heartleaf"],
      shortDesc: "Serum penyelamat untuk menenangkan kemerahan, bruntusan, dan kulit yang sedang iritasi.",
      description: "Serum konsentrat dengan 85% ekstrak Centella Asiatica murni dari Madagaskar. Terbukti secara efektif meredakan kulit yang meradang, kemerahan karena paparan matahari, serta mempercepat pemulihan jerawat.",
      benefits: [
        "Meredakan kemerahan dalam waktu 15 menit pemakaian",
        "Mempercepat proses pengeringan jerawat",
        "Tekstur seringan air, tidak membuat pori tersumbat",
        "Meningkatkan imunitas kulit terhadap alergen luar"
      ],
      howToUse: "Teteskan 2-3 tetes serum langsung pada pipi dan dahi, ratakan dengan pijatan lembut memutar hingga terserap sempurna.",
      ingredients: "Centella Asiatica Extract (85%), Glycerin, Butylene Glycol, Madecassoside, Asiaticoside, Houttuynia Cordata Extract, Allantoin."
    },
    {
      id: "p5",
      name: "Oil-Free Water Gel Moisturizer",
      category: "Moisturizer",
      price: 95000,
      originalPrice: 120000,
      rating: 4.8,
      soldCount: "1.8k",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["oily", "combination", "normal"],
      tags: ["Oil-Free", "Polyglutamic Acid", "Aloe Vera"],
      shortDesc: "Pelembap bertekstur gel air yang menyegarkan, mengunci hidrasi tanpa bikin berminyak.",
      description: "Moisturizer berbasis air (water-burst gel) yang langsung mencair begitu dioleskan ke kulit. Memberikan sensasi dingin yang menyegarkan seketika, mengontrol kilap minyak, dan mengunci kelembapan sepanjang hari.",
      benefits: [
        "Cepat meresap dalam 10 detik tanpa rasa lengket",
        "Sensasi sejuk mendinginkan suhu kulit",
        "Non-komedogenik (tidak menyumbat pori)",
        "Memberikan hasil akhir matte-velvet alami"
      ],
      howToUse: "Ambil produk secukupnya dengan ujung jari, aplikasikan merata ke seluruh wajah dan leher setiap pagi dan malam setelah serum.",
      ingredients: "Aqua, Aloe Barbadensis Leaf Juice, Polyglutamic Acid, Betaine, Carbomer, Niacinamide, Phenoxyethanol, Ethylhexylglycerin."
    },
    {
      id: "p6",
      name: "Matte Pore-Blur Daily Sunscreen SPF 50+ PA++++",
      category: "Sunscreen",
      price: 89000,
      originalPrice: 110000,
      rating: 4.9,
      soldCount: "4.5k",
      image: "https://images.unsplash.com/photo-1556228722-d0b777a94ef9?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["oily", "acne_prone", "combination"],
      tags: ["SPF 50+ PA++++", "No Whitecast", "Pore-Blur"],
      shortDesc: "Tabir surya ringan berformula matte finish yang menyamarkan pori dan tahan keringat.",
      description: "Sunscreen hybrid perlindungan spektrum luas (UVA/UVB & Blue Light) dengan formula ringan yang menyerap kelebihan sebum, tidak meninggalkan residu putih (no whitecast), dan nyaman digunakan seharian.",
      benefits: [
        "Perlindungan tinggi UVA/UVB SPF 50+ PA++++",
        "Efek pore-blurring membuat wajah tampak mulus",
        "Tahan air dan keringat (sweatproof)",
        "Aman untuk kulit yang mudah berjerawat"
      ],
      howToUse: "Gunakan sebanyak 2 ruas jari sebagai tahap terakhir skincare pagi hari. Oleskan merata 15 menit sebelum terpapar sinar matahari.",
      ingredients: "Water, Ethylhexyl Methoxycinnamate, Zinc Oxide, Silica, Niacinamide, Tocopherol, Dimethicone, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine."
    },
    {
      id: "p7",
      name: "Glow Radiance Vitamin C Serum",
      category: "Serum",
      price: 115000,
      originalPrice: 145000,
      rating: 4.8,
      soldCount: "1.9k",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["normal", "dry", "combination"],
      tags: ["10% Ethyl Ascorbic", "Ferulic Acid", "Alpha Arbutin"],
      shortDesc: "Serum pencerah tinggi antioksidan untuk memudarkan flek hitam dan bikin kulit glowing.",
      description: "Diformulasikan dengan turunan Vitamin C stabil (Ethyl Ascorbic Acid) yang tidak mudah teroksidasi dan ramah di kulit. Bekerja sinergis dengan Alpha Arbutin untuk meratakan warna kulit dan mencerahkan kulit kusam.",
      benefits: [
        "Mencerahkan noda hitam dan hiperpigmentasi dalam 14 hari",
        "Menangkal radikal bebas dan polusi udara perkotaan",
        "Meningkatkan produksi kolagen untuk kulit kenyal",
        "Memberikan efek glowing natural"
      ],
      howToUse: "Teteskan 2-3 tetes pada pagi dan malam hari. Di pagi hari, selalu lanjutkan dengan tabir surya (sunscreen).",
      ingredients: "Aqua, 3-O-Ethyl Ascorbic Acid, Alpha Arbutin, Ferulic Acid, Sodium Hyaluronate, Citrus Aurantium Dulcis Extract."
    },
    {
      id: "p8",
      name: "Ultra Moisture Barrier Cream",
      category: "Moisturizer",
      price: 105000,
      originalPrice: 130000,
      rating: 4.9,
      soldCount: "1.6k",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["dry", "sensitive"],
      tags: ["Shea Butter", "Oat Extract", "Ceramide Complex"],
      shortDesc: "Krim pelembap kaya nutrisi untuk mengunci hidrasi dan memulihkan kulit yang kering terkelupas.",
      description: "Krim malam yang kaya akan Colloidal Oatmeal dan Shea Butter organik. Membentuk lapisan perlindungan lembut di atas kulit untuk mencegah penguapan air (TEWL) saat tidur di ruangan ber-AC.",
      benefits: [
        "Mengunci kelembapan kulit hingga pagi hari",
        "Meredakan rasa gatal akibat kulit yang sangat kering",
        "Membuat kulit terasa kenyal dan lembut seketika",
        "Bebas wewangian sintetis dan pewarna"
      ],
      howToUse: "Hangatkan sedikit krim di ujung jari, lalu tekan perlahan ke seluruh wajah hingga meresap sebelum tidur malam.",
      ingredients: "Water, Butyrospermum Parkii (Shea) Butter, Caprylic/Capric Trigrylic/Capric Triglyceride, Avena Sativa (Oat) Kernel Extract, Ceramide NP, Squalane."
    },
    {
      id: "p9",
      name: "Matte Foundation - Warm Sand",
      category: "Foundation",
      price: 149000,
      originalPrice: 185000,
      rating: 4.9,
      soldCount: "2.8k",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["oily", "combination", "normal"],
      undertoneMatch: "Warm - Sand",
      undertoneHex: "#D5A073",
      tags: ["SPF 30", "Matte 16H", "Warm Undertone"],
      shortDesc: "Foundation ringan penutup pori yang tahan minyak hingga 16 jam, shade pas untuk warm undertone.",
      description: "Alas bedak cair berformula mikro-powder yang mengunci sebum berlebih dan menyamarkan pori-pori besar tanpa terasa berat. Shade Warm Sand dirancang khusus agar tidak menimbulkan efek abu-abu pada undertone kulit wanita Indonesia.",
      benefits: [
        "Oil-control hingga 16 jam bebas kilap",
        "Medium-to-full buildable coverage",
        "Tidak menyumbat pori (non-comedogenic)",
        "Mengandung SPF 30 PA+++ dan Vitamin E"
      ],
      howToUse: "Kocok sebelum digunakan. Tuang 1-2 pump pada punggung tangan, ratakan dengan spons atau kuas foundation dari tengah wajah ke arah luar.",
      ingredients: "Water, Cyclopentasiloxane, Titanium Dioxide, Isododecane, Dimethicone, Silica, Niacinamide, Tocopheryl Acetate, CI 77492, CI 77491."
    },
    {
      id: "p10",
      name: "Glow Serum Foundation - Cool Rose",
      category: "Foundation",
      price: 149000,
      originalPrice: 185000,
      rating: 4.8,
      soldCount: "1.4k",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=80",
      suitableFor: ["dry", "normal", "sensitive"],
      undertoneMatch: "Cool - Rose",
      undertoneHex: "#E8B4A2",
      tags: ["Hyaluronic Acid", "Dewy Glow", "Cool Undertone"],
      shortDesc: "Serum foundation kaya hidrasi dengan hasil dewy sehat bercahaya untuk cool undertone.",
      description: "Perpaduan alas bedak dan 80% hydrating serum dengan Hyaluronic Acid dan Niacinamide. Memberikan kilau sehat dewy look yang menyatu alami dengan kulit ber-undertone cool.",
      benefits: [
        "Menghidrasi kulit sepanjang hari",
        "Efek dewy glass-skin alami",
        "Tekstur seringan serum",
        "Aman untuk kulit kering dan sensitif"
      ],
      howToUse: "Aplikasikan secara merata menggunakan jari atau cushion puff untuk coverage dewy yang glowing dan merata.",
      ingredients: "Aqua, Hyaluronic Acid, Squalane, Niacinamide, Titanium Dioxide, Iron Oxides, Phenoxyethanol."
    }
  ],

  // Tips & Artikel Edukasi Kecantikan
  articles: [
    {
      id: "a1",
      title: "5 Tips Merawat Kulit Berminyak agar Bebas Kilap Seharian",
      category: "Perawatan Kulit",
      readTime: "4 menit baca",
      date: "20 Nov 2026",
      image: "https://images.unsplash.com/photo-1512290900672-1f55b939db20?w=600&auto=format&fit=crop&q=80",
      summary: "Memiliki kulit berminyak bukan berarti harus mencuci muka terlalu sering. Simak langkah yang tepat di sini!",
      content: `
        <p class="mb-3">Banyak orang dengan kulit berminyak membuat kesalahan dengan mencuci muka terlalu sering menggunakan sabun berkadar busa tinggi. Akibatnya, skin barrier justru teriritasi dan memicu kelenjar minyak memproduksi sebum lebih banyak lagi sebagai respon pertahanan.</p>
        
        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">1. Pilih Pembersih Wajah Lembut (Low pH)</h4>
        <p class="mb-3">Gunakan pembersih wajah dengan pH seimbang (5.5) yang mengandung asam salisilat (Salicylic Acid) atau tea tree oil untuk meluruhkan kotoran di pori tanpa membuat kulit kesat atau 'ketarik'.</p>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">2. Jangan Lewatkan Pelembap!</h4>
        <p class="mb-3">Mitos terbesar adalah kulit berminyak tidak butuh pelembap. Kulit yang dehidrasi justru akan memproduksi lebih banyak minyak. Pilihlah pelembap bertekstur gel air (water-gel) yang bebas minyak (oil-free).</p>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">3. Eksfoliasi Berkala dengan BHA</h4>
        <p class="mb-3">BHA (Beta Hydroxy Acid) larut dalam minyak, sehingga mampu menembus sebum dan membersihkan komedo dari dalam pori. Lakukan eksfoliasi 2-3 kali seminggu pada malam hari.</p>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">4. Gunakan Sunscreen Matte Finish</h4>
        <p class="mb-3">Cari sunscreen berbahan dasar gel atau fluid dengan kandungan silica yang mampu menyerap kilap minyak sepanjang hari.</p>
      `,
      relatedProductIds: ["p1", "p2", "p5", "p6"]
    },
    {
      id: "a2",
      title: "Panduan Urutan Skincare Pagi & Malam untuk Pemula",
      category: "Perawatan Kulit",
      readTime: "5 menit baca",
      date: "18 Nov 2026",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80",
      summary: "Bingung mulai dari mana? Kuasai aturan dasar 'Cleansing, Hydrating, Moisturizing, & Protecting'.",
      content: `
        <p class="mb-3">Merawat kulit tidak harus rumit dengan 10 langkah skincare. Kunci utama keberhasilan skincare adalah konsistensi dan pemahaman terhadap produk dasar (basic skincare).</p>
        
        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Urutan Pagi Hari (Protect & Hydrate)</h4>
        <ol class="list-decimal pl-5 space-y-1 mb-3">
          <li><strong>Facial Wash:</strong> Bersihkan minyak alami yang menumpuk saat tidur.</li>
          <li><strong>Toner/Essence:</strong> Kembalikan hidrasi kulit agar siap menyerap produk berikutnya.</li>
          <li><strong>Moisturizer:</strong> Mengunci hidrasi dan menjaga kelembapan.</li>
          <li><strong>Sunscreen:</strong> Langkah terpenting untuk melindungi kulit dari penuaan dini dan kanker kulit.</li>
        </ol>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Urutan Malam Hari (Repair & Nourish)</h4>
        <ol class="list-decimal pl-5 space-y-1 mb-3">
          <li><strong>First Cleanser:</strong> Micellar water atau cleansing balm untuk melunturkan sunscreen & debu.</li>
          <li><strong>Second Cleanser:</strong> Sabun cuci muka untuk membersihkan residu.</li>
          <li><strong>Serum:</strong> Bahan aktif penarget masalah kulit (misal Vitamin C, Niacinamide, atau Retinol).</li>
          <li><strong>Night Cream / Barrier Cream:</strong> Menutrisi dan memulihkan sel kulit selama kamu tidur.</li>
        </ol>
      `,
      relatedProductIds: ["p1", "p3", "p5", "p6"]
    },
    {
      id: "a3",
      title: "Mitos Skincare yang Masih Sering Dipercaya, Nomor 3 Bikin Kaget!",
      category: "Edukasi",
      readTime: "3 menit baca",
      date: "15 Nov 2026",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
      summary: "Apakah pasta gigi bisa mengobati jerawat? Simak penjelasan ilmiah para dermatolog.",
      content: `
        <p class="mb-3">Di era media sosial, banyak tips kecantikan DIY (Do It Yourself) yang beredar namun sebenarnya berbahaya untuk kesehatan skin barrier kita.</p>
        
        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Mitos 1: Mengoleskan Pasta Gigi pada Jerawat</h4>
        <p class="mb-3"><span class="text-rose-600 font-semibold">Fakta:</span> Pasta gigi mengandung bahan pemutih, menthol, dan fluoride yang bersifat abrasif. Mengoleskannya pada jerawat dapat menyebabkan luka bakar kimiawi, dermatitis kontak, dan bekas hitam yang sulit hilang.</p>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Mitos 2: Tidak Perlu Sunscreen Saat di Dalam Ruangan</h4>
        <p class="mb-3"><span class="text-rose-600 font-semibold">Fakta:</span> Sinar UVA dapat menembus kaca jendela ruangan dan awan mendung. Jika kamu bekerja di dekat jendela, sunscreen tetap wajib digunakan.</p>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Mitos 3: Sensasi Perih / Cekit-cekit Berarti Produk Sedang Bekerja</h4>
        <p class="mb-3"><span class="text-rose-600 font-semibold">Fakta:</span> Sensasi perih menyengat yang berkepanjangan adalah tanda bahwa lapisan pelindung kulitmu sedang mengalami iritasi atau alergi, bukan indikator efektivitas produk.</p>
      `,
      relatedProductIds: ["p3", "p4", "p6"]
    },
    {
      id: "a4",
      title: "Cara Menentukan Undertone Kulit untuk Pilihan Shade Foundation Tepat",
      category: "Make Up",
      readTime: "4 menit baca",
      date: "12 Nov 2026",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80",
      summary: "Ketahui apakah kamu Warm, Cool, atau Neutral undertone agar complexion tidak terlihat abu-abu.",
      content: `
        <p class="mb-3">Sering merasa hasil foundation tampak abu-abu atau justru terlalu kuning? Masalahnya bukan pada tingkat kegelapan kulitmu (skintone), melainkan pada rona dasar kulit bawah (undertone).</p>
        
        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Tes Warna Pembuluh Darah (Urat Nadi)</h4>
        <ul class="list-disc pl-5 space-y-1 mb-3">
          <li><strong>Cool Undertone:</strong> Pembuluh darah di pergelangan tangan tampak kebiruan atau ungu. Cocok dengan foundation ber-hint pinkish/rose.</li>
          <li><strong>Warm Undertone:</strong> Pembuluh darah tampak kehijauan atau zaitun. Cocok dengan foundation ber-hint golden/yellow/warm sand.</li>
          <li><strong>Neutral Undertone:</strong> Campuran antara hijau dan biru. Cocok dengan foundation netral/beige seimbang.</li>
        </ul>

        <h4 class="font-bold text-gray-800 text-base mt-4 mb-2">Tes Perhiasan Emas vs Perak</h4>
        <p class="mb-3">Jika kamu terlihat lebih berseri saat memakai perhiasan emas, kemungkinan besar kamu Warm. Jika perak lebih memancarkan pesonamu, kamu adalah Cool undertone.</p>
      `,
      relatedProductIds: ["p5", "p6", "p7"]
    }
  ]
};

