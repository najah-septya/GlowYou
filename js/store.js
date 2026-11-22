/**
 * GlowYou State Management & LocalStorage Persistence
 */

const STORAGE_KEY = "glowyou_app_state_v1";

const defaultState = {
  hasCompletedOnboarding: false,
  user: {
    name: "Alifa Najwa",
    email: "alifa@glowyou.id",
    avatar: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23FCE8E6'/><circle cx='50' cy='42' r='24' fill='%23F8C7BF'/><path d='M50 16c-18 0-26 12-26 24 0 10 5 18 10 22 2 4 4 10 3 14h26c-1-4 1-10 3-14 5-4 10-12 10-22 0-12-8-24-26-24z' fill='%237A404F'/><circle cx='42' cy='46' r='2.5' fill='%2343222A'/><circle cx='58' cy='46' r='2.5' fill='%2343222A'/><path d='M46 54c2 2 6 2 8 0' stroke='%2343222A' stroke-width='2' stroke-linecap='round' fill='none'/></svg>",
    skinType: "oily", // Default atau null jika belum tes
    undertone: "Warm - Sand",
    undertoneHex: "#D5A073",
    focusArea: "Tone Match & Hydration",
    scanMetrics: {
      sebum: 82,
      hydration: 64,
      pores: "Pori-pori Terlihat",
      redness: "Ringan",
      acneSpots: 3
    },
    lastScanPhoto: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23241C1E'/><circle cx='200' cy='180' r='100' fill='%23F8C7BF'/><path d='M200 70c-75 0-108 50-108 100 0 42 21 75 42 92 8 17 17 42 13 58h106c-4-16 5-41 13-58 21-17 42-50 42-92 0-50-33-100-108-100z' fill='%237A404F'/><circle cx='165' cy='195' r='10' fill='%2343222A'/><circle cx='235' cy='195' r='10' fill='%2343222A'/><path d='M185 235c10 8 20 8 30 0' stroke='%2343222A' stroke-width='6' stroke-linecap='round' fill='none'/></svg>",
    lastAnalysisDate: "2026-11-22"
  },
  skinAnalysisHistory: [
    {
      date: "2026-11-20",
      skinType: "oily",
      summary: "Pori-pori terlihat lebih besar, berminyak di T-zone, rentan jerawat."
    }
  ],
  cart: [
    {
      productId: "p1",
      quantity: 1
    },
    {
      productId: "p5",
      quantity: 1
    }
  ],
  wishlist: ["p2", "p6"],
  orders: [
    {
      id: "GLOW-849201",
      date: "2026-11-19 14:20",
      items: [
        { productId: "p6", quantity: 1, price: 89000, name: "Matte Pore-Blur Daily Sunscreen" }
      ],
      shippingAddress: {
        recipient: "Alifa Najwa",
        phone: "081234567890",
        address: "Jl. Melati No. 18, Kebayoran Baru",
        city: "Jakarta Selatan",
        postalCode: "12140"
      },
      courier: "J&T Express (Reguler)",
      shippingFee: 12000,
      totalAmount: 101000,
      paymentMethod: "BCA Virtual Account",
      vaNumber: "8809128391028391",
      status: "Diproses" // "Menunggu Pembayaran", "Diproses", "Dikirim", "Selesai"
    }
  ],
  currentTab: "home", // "home" | "product" | "tips" | "profile"
  currentView: "main", // "splash" | "onboarding" | "main" | "quiz" | "result" | "product-detail" | "article-detail" | "cart" | "checkout" | "order-success" | "orders-list" | "wishlist-view"
  selectedProductId: null,
  selectedArticleId: null,
  activeProductCategory: "Semua",
  activeProductSkinFilter: "Semua",
  activeTipsCategory: "Semua"
};

class GlowStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Gagal memuat state dari localStorage:", e);
    }
    return { ...defaultState };
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Gagal menyimpan state ke localStorage:", e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  // Navigation actions
  setTab(tab) {
    this.state.currentTab = tab;
    this.state.currentView = "main";
    this.saveState();
  }

  setView(view, params = {}) {
    this.state.currentView = view;
    if (params.productId !== undefined) this.state.selectedProductId = params.productId;
    if (params.articleId !== undefined) this.state.selectedArticleId = params.articleId;
    this.saveState();
  }

  completeOnboarding() {
    this.state.hasCompletedOnboarding = true;
    this.state.currentView = "main";
    this.saveState();
  }

  // Camera AI Skin Analysis actions
  saveCameraAnalysis({ skinType, undertone, undertoneHex, focusArea, metrics, photo }) {
    const skinInfo = GLOW_DATA.skinTypes[skinType];
    const todayStr = new Date().toISOString().split("T")[0];

    this.state.user.skinType = skinType;
    if (undertone) this.state.user.undertone = undertone;
    if (undertoneHex) this.state.user.undertoneHex = undertoneHex;
    if (focusArea) this.state.user.focusArea = focusArea;
    if (metrics) this.state.user.scanMetrics = metrics;
    if (photo) this.state.user.lastScanPhoto = photo;
    this.state.user.lastAnalysisDate = todayStr;

    this.state.skinAnalysisHistory.unshift({
      date: todayStr,
      skinType: skinType,
      undertone: undertone || "Warm - Sand",
      summary: `Hasil Scan Kamera: ${skinInfo ? skinInfo.name : skinType} • Undertone ${undertone || 'Warm Sand'} • Sebum ${metrics ? metrics.sebum : '78'}%`
    });

    this.saveState();
  }

  // Skin Analysis actions
  saveSkinAnalysis(typeId) {
    const skinInfo = GLOW_DATA.skinTypes[typeId];
    if (!skinInfo) return;

    const todayStr = new Date().toISOString().split("T")[0];
    this.state.user.skinType = typeId;
    this.state.user.lastAnalysisDate = todayStr;

    this.state.skinAnalysisHistory.unshift({
      date: todayStr,
      skinType: typeId,
      summary: skinInfo.characteristics[0] + ", " + skinInfo.characteristics[1]
    });

    this.saveState();
  }

  // Wishlist actions
  toggleWishlist(productId) {
    const idx = this.state.wishlist.indexOf(productId);
    if (idx > -1) {
      this.state.wishlist.splice(idx, 1);
    } else {
      this.state.wishlist.push(productId);
    }
    this.saveState();
  }

  isInWishlist(productId) {
    return this.state.wishlist.includes(productId);
  }

  // Cart actions
  addToCart(productId, quantity = 1) {
    const existing = this.state.cart.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.state.cart.push({ productId, quantity });
    }
    this.saveState();
  }

  updateCartQty(productId, delta) {
    const item = this.state.cart.find(i => i.productId === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }
    }
    this.saveState();
  }

  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter(item => item.productId !== productId);
    this.saveState();
  }

  clearCart() {
    this.state.cart = [];
    this.saveState();
  }

  getCartCount() {
    return this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getCartSubtotal() {
    return this.state.cart.reduce((total, item) => {
      const prod = GLOW_DATA.products.find(p => p.id === item.productId);
      return total + (prod ? prod.price * item.quantity : 0);
    }, 0);
  }

  // Orders actions
  createOrder({ recipient, phone, address, city, postalCode, courier, shippingFee, paymentMethod }) {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const orderId = `GLOW-${randomNum}`;

    // Siapkan item list
    const items = this.state.cart.map(item => {
      const prod = GLOW_DATA.products.find(p => p.id === item.productId);
      return {
        productId: item.productId,
        quantity: item.quantity,
        price: prod ? prod.price : 0,
        name: prod ? prod.name : "Produk GlowYou"
      };
    });

    const subtotal = this.getCartSubtotal();
    const totalAmount = subtotal + shippingFee;

    const newOrder = {
      id: orderId,
      date: new Date().toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" }),
      items,
      shippingAddress: { recipient, phone, address, city, postalCode },
      courier,
      shippingFee,
      totalAmount,
      paymentMethod,
      vaNumber: paymentMethod.includes("BCA") ? "8809" + Math.floor(1000000000 + Math.random() * 9000000000) : "0812" + Math.floor(10000000 + Math.random() * 90000000),
      status: paymentMethod === "COD (Bayar di Tempat)" ? "Diproses" : "Menunggu Pembayaran"
    };

    this.state.orders.unshift(newOrder);
    this.clearCart();
    this.state.latestOrder = newOrder;
    this.saveState();
    return newOrder;
  }
}

const store = new GlowStore();

