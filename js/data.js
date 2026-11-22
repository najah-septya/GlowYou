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

  // Produk Skincare Terkurasi Asli (Brand Resmi & Populer di Indonesia)
  products: [
    {
      id: "p1",
      name: "Somethinc Low pH Gentle Jelly Cleanser",
      brand: "Somethinc",
      category: "Facial Wash",
      price: 99000,
      originalPrice: 119000,
      rating: 4.9,
      soldCount: "12.4k",
      image: "https://images.somethinc.com/uploads/products/thumbs/800x800/PDP_Web_Low_pH_Gentle_Jelly_Cleanser.jpg",
      suitableFor: ["oily", "acne_prone", "combination", "sensitive", "normal"],
      tags: ["Low pH 5.5", "Japanese Mugwort", "Tea Tree", "Vegan"],
      shortDesc: "Pembersih wajah vegan bertekstur jelly dengan pH seimbang 5.5, bersihkan pori tanpa bikin kulit terasa tertarik.",
      description: "Pembersih wajah berbasis vegan bertekstur jelly dengan kandungan Japanese Mugwort, Tea Tree, Centella, dan Peppermint. Teruji klinis mampu membersihkan debu, kotoran, dan sebum berlebih hingga ke pori terdalam tanpa merusak lapisan skin barrier alami.",
      benefits: [
        "pH balance 5.5 seimbang dengan pH alami kulit",
        "Menenangkan kemerahan dan merawat kulit berjerawat",
        "Tidak membuat kulit kesat atau 'ketarik' setelah dibilas",
        "Hypoallergenic & aman untuk kulit paling sensitif"
      ],
      howToUse: "Basahi wajah dengan air, tuang cleanser secukupnya ke telapak tangan. Busakan lembut lalu pijat ke seluruh wajah dengan gerakan melingkar selama 60 detik. Bilas dengan air sampai bersih.",
      ingredients: "Water, Potassium Laureth Phosphate, Glycerin, Potassium Cocoyl Glutamate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Butylene Glycol, Artemisia Princeps Leaf Extract, Melaleuca Alternifolia (Tea Tree) Leaf Water, Centella Asiatica Extract."
    },
    {
      id: "p2",
      name: "Avoskin Miraculous Refining Toner (AHA-BHA-PHA)",
      brand: "Avoskin",
      category: "Toner",
      price: 175000,
      originalPrice: 209000,
      rating: 4.9,
      soldCount: "8.7k",
      image: "https://medias.watsons.co.id/publishing/WTCID-43896-front-zoom.jpg?version=1795014937",
      suitableFor: ["oily", "acne_prone", "combination"],
      tags: ["5% AHA", "1% BHA", "2% PHA", "Niacinamide 2%"],
      shortDesc: "Toner eksfoliasi legendaris untuk mengangkat sel kulit mati, hempas komedo, dan meratakan tekstur kulit.",
      description: "Toner eksfoliasi harian yang memadukan 5% AHA, 1% BHA, 2% PHA serta Niacinamide dan Tea Tree. Sangat efektif meluruhkan sel kulit mati yang menyumbat pori, memudarkan noda hitam bekas jerawat, dan menghaluskan bruntusan.",
      benefits: [
        "Mengeksfoliasi sel kulit mati hingga lapisan pori terdalam",
        "Mengecilkan tampilan pori-pori dan meluruhkan komedo",
        "Mencerahkan noda hitam bekas jerawat (PIH)",
        "Membuat tekstur kulit menjadi lembut dan mulus"
      ],
      howToUse: "Tuang toner pada kapas secukupnya, usapkan lembut pada wajah dan leher yang telah dibersihkan di malam hari. Gunakan 2-3 kali seminggu untuk pemula.",
      ingredients: "Water, Glycerin, Glycolic Acid, Butylene Glycol, Propylene Glycol, Gluconolactone, Melaleuca Alternifolia (Tea Tree) Leaf Extract, Niacinamide, Salicylic Acid, Tasmannia Lanceolata Fruit/Leaf Extract."
    },
    {
      id: "p3",
      name: "Skintific 5X Ceramide Soothing Toner",
      brand: "Skintific",
      category: "Toner",
      price: 119000,
      originalPrice: 145000,
      rating: 4.9,
      soldCount: "15.1k",
      image: "https://images.soco.id/5d365c76-e0c8-420e-a23e-0efa86850730-.jpg",
      suitableFor: ["dry", "sensitive", "normal", "combination"],
      tags: ["5X Ceramide", "Probiotik", "Calendula Extract"],
      shortDesc: "Toner penyelamat skin barrier yang menghidrasi secara intensif dan meredakan kulit kemerahan.",
      description: "Toner yang memadukan 5 jenis Ceramide esensial (NP, EOP, AP, AS, NS), Probiotik Kompleks, dan Calendula. Bekerja aktif menyeimbangkan mikrobioma kulit, meredakan iritasi kemerahan, dan mengunci kelembapan hingga 72 jam.",
      benefits: [
        "Memperbaiki dan memperkuat lapisan pelindung kulit (skin barrier)",
        "Meredakan sensasi kulit perih, terbakar, atau gatal seketika",
        "Tekstur essence ringan yang langsung meresap ke kulit",
        "Menjaga elastisitas dan kekenyalan kulit wajah"
      ],
      howToUse: "Tuangkan pada telapak tangan yang bersih, lalu tepuk-tepuk perlahan ke seluruh wajah hingga meresap sempurna setiap pagi dan malam setelah mencuci muka.",
      ingredients: "Aqua, Butylene Glycol, Glycerin, Ceramide NP, Ceramide EOP, Ceramide AP, Ceramide AS, Ceramide NS, Bifida Ferment Lysate, Calendula Officinalis Extract."
    },
    {
      id: "p4",
      name: "Somethinc 5% Niacinamide + Moisture Sabi Beet Serum",
      brand: "Somethinc",
      category: "Serum",
      price: 89000,
      originalPrice: 115000,
      rating: 4.9,
      soldCount: "25.8k",
      image: "https://image.femaledaily.com/dyn/144/images/prod-pics/product_1623385608_5_Niacinam_800x800.jpg",
      suitableFor: ["sensitive", "acne_prone", "oily", "normal", "combination"],
      tags: ["5% Niacinamide", "SabiWhite®", "Centella Asiatica"],
      shortDesc: "Serum pencerah nomor 1 untuk memudarkan noda hitam bekas jerawat dan memperkuat pertahanan skin barrier.",
      description: "Diformulasikan dengan 5% Niacinamide kelas farmasi dan SabiWhite® (ekstrak kunyit alami berdaya cerah tinggi tanpa iritasi). Membantu mencerahkan warna kulit tidak merata, mengontrol kelebihan minyak, dan meredakan peradangan jerawat.",
      benefits: [
        "Mencerahkan noda hitam bekas jerawat dalam 4 minggu",
        "Mengontrol produksi sebum minyak berlebih di T-Zone",
        "Menyamarkan kemerahan dan menenangkan jerawat aktif",
        "Tekstur seringan air, cepat meresap dan tidak lengket"
      ],
      howToUse: "Teteskan 2-3 tetes serum ke telapak tangan atau langsung ke area dahi dan pipi. Ratakan dengan lembut hingga meresap sebelum pelembap.",
      ingredients: "Centella Asiatica Water (72.5%), Aqua, Niacinamide, Butylene Glycol, Glycerin, Tetrahydrocurcumin (SabiWhite®), Beta Vulgaris (Beet) Root Extract, Allantoin."
    },
    {
      id: "p5",
      name: "Skintific 5X Ceramide Barrier Repair Moisture Gel",
      brand: "Skintific",
      category: "Moisturizer",
      price: 135000,
      originalPrice: 169000,
      rating: 4.9,
      soldCount: "38.2k",
      image: "https://image.femaledaily.com/dyn/144/images/prod-pics/product_1661744063_f76585b9_5_800x800.png",
      suitableFor: ["oily", "combination", "normal", "sensitive"],
      tags: ["5X Ceramide", "Hyaluronic Acid", "Centella", "Oil-Free"],
      shortDesc: "Pelembap gel nomor 1 di Indonesia yang terbukti memperbaiki skin barrier dan mengunci hidrasi bebas kilap.",
      description: "Moisturizer bertekstur gel air sejuk yang menggabungkan 5 jenis Ceramide berbeda, Hyaluronic Acid, dan Centella Asiatica. Mengatasi permasalahan skin barrier yang rusak seperti kulit kering mengelupas, kemerahan, dan pori-pori besar tanpa bikin berminyak.",
      benefits: [
        "Memperbaiki skin barrier yang rusak dalam 14 hari pemakaian",
        "Tekstur water-burst yang cepat meresap dan mengontrol minyak",
        "Memberikan sensasi sejuk menyegarkan pada kulit yang iritasi",
        "Non-comedogenic (tidak menyumbat pori-pori)"
      ],
      howToUse: "Ambil produk secukupnya seukuran koin, oleskan secara merata ke seluruh wajah dan leher setiap pagi dan malam.",
      ingredients: "Aqua, Butylene Glycol, Hydrogenated Polyisobutene, Dimethicone, Glycerin, Ceramide EOP, Ceramide AP, Ceramide NP, Ceramide AS, Ceramide NS, Centella Asiatica Extract, Sodium Hyaluronate."
    },
    {
      id: "p6",
      name: "Azarine Hydrasoothe Sunscreen Gel SPF45 PA++++",
      brand: "Azarine",
      category: "Sunscreen",
      price: 65000,
      originalPrice: 79000,
      rating: 4.9,
      soldCount: "50k+",
      image: "https://medias.watsons.co.id/publishing/WTCID-36163-side-zoom.jpg",
      suitableFor: ["oily", "acne_prone", "combination", "normal"],
      tags: ["SPF45 PA++++", "0% Alkohol", "0% Silicone", "No Whitecast"],
      shortDesc: "Sunscreen gel berbasis air yang sangat ringan, dingin di kulit, tanpa whitecast, dan bebas minyak.",
      description: "Tabir surya berbentuk gel berbahan dasar air yang sangat ringan, dingin dan mudah meresap untuk seluruh jenis kulit termasuk kulit berminyak dan acne prone. Diformulasikan dengan bahan alami royal jelly, aloe vera, dan green tea yang menutrisi kulit.",
      benefits: [
        "Perlindungan tinggi UVA/UVB SPF45 PA++++",
        "0% Alkohol, 0% Minyak, dan 0% Silikon (aman untuk jerawat)",
        "Sangat ringan seringan air dan bebas residu putih (no whitecast)",
        "Sensasi dingin yang menenangkan kulit saat cuaca terik"
      ],
      howToUse: "Oleskan merata sebanyak 2 ruas jari pada wajah dan leher 15 menit sebelum beraktivitas di luar ruangan. Re-apply setiap 2-3 jam sekali.",
      ingredients: "Aqua, Glycerin, Propanediol, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Aloe Barbadensis Leaf Juice, Camellia Sinensis (Green Tea) Leaf Extract, Royal Jelly, Resveratrol."
    },
    {
      id: "p7",
      name: "Glad2Glow Centella Allantoin Soothing Gel Moisturizer",
      brand: "Glad2Glow",
      category: "Moisturizer",
      price: 49000,
      originalPrice: 65000,
      rating: 4.8,
      soldCount: "22.5k",
      image: "http://glad2glow.com/cdn/shop/files/G2G-134U.jpg",
      suitableFor: ["acne_prone", "sensitive", "oily"],
      tags: ["Centella Asiatica", "Allantoin", "Cooling Gel", "Acne Care"],
      shortDesc: "Pelembap gel penyejuk jerawat dengan ekstrak Centella yang redakan kemerahan dan bruntusan.",
      description: "Pelembap bertekstur gel ringan dengan sensasi cooling yang menenangkan kulit yang sedang berjerawat atau meradang. Mengandung Centella Asiatica dan Allantoin untuk mengontrol sebum berlebih dan merawat kulit rentan jerawat.",
      benefits: [
        "Menenangkan kulit bruntusan dan jerawat yang meradang",
        "Sensasi dingin instan yang meredakan kulit kemerahan",
        "Membantu mengontrol produksi minyak berlebih",
        "Mudah meresap dan tidak lengket di kulit"
      ],
      howToUse: "Ambil produk secukupnya, aplikasikan pada seluruh wajah secara merata pada pagi dan malam hari setelah pemakaian serum.",
      ingredients: "Aqua, Glycerin, Centella Asiatica Extract, Allantoin, Butylene Glycol, Panthenol, Carbomer, Phenoxyethanol, Ethylhexylglycerin."
    },
    {
      id: "p8",
      name: "Skin Aqua UV Moisture Gel SPF 30 PA++",
      brand: "Skin Aqua",
      category: "Sunscreen",
      price: 55000,
      originalPrice: 68000,
      rating: 4.8,
      soldCount: "16.3k",
      image: "https://www.rohto.co.id/assets/uploads/product/20251013041831.png",
      suitableFor: ["dry", "sensitive", "normal"],
      tags: ["SPF 30 PA++", "Improved Hyaluronic Acid", "Collagen"],
      shortDesc: "Sunscreen gel melembapkan dengan Improved Hyaluronic Acid dan Kolagen untuk hidrasi kulit kering.",
      description: "Tabir surya berbahan dasar air yang memberikan perlindungan ganda terhadap sinar UV-A dan UV-B sekaligus melembapkan kulit kering. Mengandung Improved Hyaluronic Acid (AcHA) dan Kolagen yang menjaga elastisitas kulit.",
      benefits: [
        "Melembapkan dan melembutkan kulit kering sepanjang hari",
        "Mudah meresap tanpa meninggalkan rasa lengket",
        "Dapat digunakan sebagai dasar make-up yang menghidrasi",
        "Bebas zat pewarna sintetis dan parfum"
      ],
      howToUse: "Usapkan di wajah yang telah dibersihkan. Biarkan hingga meresap dan gunakan sebelum mengaplikasikan riasan.",
      ingredients: "Water, Ethylhexyl Methoxycinnamate, Butylene Glycol, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, Sodium Acetylated Hyaluronate, Soluble Collagen, Panthenol."
    },
    {
      id: "p9",
      name: "Make Over Powerstay 24H Weightless Liquid Foundation - Warm Sand",
      brand: "Make Over",
      category: "Foundation",
      price: 175000,
      originalPrice: 210000,
      rating: 4.9,
      soldCount: "18.6k",
      image: "https://medias.watsons.co.id/publishing/WTCID-31311-front-zoom.jpg?version=1734750660",
      suitableFor: ["oily", "combination", "normal"],
      undertoneMatch: "Warm - Sand",
      undertoneHex: "#D5A073",
      tags: ["Oil Control 24H", "SPF 30 PA+++", "Warm Undertone", "Matte Finish"],
      shortDesc: "Foundation cair berdaya tahan 24 jam dengan hasil matte alami yang menyatu sempurna pada warm undertone.",
      description: "Liquid foundation yang memberikan hasil matte alami dan tahan hingga 24 jam dengan formula yang ringan dan breathable di kulit. Diformulasikan khusus dengan Oil Absorber mikro untuk mengontrol minyak berlebih tanpa membuat complexion tampak cakey.",
      benefits: [
        "Oil control aktif hingga 24 jam bebas kilap",
        "Medium-to-high buildable coverage yang menyamarkan pori",
        "Formula ringan yang tidak menyumbat pori (non-comedogenic)",
        "Dilengkapi SPF 30 PA+++ untuk proteksi sinar matahari"
      ],
      howToUse: "Kocok botol sebelum digunakan. Tuang 1-2 pump pada punggung tangan, baurkan merata ke seluruh wajah menggunakan spons lembap atau kuas foundation.",
      ingredients: "Water, Cyclopentasiloxane, Titanium Dioxide, Ethylhexyl Methoxycinnamate, Dimethicone, Silica, Niacinamide, Tocopheryl Acetate, CI 77492, CI 77491."
    },
    {
      id: "p10",
      name: "Wardah Colorfit Matte Foundation - Warm Beige",
      brand: "Wardah",
      category: "Foundation",
      price: 68000,
      originalPrice: 82000,
      rating: 4.8,
      soldCount: "29.4k",
      image: "https://medias.watsons.co.id/publishing/WTCID-19564-front-zoom.jpg",
      suitableFor: ["normal", "dry", "combination", "sensitive"],
      undertoneMatch: "Neutral - Beige",
      undertoneHex: "#E5B998",
      tags: ["SkinMatch Technology", "Matte Finish", "SPF 30 PA+++"],
      shortDesc: "Foundation ringan dengan SkinMatch Technology yang menyatu sempurna mengikuti warna alami kulit.",
      description: "Foundation cair ringan dengan SkinMatch Technology, pigmen yang didesain khusus dapat menyatu sempurna dengan warna natural kulitmu. Memberikan hasil akhir matte yang sehat dan tidak membuat kulit kering.",
      benefits: [
        "SkinMatch Technology yang menyatu alami dengan kulit",
        "Transfer-proof dan tahan hingga 12 jam",
        "Mengontrol kilap minyak tanpa rasa kering",
        "Cocok untuk makeup harian yang natural"
      ],
      howToUse: "Aplikasikan secara merata ke seluruh wajah menggunakan jari tangan atau beauty blender dari bagian tengah wajah mengarah ke luar.",
      ingredients: "Aqua, Cyclopentasiloxane, Ethylhexyl Methoxycinnamate, Dimethicone, Butylene Glycol, Silica, Zinc Oxide, Triethoxycaprylylsilane, CI 77891, CI 77492."
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
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80",
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

