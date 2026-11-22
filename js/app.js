/**
 * GlowYou - Main Application Logic & UI Renderer
 */

// Format Rupiah Currency
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(number);
}

// GlowYou Default Avatar SVG
const GLOWYOU_FALLBACK_AVATAR = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%23FCE8E6'/><circle cx='50' cy='42' r='24' fill='%23F8C7BF'/><path d='M50 16c-18 0-26 12-26 24 0 10 5 18 10 22 2 4 4 10 3 14h26c-1-4 1-10 3-14 5-4 10-12 10-22 0-12-8-24-26-24z' fill='%237A404F'/><circle cx='42' cy='46' r='2.5' fill='%2343222A'/><circle cx='58' cy='46' r='2.5' fill='%2343222A'/><path d='M46 54c2 2 6 2 8 0' stroke='%2343222A' stroke-width='2' stroke-linecap='round' fill='none'/></svg>";

// Toast Notification Manager
function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  const bgColors = {
    success: "bg-[#433135] text-white border-l-4 border-[#E58C8A]",
    info: "bg-[#2D3142] text-white border-l-4 border-blue-400",
    error: "bg-red-800 text-white border-l-4 border-red-400"
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-xs font-medium transform transition-all duration-300 translate-y-3 opacity-0 ${bgColors[type] || bgColors.success}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'error' ? 'alert-circle' : 'sparkles'}" class="w-4 h-4 text-[#E58C8A]"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// Helper: Generate Distinctive Skin Type Illustration SVG
function getSkinTypeIllustration(skinId, size = "md") {
  const isLg = size === "lg";
  const containerClass = isLg 
    ? "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 border-2 overflow-hidden shadow-sm"
    : "w-16 h-16 rounded-full flex items-center justify-center mb-2.5 border overflow-hidden shadow-2xs";

  const svgClass = isLg ? "w-20 h-20" : "w-14 h-14";

  // Distinctive traits by skin condition
  switch (skinId) {
    case "normal":
      return `
        <div class="${containerClass} bg-[#F0FDF4] border-[#BBF7D0]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <!-- Hair Base -->
            <path d="M40 12c-15 0-23 10-23 20 0 8 4 14 7 18 2 3 3 8 2 12h28c-1-4 0-9 2-12 3-4 7-10 7-18 0-10-8-20-23-20z" fill="#522B34"/>
            <!-- Face -->
            <circle cx="40" cy="39" r="22" fill="#FCE8E2"/>
            <!-- Hair Fringe -->
            <path d="M22 30c6-5 11-6 18-6s12 1 18 6c-2-9-8-14-18-14s-16 5-18 14z" fill="#3D1D24"/>
            <!-- Eyes (Happy curved eyes) -->
            <path d="M30 38c2-2.5 5-2.5 7 0" stroke="#3D1D24" stroke-width="1.8" stroke-linecap="round" fill="none"/>
            <path d="M43 38c2-2.5 5-2.5 7 0" stroke="#3D1D24" stroke-width="1.8" stroke-linecap="round" fill="none"/>
            <!-- Soft Rosy Cheeks -->
            <circle cx="28" cy="43" r="4" fill="#F472B6" opacity="0.45"/>
            <circle cx="52" cy="43" r="4" fill="#F472B6" opacity="0.45"/>
            <!-- Nose & Sweet Smile -->
            <path d="M39 40c1 1.5 1 2 2 2" stroke="#C27A6D" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M35 46c3 3 7 3 10 0" stroke="#3D1D24" stroke-width="1.8" stroke-linecap="round" fill="none"/>
            <!-- Glowing Sparkles (Ciri Khas: Glowing & Seimbang) -->
            <path d="M64 22l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" fill="#F59E0B"/>
            <path d="M14 46l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill="#F59E0B"/>
            <circle cx="66" cy="38" r="1.5" fill="#10B981"/>
          </svg>
        </div>
      `;

    case "dry":
      return `
        <div class="${containerClass} bg-[#EFF6FF] border-[#BFDBFE]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <!-- Hair Base -->
            <path d="M40 12c-15 0-23 10-23 20 0 8 4 14 7 18 2 3 3 8 2 12h28c-1-4 0-9 2-12 3-4 7-10 7-18 0-10-8-20-23-20z" fill="#522B34"/>
            <!-- Face (Slightly paler tone) -->
            <circle cx="40" cy="39" r="22" fill="#FDF0EB"/>
            <!-- Hair Fringe -->
            <path d="M22 30c6-5 11-6 18-6s12 1 18 6c-2-9-8-14-18-14s-16 5-18 14z" fill="#3D1D24"/>
            <!-- Worried Eyebrows & Eyes -->
            <path d="M30 35l6-2" stroke="#3D1D24" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M50 33l-6 2" stroke="#3D1D24" stroke-width="1.3" stroke-linecap="round"/>
            <circle cx="33" cy="39" r="2" fill="#3D1D24"/>
            <circle cx="47" cy="39" r="2" fill="#3D1D24"/>
            <!-- Dry Skin Texture / Flakes (Ciri Khas: Garis Kering & Ketarik) -->
            <path d="M32 29h5M43 29h5M37 26h6" stroke="#93C5FD" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M26 44l3-2M51 44l3 2" stroke="#93C5FD" stroke-width="1.2" stroke-linecap="round"/>
            <!-- Nose & Tight Neutral Mouth -->
            <path d="M39 41c1 1.5 1 2 2 2" stroke="#C27A6D" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M36 47h8" stroke="#3D1D24" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Water Drop Craving Symbol (Butuh Hidrasi) -->
            <path d="M64 24c0 3-3 7-3 7s-3-4-3-7a3 3 0 0 1 6 0z" fill="#3B82F6"/>
            <circle cx="62" cy="23" r="0.8" fill="#DBEAFE"/>
          </svg>
        </div>
      `;

    case "oily":
      return `
        <div class="${containerClass} bg-[#FEFCE8] border-[#FEF08A]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <!-- Hair Base -->
            <path d="M40 12c-15 0-23 10-23 20 0 8 4 14 7 18 2 3 3 8 2 12h28c-1-4 0-9 2-12 3-4 7-10 7-18 0-10-8-20-23-20z" fill="#522B34"/>
            <!-- Face -->
            <circle cx="40" cy="39" r="22" fill="#FCE8E2"/>
            <!-- Hair Fringe -->
            <path d="M22 30c6-5 11-6 18-6s12 1 18 6c-2-9-8-14-18-14s-16 5-18 14z" fill="#3D1D24"/>
            <!-- Eyes -->
            <circle cx="33" cy="38" r="2.2" fill="#3D1D24"/>
            <circle cx="47" cy="38" r="2.2" fill="#3D1D24"/>
            <!-- Nose & Smile -->
            <path d="M39 40c1 1.5 1 2 2 2" stroke="#C27A6D" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M36 46c2 2 6 2 8 0" stroke="#3D1D24" stroke-width="1.6" stroke-linecap="round" fill="none"/>
            
            <!-- Ciri Khas Oily: Kilau Minyak Mengkilap (Glossy Shine on T-Zone) -->
            <!-- Dahi mengkilap -->
            <ellipse cx="40" cy="27" rx="8" ry="3.5" fill="#FEF08A" stroke="#EAB308" stroke-width="1.2"/>
            <path d="M40 22l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill="#EAB308"/>
            <!-- Hidung & Pori mengkilap -->
            <ellipse cx="40" cy="38" rx="2.5" ry="4.5" fill="#FEF08A" stroke="#EAB308" stroke-width="0.8"/>
            <!-- Kilap di Pipi -->
            <circle cx="28" cy="42" r="3.5" fill="#FEF08A" opacity="0.85"/>
            <circle cx="52" cy="42" r="3.5" fill="#FEF08A" opacity="0.85"/>
            <!-- Pori-pori halus di pipi -->
            <circle cx="35" cy="42" r="0.6" fill="#CA8A04"/>
            <circle cx="37" cy="43.5" r="0.6" fill="#CA8A04"/>
            <circle cx="43" cy="43.5" r="0.6" fill="#CA8A04"/>
            <circle cx="45" cy="42" r="0.6" fill="#CA8A04"/>
            <!-- Sebum Drop -->
            <path d="M63 28c0 2-2 5-2 5s-2-3-2-5a2 2 0 0 1 4 0z" fill="#EAB308"/>
          </svg>
        </div>
      `;

    case "combination":
      return `
        <div class="${containerClass} bg-[#FAF5FF] border-[#E9D5FF]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <!-- Hair Base -->
            <path d="M40 12c-15 0-23 10-23 20 0 8 4 14 7 18 2 3 3 8 2 12h28c-1-4 0-9 2-12 3-4 7-10 7-18 0-10-8-20-23-20z" fill="#522B34"/>
            <!-- Face -->
            <circle cx="40" cy="39" r="22" fill="#FCE8E2"/>
            
            <!-- Ciri Khas Kombinasi: Highlight T-Zone yang Jelas -->
            <!-- Area T-Zone Ungu/Minyak (Dahi horizontal + Hidung vertikal) -->
            <path d="M27 25h26v6h-10v14h-6v-14h-10z" fill="#DDD6FE" opacity="0.75" stroke="#A855F7" stroke-width="1" stroke-dasharray="2 1.5"/>
            <text x="40" y="29.5" font-size="6" font-weight="bold" fill="#7E22CE" text-anchor="middle" font-family="sans-serif">T-ZONE</text>
            
            <!-- Hair Fringe -->
            <path d="M22 28c6-5 11-6 18-6s12 1 18 6c-2-9-8-14-18-14s-16 5-18 14z" fill="#3D1D24"/>
            <!-- Eyes -->
            <circle cx="33" cy="38" r="2.2" fill="#3D1D24"/>
            <circle cx="47" cy="38" r="2.2" fill="#3D1D24"/>
            <!-- Nose & Smile -->
            <path d="M39 40c1 1.5 1 2 2 2" stroke="#C27A6D" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M36 46c2 2 6 2 8 0" stroke="#3D1D24" stroke-width="1.6" stroke-linecap="round" fill="none"/>
            <!-- Pipi Normal / Matte (Tanpa minyak) -->
            <circle cx="28" cy="43" r="3.5" fill="#F472B6" opacity="0.3"/>
            <circle cx="52" cy="43" r="3.5" fill="#F472B6" opacity="0.3"/>
            <!-- Kilau di dahi T-zone -->
            <path d="M62 23l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#A855F7"/>
          </svg>
        </div>
      `;

    case "sensitive":
      return `
        <div class="${containerClass} bg-[#FFF1F2] border-[#FECDD3]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <!-- Hair Base -->
            <path d="M40 12c-15 0-23 10-23 20 0 8 4 14 7 18 2 3 3 8 2 12h28c-1-4 0-9 2-12 3-4 7-10 7-18 0-10-8-20-23-20z" fill="#522B34"/>
            <!-- Face -->
            <circle cx="40" cy="39" r="22" fill="#FDF2EE"/>
            <!-- Hair Fringe -->
            <path d="M22 30c6-5 11-6 18-6s12 1 18 6c-2-9-8-14-18-14s-16 5-18 14z" fill="#3D1D24"/>
            
            <!-- Ciri Khas Sensitif: Bercak Kemerahan Nyata di Kedua Pipi & Hidung -->
            <ellipse cx="28" cy="42" rx="6.5" ry="4.5" fill="#F87171" opacity="0.7"/>
            <ellipse cx="52" cy="42" rx="6.5" ry="4.5" fill="#F87171" opacity="0.7"/>
            <ellipse cx="40" cy="40" rx="3.5" ry="2.5" fill="#F87171" opacity="0.5"/>
            <!-- Garis sensitif kemerahan -->
            <path d="M25 43c2-1 4-1 6 0M49 43c2-1 4-1 6 0" stroke="#EF4444" stroke-width="0.8" stroke-linecap="round"/>

            <!-- Gentle Eyes -->
            <circle cx="33" cy="38" r="2.2" fill="#3D1D24"/>
            <circle cx="47" cy="38" r="2.2" fill="#3D1D24"/>
            <!-- Nose & Delicate Soft Mouth -->
            <path d="M39 40c1 1.5 1 2 2 2" stroke="#DC2626" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M37 46c1.5 1 4.5 1 6 0" stroke="#3D1D24" stroke-width="1.6" stroke-linecap="round" fill="none"/>
            <!-- Calming Heart / Care Symbol -->
            <path d="M62 24c-1.5-2-4 0-4 2 0 2 4 4.5 4 4.5s4-2.5 4-4.5c0-2-2.5-4-4-2z" fill="#F43F5E"/>
          </svg>
        </div>
      `;

    case "acne_prone":
      return `
        <div class="${containerClass} bg-[#FEF2F2] border-[#FECACA]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <!-- Hair Base -->
            <path d="M40 12c-15 0-23 10-23 20 0 8 4 14 7 18 2 3 3 8 2 12h28c-1-4 0-9 2-12 3-4 7-10 7-18 0-10-8-20-23-20z" fill="#522B34"/>
            <!-- Face -->
            <circle cx="40" cy="39" r="22" fill="#FCE8E2"/>
            <!-- Hair Fringe -->
            <path d="M22 30c6-5 11-6 18-6s12 1 18 6c-2-9-8-14-18-14s-16 5-18 14z" fill="#3D1D24"/>
            
            <!-- Eyes -->
            <circle cx="33" cy="38" r="2.2" fill="#3D1D24"/>
            <circle cx="47" cy="38" r="2.2" fill="#3D1D24"/>
            <!-- Nose & Mouth -->
            <path d="M39 40c1 1.5 1 2 2 2" stroke="#C27A6D" stroke-width="1.2" stroke-linecap="round" fill="none"/>
            <path d="M37 46c2 1 4 1 6 0" stroke="#3D1D24" stroke-width="1.6" stroke-linecap="round" fill="none"/>

            <!-- Ciri Khas Acne-Prone: Bintik Jerawat Merah Nyata & Beragam -->
            <!-- Jerawat di Dahi (2 bintik) -->
            <circle cx="34" cy="27" r="2.4" fill="#EF4444"/>
            <circle cx="34" cy="27" r="1" fill="#FFFFFF"/>
            <circle cx="46" cy="28" r="1.8" fill="#EF4444"/>
            <!-- Jerawat di Pipi Kiri -->
            <circle cx="27" cy="42" r="2.6" fill="#EF4444"/>
            <circle cx="27" cy="42" r="1.1" fill="#FFFFFF"/>
            <circle cx="24" cy="46" r="1.6" fill="#DC2626"/>
            <!-- Jerawat di Pipi Kanan -->
            <circle cx="53" cy="43" r="2.5" fill="#EF4444"/>
            <circle cx="53" cy="43" r="1" fill="#FFFFFF"/>
            <circle cx="49" cy="47" r="1.5" fill="#DC2626"/>
            <!-- Jerawat di Dagu -->
            <circle cx="40" cy="51" r="2" fill="#EF4444"/>
            <circle cx="40" cy="51" r="0.8" fill="#FFFFFF"/>
            <!-- Acne Care Plus Symbol -->
            <path d="M62 23v6M59 26h6" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      `;

    default:
      return `
        <div class="${containerClass} bg-[#FDECE9] border-[#F2D2CB]">
          <svg viewBox="0 0 80 80" class="${svgClass}">
            <circle cx="40" cy="39" r="22" fill="#F8C7BF"/>
            <circle cx="34" cy="39" r="2" fill="#43222A"/>
            <circle cx="46" cy="39" r="2" fill="#43222A"/>
          </svg>
        </div>
      `;
  }
}

class GlowApp {
  constructor() {
    this.container = document.getElementById("app-content");
    this.bottomNav = document.getElementById("bottom-navigation");
    this.storeUnsub = store.subscribe(() => this.render());
    
    // Internal interactive states
    this.selectedSkinCondition = "oily";
    this.onboardingSlide = 0;
    this.productDetailQty = 1;
    this.searchQuery = "";

    // Camera AI Scanner States
    this.cameraFacingMode = "user";
    this.cameraStream = null;
    this.capturedPhoto = null;
    this.activeCameraResultTab = "matches"; // "matches" | "metrics"
  }

  init() {
    this.render();
  }

  render() {
    const state = store.state;

    // First time onboarding check
    if (!state.hasCompletedOnboarding && state.currentView === "main") {
      this.renderOnboarding();
      this.hideBottomNav();
      return;
    }

    // Stop camera stream if navigating away from camera screen
    if (state.currentView !== "camera-scan" && this.cameraStream) {
      this.stopCameraStream();
    }

    switch (state.currentView) {
      case "splash":
        this.renderSplash();
        this.hideBottomNav();
        break;
      case "onboarding":
        this.renderOnboarding();
        this.hideBottomNav();
        break;
      case "camera-scan":
        this.renderCameraScan();
        this.hideBottomNav();
        break;
      case "scan-analyzing":
        this.renderScanAnalyzing();
        this.hideBottomNav();
        break;
      case "scan-result":
        this.renderCameraResult();
        this.hideBottomNav();
        break;
      case "quiz":
        this.renderSkinQuiz();
        this.hideBottomNav();
        break;
      case "result":
        this.renderSkinResult();
        this.hideBottomNav();
        break;
      case "product-detail":
        this.renderProductDetail(state.selectedProductId);
        this.hideBottomNav();
        break;
      case "article-detail":
        this.renderArticleDetail(state.selectedArticleId);
        this.hideBottomNav();
        break;
      case "cart":
        this.renderCart();
        this.hideBottomNav();
        break;
      case "checkout":
        this.renderCheckout();
        this.hideBottomNav();
        break;
      case "order-success":
        this.renderOrderSuccess();
        this.hideBottomNav();
        break;
      case "orders-list":
        this.renderOrdersList();
        this.hideBottomNav();
        break;
      case "wishlist-view":
        this.renderWishlistView();
        this.hideBottomNav();
        break;
      case "main":
      default:
        this.showBottomNav();
        this.renderMainTab(state.currentTab);
        break;
    }

    lucide.createIcons();
    this.updateBottomNavState();
  }

  showBottomNav() {
    if (this.bottomNav) this.bottomNav.classList.remove("hidden");
  }

  hideBottomNav() {
    if (this.bottomNav) this.bottomNav.classList.add("hidden");
  }

  updateBottomNavState() {
    const currentTab = store.state.currentTab;
    const navItems = document.querySelectorAll(".nav-tab-btn");
    navItems.forEach(btn => {
      const tab = btn.dataset.tab;
      const iconWrapper = btn.querySelector(".nav-icon-wrapper");
      if (tab === currentTab) {
        btn.classList.add("text-[#A24B5C]", "font-semibold");
        btn.classList.remove("text-gray-400");
        if (iconWrapper) {
          iconWrapper.classList.add("bg-[#FCE8E6]", "text-[#A24B5C]");
        }
      } else {
        btn.classList.remove("text-[#A24B5C]", "font-semibold");
        btn.classList.add("text-gray-400");
        if (iconWrapper) {
          iconWrapper.classList.remove("bg-[#FCE8E6]", "text-[#A24B5C]");
        }
      }
    });

    const cartCount = store.getCartCount();
    const badges = document.querySelectorAll(".cart-badge-count");
    badges.forEach(b => {
      b.textContent = cartCount;
      b.style.display = cartCount > 0 ? "flex" : "none";
    });
  }

  // ==========================================
  // 1. SPLASH & ONBOARDING SCREENS
  // ==========================================
  renderSplash() {
    this.container.innerHTML = `
      <div class="flex flex-col items-center justify-between min-h-screen px-6 py-12 bg-gradient-to-b from-[#FDE8E3] via-[#FAF5F0] to-[#FCE6E2] text-center animate-fade-in">
        <div></div>
        <div class="flex flex-col items-center">
          <div class="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center p-4 border border-[#F4C6BE] mb-6 relative animate-pulse-soft">
            <div class="w-24 h-24 rounded-full bg-[#FAF0ED] flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 100 100" class="w-20 h-20 text-[#C06C84]" fill="currentColor">
                <circle cx="50" cy="45" r="28" fill="#F8C7BF"/>
                <path d="M50 16c-18 0-26 12-26 24 0 10 5 18 10 22 2 4 4 10 3 14h26c-1-4 1-10 3-14 5-4 10-12 10-22 0-12-8-24-26-24z" fill="#7A404F"/>
                <circle cx="42" cy="48" r="3" fill="#43222A"/>
                <circle cx="58" cy="48" r="3" fill="#43222A"/>
                <path d="M46 58c2 2 6 2 8 0" stroke="#43222A" stroke-width="2" stroke-linecap="round" fill="none"/>
              </svg>
            </div>
            <div class="absolute -top-1 -right-1 bg-[#E58C8A] text-white p-2 rounded-full shadow-md">
              <i data-lucide="sparkles" class="w-4 h-4"></i>
            </div>
          </div>
          <h1 class="text-3xl font-extrabold text-[#433135] tracking-tight">GlowYou</h1>
          <p class="text-sm text-[#876569] mt-2 font-medium max-w-[260px]">
            Kenali Kulitmu, Raih Versi Terbaikmu
          </p>
        </div>

        <div class="w-full max-w-xs space-y-4">
          <button onclick="app.startOnboarding()" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/30 hover:opacity-95 transition-all active:scale-95 text-sm">
            Mulai Sekarang
          </button>
          <div class="flex justify-center gap-1.5 pt-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#B35264]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#E8C2BE]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#E8C2BE]"></span>
          </div>
        </div>
      </div>
    `;
  }

  renderOnboarding() {
    const slides = [
      {
        title: "Kenali Tipe Kulitmu",
        desc: "Dapatkan analisis akurat kondisi kulit dan rekomendasi perawatan spesifik yang paling tepat untukmu.",
        badge: "Analisis Mandiri & Pintar"
      },
      {
        title: "Produk Terkurasi 100% Aman",
        desc: "Temukan skincare dengan kandungan bahan aktif yang teruji dan bebas dari bahan yang merusak skin barrier.",
        badge: "Rekomendasi Spesifik"
      },
      {
        title: "Belanja Langsung & Praktis",
        desc: "Checkout mudah langsung di dalam aplikasi dengan pilihan metode pembayaran virtual account, e-wallet & COD.",
        badge: "In-App Checkout Cepat"
      }
    ];

    const current = slides[this.onboardingSlide] || slides[0];

    this.container.innerHTML = `
      <div class="flex flex-col justify-between min-h-screen px-6 py-8 bg-[#FAF5F0] text-center animate-fade-in">
        <div class="flex justify-between items-center">
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-[#FCE8E6] text-[#A24B5C]">
            ${current.badge}
          </span>
          <button onclick="store.completeOnboarding()" class="text-xs font-medium text-gray-400 hover:text-gray-700">
            Lewati
          </button>
        </div>

        <div class="my-auto py-6 flex flex-col items-center">
          <!-- GlowYou Branding Card (Logo Resmi GlowYou) -->
          <div class="w-60 h-60 rounded-3xl bg-gradient-to-tr from-[#FAF0ED] via-white to-[#FDE8E3] shadow-xl border-4 border-white mb-8 flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div class="w-28 h-28 rounded-full bg-white shadow-md border border-[#F4C6BE] flex items-center justify-center p-3 relative animate-pulse-soft">
              <div class="w-20 h-20 rounded-full bg-[#FAF0ED] flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" class="w-16 h-16 text-[#C06C84]" fill="currentColor">
                  <circle cx="50" cy="45" r="28" fill="#F8C7BF"/>
                  <path d="M50 16c-18 0-26 12-26 24 0 10 5 18 10 22 2 4 4 10 3 14h26c-1-4 1-10 3-14 5-4 10-12 10-22 0-12-8-24-26-24z" fill="#7A404F"/>
                  <circle cx="42" cy="48" r="3" fill="#43222A"/>
                  <circle cx="58" cy="48" r="3" fill="#43222A"/>
                  <path d="M46 58c2 2 6 2 8 0" stroke="#43222A" stroke-width="2" stroke-linecap="round" fill="none"/>
                </svg>
              </div>
              <div class="absolute -top-1 -right-1 bg-[#E58C8A] text-white p-1.5 rounded-full shadow-xs">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
              </div>
            </div>
            <div class="mt-3.5 flex flex-col items-center text-center">
              <span class="text-base font-extrabold text-[#433135] tracking-tight">GlowYou</span>
              <span class="text-[10px] text-[#A24B5C] font-semibold tracking-wide">Kenali Kulitmu, Raih Versi Terbaikmu</span>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-[#3B2C30] tracking-tight">${current.title}</h2>
          <p class="text-xs text-[#7B6367] mt-3 max-w-xs leading-relaxed font-normal">
            ${current.desc}
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex justify-center gap-2 mb-4">
            ${slides.map((_, i) => `
              <span class="h-2 rounded-full transition-all duration-300 ${i === this.onboardingSlide ? 'w-6 bg-[#A24B5C]' : 'w-2 bg-[#E2CBC7]'}"></span>
            `).join('')}
          </div>
          <button onclick="app.nextOnboarding()" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-sm">
            ${this.onboardingSlide === slides.length - 1 ? 'Mulai Sekarang' : 'Lanjut'}
          </button>
        </div>
      </div>
    `;
  }

  startOnboarding() {
    this.onboardingSlide = 0;
    store.setView("onboarding");
  }

  nextOnboarding() {
    if (this.onboardingSlide < 2) {
      this.onboardingSlide++;
      this.render();
    } else {
      store.completeOnboarding();
    }
  }

  // ==========================================
  // 2. MAIN TABS (HOME, PRODUK, TIPS, PROFIL)
  // ==========================================
  renderMainTab(tab) {
    switch (tab) {
      case "home":
        this.renderHome();
        break;
      case "product":
        this.renderProductsCatalog();
        break;
      case "tips":
        this.renderTipsView();
        break;
      case "profile":
        this.renderProfileView();
        break;
    }
  }

  // --- HOME VIEW ---
  renderHome() {
    const user = store.state.user;
    const skinInfo = user.skinType ? GLOW_DATA.skinTypes[user.skinType] : null;
    const cartCount = store.getCartCount();

    const recommended = (skinInfo ? skinInfo.recommendedProducts : ["p1", "p2", "p5", "p6"])
      .map(id => GLOW_DATA.products.find(p => p.id === id))
      .filter(Boolean);

    this.container.innerHTML = `
      <div class="pb-24 animate-fade-in">
        <!-- Top App Bar -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <div>
            <span class="text-[11px] font-semibold uppercase tracking-wider text-[#B35264]">Selamat Datang</span>
            <h2 class="text-base font-bold text-[#3B2C30]">Halo, ${user.name.split(" ")[0]} ✨</h2>
          </div>
          <div class="flex items-center gap-2.5">
            <button onclick="store.setView('cart')" class="relative p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54] hover:bg-[#FCECE9] transition-all">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              ${cartCount > 0 ? `<span class="cart-badge-count absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B35264] text-white text-[10px] font-bold flex items-center justify-center">${cartCount}</span>` : ''}
            </button>
            <button onclick="store.setView('orders-list')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54] hover:bg-[#FCECE9] transition-all">
              <i data-lucide="bell" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <div class="px-5 pt-4 space-y-5">
          <!-- Search Bar -->
          <div class="relative">
            <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input 
              type="text" 
              placeholder="Cari produk, tips, atau artikel..." 
              onfocus="store.setTab('product')" 
              class="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#EAD5CF] text-xs focus:outline-none focus:border-[#C06C84] shadow-sm text-gray-700 placeholder-gray-400"
            />
          </div>

          <!-- Hero Banner: AI Face & Skin Scanner CTA (Gambar 2 inspirasi) -->
          <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F7C6BC] via-[#E8A598] to-[#D57B88] p-5 text-white shadow-lg shadow-[#E8A598]/20">
            <div class="relative z-10 max-w-[215px]">
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/30 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase mb-1.5">
                <i data-lucide="sparkles" class="w-3 h-3 text-white"></i>
                Fitur Utama: AI Camera Scan
              </span>
              <h3 class="text-base font-extrabold leading-tight">
                Scan Wajahmu Lewat Kamera Sekarang!
              </h3>
              <p class="text-[11px] text-white/90 mt-1 leading-snug">
                Deteksi otomatis tipe kulit, kadar sebum T-Zone & rona undertone wajah secara akurat.
              </p>
              <div class="mt-3.5 flex items-center gap-2">
                <button onclick="app.openCameraScanner()" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#A24B5C] text-xs font-bold shadow-md hover:bg-gray-50 active:scale-95 transition-all">
                  <i data-lucide="camera" class="w-3.5 h-3.5"></i>
                  <span>Buka Kamera</span>
                </button>
                <button onclick="store.setView('quiz')" class="text-[11px] font-semibold text-white/90 underline hover:text-white">
                  Kuesioner
                </button>
              </div>
            </div>
            <!-- GlowYou Official Brand Emblem -->
            <div class="absolute -right-6 -bottom-6 w-36 h-36 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center p-3">
              <div class="w-24 h-24 rounded-full bg-white/95 shadow-md flex items-center justify-center border-2 border-white/80 relative">
                <div class="w-18 h-18 rounded-full bg-[#FAF0ED] flex items-center justify-center overflow-hidden">
                  <svg viewBox="0 0 100 100" class="w-14 h-14 text-[#C06C84]" fill="currentColor">
                    <circle cx="50" cy="45" r="28" fill="#F8C7BF"/>
                    <path d="M50 16c-18 0-26 12-26 24 0 10 5 18 10 22 2 4 4 10 3 14h26c-1-4 1-10 3-14 5-4 10-12 10-22 0-12-8-24-26-24z" fill="#7A404F"/>
                    <circle cx="42" cy="48" r="3" fill="#43222A"/>
                    <circle cx="58" cy="48" r="3" fill="#43222A"/>
                    <path d="M46 58c2 2 6 2 8 0" stroke="#43222A" stroke-width="2" stroke-linecap="round" fill="none"/>
                  </svg>
                </div>
                <div class="absolute -top-1 -right-1 bg-[#E58C8A] text-white p-1 rounded-full shadow-xs">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions Grid (4 Icons seperti Gambar 1 & 3) -->
          <div class="grid grid-cols-4 gap-2 pt-1">
            <button onclick="app.openCameraScanner()" class="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-white border border-[#EED7D1] shadow-xs active:scale-95 transition-all">
              <div class="w-11 h-11 rounded-xl bg-[#FDE9E6] text-[#A24B5C] flex items-center justify-center shadow-xs">
                <i data-lucide="camera" class="w-5 h-5"></i>
              </div>
              <span class="text-[10px] font-medium text-gray-700 text-center leading-tight">AI Scan Wajah</span>
            </button>
            <button onclick="store.setTab('product')" class="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-white border border-[#EED7D1] shadow-xs active:scale-95 transition-all">
              <div class="w-11 h-11 rounded-xl bg-[#FFF1E6] text-[#C96442] flex items-center justify-center shadow-xs">
                <i data-lucide="package-check" class="w-5 h-5"></i>
              </div>
              <span class="text-[10px] font-medium text-gray-700 text-center leading-tight">Rekomendasi</span>
            </button>
            <button onclick="store.setTab('tips')" class="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-white border border-[#EED7D1] shadow-xs active:scale-95 transition-all">
              <div class="w-11 h-11 rounded-xl bg-[#F0F5ED] text-[#4E7D59] flex items-center justify-center shadow-xs">
                <i data-lucide="heart-pulse" class="w-5 h-5"></i>
              </div>
              <span class="text-[10px] font-medium text-gray-700 text-center leading-tight">Tips Harian</span>
            </button>
            <button onclick="store.setTab('tips')" class="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-white border border-[#EED7D1] shadow-xs active:scale-95 transition-all">
              <div class="w-11 h-11 rounded-xl bg-[#F3EBFB] text-[#7A4BA6] flex items-center justify-center shadow-xs">
                <i data-lucide="book-open" class="w-5 h-5"></i>
              </div>
              <span class="text-[10px] font-medium text-gray-700 text-center leading-tight">Edukasi</span>
            </button>
          </div>

          <!-- Section: Rekomendasi Sesuai Kulitmu -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-bold text-[#3B2C30]">
                  ${skinInfo ? `Rekomendasi untuk Kulit ${skinInfo.name}` : 'Produk Populer Terlaris'}
                </h4>
                <p class="text-[11px] text-gray-500">Telah disesuaikan dengan kebutuhan kulitmu</p>
              </div>
              <button onclick="store.setTab('product')" class="text-xs font-semibold text-[#A24B5C] flex items-center hover:underline">
                Lihat semua <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>

            <!-- Horizontal Scroll Cards -->
            <div class="flex gap-3.5 overflow-x-auto no-scrollbar pb-2 pt-1">
              ${recommended.map(prod => `
                <div class="flex-shrink-0 w-36 bg-white rounded-2xl p-2.5 border border-[#EED7D1] shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
                  <div class="relative w-full h-32 rounded-xl overflow-hidden bg-gray-50 mb-2 cursor-pointer" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                    <img src="${prod.image}" class="w-full h-full object-cover" alt="${prod.name}">
                    <button onclick="event.stopPropagation(); app.toggleWishlist('${prod.id}')" class="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-xs text-gray-500 hover:text-red-500">
                      <i data-lucide="heart" class="w-3.5 h-3.5 ${store.isInWishlist(prod.id) ? 'fill-red-500 text-red-500' : ''}"></i>
                    </button>
                  </div>
                  <div>
                    <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#FCE8E6] text-[#A24B5C]">
                      ${prod.category}
                    </span>
                    <h5 class="text-xs font-bold text-[#3B2C30] mt-1 line-clamp-2 leading-tight cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                      ${prod.name}
                    </h5>
                    <div class="flex items-center gap-1 mt-1 text-[10px] text-gray-500">
                      <i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i>
                      <span>${prod.rating}</span>
                      <span>(${prod.soldCount})</span>
                    </div>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <span class="text-xs font-extrabold text-[#A24B5C]">${formatRupiah(prod.price)}</span>
                    <button onclick="app.quickAddToCart('${prod.id}')" class="w-7 h-7 rounded-lg bg-[#FAF0ED] text-[#A24B5C] hover:bg-[#A24B5C] hover:text-white transition-all flex items-center justify-center">
                      <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Section: Artikel & Tips Terbaru -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-bold text-[#3B2C30]">Artikel & Edukasi Terbaru</h4>
                <p class="text-[11px] text-gray-500">Tips dokter & ahli kulit terpercaya</p>
              </div>
              <button onclick="store.setTab('tips')" class="text-xs font-semibold text-[#A24B5C] flex items-center hover:underline">
                Lihat semua <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>

            <div class="space-y-2.5">
              ${GLOW_DATA.articles.slice(0, 3).map(art => `
                <div onclick="store.setView('article-detail', { articleId: '${art.id}' })" class="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-[#EED7D1] shadow-xs hover:border-[#D6727F] cursor-pointer transition-all">
                  <img src="${art.image}" class="w-18 h-18 rounded-xl object-cover flex-shrink-0" alt="${art.title}">
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                        ${art.category}
                      </span>
                      <span class="text-[10px] text-gray-400">• ${art.readTime}</span>
                    </div>
                    <h5 class="text-xs font-bold text-[#3B2C30] line-clamp-2 leading-snug">
                      ${art.title}
                    </h5>
                  </div>
                  <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // AI CAMERA SCANNER (FITUR UTAMA: INSPIRASI GAMBAR 2)
  // ==========================================
  openCameraScanner() {
    store.setView("camera-scan");
  }

  closeCameraScanner() {
    this.stopCameraStream();
    store.setView("main");
  }

  async initCameraStream() {
    const video = document.getElementById("camera-video");
    const fallback = document.getElementById("camera-fallback");
    if (!video) return;

    try {
      this.stopCameraStream();

      // Set mirror mode class on video element for front camera
      if (this.cameraFacingMode === "user") {
        video.classList.add("mirror-mode");
      } else {
        video.classList.remove("mirror-mode");
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const constraints = {
          video: {
            facingMode: this.cameraFacingMode,
            width: { ideal: 720 },
            height: { ideal: 960 }
          },
          audio: false
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.cameraStream = stream;
        video.srcObject = stream;
        await video.play();
        if (fallback) fallback.classList.add("hidden");
      } else {
        throw new Error("Kamera tidak didukung pada browser ini.");
      }
    } catch (err) {
      console.warn("Kamera tidak dapat diakses (gunakan simulator/upload):", err);
      if (fallback) fallback.classList.remove("hidden");
      showToast("Menggunakan mode kamera simulator. Kamu juga bisa unggah foto.", "info");
    }
  }

  stopCameraStream() {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => track.stop());
      this.cameraStream = null;
    }
  }

  flipCamera() {
    this.cameraFacingMode = this.cameraFacingMode === "user" ? "environment" : "user";
    const video = document.getElementById("camera-video");
    if (video) {
      if (this.cameraFacingMode === "user") {
        video.classList.add("mirror-mode");
      } else {
        video.classList.remove("mirror-mode");
      }
    }
    this.initCameraStream();
    showToast(`Beralih ke kamera ${this.cameraFacingMode === 'user' ? 'depan (mirror)' : 'belakang'}`);
  }

  captureCameraPhoto() {
    const video = document.getElementById("camera-video");
    const canvas = document.getElementById("camera-canvas");

    let photoData = null;
    if (video && video.videoWidth > 0 && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      // Cerminkan foto (mirror flip horizontal) jika menggunakan kamera depan
      if (this.cameraFacingMode === "user") {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      photoData = canvas.toDataURL("image/jpeg", 0.85);
    } else {
      photoData = GLOWYOU_FALLBACK_AVATAR;
    }

    this.stopCameraStream();
    this.capturedPhoto = photoData;
    this.startAiScanning(photoData);
  }

  handlePhotoUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.stopCameraStream();
      this.capturedPhoto = e.target.result;
      this.startAiScanning(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  startAiScanning(photoData) {
    store.setView("scan-analyzing");
  }

  // 1. Live Camera Screen with Reticle & HUD (Gambar 2 inspirasi)
  renderCameraScan() {
    this.container.innerHTML = `
      <div class="relative min-h-screen bg-[#1A1416] text-white flex flex-col justify-between overflow-hidden animate-fade-in select-none">
        <!-- Top App Bar Translucent -->
        <div class="relative z-30 px-5 pt-4 pb-3 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
          <button onclick="app.closeCameraScanner()" class="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <div class="text-center">
            <h3 class="text-xs font-extrabold tracking-wider uppercase text-white/95">Scan & Undertone Quiz</h3>
            <span class="text-[10px] text-emerald-400 font-medium flex items-center justify-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Kamera AI Aktif
            </span>
          </div>
          <button onclick="app.flipCamera()" class="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all" title="Putar Kamera Depan/Belakang">
            <i data-lucide="switch-camera" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Live Camera Viewfinder -->
        <div class="relative flex-1 flex items-center justify-center overflow-hidden">
          <video id="camera-video" autoplay playsinline muted class="absolute inset-0 w-full h-full object-cover mirror-mode"></video>
          <canvas id="camera-canvas" class="hidden"></canvas>

          <!-- Fallback Visual if camera not permitted / simulator -->
          <div id="camera-fallback" class="absolute inset-0 w-full h-full bg-gradient-to-b from-[#251A1D] via-[#1D1416] to-[#120B0D] hidden flex flex-col items-center justify-center p-6 text-center select-none">
            <div class="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-[#F4C6BE]/30 flex items-center justify-center p-4 mb-4 relative shadow-2xl animate-pulse-soft">
              <div class="w-24 h-24 rounded-full bg-white shadow-inner flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 100 100" class="w-18 h-18 text-[#C06C84]" fill="currentColor">
                  <circle cx="50" cy="45" r="28" fill="#F8C7BF"/>
                  <path d="M50 16c-18 0-26 12-26 24 0 10 5 18 10 22 2 4 4 10 3 14h26c-1-4 1-10 3-14 5-4 10-12 10-22 0-12-8-24-26-24z" fill="#7A404F"/>
                  <circle cx="42" cy="48" r="3" fill="#43222A"/>
                  <circle cx="58" cy="48" r="3" fill="#43222A"/>
                  <path d="M46 58c2 2 6 2 8 0" stroke="#43222A" stroke-width="2" stroke-linecap="round" fill="none"/>
                </svg>
              </div>
              <div class="absolute -top-1 -right-1 bg-[#E58C8A] text-white p-2 rounded-full shadow-md">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
              </div>
            </div>
            <h4 class="text-sm font-bold text-white tracking-wide">Kamera Simulator GlowYou</h4>
            <p class="text-[11px] text-white/60 mt-1 max-w-[240px]">
              Kamera siap menganalisis kulit wajahmu. Klik tombol kamera di bawah untuk memproses scan.
            </p>
          </div>

          <!-- Dark Vignette Overlay -->
          <div class="absolute inset-0 bg-black/30 pointer-events-none"></div>

          <!-- Scanner Reticle Frame & Corner Brackets (Persis Gambar 2) -->
          <div class="relative z-20 w-64 h-84 rounded-[48%] border-2 border-dashed border-white/70 flex items-center justify-center animate-scan-ring shadow-2xl">
            <!-- 4 Corner Brackets -->
            <div class="absolute -top-2.5 -left-2.5 w-6 h-6 border-t-3 border-l-3 border-[#E58C8A]"></div>
            <div class="absolute -top-2.5 -right-2.5 w-6 h-6 border-t-3 border-r-3 border-[#E58C8A]"></div>
            <div class="absolute -bottom-2.5 -left-2.5 w-6 h-6 border-b-3 border-l-3 border-[#E58C8A]"></div>
            <div class="absolute -bottom-2.5 -right-2.5 w-6 h-6 border-b-3 border-r-3 border-[#E58C8A]"></div>

            <!-- Laser Scanning Beam -->
            <div class="absolute left-3 right-3 h-1 bg-gradient-to-r from-transparent via-[#E58C8A] to-transparent shadow-[0_0_15px_#E58C8A] animate-scan-laser pointer-events-none"></div>

            <!-- Face Focus Reticle Target (T-Zone & Cheeks) -->
            <div class="absolute top-18 w-10 h-10 rounded-full border border-white/60 flex items-center justify-center animate-pulse">
              <span class="w-2 h-2 rounded-full bg-[#E58C8A]"></span>
            </div>
            <div class="absolute top-38 left-12 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </div>
            <div class="absolute top-38 right-12 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </div>

            <!-- Match Status Badge -->
            <div class="absolute bottom-6 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white flex items-center gap-1.5">
              <i data-lucide="scan" class="w-3.5 h-3.5 text-[#E58C8A]"></i>
              <span>Posisikan wajah di dalam oval</span>
            </div>
          </div>
        </div>

        <!-- Bottom Shutter & Action Bar -->
        <div class="relative z-30 px-6 pt-4 pb-8 bg-gradient-to-t from-black/90 via-black/65 to-transparent flex flex-col items-center gap-3">
          <div class="flex items-center justify-around w-full max-w-xs">
            <!-- Upload Photo from Gallery -->
            <label class="p-3.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 cursor-pointer active:scale-95 transition-all flex flex-col items-center" title="Unggah Foto Wajah">
              <i data-lucide="image" class="w-5 h-5"></i>
              <input type="file" accept="image/*" class="hidden" onchange="app.handlePhotoUpload(event)">
            </label>

            <!-- Big Circular Shutter Button -->
            <button onclick="app.captureCameraPhoto()" class="w-20 h-20 rounded-full border-4 border-white p-1 flex items-center justify-center bg-white/20 shadow-2xl active:scale-90 transition-all">
              <div class="w-full h-full rounded-full bg-gradient-to-tr from-[#D6727F] to-[#B35264] flex items-center justify-center shadow-lg">
                <i data-lucide="camera" class="w-8 h-8 text-white"></i>
              </div>
            </button>

            <!-- Manual Questionnaire Alternative -->
            <button onclick="app.closeCameraScanner(); store.setView('quiz')" class="p-3.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 cursor-pointer active:scale-95 transition-all flex flex-col items-center" title="Pilih Manual">
              <i data-lucide="sliders" class="w-5 h-5"></i>
            </button>
          </div>

          <div class="flex items-center gap-4 text-[11px] text-white/70">
            <span>Galeri</span>
            <span class="font-bold text-white">Ambil Foto Wajah</span>
            <span>Manual</span>
          </div>
        </div>
      </div>
    `;

    // Initialize hardware camera stream or fallback
    setTimeout(() => this.initCameraStream(), 100);
  }

  // 2. AI Processing Screen with Animated Radar & Progress Ticks
  renderScanAnalyzing() {
    this.container.innerHTML = `
      <div class="min-h-screen bg-[#1F191B] text-white flex flex-col items-center justify-between p-6 text-center animate-fade-in select-none">
        <div></div>

        <div class="flex flex-col items-center max-w-xs">
          <!-- Circular Radar Animation -->
          <div class="relative w-40 h-40 mb-6 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full border-2 border-[#E58C8A]/40 animate-ping"></div>
            <div class="absolute inset-2 rounded-full border-2 border-dashed border-[#E58C8A] animate-radar-sweep"></div>
            <div class="w-28 h-28 rounded-full overflow-hidden border-3 border-white shadow-xl relative">
              <img src="${this.capturedPhoto || GLOWYOU_FALLBACK_AVATAR}" class="w-full h-full object-cover" alt="Captured Face">
              <div class="absolute inset-0 bg-[#A24B5C]/25"></div>
              <div class="absolute inset-x-0 h-1 bg-[#E58C8A] shadow-[0_0_8px_#E58C8A] animate-scan-laser"></div>
            </div>
          </div>

          <h2 class="text-xl font-extrabold text-white">Menganalisis Kulit Wajah...</h2>
          <p class="text-xs text-white/70 mt-1.5" id="ai-scan-step">Mendeteksi kontur wajah & pencahayaan...</p>

          <!-- Progress Bar -->
          <div class="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-5">
            <div class="h-full bg-gradient-to-r from-[#D6727F] to-[#E58C8A] rounded-full transition-all duration-700" id="ai-progress-bar" style="width: 25%"></div>
          </div>
        </div>

        <div class="text-[11px] text-white/50">
          AI Dermatological Model v2.4 • Mengolah 12 titik fokus wajah
        </div>
      </div>
    `;

    // Sequential Analysis Simulation
    setTimeout(() => {
      const stepEl = document.getElementById("ai-scan-step");
      const progEl = document.getElementById("ai-progress-bar");
      if (stepEl && progEl) {
        stepEl.textContent = "Menganalisis kadar minyak di area T-Zone...";
        progEl.style.width = "55%";
      }
    }, 600);

    setTimeout(() => {
      const stepEl = document.getElementById("ai-scan-step");
      const progEl = document.getElementById("ai-progress-bar");
      if (stepEl && progEl) {
        stepEl.textContent = "Membaca rona pigmen undertone kulit...";
        progEl.style.width = "85%";
      }
    }, 1200);

    setTimeout(() => {
      const stepEl = document.getElementById("ai-scan-step");
      const progEl = document.getElementById("ai-progress-bar");
      if (stepEl && progEl) {
        stepEl.textContent = "Menyiapkan rekomendasi foundation & skincare...";
        progEl.style.width = "100%";
      }
    }, 1600);

    // Finalize and save results
    setTimeout(() => {
      store.saveCameraAnalysis({
        skinType: "oily",
        undertone: "Warm - Sand",
        undertoneHex: "#D5A073",
        focusArea: "Tone Match & Hydration",
        metrics: {
          sebum: 82,
          hydration: 64,
          pores: "Pori-pori Terbuka di T-Zone",
          redness: "Ringan",
          acneSpots: 3
        },
        photo: this.capturedPhoto
      });

      showToast("Analisis Kamera selesai! Match terdeteksi.");
      store.setView("scan-result");
    }, 2000);
  }

  // 3. Camera Scan & Undertone Result Screen (Persis Gambar 2!)
  renderCameraResult() {
    const user = store.state.user;
    const skinInfo = GLOW_DATA.skinTypes[user.skinType || "oily"];
    const metrics = user.scanMetrics || { sebum: 82, hydration: 64, pores: "Terbuka", redness: "Ringan", acneSpots: 3 };
    const photo = user.lastScanPhoto || this.capturedPhoto || GLOWYOU_FALLBACK_AVATAR;

    const foundationProd = GLOW_DATA.products.find(p => p.id === "p9") || GLOW_DATA.products[0];
    const routineProds = [
      GLOW_DATA.products.find(p => p.id === "p4"), // Centella Serum
      GLOW_DATA.products.find(p => p.id === "p6"), // Matte Sunscreen
      GLOW_DATA.products.find(p => p.id === "p5")  // Water Gel Moisturizer
    ].filter(Boolean);

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-24 animate-fade-in select-none">
        <!-- Top App Bar -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <h3 class="text-sm font-bold text-[#3B2C30]">Your Custom Matches</h3>
          <button onclick="store.setView('cart')" class="relative p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span class="cart-badge-count absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B35264] text-white text-[10px] font-bold flex items-center justify-center">
              ${store.getCartCount()}
            </span>
          </button>
        </div>

        <div class="p-5 space-y-5">
          <!-- CARD 1: FOTO SCAN & UNDERTONE DETECTION (Persis Phone Kiri Gambar 2) -->
          <div class="rounded-3xl overflow-hidden bg-[#241C1E] text-white shadow-xl relative border border-[#433135]">
            <!-- Captured Photo with Scanner Overlay -->
            <div class="relative h-64 w-full overflow-hidden">
              <img src="${photo}" class="w-full h-full object-cover" alt="Scanned Face">
              <div class="absolute inset-0 bg-gradient-to-t from-[#241C1E] via-transparent to-black/40"></div>

              <!-- Reticle Target Ring on Face (Inspirasi Gambar 2) -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border-2 border-dashed border-white/80 flex flex-col items-center justify-center animate-pulse">
                <div class="w-8 h-8 rounded-full border border-white/60 flex items-center justify-center">
                  <span class="w-2 h-2 rounded-full bg-[#E58C8A]"></span>
                </div>
              </div>

              <!-- Top Left Camera Icon -->
              <div class="absolute top-4 left-4 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white">
                <i data-lucide="camera" class="w-4 h-4"></i>
              </div>

              <!-- Match Detected Floating Label -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-center">
                <span class="text-[11px] font-bold text-white tracking-wide">Analyzing... Match Detected ✨</span>
              </div>
            </div>

            <!-- Undertone Card Overlay (Persis Gambar 2) -->
            <div class="p-5 bg-white text-[#3B2C30] rounded-b-3xl">
              <div class="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <span class="text-[10px] uppercase font-bold tracking-wider text-gray-400">Your Undertone</span>
                  <div class="flex items-center gap-2 mt-0.5">
                    <span class="w-5 h-5 rounded-md shadow-xs border border-gray-300" style="background-color: ${user.undertoneHex || '#D5A073'}"></span>
                    <h4 class="text-base font-extrabold text-[#3B2C30]">${user.undertone || 'Warm - Sand'}</h4>
                  </div>
                </div>

                <div class="text-right">
                  <span class="text-[10px] uppercase font-bold tracking-wider text-gray-400">Tipe Kulit</span>
                  <div class="flex items-center gap-1.5 mt-0.5 justify-end">
                    <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                    <h5 class="text-xs font-bold text-[#A24B5C]">${skinInfo.name}</h5>
                  </div>
                </div>
              </div>

              <div class="pt-3 flex items-center justify-between">
                <div class="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
                  <span>Focus Area: ${user.focusArea || 'Tone Match & Hydration'}</span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2.5 mt-4">
                <button onclick="app.openCameraScanner()" class="py-2.5 px-3 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center gap-1.5">
                  <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
                  <span>Re-Scan Kamera</span>
                </button>
                <button onclick="document.getElementById('matches-section').scrollIntoView({ behavior: 'smooth' })" class="py-2.5 px-3 rounded-xl bg-[#FAF0ED] text-[#A24B5C] font-bold text-xs hover:bg-[#FCE8E6] active:scale-95 transition-all flex items-center justify-center gap-1.5">
                  <span>Go to Routine</span>
                  <i data-lucide="arrow-down" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- SECTION 2: SENSOR HASIL SCANNING KAMERA (METRICS) -->
          <div class="p-4 rounded-3xl bg-white border border-[#EED7D1] shadow-xs space-y-3">
            <h4 class="text-xs font-bold text-[#3B2C30] flex items-center gap-1.5">
              <i data-lucide="activity" class="w-4 h-4 text-[#A24B5C]"></i>
              Sensor Deteksi Kulit Wajahmu
            </h4>

            <div class="grid grid-cols-2 gap-2.5">
              <!-- Sebum / Minyak -->
              <div class="p-3 rounded-2xl bg-[#FFFBF0] border border-[#FEEBB8]">
                <div class="flex justify-between items-center text-[10px] text-amber-800 font-bold mb-1">
                  <span>Kadar Minyak (Sebum)</span>
                  <span class="text-xs font-extrabold text-amber-700">${metrics.sebum}%</span>
                </div>
                <div class="w-full bg-amber-100 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-amber-500 h-full rounded-full" style="width: ${metrics.sebum}%"></div>
                </div>
                <span class="text-[9px] text-amber-700 mt-1 block">T-Zone Sangat Berminyak</span>
              </div>

              <!-- Hidrasi -->
              <div class="p-3 rounded-2xl bg-[#F0F7FF] border border-[#D0E6FF]">
                <div class="flex justify-between items-center text-[10px] text-blue-800 font-bold mb-1">
                  <span>Tingkat Hidrasi</span>
                  <span class="text-xs font-extrabold text-blue-700">${metrics.hydration}%</span>
                </div>
                <div class="w-full bg-blue-100 h-1.5 rounded-full overflow-hidden">
                  <div class="bg-blue-500 h-full rounded-full" style="width: ${metrics.hydration}%"></div>
                </div>
                <span class="text-[9px] text-blue-700 mt-1 block">Kelembapan Kulit Cukup</span>
              </div>

              <!-- Pori-pori -->
              <div class="p-3 rounded-2xl bg-[#FAF5F0] border border-[#F0DFD9]">
                <span class="text-[10px] text-gray-500 font-semibold block">Pori-Pori Wajah</span>
                <span class="text-xs font-bold text-gray-800 mt-0.5 block">${metrics.pores}</span>
                <span class="text-[9px] text-gray-400">Butuh BHA Pore Toner</span>
              </div>

              <!-- Jerawat / Blemish -->
              <div class="p-3 rounded-2xl bg-[#FFF2F0] border border-[#FED0C7]">
                <span class="text-[10px] text-red-700 font-semibold block">Bintik Jerawat</span>
                <span class="text-xs font-bold text-red-600 mt-0.5 block">${metrics.acneSpots} Bintik Terdeteksi</span>
                <span class="text-[9px] text-red-500">Kategori Ringan (Mild)</span>
              </div>
            </div>
          </div>

          <!-- SECTION 3: SKINCARE & FOUNDATION MATCH (Persis Phone Kanan Gambar 2) -->
          <div id="matches-section" class="space-y-4 pt-2">
            <div>
              <h4 class="text-sm font-bold text-[#3B2C30]">Skincare & Foundation Match</h4>
              <p class="text-[11px] text-gray-500">Dicocokkan otomatis dengan shade undertone dan jenis kulitmu</p>
            </div>

            <!-- Foundation Match Card (Persis Gambar 2) -->
            <div class="p-4 rounded-3xl bg-white border border-[#EED7D1] shadow-xs flex items-center gap-4 hover:shadow-md transition-all">
              <div class="w-24 h-24 rounded-2xl bg-gray-50 overflow-hidden flex-shrink-0 cursor-pointer" onclick="store.setView('product-detail', { productId: '${foundationProd.id}' })">
                <img src="${foundationProd.image}" class="w-full h-full object-cover" alt="${foundationProd.name}">
              </div>
              <div class="flex-1 min-w-0">
                <span class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                  Complexion Match
                </span>
                <h5 class="text-xs font-bold text-[#3B2C30] mt-1 line-clamp-1 cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${foundationProd.id}' })">
                  ${foundationProd.name}
                </h5>
                <div class="flex items-center gap-1.5 mt-1">
                  <span class="w-3.5 h-3.5 rounded-full border border-gray-300" style="background-color: ${foundationProd.undertoneHex || '#D5A073'}"></span>
                  <span class="text-[10px] text-gray-500 font-medium">Shade: ${foundationProd.undertoneMatch || 'Sand'}</span>
                </div>
                <div class="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100">
                  <span class="text-xs font-extrabold text-[#A24B5C]">${formatRupiah(foundationProd.price)}</span>
                  <button onclick="app.quickAddToCart('${foundationProd.id}')" class="px-3.5 py-1.5 rounded-xl bg-[#A24B5C] text-white font-bold text-xs shadow-xs hover:opacity-95 active:scale-95 transition-all">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>

            <!-- Daily Recommended Routine Cards (Persis Gambar 2) -->
            <div class="space-y-2.5 pt-2">
              <h5 class="text-xs font-bold text-[#3B2C30] flex items-center gap-1.5">
                <i data-lucide="sun" class="w-3.5 h-3.5 text-amber-500"></i>
                Daily Recommended Routine:
              </h5>

              <div class="grid grid-cols-2 gap-3">
                ${routineProds.map(prod => `
                  <div class="bg-white rounded-2xl p-3 border border-[#EED7D1] shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
                    <div class="relative w-full h-28 rounded-xl overflow-hidden bg-gray-50 mb-2 cursor-pointer" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                      <img src="${prod.image}" class="w-full h-full object-cover" alt="${prod.name}">
                    </div>
                    <div>
                      <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                        ${prod.category}
                      </span>
                      <h6 class="text-xs font-bold text-[#3B2C30] mt-1 line-clamp-1 leading-snug cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                        ${prod.name}
                      </h6>
                      <span class="text-xs font-extrabold text-[#A24B5C] mt-1 block">${formatRupiah(prod.price)}</span>
                    </div>
                    <button onclick="app.quickAddToCart('${prod.id}')" class="mt-2.5 w-full py-2 rounded-xl bg-[#FAF0ED] text-[#A24B5C] hover:bg-[#A24B5C] hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-1">
                      <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                      <span>+ Keranjang</span>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-3 space-y-2.5">
            <button onclick="store.setTab('product')" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-xs flex items-center justify-center gap-2">
              <i data-lucide="package" class="w-4 h-4"></i>
              <span>Lihat Semua Produk Rekomendasi</span>
            </button>
            <button onclick="store.setView('main')" class="w-full py-3 px-6 rounded-2xl bg-white border border-[#EED7D1] text-[#3B2C30] font-semibold hover:bg-gray-50 active:scale-95 transition-all text-xs">
              Selesai & Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 3. SKIN SELECTION & ANALYSIS (SCREEN 4)
  // ==========================================
  renderSkinQuiz() {
    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] flex flex-col justify-between pb-6 animate-fade-in">
        <!-- Header -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <h3 class="text-sm font-bold text-[#3B2C30]">Analisis Tipe Kulit</h3>
          <div class="w-8"></div>
        </div>

        <div class="px-5 pt-5 flex-1">
          <div class="text-center mb-6">
            <span class="text-[10px] font-bold px-3 py-1 rounded-full bg-[#FCE8E6] text-[#A24B5C] uppercase tracking-wider">
              Metode Praktis
            </span>
            <h2 class="text-lg font-bold text-[#3B2C30] mt-2">Pilih Kondisi Kulitmu Saat Ini</h2>
            <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
              Pilih satu tipe yang paling menggambarkan kondisi wajahmu sehari-hari.
            </p>
          </div>

          <!-- 6 Grid Kondisi Kulit (Persis Gambar 1 & Gambar 3) -->
          <div class="grid grid-cols-2 gap-3">
            ${Object.values(GLOW_DATA.skinTypes).map(st => {
              const isSelected = this.selectedSkinCondition === st.id;
              return `
                <div 
                  onclick="app.selectSkinCondition('${st.id}')"
                  class="p-3.5 rounded-2xl bg-white border-2 cursor-pointer transition-all flex flex-col items-center text-center relative ${isSelected ? 'border-[#A24B5C] bg-[#FFF8F7] shadow-md shadow-[#A24B5C]/15 scale-[1.02]' : 'border-[#EED7D1] hover:border-[#D6727F]'}"
                >
                  ${isSelected ? `
                    <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#A24B5C] text-white flex items-center justify-center">
                      <i data-lucide="check" class="w-2.5 h-2.5"></i>
                    </div>
                  ` : ''}

                  <!-- Facial Avatar Illustration Khas Sesuai Tipe Kulit -->
                  ${getSkinTypeIllustration(st.id, 'md')}

                  <h4 class="text-xs font-bold text-[#3B2C30]">${st.name}</h4>
                  <p class="text-[10px] text-gray-500 mt-1 line-clamp-2 leading-tight">
                    ${st.tagline}
                  </p>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Info Box: Masih Ragu? -->
          <div class="mt-5 p-3.5 rounded-2xl bg-white border border-[#EED7D1] flex items-start gap-3">
            <div class="p-2 rounded-xl bg-[#FAF0ED] text-[#A24B5C] flex-shrink-0">
              <i data-lucide="help-circle" class="w-4 h-4"></i>
            </div>
            <div>
              <h5 class="text-xs font-bold text-[#3B2C30]">Belum yakin dengan tipe kulitmu?</h5>
              <p class="text-[11px] text-gray-500 mt-0.5 leading-snug">
                Pilih kondisi kulit yang paling mendekati, kamu bisa mengubahnya lagi kapan saja di menu profil.
              </p>
            </div>
          </div>
        </div>

        <div class="px-5 pt-4">
          <button 
            onclick="app.confirmSkinAnalysis()"
            class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
          >
            <span>Lihat Hasil Analisis</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }

  selectSkinCondition(typeId) {
    this.selectedSkinCondition = typeId;
    this.render();
  }

  confirmSkinAnalysis() {
    store.saveSkinAnalysis(this.selectedSkinCondition);
    showToast(`Analisis berhasil! Tipe kulitmu: ${GLOW_DATA.skinTypes[this.selectedSkinCondition].name}`);
    store.setView("result");
  }

  // ==========================================
  // 4. HASIL ANALISIS (SCREEN 5 REKAYASA KULIT)
  // ==========================================
  renderSkinResult() {
    const skinType = store.state.user.skinType || this.selectedSkinCondition || "oily";
    const skinInfo = GLOW_DATA.skinTypes[skinType];
    const recommended = (skinInfo.recommendedProducts || [])
      .map(id => GLOW_DATA.products.find(p => p.id === id))
      .filter(Boolean);

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-12 animate-fade-in">
        <!-- Top Bar -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <h3 class="text-sm font-bold text-[#3B2C30]">Hasil Analisis Kulit</h3>
          <button onclick="store.setView('quiz')" class="text-xs font-semibold text-[#A24B5C] hover:underline">
            Ulang
          </button>
        </div>

        <div class="px-5 pt-5 space-y-5">
          <!-- Big Result Card (Persis Gambar 1 & 3) -->
          <div class="p-5 rounded-3xl bg-white border border-[#EED7D1] shadow-sm text-center relative overflow-hidden">
            ${getSkinTypeIllustration(skinType, 'lg')}
            
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold ${skinInfo.badgeColor}">
              Tipe Kulitmu: ${skinInfo.name}
            </span>
            <p class="text-xs text-gray-600 mt-2.5 max-w-xs mx-auto leading-relaxed">
              ${skinInfo.description}
            </p>

            <!-- Ciri - Ciri -->
            <div class="mt-4 pt-4 border-t border-gray-100 text-left">
              <h5 class="text-xs font-bold text-[#3B2C30] mb-2 flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-[#A24B5C]"></i>
                Ciri-ciri Utama:
              </h5>
              <ul class="space-y-1.5">
                ${skinInfo.characteristics.map(c => `
                  <li class="text-[11px] text-gray-600 flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#E58C8A] mt-1.5 flex-shrink-0"></span>
                    <span>${c}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Rutinitas Dasar yang Disarankan -->
          <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs">
            <h5 class="text-xs font-bold text-[#3B2C30] mb-3 flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4 text-[#A24B5C]"></i>
              Rutinitas Harian yang Disarankan
            </h5>
            <div class="grid grid-cols-2 gap-3 text-[11px]">
              <div class="p-3 rounded-xl bg-[#FAF5F0] border border-[#F0DFD9]">
                <div class="font-bold text-[#A24B5C] flex items-center gap-1 mb-1.5">
                  <i data-lucide="sun" class="w-3.5 h-3.5"></i> Pagi Hari
                </div>
                <ul class="space-y-1 text-gray-600">
                  ${skinInfo.routineMorning.map(r => `<li>• ${r}</li>`).join('')}
                </ul>
              </div>
              <div class="p-3 rounded-xl bg-[#FAF5F0] border border-[#F0DFD9]">
                <div class="font-bold text-[#553664] flex items-center gap-1 mb-1.5">
                  <i data-lucide="moon" class="w-3.5 h-3.5"></i> Malam Hari
                </div>
                <ul class="space-y-1 text-gray-600">
                  ${skinInfo.routineNight.map(r => `<li>• ${r}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Rekomendasi Produk Sesuai Hasil -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-bold text-[#3B2C30]">Rekomendasi Produk untukmu</h4>
                <p class="text-[11px] text-gray-500">Kandungan aman & cocok untuk kulit ${skinInfo.name}</p>
              </div>
              <button onclick="store.setTab('product')" class="text-xs font-semibold text-[#A24B5C] hover:underline">
                Semua
              </button>
            </div>

            <div class="grid grid-cols-2 gap-3">
              ${recommended.map(prod => `
                <div class="bg-white rounded-2xl p-3 border border-[#EED7D1] shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
                  <div class="relative w-full h-28 rounded-xl overflow-hidden bg-gray-50 mb-2 cursor-pointer" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                    <img src="${prod.image}" class="w-full h-full object-cover" alt="${prod.name}">
                  </div>
                  <div>
                    <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                      ${prod.category}
                    </span>
                    <h5 class="text-xs font-bold text-[#3B2C30] mt-1 line-clamp-1 leading-snug cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                      ${prod.name}
                    </h5>
                    <p class="text-xs font-extrabold text-[#A24B5C] mt-1">${formatRupiah(prod.price)}</p>
                  </div>
                  <button onclick="app.quickAddToCart('${prod.id}')" class="mt-2.5 w-full py-2 rounded-xl bg-[#FAF0ED] text-[#A24B5C] hover:bg-[#A24B5C] hover:text-white transition-all text-[11px] font-bold flex items-center justify-center gap-1.5">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    <span>+ Keranjang</span>
                  </button>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-2 space-y-2.5">
            <button onclick="store.setTab('product')" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-sm">
              Lihat Rekomendasi Lengkap
            </button>
            <button onclick="store.setView('main')" class="w-full py-3 px-6 rounded-2xl bg-white border border-[#EED7D1] text-[#3B2C30] font-semibold hover:bg-gray-50 active:scale-95 transition-all text-sm">
              Simpan ke Profil & Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 5. PRODUCT CATALOG (TAB PRODUK)
  // ==========================================
  renderProductsCatalog() {
    const categories = ["Semua", "Facial Wash", "Toner", "Serum", "Moisturizer", "Sunscreen"];
    const skinFilters = [
      { id: "Semua", label: "Semua Tipe" },
      { id: "oily", label: "Berminyak" },
      { id: "dry", label: "Kering" },
      { id: "normal", label: "Normal" },
      { id: "combination", label: "Kombinasi" },
      { id: "sensitive", label: "Sensitif" },
      { id: "acne_prone", label: "Berjerawat" }
    ];

    let filtered = GLOW_DATA.products.filter(p => {
      const matchCat = store.state.activeProductCategory === "Semua" || p.category === store.state.activeProductCategory;
      const matchSkin = store.state.activeProductSkinFilter === "Semua" || p.suitableFor.includes(store.state.activeProductSkinFilter);
      const matchSearch = !this.searchQuery || p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return matchCat && matchSkin && matchSearch;
    });

    this.container.innerHTML = `
      <div class="pb-24 animate-fade-in">
        <!-- Sticky Header & Search -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] space-y-3">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-bold text-[#3B2C30]">Katalog Skincare</h2>
            <button onclick="store.setView('cart')" class="relative p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span class="cart-badge-count absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B35264] text-white text-[10px] font-bold flex items-center justify-center">
                ${store.getCartCount()}
              </span>
            </button>
          </div>

          <div class="relative">
            <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
            <input 
              type="text" 
              placeholder="Cari nama produk atau bahan aktif..." 
              value="${this.searchQuery}"
              oninput="app.handleSearchProduct(this.value)"
              class="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#EAD5CF] text-xs focus:outline-none focus:border-[#C06C84] shadow-xs text-gray-700"
            />
            ${this.searchQuery ? `
              <button onclick="app.handleSearchProduct('')" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
          </div>

          <!-- Skin Filter Chips (Horizontal) -->
          <div class="flex gap-2 overflow-x-auto no-scrollbar pt-1">
            ${skinFilters.map(sf => {
              const active = store.state.activeProductSkinFilter === sf.id;
              return `
                <button 
                  onclick="app.setSkinFilter('${sf.id}')"
                  class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${active ? 'bg-[#A24B5C] text-white shadow-xs' : 'bg-white text-gray-600 border border-[#EED7D1] hover:border-[#D6727F]'}"
                >
                  ${sf.label}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="px-5 pt-3 space-y-4">
          <!-- Category Pills -->
          <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            ${categories.map(cat => {
              const active = store.state.activeProductCategory === cat;
              return `
                <button 
                  onclick="app.setCategoryFilter('${cat}')"
                  class="flex-shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${active ? 'bg-[#433135] text-white' : 'bg-[#FAF0ED] text-[#865E64] hover:bg-[#FCE8E6]'}"
                >
                  ${cat}
                </button>
              `;
            }).join('')}
          </div>

          <!-- Product Grid List -->
          ${filtered.length === 0 ? `
            <div class="text-center py-16 px-4">
              <i data-lucide="package-search" class="w-12 h-12 text-gray-300 mx-auto mb-3"></i>
              <h4 class="text-sm font-bold text-gray-700">Produk Tidak Ditemukan</h4>
              <p class="text-xs text-gray-400 mt-1">Coba gunakan kata kunci lain atau ubah filter tipe kulit.</p>
            </div>
          ` : `
            <div class="grid grid-cols-2 gap-3.5">
              ${filtered.map(prod => `
                <div class="bg-white rounded-2xl p-3 border border-[#EED7D1] shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
                  <div class="relative w-full h-36 rounded-xl overflow-hidden bg-gray-50 mb-2 cursor-pointer" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                    <img src="${prod.image}" class="w-full h-full object-cover" alt="${prod.name}">
                    <button onclick="event.stopPropagation(); app.toggleWishlist('${prod.id}')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-xs text-gray-500 hover:text-red-500 shadow-xs">
                      <i data-lucide="heart" class="w-4 h-4 ${store.isInWishlist(prod.id) ? 'fill-red-500 text-red-500' : ''}"></i>
                    </button>
                  </div>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                        ${prod.category}
                      </span>
                    </div>
                    <h4 class="text-xs font-bold text-[#3B2C30] mt-1.5 line-clamp-2 leading-snug cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                      ${prod.name}
                    </h4>
                    <div class="flex items-center gap-1 mt-1 text-[10px] text-gray-500">
                      <i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i>
                      <span class="font-semibold text-gray-700">${prod.rating}</span>
                      <span>(${prod.soldCount} terjual)</span>
                    </div>
                  </div>
                  <div class="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span class="text-xs font-extrabold text-[#A24B5C]">${formatRupiah(prod.price)}</span>
                      ${prod.originalPrice ? `<span class="block text-[10px] text-gray-400 line-through">${formatRupiah(prod.originalPrice)}</span>` : ''}
                    </div>
                    <button onclick="app.quickAddToCart('${prod.id}')" class="w-8 h-8 rounded-xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white hover:opacity-95 transition-all flex items-center justify-center shadow-xs">
                      <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }

  handleSearchProduct(val) {
    this.searchQuery = val;
    this.render();
  }

  setSkinFilter(skinId) {
    store.state.activeProductSkinFilter = skinId;
    store.saveState();
  }

  setCategoryFilter(cat) {
    store.state.activeProductCategory = cat;
    store.saveState();
  }

  // ==========================================
  // 6. DETAIL PRODUK (SCREEN 6 DARI SKETSA)
  // ==========================================
  renderProductDetail(productId) {
    const prod = GLOW_DATA.products.find(p => p.id === productId);
    if (!prod) {
      store.setTab("product");
      return;
    }

    const isFav = store.isInWishlist(prod.id);
    const cartCount = store.getCartCount();

    const suitableBadges = prod.suitableFor.map(stId => {
      const info = GLOW_DATA.skinTypes[stId];
      return info ? info.name : stId;
    });

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-24 animate-fade-in flex flex-col justify-between">
        <div>
          <!-- Top Floating Bar -->
          <div class="sticky top-0 z-20 bg-[#FAF5F0]/90 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
            <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
            <h3 class="text-xs font-bold text-[#3B2C30]">Detail Produk</h3>
            <div class="flex items-center gap-2">
              <button onclick="app.toggleWishlist('${prod.id}')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
                <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}"></i>
              </button>
              <button onclick="store.setView('cart')" class="relative p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                <span class="cart-badge-count absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B35264] text-white text-[10px] font-bold flex items-center justify-center">
                  ${cartCount}
                </span>
              </button>
            </div>
          </div>

          <!-- Product Image Showcase -->
          <div class="relative w-full h-72 bg-white flex items-center justify-center border-b border-[#EED7D1]">
            <img src="${prod.image}" class="w-full h-full object-cover" alt="${prod.name}">
            <div class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-xs flex items-center gap-1">
              <i data-lucide="star" class="w-3 h-3 text-amber-400 fill-amber-400"></i>
              <span>${prod.rating}</span>
              <span>• ${prod.soldCount} terjual</span>
            </div>
          </div>

          <!-- Product Info Content (Persis Wireframe Gambar 1 & 3) -->
          <div class="p-5 space-y-4">
            <div>
              <span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                ${prod.category}
              </span>
              <h1 class="text-lg font-bold text-[#3B2C30] mt-2 leading-tight">${prod.name}</h1>
              <div class="flex items-baseline gap-2 mt-1.5">
                <span class="text-xl font-extrabold text-[#A24B5C]">${formatRupiah(prod.price)}</span>
                ${prod.originalPrice ? `<span class="text-xs text-gray-400 line-through">${formatRupiah(prod.originalPrice)}</span>` : ''}
              </div>
            </div>

            <!-- Cocok Untuk Badges (Persis Wireframe Gambar 1 & 3) -->
            <div class="p-3.5 rounded-2xl bg-white border border-[#EED7D1]">
              <span class="text-[11px] font-bold text-gray-500 block mb-2">Cocok Untuk Tipe Kulit:</span>
              <div class="flex flex-wrap gap-1.5">
                ${suitableBadges.map(b => `
                  <span class="px-3 py-1 rounded-xl bg-[#FAF0ED] border border-[#F2D2CB] text-[#A24B5C] text-xs font-semibold">
                    ✓ Kulit ${b}
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Deskripsi Singkat -->
            <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] space-y-2">
              <h4 class="text-xs font-bold text-[#3B2C30]">Deskripsi Produk</h4>
              <p class="text-xs text-gray-600 leading-relaxed">${prod.description}</p>
            </div>

            <!-- Manfaat Utama -->
            <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] space-y-2">
              <h4 class="text-xs font-bold text-[#3B2C30]">Manfaat Utama</h4>
              <ul class="space-y-1.5">
                ${prod.benefits.map(b => `
                  <li class="text-xs text-gray-600 flex items-start gap-2">
                    <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0"></i>
                    <span>${b}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Cara Penggunaan -->
            <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] space-y-2">
              <h4 class="text-xs font-bold text-[#3B2C30]">Cara Penggunaan</h4>
              <p class="text-xs text-gray-600 leading-relaxed">${prod.howToUse}</p>
            </div>

            <!-- Kandungan Utama (Ingredients) -->
            <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] space-y-2">
              <h4 class="text-xs font-bold text-[#3B2C30]">Komposisi (Key Ingredients)</h4>
              <div class="flex flex-wrap gap-1 mb-2">
                ${prod.tags.map(t => `<span class="px-2.5 py-0.5 rounded-md bg-[#FAF5F0] text-[10px] font-semibold text-gray-600 border border-gray-200">#${t}</span>`).join('')}
              </div>
              <p class="text-[11px] text-gray-500 leading-relaxed font-mono">${prod.ingredients}</p>
            </div>
          </div>
        </div>

        <!-- Sticky Bottom Bar: Quantity & Action Buttons -->
        <div class="fixed bottom-0 left-0 right-0 max-w-[440px] mx-auto z-30 bg-white/95 backdrop-blur-md px-5 py-3.5 border-t border-[#F0DFD9] shadow-lg flex items-center gap-3">
          <!-- Quantity Counter -->
          <div class="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
            <button onclick="app.adjustDetailQty(-1)" class="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-gray-600 shadow-xs">
              <i data-lucide="minus" class="w-3 h-3"></i>
            </button>
            <span class="w-8 text-center text-xs font-bold text-gray-800" id="detail-qty-display">${this.productDetailQty}</span>
            <button onclick="app.adjustDetailQty(1)" class="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-gray-600 shadow-xs">
              <i data-lucide="plus" class="w-3 h-3"></i>
            </button>
          </div>

          <!-- Tambah ke Keranjang -->
          <button 
            onclick="app.addToCartFromDetail('${prod.id}', false)"
            class="flex-1 py-3 px-3 rounded-xl bg-[#FAF0ED] text-[#A24B5C] font-bold text-xs hover:bg-[#FCE8E6] transition-all flex items-center justify-center gap-1.5"
          >
            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
            <span>+ Keranjang</span>
          </button>

          <!-- Beli Sekarang -->
          <button 
            onclick="app.addToCartFromDetail('${prod.id}', true)"
            class="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-bold text-xs shadow-md shadow-[#D6727F]/25 hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
          >
            <span>Beli Sekarang</span>
          </button>
        </div>
      </div>
    `;
  }

  adjustDetailQty(delta) {
    this.productDetailQty = Math.max(1, this.productDetailQty + delta);
    const el = document.getElementById("detail-qty-display");
    if (el) el.textContent = this.productDetailQty;
  }

  addToCartFromDetail(productId, directCheckout = false) {
    store.addToCart(productId, this.productDetailQty);
    const prod = GLOW_DATA.products.find(p => p.id === productId);
    showToast(`${this.productDetailQty}x ${prod ? prod.name : 'Produk'} ditambahkan ke keranjang!`);
    this.productDetailQty = 1;

    if (directCheckout) {
      store.setView("checkout");
    } else {
      this.render();
    }
  }

  quickAddToCart(productId) {
    store.addToCart(productId, 1);
    const prod = GLOW_DATA.products.find(p => p.id === productId);
    showToast(`${prod ? prod.name : 'Produk'} ditambahkan ke keranjang!`);
    this.render();
  }

  toggleWishlist(productId) {
    store.toggleWishlist(productId);
    const isNowFav = store.isInWishlist(productId);
    showToast(isNowFav ? "Ditambahkan ke produk favorit ❤️" : "Dihapus dari favorit");
    this.render();
  }

  // ==========================================
  // 7. TIPS & ARTIKEL EDUKASI (SCREEN 7)
  // ==========================================
  renderTipsView() {
    const categories = ["Semua", "Perawatan Kulit", "Make Up", "Edukasi"];
    const activeCat = store.state.activeTipsCategory;

    const filteredArticles = GLOW_DATA.articles.filter(a => {
      return activeCat === "Semua" || a.category === activeCat;
    });

    this.container.innerHTML = `
      <div class="pb-24 animate-fade-in">
        <!-- Top App Bar -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] space-y-3">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-bold text-[#3B2C30]">Tips & Edukasi Kecantikan</h2>
            <div class="w-8"></div>
          </div>

          <!-- Filter Tabs: Semua, Perawatan Kulit, Make Up, Edukasi (Persis Wireframe Gambar 1 & 3) -->
          <div class="flex gap-2 overflow-x-auto no-scrollbar">
            ${categories.map(c => {
              const active = activeCat === c;
              return `
                <button 
                  onclick="app.setTipsCategory('${c}')"
                  class="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${active ? 'bg-[#A24B5C] text-white shadow-xs' : 'bg-white text-gray-600 border border-[#EED7D1] hover:border-[#D6727F]'}"
                >
                  ${c}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Articles List -->
        <div class="px-5 pt-4 space-y-3.5">
          ${filteredArticles.map(art => `
            <div 
              onclick="store.setView('article-detail', { articleId: '${art.id}' })"
              class="bg-white rounded-2xl overflow-hidden border border-[#EED7D1] shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <div class="relative h-40 w-full bg-gray-100">
                <img src="${art.image}" class="w-full h-full object-cover" alt="${art.title}">
                <div class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#A24B5C]">
                  ${art.category}
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-center gap-2 text-[10px] text-gray-400 mb-1.5">
                  <i data-lucide="clock" class="w-3 h-3"></i>
                  <span>${art.readTime}</span>
                  <span>•</span>
                  <span>${art.date}</span>
                </div>
                <h3 class="text-sm font-bold text-[#3B2C30] leading-snug hover:text-[#A24B5C] transition-colors">
                  ${art.title}
                </h3>
                <p class="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                  ${art.summary}
                </p>
                <div class="mt-3 flex items-center text-xs font-semibold text-[#A24B5C] gap-1">
                  <span>Baca Selengkapnya</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  setTipsCategory(cat) {
    store.state.activeTipsCategory = cat;
    store.saveState();
  }

  renderArticleDetail(articleId) {
    const art = GLOW_DATA.articles.find(a => a.id === articleId);
    if (!art) {
      store.setTab("tips");
      return;
    }

    const relatedProds = (art.relatedProductIds || [])
      .map(id => GLOW_DATA.products.find(p => p.id === id))
      .filter(Boolean);

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-16 animate-fade-in">
        <!-- Top Nav -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="text-xs font-bold text-[#3B2C30] truncate max-w-[200px]">${art.category}</span>
          <button onclick="showToast('Tautan artikel berhasil disalin!')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="share-2" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="px-5 pt-4 space-y-4">
          <div class="rounded-3xl overflow-hidden shadow-sm border border-[#EED7D1] h-48 w-full bg-gray-100">
            <img src="${art.image}" class="w-full h-full object-cover" alt="${art.title}">
          </div>

          <div>
            <div class="flex items-center gap-2 text-[10px] text-gray-500 mb-1.5">
              <span class="px-2.5 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C] font-semibold">${art.category}</span>
              <span>• ${art.readTime}</span>
              <span>• ${art.date}</span>
            </div>
            <h1 class="text-lg font-bold text-[#3B2C30] leading-snug">${art.title}</h1>
          </div>

          <!-- Article Content Body -->
          <div class="p-5 rounded-2xl bg-white border border-[#EED7D1] text-xs text-gray-700 leading-relaxed prose prose-sm max-w-none">
            ${art.content}
          </div>

          <!-- Rekomendasi Produk Terkait Artikel -->
          ${relatedProds.length > 0 ? `
            <div class="space-y-3 pt-2">
              <h4 class="text-xs font-bold text-[#3B2C30] flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-[#A24B5C]"></i>
                Produk yang Disebutkan dalam Artikel Ini:
              </h4>
              <div class="space-y-2.5">
                ${relatedProds.map(p => `
                  <div class="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#EED7D1] shadow-xs">
                    <div class="flex items-center gap-3 cursor-pointer" onclick="store.setView('product-detail', { productId: '${p.id}' })">
                      <img src="${p.image}" class="w-12 h-12 rounded-xl object-cover" alt="${p.name}">
                      <div>
                        <h5 class="text-xs font-bold text-[#3B2C30] line-clamp-1 hover:text-[#A24B5C]">${p.name}</h5>
                        <span class="text-xs font-extrabold text-[#A24B5C]">${formatRupiah(p.price)}</span>
                      </div>
                    </div>
                    <button onclick="app.quickAddToCart('${p.id}')" class="px-3 py-1.5 rounded-xl bg-[#FAF0ED] text-[#A24B5C] hover:bg-[#A24B5C] hover:text-white transition-all text-xs font-bold">
                      + Keranjang
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // ==========================================
  // 8. KERANJANG BELANJA (CART)
  // ==========================================
  renderCart() {
    const cart = store.state.cart;
    const subtotal = store.getCartSubtotal();

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] flex flex-col justify-between pb-8 animate-fade-in">
        <div>
          <!-- Header -->
          <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
            <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
              <i data-lucide="arrow-left" class="w-4 h-4"></i>
            </button>
            <h3 class="text-sm font-bold text-[#3B2C30]">Keranjang Belanja</h3>
            <span class="text-xs font-semibold text-gray-500">${cart.length} item</span>
          </div>

          <div class="px-5 pt-4">
            ${cart.length === 0 ? `
              <div class="text-center py-20 px-4">
                <div class="w-20 h-20 rounded-full bg-[#FAF0ED] mx-auto mb-4 flex items-center justify-center text-[#A24B5C]">
                  <i data-lucide="shopping-bag" class="w-9 h-9"></i>
                </div>
                <h4 class="text-sm font-bold text-[#3B2C30]">Keranjangmu Masih Kosong</h4>
                <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                  Yuk, temukan produk skincare yang cocok untuk tipe kulitmu dan tambahkan ke sini.
                </p>
                <button onclick="store.setTab('product')" class="mt-5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white text-xs font-bold shadow-md">
                  Mulai Belanja
                </button>
              </div>
            ` : `
              <div class="space-y-3">
                ${cart.map(item => {
                  const prod = GLOW_DATA.products.find(p => p.id === item.productId);
                  if (!prod) return '';
                  return `
                    <div class="p-3.5 rounded-2xl bg-white border border-[#EED7D1] shadow-xs flex items-center gap-3">
                      <img src="${prod.image}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0 cursor-pointer" onclick="store.setView('product-detail', { productId: '${prod.id}' })" alt="${prod.name}">
                      <div class="flex-1 min-w-0">
                        <h4 class="text-xs font-bold text-[#3B2C30] line-clamp-1 cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                          ${prod.name}
                        </h4>
                        <span class="text-xs font-extrabold text-[#A24B5C] mt-0.5 block">${formatRupiah(prod.price)}</span>
                        
                        <div class="flex items-center justify-between mt-2">
                          <div class="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5">
                            <button onclick="store.updateCartQty('${prod.id}', -1)" class="w-6 h-6 rounded bg-white flex items-center justify-center text-gray-600 shadow-xs">
                              <i data-lucide="minus" class="w-2.5 h-2.5"></i>
                            </button>
                            <span class="w-7 text-center text-xs font-bold text-gray-800">${item.quantity}</span>
                            <button onclick="store.updateCartQty('${prod.id}', 1)" class="w-6 h-6 rounded bg-white flex items-center justify-center text-gray-600 shadow-xs">
                              <i data-lucide="plus" class="w-2.5 h-2.5"></i>
                            </button>
                          </div>
                          <button onclick="store.removeFromCart('${prod.id}')" class="text-gray-400 hover:text-red-500 p-1">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>
        </div>

        ${cart.length > 0 ? `
          <div class="px-5 pt-4 space-y-3">
            <!-- Ringkasan Harga -->
            <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] space-y-2">
              <div class="flex justify-between text-xs text-gray-500">
                <span>Subtotal Produk</span>
                <span class="font-bold text-gray-800">${formatRupiah(subtotal)}</span>
              </div>
              <div class="flex justify-between text-xs text-gray-500">
                <span>Estimasi Pengiriman</span>
                <span class="text-emerald-600 font-semibold">Dihitung saat checkout</span>
              </div>
              <div class="pt-2 border-t border-gray-100 flex justify-between text-sm font-bold text-[#3B2C30]">
                <span>Total Sementara</span>
                <span class="text-[#A24B5C] font-extrabold">${formatRupiah(subtotal)}</span>
              </div>
            </div>

            <button 
              onclick="store.setView('checkout')"
              class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
            >
              <span>Lanjut ke Pembayaran</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ==========================================
  // 9. CHECKOUT SCREEN (IN-APP E-COMMERCE)
  // ==========================================
  renderCheckout() {
    const cart = store.state.cart;
    if (cart.length === 0) {
      store.setView("cart");
      return;
    }

    const subtotal = store.getCartSubtotal();
    const couriers = [
      { id: "J&T Express (Reguler)", name: "J&T Express (Reguler)", est: "2-3 hari", fee: 12000 },
      { id: "SiCepat (Hemat)", name: "SiCepat (Hemat)", est: "3-4 hari", fee: 10000 },
      { id: "GoSend Instant", name: "GoSend Instant", est: "Hari ini tiba", fee: 20000 }
    ];

    const paymentMethods = [
      { id: "BCA Virtual Account", name: "BCA Virtual Account", icon: "credit-card" },
      { id: "Mandiri Virtual Account", name: "Mandiri Virtual Account", icon: "landmark" },
      { id: "GoPay / QRIS", name: "GoPay / QRIS", icon: "qr-code" },
      { id: "ShopeePay", name: "ShopeePay", icon: "wallet" },
      { id: "COD (Bayar di Tempat)", name: "COD (Bayar di Tempat)", icon: "banknote" }
    ];

    if (!this.selectedCourier) this.selectedCourier = couriers[0];
    if (!this.selectedPayment) this.selectedPayment = paymentMethods[0].id;

    const shippingFee = this.selectedCourier.fee;
    const totalAmount = subtotal + shippingFee;

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-10 animate-fade-in">
        <!-- Header -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('cart')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <h3 class="text-sm font-bold text-[#3B2C30]">Checkout Pesanan</h3>
          <div class="w-8"></div>
        </div>

        <div class="px-5 pt-4 space-y-4">
          <!-- Alamat Pengiriman -->
          <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs space-y-2">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-[#3B2C30] flex items-center gap-1.5">
                <i data-lucide="map-pin" class="w-4 h-4 text-[#A24B5C]"></i>
                Alamat Pengiriman
              </h4>
              <span class="text-[10px] font-semibold text-[#A24B5C] bg-[#FAF0ED] px-2 py-0.5 rounded-md">Utama</span>
            </div>
            <div>
              <p class="text-xs font-bold text-gray-800">Alifa Najwa (081234567890)</p>
              <p class="text-[11px] text-gray-600 mt-0.5">Jl. Melati No. 18, Kebayoran Baru, Jakarta Selatan 12140</p>
            </div>
          </div>

          <!-- Pilihan Ekspedisi -->
          <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs space-y-2.5">
            <h4 class="text-xs font-bold text-[#3B2C30] flex items-center gap-1.5">
              <i data-lucide="truck" class="w-4 h-4 text-[#A24B5C]"></i>
              Pilih Layanan Pengiriman
            </h4>
            <div class="space-y-2">
              ${couriers.map(c => `
                <label class="flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${this.selectedCourier.id === c.id ? 'border-[#A24B5C] bg-[#FFF8F7]' : 'border-gray-200 hover:border-gray-300'}">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="courier" value="${c.id}" ${this.selectedCourier.id === c.id ? 'checked' : ''} onchange="app.setCourier('${c.id}')" class="text-[#A24B5C] focus:ring-[#A24B5C]">
                    <div>
                      <p class="text-xs font-bold text-[#3B2C30]">${c.name}</p>
                      <span class="text-[10px] text-gray-500">Estimasi: ${c.est}</span>
                    </div>
                  </div>
                  <span class="text-xs font-extrabold text-[#A24B5C]">${formatRupiah(c.fee)}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Pilihan Metode Pembayaran -->
          <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs space-y-2.5">
            <h4 class="text-xs font-bold text-[#3B2C30] flex items-center gap-1.5">
              <i data-lucide="credit-card" class="w-4 h-4 text-[#A24B5C]"></i>
              Metode Pembayaran
            </h4>
            <div class="space-y-2">
              ${paymentMethods.map(pm => `
                <label class="flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${this.selectedPayment === pm.id ? 'border-[#A24B5C] bg-[#FFF8F7]' : 'border-gray-200 hover:border-gray-300'}">
                  <div class="flex items-center gap-2.5">
                    <input type="radio" name="payment" value="${pm.id}" ${this.selectedPayment === pm.id ? 'checked' : ''} onchange="app.setPaymentMethod('${pm.id}')" class="text-[#A24B5C] focus:ring-[#A24B5C]">
                    <div class="flex items-center gap-2">
                      <i data-lucide="${pm.icon}" class="w-4 h-4 text-[#A24B5C]"></i>
                      <span class="text-xs font-medium text-[#3B2C30]">${pm.name}</span>
                    </div>
                  </div>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Ringkasan Produk Pesanan -->
          <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs space-y-2">
            <h4 class="text-xs font-bold text-[#3B2C30]">Daftar Produk (${cart.length} item)</h4>
            <div class="divide-y divide-gray-100">
              ${cart.map(item => {
                const p = GLOW_DATA.products.find(x => x.id === item.productId);
                if (!p) return '';
                return `
                  <div class="py-2 flex items-center justify-between text-xs">
                    <span class="text-gray-700 truncate max-w-[200px]">${p.name} <span class="text-gray-400 font-semibold">x${item.quantity}</span></span>
                    <span class="font-bold text-gray-800">${formatRupiah(p.price * item.quantity)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Rincian Biaya Akhir -->
          <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs space-y-2 text-xs">
            <div class="flex justify-between text-gray-600">
              <span>Subtotal Produk</span>
              <span class="font-bold text-gray-800">${formatRupiah(subtotal)}</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Ongkos Kirim (${this.selectedCourier.name})</span>
              <span class="font-bold text-gray-800">${formatRupiah(shippingFee)}</span>
            </div>
            <div class="pt-2 border-t border-gray-100 flex justify-between text-sm font-extrabold text-[#3B2C30]">
              <span>Total Pembayaran</span>
              <span class="text-[#A24B5C]">${formatRupiah(totalAmount)}</span>
            </div>
          </div>

          <!-- Tombol Bayar -->
          <button 
            onclick="app.processCheckout()"
            class="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-bold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
          >
            <i data-lucide="shield-check" class="w-4 h-4"></i>
            <span>Bayar Sekarang (${formatRupiah(totalAmount)})</span>
          </button>
        </div>
      </div>
    `;
  }

  setCourier(courierId) {
    const couriers = [
      { id: "J&T Express (Reguler)", name: "J&T Express (Reguler)", est: "2-3 hari", fee: 12000 },
      { id: "SiCepat (Hemat)", name: "SiCepat (Hemat)", est: "3-4 hari", fee: 10000 },
      { id: "GoSend Instant", name: "GoSend Instant", est: "Hari ini tiba", fee: 20000 }
    ];
    this.selectedCourier = couriers.find(c => c.id === courierId) || couriers[0];
    this.render();
  }

  setPaymentMethod(pmId) {
    this.selectedPayment = pmId;
    this.render();
  }

  processCheckout() {
    store.createOrder({
      recipient: "Alifa Najwa",
      phone: "081234567890",
      address: "Jl. Melati No. 18, Kebayoran Baru",
      city: "Jakarta Selatan",
      postalCode: "12140",
      courier: this.selectedCourier.name,
      shippingFee: this.selectedCourier.fee,
      paymentMethod: this.selectedPayment
    });

    showToast("Pesanan berhasil dibuat! Segera lakukan pembayaran.");
    store.setView("order-success");
  }

  // ==========================================
  // 10. ORDER SUCCESS SCREEN
  // ==========================================
  renderOrderSuccess() {
    const order = store.state.latestOrder || store.state.orders[0];
    if (!order) {
      store.setView("main");
      return;
    }

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] flex flex-col justify-between p-6 text-center animate-fade-in">
        <div></div>

        <div class="flex flex-col items-center">
          <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
            <i data-lucide="check" class="w-10 h-10"></i>
          </div>

          <h2 class="text-xl font-extrabold text-[#3B2C30]">Pesanan Berhasil Dibuat!</h2>
          <p class="text-xs text-gray-500 mt-1 max-w-xs">
            ID Pesanan: <span class="font-bold text-gray-800">${order.id}</span>
          </p>

          <!-- Info Pembayaran / Virtual Account -->
          <div class="w-full max-w-xs mt-6 p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs text-left space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">Metode Pembayaran</span>
              <span class="text-xs font-bold text-gray-800">${order.paymentMethod}</span>
            </div>

            ${order.vaNumber ? `
              <div class="p-3 rounded-xl bg-[#FAF5F0] border border-[#F0DFD9]">
                <span class="text-[10px] text-gray-500 block mb-1">Nomor Virtual Account / Pembayaran:</span>
                <div class="flex items-center justify-between">
                  <span class="font-mono text-sm font-extrabold text-[#A24B5C]">${order.vaNumber}</span>
                  <button onclick="navigator.clipboard.writeText('${order.vaNumber}'); showToast('Nomor VA disalin!')" class="text-xs text-[#A24B5C] font-bold flex items-center gap-1 hover:underline">
                    <i data-lucide="copy" class="w-3.5 h-3.5"></i> Salin
                  </button>
                </div>
              </div>
            ` : ''}

            <div class="flex justify-between items-center pt-2 border-t border-gray-100">
              <span class="text-xs text-gray-500">Total yang Harus Dibayar</span>
              <span class="text-sm font-extrabold text-[#A24B5C]">${formatRupiah(order.totalAmount)}</span>
            </div>
          </div>
        </div>

        <div class="space-y-3 w-full max-w-xs mx-auto">
          <button 
            onclick="store.setView('orders-list')"
            class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#D6727F] to-[#B35264] text-white font-semibold shadow-lg shadow-[#D6727F]/25 hover:opacity-95 active:scale-95 transition-all text-xs"
          >
            Lihat Status Pesanan Saya
          </button>
          <button 
            onclick="store.setView('main')"
            class="w-full py-3 px-6 rounded-2xl bg-white border border-[#EED7D1] text-gray-700 font-semibold hover:bg-gray-50 active:scale-95 transition-all text-xs"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 11. DAFTAR PESANAN SAYA
  // ==========================================
  renderOrdersList() {
    const orders = store.state.orders;

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-12 animate-fade-in">
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <h3 class="text-sm font-bold text-[#3B2C30]">Pesanan Saya</h3>
          <div class="w-8"></div>
        </div>

        <div class="px-5 pt-4 space-y-3">
          ${orders.length === 0 ? `
            <div class="text-center py-20 px-4">
              <i data-lucide="package" class="w-12 h-12 text-gray-300 mx-auto mb-3"></i>
              <h4 class="text-sm font-bold text-gray-700">Belum Ada Transaksi</h4>
              <p class="text-xs text-gray-400 mt-1">Kamu belum pernah melakukan checkout produk.</p>
            </div>
          ` : `
            ${orders.map(order => `
              <div class="p-4 rounded-2xl bg-white border border-[#EED7D1] shadow-xs space-y-3">
                <div class="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div>
                    <span class="text-xs font-bold text-[#3B2C30]">${order.id}</span>
                    <span class="text-[10px] text-gray-400 block">${order.date}</span>
                  </div>
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${order.status === 'Selesai' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">
                    ${order.status}
                  </span>
                </div>

                <div class="space-y-1.5">
                  ${order.items.map(item => `
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-gray-700">${item.name} <span class="text-gray-400">x${item.quantity}</span></span>
                      <span class="font-bold text-gray-800">${formatRupiah(item.price * item.quantity)}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span class="text-[10px] text-gray-400 block">Total Pesanan</span>
                    <span class="text-xs font-extrabold text-[#A24B5C]">${formatRupiah(order.totalAmount)}</span>
                  </div>
                  <button onclick="showToast('Rincian pesanan ${order.id} telah diperbarui.')" class="px-3 py-1.5 rounded-xl bg-[#FAF0ED] text-[#A24B5C] text-xs font-bold hover:bg-[#A24B5C] hover:text-white transition-all">
                    Detail Pesanan
                  </button>
                </div>
              </div>
            `).join('')}
          `}
        </div>
      </div>
    `;
  }

  // ==========================================
  // 12. PROFIL PENGGUNA (SCREEN 8 WIREFRAME)
  // ==========================================
  renderProfileView() {
    const user = store.state.user;
    const skinInfo = user.skinType ? GLOW_DATA.skinTypes[user.skinType] : null;

    this.container.innerHTML = `
      <div class="pb-24 animate-fade-in">
        <!-- Top App Bar -->
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <h2 class="text-base font-bold text-[#3B2C30]">Profil Pengguna</h2>
          <button onclick="showToast('Pengaturan aplikasi')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="settings" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="px-5 pt-4 space-y-4">
          <!-- User Profile Card (Persis Wireframe Gambar 1 & 3) -->
          <div class="p-4 rounded-3xl bg-white border border-[#EED7D1] shadow-xs flex items-center gap-3.5">
            <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E58C8A] flex-shrink-0">
              <img src="${user.avatar}" class="w-full h-full object-cover" alt="${user.name}">
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-bold text-[#3B2C30] leading-tight">${user.name}</h3>
              <p class="text-xs text-gray-500 mt-0.5 truncate">${user.email}</p>
              <div class="mt-1.5 flex items-center gap-1.5">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF0ED] text-[#A24B5C]">
                  ${skinInfo ? 'Kulit ' + skinInfo.name : 'Belum Tes Kulit'}
                </span>
              </div>
            </div>
          </div>

          <!-- Status Kondisi Kulit Saya & CTA Scan Kamera -->
          <div class="p-4 rounded-2xl bg-gradient-to-r from-[#FDE8E3] to-[#FCE6E2] border border-[#F4C6BE] shadow-xs flex items-center justify-between">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#A24B5C]">Status Kulit Saya</span>
              <h4 class="text-xs font-bold text-[#3B2C30] mt-0.5">${skinInfo ? skinInfo.name : 'Belum Dianalisis'}</h4>
              <p class="text-[10px] text-gray-500 mt-0.5">${user.undertone ? 'Undertone: ' + user.undertone : 'Terakhir dicek: ' + (user.lastAnalysisDate || 'Hari ini')}</p>
            </div>
            <div class="flex items-center gap-1.5">
              <button onclick="app.openCameraScanner()" class="px-3 py-2 rounded-xl bg-[#A24B5C] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-all flex items-center gap-1">
                <i data-lucide="camera" class="w-3.5 h-3.5"></i>
                <span>Scan Ulang</span>
              </button>
            </div>
          </div>

          <!-- Menu Navigasi Profil (Persis List Gambar 1 & 3) -->
          <div class="rounded-2xl bg-white border border-[#EED7D1] shadow-xs divide-y divide-gray-100 overflow-hidden">
            <!-- 1. Tipe Kulit Saya -->
            <div onclick="store.setView('scan-result')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-[#FAF0ED] text-[#A24B5C] flex items-center justify-center">
                  <i data-lucide="scan-face" class="w-4 h-4"></i>
                </div>
                <div>
                  <span class="text-xs font-semibold text-gray-800 block">Hasil Scan & Undertone</span>
                  <span class="text-[10px] text-gray-400">Lihat analisis kamera & custom matches</span>
                </div>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
            </div>

            <!-- 2. Riwayat Analisis -->
            <div onclick="showToast('Riwayat tes: ' + store.state.skinAnalysisHistory.length + ' sesi tercatat')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-[#F0F5ED] text-[#4E7D59] flex items-center justify-center">
                  <i data-lucide="history" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold text-gray-800">Riwayat Analisis Kulit</span>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
            </div>

            <!-- 3. Pesanan Saya -->
            <div onclick="store.setView('orders-list')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-[#FFF1E6] text-[#C96442] flex items-center justify-center">
                  <i data-lucide="package" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold text-gray-800">Pesanan Saya</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-bold text-gray-400">${store.state.orders.length} pesanan</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
              </div>
            </div>

            <!-- 4. Produk Favorit (Wishlist) -->
            <div onclick="store.setView('wishlist-view')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-[#FCE8E6] text-rose-500 flex items-center justify-center">
                  <i data-lucide="heart" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold text-gray-800">Produk Favorit</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-bold text-gray-400">${store.state.wishlist.length}</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
              </div>
            </div>

            <!-- 5. Notifikasi -->
            <div onclick="showToast('Notifikasi tips harian diaktifkan')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-[#F3EBFB] text-[#7A4BA6] flex items-center justify-center">
                  <i data-lucide="bell" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold text-gray-800">Notifikasi Tips Harian</span>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
            </div>

            <!-- 6. Pengaturan -->
            <div onclick="showToast('Menu pengaturan akun')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
                  <i data-lucide="sliders" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold text-gray-800">Pengaturan Akun</span>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
            </div>

            <!-- 7. Bantuan -->
            <div onclick="showToast('Hubungi tim CS di support@glowyou.id')" class="p-3.5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
                  <i data-lucide="help-circle" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold text-gray-800">Pusat Bantuan & CS</span>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300"></i>
            </div>

            <!-- 8. Keluar -->
            <div onclick="app.handleLogout()" class="p-3.5 flex items-center justify-between hover:bg-red-50 cursor-pointer transition-all text-red-600">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <i data-lucide="log-out" class="w-4 h-4"></i>
                </div>
                <span class="text-xs font-semibold">Keluar Akun</span>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-red-300"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  handleLogout() {
    if (confirm("Apakah kamu yakin ingin keluar dan mereset simulasi data?")) {
      localStorage.removeItem("glowyou_app_state_v1");
      location.reload();
    }
  }

  // ==========================================
  // 13. WISHLIST VIEW
  // ==========================================
  renderWishlistView() {
    const wishlistIds = store.state.wishlist;
    const wishlistProds = wishlistIds.map(id => GLOW_DATA.products.find(p => p.id === id)).filter(Boolean);

    this.container.innerHTML = `
      <div class="min-h-screen bg-[#FAF5F0] pb-12 animate-fade-in">
        <div class="sticky top-0 z-20 bg-[#FAF5F0]/95 backdrop-blur-md px-5 pt-4 pb-3 border-b border-[#F0DFD9] flex items-center justify-between">
          <button onclick="store.setView('main')" class="p-2 rounded-xl bg-white border border-[#EED7D1] text-[#694F54]">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <h3 class="text-sm font-bold text-[#3B2C30]">Produk Favorit (Wishlist)</h3>
          <div class="w-8"></div>
        </div>

        <div class="px-5 pt-4">
          ${wishlistProds.length === 0 ? `
            <div class="text-center py-20 px-4">
              <i data-lucide="heart" class="w-12 h-12 text-gray-300 mx-auto mb-3"></i>
              <h4 class="text-sm font-bold text-gray-700">Belum Ada Produk Favorit</h4>
              <p class="text-xs text-gray-400 mt-1">Tekan ikon hati pada produk yang kamu sukai.</p>
            </div>
          ` : `
            <div class="grid grid-cols-2 gap-3.5">
              ${wishlistProds.map(prod => `
                <div class="bg-white rounded-2xl p-3 border border-[#EED7D1] shadow-xs flex flex-col justify-between">
                  <div class="relative w-full h-32 rounded-xl overflow-hidden bg-gray-50 mb-2 cursor-pointer" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                    <img src="${prod.image}" class="w-full h-full object-cover" alt="${prod.name}">
                    <button onclick="event.stopPropagation(); app.toggleWishlist('${prod.id}')" class="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 text-red-500 flex items-center justify-center">
                      <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-[#3B2C30] line-clamp-1 cursor-pointer hover:text-[#A24B5C]" onclick="store.setView('product-detail', { productId: '${prod.id}' })">
                      ${prod.name}
                    </h4>
                    <span class="text-xs font-extrabold text-[#A24B5C] mt-1 block">${formatRupiah(prod.price)}</span>
                  </div>
                  <button onclick="app.quickAddToCart('${prod.id}')" class="mt-2.5 w-full py-2 rounded-xl bg-[#FAF0ED] text-[#A24B5C] hover:bg-[#A24B5C] hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-1">
                    <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    <span>+ Keranjang</span>
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }
}

// Global Application Instance
let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new GlowApp();
  app.init();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW register failed (local testing):', err);
    });
  }
});
