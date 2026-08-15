"use strict";

// ========================================
// CONFIGURATION
// ========================================

// Replace with your WhatsApp Business number in international format,
// digits only, no "+", no spaces, no leading zero. Example: 966501234567
const WHATSAPP_NUMBER = "966530315738";

// Replace with your Firebase project's Web app configuration.
// See SETUP-INSTRUCTIONS.md for exactly how to obtain these values
// (Firebase Console → Project settings → Your apps → Web app).
// These values are safe to expose in frontend code — they identify
// your project, they are not secret credentials. Access is controlled
// by Firestore Security Rules instead (also covered in the setup guide).
const firebaseConfig = {
  apiKey: "AIzaSyBYIfUU2z8ot_63Nc7WVSV6Lo0uDTypZ8c",
  authDomain: "afnan-abaya.firebaseapp.com",
  projectId: "afnan-abaya",
  storageBucket: "afnan-abaya.firebasestorage.app",
  messagingSenderId: "818771397203",
  appId: "1:818771397203:web:83be5092417ce89c5094a6",
  measurementId: "G-CNF03Y819L"
};

// ========================================
// DATA — sample abaya catalog
// Every product has exactly 3 images.
// ========================================
const abayas = [
  {
    id: "AF-001",
    name: " 01",
    color: "أسود",
    fabric: "كريب ياباني",
    details: "تطريز يدوي كسرتان أنيقتان ",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      "https://cdn.salla.sa/RYOGz/14b980df-70e9-4d26-bbfc-587147981628-610.89743589744x1000-dbalz9V1CNUdedRItfqnVu7JtIDimrDNGjkuvsf0.jpg",
      "https://cdn.salla.sa/RYOGz/00212372-be38-4f3e-9057-fc3186531a58-666.66666666667x1000-jISJzZPyvb7zICCZyhISfSqxKR4hQXUYKvzRN9Qq.jpg",
      "https://cdn.salla.sa/RYOGz/051393e2-d38f-47f8-b604-d362f84d6c68-666.66666666667x1000-e3HEcoSMVDnPkFixEyq79kDlOfarbKYhjuQPa8d3.jpg",
    ],
  },
  {
    id: "AF-002",
    name: "02",
    color: "أسود",
    fabric: "كريب ياباني",
    details: " بقصة مستقيمة وأنيقة",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      "https://cdn.salla.sa/RYOGz/UgWs2ke9CL7AfkuJt6CYo2Ei06JWNUtkumOTSOwq.jpg",
      "https://cdn.salla.sa/RYOGz/ZRt68NENDdowwyv58I66INemlnlgPSV4lVN3JQx4.jpg",
      "https://cdn.salla.sa/RYOGz/MNwNPJwwTl60w279M5DcluQpgxb5QmkyzmQICiEn.jpg",
    ],
  },
  {
    id: "AF-003",
    name: "03",
    color: "أسود فحمي",
    fabric: "كريب ياباني",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      "https://cdn.salla.sa/RYOGz/UgWs2ke9CL7AfkuJt6CYo2Ei06JWNUtkumOTSOwq.jpg",
      "https://cdn.salla.sa/RYOGz/ZRt68NENDdowwyv58I66INemlnlgPSV4lVN3JQx4.jpg",
      "https://cdn.salla.sa/RYOGz/MNwNPJwwTl60w279M5DcluQpgxb5QmkyzmQICiEn.jpg",
    ],
  },
  {
    id: "AF-004",
    name: "04",
    color: "أسود فحمي",
    fabric: "انترنت ",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/c9e5d606-d9f5-4d71-a12d-4ce5e72f2e6e-562.5x1000-efp5C9fxk4SKGCJ5UQQeRuljqW39YTfKwAnyoSdJ.jpg',
      'https://cdn.salla.sa/gmlgv/2f5e79ab-25f3-42ce-b26b-5933eb6566c1-562.5x1000-Zq9vrVqPeDhW8VqY7cncpzohtOlMcbIn5xEHX7s0.jpg',
      'https://cdn.salla.sa/gmlgv/c5f38946-bcf1-4cfb-a68c-37f2c68da686-562.5x1000-KX53qhGuBnbsGygHIAsClAXwxQcgkqtCOSaU67m8.jpg'
    ],
  },
  {
    id: "AF-005",
    name: "05",
    color: "أسود ",
    fabric: "كريب ملكي ",
    details: " قصة ربع كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://www.aya.app/cdn/shop/files/ChatGPT_Image_Feb_17_2026_09_16_52_PM.png?v=1782047510&width=1000',
      'https://www.aya.app/cdn/shop/files/ChatGPT_Image_Feb_17_2026_09_13_59_PM.png?v=1782047509&width=1000',
      'https://www.aya.app/cdn/shop/files/ChatGPT_Image_Feb_17_2026_09_26_16_PM.png?v=1782047508&width=1000'
    ],
  },
  {
    id: "AF-006",
    name: "06",
    color: "أسود ",
    fabric: "انترنت كوري ",
    details: " قصة ربع كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/dc8a5e06-f55c-4027-9e5c-21ddb4eead2a-562.5x1000-ClMZmk4yrsdgvZp4d6NFfKXtxafRhnWeLKLvHKEh.jpg',
      'https://cdn.salla.sa/gmlgv/b5a6ce56-f2d3-4a40-aa07-154ef0db8db4-562.5x1000-oB5URsOkUqDTPyRQoNXnbDzDTCiyXLo4ZUWjINKS.jpg',
      'https://cdn.salla.sa/gmlgv/b140fba1-d637-4eaf-a38a-fa91ecf20b2c-562.5x1000-F4bdgwpe36ZUVHSUCHlrLIxLj0LbmdVQps5BZfvY.jpg'
    ],
  },
  {
    id: "AF-007",
    name: "07",
    color: "أسود ",
    fabric: "كريب كوري ",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/40894289-791e-4d66-a3f3-3bb7fe226baf-562.5x1000-ngy1COy01nXxNbTZiNU7fKU55tlnf0pBHmkFtSw9.jpg',
      'https://cdn.salla.sa/gmlgv/e8f11463-2c03-44e2-b9e2-de292751ba84-562.5x1000-jpGVY5LSw29g4ddIGjpOKEgPaqEakXBhYxaLZISh.jpg',
      'https://cdn.salla.sa/gmlgv/b64e5378-98ac-49d9-9b27-d7302f54f713-562.5x1000-bCLuTsmkXjrpzIc2JSIsDC8VL1MspMGvqOm8tMh7.jpg'
    ],
  },
  {
    id: "AF-008",
    name: "08",
    color: "أسود ",
    fabric: "كريب ملكي ",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/3a288d70-69d9-4362-8c5f-1385241ac846-562.5x1000-lVH9KCsa6wB1QiaFwE2hNAC6nChpPjdhj8qyYueR.jpg',
      'https://cdn.salla.sa/gmlgv/63e2ebd7-bebf-4d78-a9c1-a125c9ebb71c-562.5x1000-L5QPdgrj1ItzSziDIy2JnBx79i2Kb5l51dGqWfE0.jpg',
      'https://cdn.salla.sa/gmlgv/71cd631b-517f-4e4d-b269-027cf13a03b5-562.5x1000-zy5bax9P3tBUNZ8hvGogbMB6yiDwTceocR2zk08p.jpg'
    ],
  },
  {
    id: "AF-009",
    name: "09",
    color: "أسود ",
    fabric: "كريب ملكي ",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/ed4c978c-376b-4d94-accd-ff1b3d866c9b-562.5x1000-2ObnZBLQzd5NXT0uLgWYG3yybaIqaSCgVLs49KVD.jpg',
      'https://cdn.salla.sa/gmlgv/b1ab7cf9-174e-4dcf-847f-ca144ebf67c8-562.5x1000-mpiSfqC6082rK5TnoLwMfAXTij3ZCrQ4RazVrSBx.jpg',
      'https://cdn.salla.sa/gmlgv/271b7caf-f418-4529-af55-4d0a7d64a062-562.5x1000-6rVBb49HQCbatFAD3zLrtKI1UjGh0IcPPRnP6be4.jpg'
    ],
  },
  {
    id: "AF-010",
    name: "10",
    color: "أسود ",
    fabric: "انترنت  ",
    details: " قصة ربع كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/O5fSZ6a7sFHpE87DaYk2Ep4AABoGABVGblbZbj3p.jpg',
      'https://cdn.salla.sa/gmlgv/MkP5mmYFPvIRhQxwAiGRONLdujIoVaVzIzuk5PCx.jpg',
      'https://cdn.salla.sa/gmlgv/MkP5mmYFPvIRhQxwAiGRONLdujIoVaVzIzuk5PCx.jpg'
    ],
  },
  {
    id: "AF-011",
    name: "11",
    color: "أسود ",
    fabric: "انترنت  ",
    details: " قصة ربع كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/fe74cb0e-09ce-4e1e-9b91-b85456afae92-562.5x1000-kw2SCr39dGGtJeUshtOuWHDfYaocaOAtUjsSZxxc.jpg',
      'https://cdn.salla.sa/gmlgv/0b384566-ea86-40d7-86a3-6e40150d6391-562.5x1000-uZzOlPHdi5S3iptwslmO27aefoFRPTrM05XADaUg.jpg',
      'https://cdn.salla.sa/gmlgv/c3029cad-e2cb-4397-a0b9-18b81bcd581c-562.5x1000-p5a4ZTLbEAjbLleoorlmqedtBqvkVpDSYEHytzJ8.jpg'
    ],
  },
  {
    id: "AF-012",
    name: "12",
    color: "أسود ",
    fabric: "انترنت  ",
    details: " قصة ربع كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/e2798f78-77ab-44d5-ae71-5a1983f82952-562.5x1000-cjMPNamh1g8u6Y8BRg6XJDIbBCuqYFKfsW9MtNP9.jpg',
      'https://cdn.salla.sa/gmlgv/fa2ffd20-6499-413f-9cbf-7c522540ed6e-562.5x1000-4q6uR4pr7GaJiXXjaPQ4AMLAouETBPxFoiTnnPU7.jpg',
      'https://cdn.salla.sa/gmlgv/8a943e18-ce17-409d-a05e-171373ae6729-562.5x1000-sXZqrnSeV1qt43Trz87fswbjx81X8tyA5sjPUOCb.jpg'
    ],
  },
  {
    id: "AF-013",
    name: "13",
    color: "أسود ",
    fabric: "كريب  ",
    details: " قصة ربع كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/0645bfc2-d5d6-4c94-b16e-d782b2b4b475-562.5x1000-fIaEazyTY1BgQbtbniz5D3x9IYP0OIIIvGOQ6h71.jpg',
      'https://cdn.salla.sa/gmlgv/314f2568-d783-498b-9ff6-5e797b7799e1-562.5x1000-a1RrVvmdm8ByzK2ck6ZN5dhFWtGzFZivyjsjts59.jpg',
      'https://cdn.salla.sa/gmlgv/0832cd4d-09c5-435b-a055-dcd372f20625-562.5x1000-gBguTQjXeSWvmeYz9ntjANIKH5Wz6D1sdHymDoZe.jpg'
    ],
  },
  {
    id: "AF-014",
    name: "14",
    color: "أسود ",
    fabric: "كريب ملكي  ",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/1de158bd-2e19-4986-8914-25b80da65fbb-562.5x1000-emyZK9DQeIsk9Wu8fsQCrmnPcd09CPgqbbvpe6Z7.jpg',
      'https://cdn.salla.sa/gmlgv/126cb382-83ee-435a-b965-0a45cc24d431-562.5x1000-jslTSl7wO4ydSF68i0BX78uCy5wX4Cr3ID8SWi0h.jpg',
      'https://cdn.salla.sa/gmlgv/11924204-0653-4526-b622-0bae70bc5a15-562.5x1000-RO3XpnTAoJqVLI5qsXzyUiD3I0bf5jyxujkArLp3.jpg'
    ],
  },
  {
    id: "AF-015",
    name: "15",
    color: "أسود ",
    fabric:  "انترنت",
    details: " قصة نص كلوش",
    sizes: ['52 , 54 , 56 , 58 , 60'],
    images: [
      'https://cdn.salla.sa/gmlgv/52e27491-5df3-4dfc-8076-f8cae32c5f32-562.5x1000-I9kxBnJ8XF8yFkgJQBBdgZRVCdc3nxWfhsrIk8Ln.jpg',
      'https://cdn.salla.sa/gmlgv/10d862ba-2390-42be-97a8-be134a8517a5-562.5x1000-29ABwTRCjGtOkKkVyW3gYqlujTbF4WcvReuMlQ3q.jpg',
      'https://cdn.salla.sa/gmlgv/722dc73c-c2e4-4471-88fa-8877b8c006ff-562.5x1000-SyRm0SpI1gZg7FDAb3je6LfANmm2dXNoTGtPOOqg.jpg'
    ],
  },
  
];

// ========================================
// STATE
// ========================================
let activeThumbIndex = {}; // { abayaId: currentImageIndexShownOnMainCardImage }
let lightboxState = { abayaId: null, index: 0 };

const FAVORITES_KEY = "afnanFavorites";

// ========================================
// DOM REFERENCES
// ========================================
const catalogGrid = document.getElementById("catalogGrid");
const catalogEmpty = document.getElementById("catalogEmpty");
const resultsCount = document.getElementById("resultsCount");

const favoritesGrid = document.getElementById("favoritesGrid");
const favEmpty = document.getElementById("favEmpty");
const favSub = document.getElementById("favSub");
const favCount = document.getElementById("favCount");

const searchInput = document.getElementById("searchInput");
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const toastContainer = document.getElementById("toastContainer");

const globalWhatsappBtn = document.getElementById("globalWhatsappBtn");
const footerWhatsappLink = document.getElementById("footerWhatsappLink");

// ========================================
// LOCAL STORAGE (favorites stored as a single JSON array of IDs)
// ========================================
function getFavoriteIds() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

function setFavoriteIds(ids) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

function isLiked(id) {
  return getFavoriteIds().includes(id);
}

function saveFavorite(abaya) {
  const ids = getFavoriteIds();
  if (!ids.includes(abaya.id)) {
    ids.push(abaya.id);
    setFavoriteIds(ids);
  }
}

function removeFavorite(id) {
  const ids = getFavoriteIds().filter((favId) => favId !== id);
  setFavoriteIds(ids);
}

function getLikedAbayas() {
  const ids = getFavoriteIds();
  return abayas.filter((a) => ids.includes(a.id));
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message, type = "default") {
  const toast = document.createElement("div");
  toast.className = "toast" + (type === "warn" ? " toast-warn" : "");
  toast.setAttribute("role", "status");
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("leaving");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ========================================
// FIREBASE (loaded dynamically so the rest of the site keeps
// working perfectly even if Firebase is not configured yet, or
// the visitor's network can't reach Firebase's CDN).
// ========================================
let fb = null; // holds { db, auth, collection, addDoc, doc, setDoc, increment, serverTimestamp } once ready

async function initFirebase() {
  const isConfigured =
    firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";

  if (!isConfigured) {
    // Not configured yet — skip silently. Likes/favorites still work
    // locally via localStorage; only the analytics backend is skipped.
    return;
  }

  try {
    const [{ initializeApp }, firestoreMod, authMod] = await Promise.all([
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"),
      import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"),
    ]);

    const app = initializeApp(firebaseConfig);
    const db = firestoreMod.getFirestore(app);
    const auth = authMod.getAuth(app);

    await authMod.signInAnonymously(auth);

    fb = {
      db,
      collection: firestoreMod.collection,
      addDoc: firestoreMod.addDoc,
      doc: firestoreMod.doc,
      setDoc: firestoreMod.setDoc,
      increment: firestoreMod.increment,
      serverTimestamp: firestoreMod.serverTimestamp,
    };
  } catch (err) {
    // Network unavailable, misconfigured project, blocked domain, etc.
    // The catalog must keep working regardless, so we just log this.
    console.warn("Firebase unavailable, continuing with local-only mode:", err);
    fb = null;
  }
}

/**
 * Records an individual Like event in the "likes" collection, and
 * increments the aggregate counter at abayaStats/{abayaId}. Only
 * called when a favorite is *added*, not removed.
 */
async function sendLikeToFirebase(abaya) {
  if (!fb) {
    showToast("تم حفظ إعجابك محلياً، ولكن تعذر الاتصال بالخادم حالياً.", "warn");
    return;
  }

  try {
    await fb.addDoc(fb.collection(fb.db, "likes"), {
      timestamp: fb.serverTimestamp(),
      abayaId: abaya.id,
      abayaName: abaya.name,
      color: abaya.color,
      fabric: abaya.fabric,
      details: abaya.details,
      sizes: abaya.sizes,
      image1: abaya.images[0],
      image2: abaya.images[1],
      image3: abaya.images[2],
    });

    await fb.setDoc(
      fb.doc(fb.db, "abayaStats", abaya.id),
      {
        abayaId: abaya.id,
        abayaName: abaya.name,
        likes: fb.increment(1),
      },
      { merge: true }
    );
  } catch (err) {
    showToast("تم حفظ إعجابك محلياً، ولكن تعذر الاتصال بالخادم حالياً.", "warn");
  }
}

/**
 * Records a lightweight, anonymous WhatsApp-click event for a specific
 * abaya — no personal information, just which product generated
 * interest. Best-effort: failures are silent since this is analytics,
 * not something the visitor needs to know about.
 */
async function trackWhatsAppClick(abaya) {
  if (!fb) return;
  try {
    await fb.addDoc(fb.collection(fb.db, "whatsappClicks"), {
      timestamp: fb.serverTimestamp(),
      abayaId: abaya.id,
      abayaName: abaya.name,
      eventType: "whatsapp_click",
    });
  } catch (err) {
    // Silent — this is best-effort analytics only.
  }
}

// ========================================
// WHATSAPP CONTACT
// ========================================
function buildWhatsAppMessage(abaya) {
  return `مرحباً 👋

أرغب بالاستفسار عن العباية التالية:

اسم العباية: ${abaya.name}
رقم العباية: ${abaya.id}
اللون: ${abaya.color}
القماش: ${abaya.fabric}
التفصيل: ${abaya.details}
المقاسات المتوفرة: ${abaya.sizes.join(" / ")}

أرغب في معرفة المزيد عن هذه العباية.

شكراً لكم.`;
}

function openWhatsAppForAbaya(abaya) {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "966XXXXXXXXX") {
    showToast("لم يتم إعداد رقم واتساب بعد.", "warn");
    return;
  }

  const message = buildWhatsAppMessage(abaya);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank", "noopener");
  trackWhatsAppClick(abaya);
}

/**
 * General-purpose WhatsApp contact, used by the global "هل لديكِ
 * استفسار؟" section and the footer link — not tied to a specific
 * product.
 */
function openBrandWhatsApp() {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "966XXXXXXXXX") {
    showToast("لم يتم إعداد رقم واتساب بعد.", "warn");
    return;
  }

  const message = "مرحباً 👋\n\nأرغب بالتواصل معكم والاستفسار عن مجموعة العبايات.";
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank", "noopener");
}

// ========================================
// FAVORITES COUNTER
// ========================================
function updateFavCount() {
  const count = getFavoriteIds().length;
  favCount.textContent = String(count);
}

// ========================================
// LIKE TOGGLE
// ========================================
function toggleFavorite(abaya, heartEl) {
  const currentlyLiked = isLiked(abaya.id);

  if (currentlyLiked) {
    removeFavorite(abaya.id);
    heartEl.classList.remove("liked");
    heartEl.textContent = "♡";
    heartEl.setAttribute("aria-pressed", "false");
    heartEl.setAttribute("aria-label", "إضافة إلى المفضلة");
    showToast("تمت إزالة العباية من المفضلة");
  } else {
    saveFavorite(abaya);
    heartEl.classList.add("liked");
    heartEl.textContent = "♥";
    heartEl.setAttribute("aria-pressed", "true");
    heartEl.setAttribute("aria-label", "إزالة من المفضلة");
    showToast("تمت إضافة العباية إلى المفضلة ❤️");
    sendLikeToFirebase(abaya);
  }

  heartEl.classList.remove("pulse");
  void heartEl.offsetWidth; // restart animation on repeated clicks
  heartEl.classList.add("pulse");

  updateFavCount();

  // Keep every rendered heart for this product (catalog + favorites) in sync.
  document
    .querySelectorAll(`.like-btn[data-id="${abaya.id}"]`)
    .forEach((btn) => {
      const liked = isLiked(abaya.id);
      btn.classList.toggle("liked", liked);
      btn.textContent = liked ? "♥" : "♡";
      btn.setAttribute("aria-pressed", String(liked));
    });

  // Favorites is always visible on the page, so it must stay in sync
  // with every like/unlike, not just when the visitor scrolls there.
  renderFavorites();
}

// ========================================
// CARD BUILDER
// ========================================
function buildProductCard(abaya) {
  const liked = isLiked(abaya.id);
  const activeIdx = activeThumbIndex[abaya.id] || 0;

  // Thumbnails always show the images other than the current main
  // image, so the gallery reads as "1 main + rest as thumbnails"
  // no matter which image is currently active.
  const thumbIndices = abaya.images
    .map((_, i) => i)
    .filter((i) => i !== activeIdx);

  const card = document.createElement("article");
  card.className = "product-card reveal";
  card.dataset.id = abaya.id;

  card.innerHTML = `
    <div class="card-gallery">
      <div class="card-main-image" data-id="${abaya.id}" role="button" tabindex="0"
           aria-label="عرض صور ${abaya.name} بالحجم الكامل">
        <img src="${abaya.images[activeIdx]}" alt="${abaya.name} - صورة رئيسية" loading="lazy">
        <button class="like-btn ${liked ? "liked" : ""}" data-id="${abaya.id}"
                aria-pressed="${liked}"
                aria-label="${liked ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}">${liked ? "♥" : "♡"}</button>
      </div>
      <div class="card-thumbs">
        ${thumbIndices
          .map(
            (i) => `
          <button type="button" class="card-thumb" data-id="${abaya.id}" data-index="${i}"
                  aria-label="عرض الصورة ${i + 1} من ${abaya.images.length}">
            <img src="${abaya.images[i]}" alt="${abaya.name} - صورة ${i + 1}" loading="lazy">
          </button>`
          )
          .join("")}
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${abaya.id}</h3>
      <table class="card-info">
        <tbody>
          <tr><td>اللون</td><td>${abaya.color}</td></tr>
          <tr><td>القماش</td><td>${abaya.fabric}</td></tr>
          <tr><td>التفصيل</td><td>${abaya.details}</td></tr>
          <tr><td>المقاسات</td><td>${abaya.sizes.join(" / ")}</td></tr>
        </tbody>
      </table>
      <button type="button" class="whatsapp-btn" data-id="${abaya.id}"
              aria-label="استفسري عن ${abaya.name} عبر واتساب">
        <span class="whatsapp-btn-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="20" height="20"><path fill="currentColor" d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.22.6 4.3 1.65 6.09L4 29l8.1-1.63A11.9 11.9 0 0 0 16.02 27C22.64 27 28 21.62 28 15S22.64 3 16.02 3Zm0 21.8c-1.9 0-3.68-.5-5.23-1.4l-.37-.22-4.8.97.99-4.68-.24-.38A9.7 9.7 0 0 1 6.24 15c0-5.4 4.4-9.8 9.78-9.8 5.4 0 9.78 4.4 9.78 9.8 0 5.4-4.4 9.8-9.78 9.8Zm5.36-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.35-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34Z"/></svg>
        </span>
        <span class="whatsapp-btn-text">
          <strong>واتساب</strong>
          <small>استفسري عن هذه العباية</small>
        </span>
      </button>
    </div>
  `;

  // Main image opens the lightbox
  const mainImageWrap = card.querySelector(".card-main-image");
  mainImageWrap.addEventListener("click", (e) => {
    if (e.target.closest(".like-btn")) return;
    openLightbox(abaya.id, activeThumbIndex[abaya.id] || 0);
  });
  mainImageWrap.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(abaya.id, activeThumbIndex[abaya.id] || 0);
    }
  });

  // Like button
  card.querySelector(".like-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(abaya, e.currentTarget);
  });

  // WhatsApp button
  card.querySelector(".whatsapp-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    openWhatsAppForAbaya(abaya);
  });

  // Thumbnails swap the main image (smooth cross-fade, no page reload).
  // The card is rebuilt so the thumbnail row correctly re-excludes
  // whichever image is now shown as the main image.
  card.querySelectorAll(".card-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const index = Number(thumb.dataset.index);
      activeThumbIndex[abaya.id] = index;

      const rebuilt = buildProductCard(abaya);
      rebuilt.classList.add("in-view");
      const rebuiltMainImg = rebuilt.querySelector(".card-main-image img");
      rebuiltMainImg.style.opacity = "0";
      card.replaceWith(rebuilt);
      requestAnimationFrame(() => {
        rebuiltMainImg.style.opacity = "1";
      });
    });
  });

  return card;
}

// ========================================
// RENDER: CATALOG
// ========================================
function renderAbayas(list) {
  catalogGrid.innerHTML = "";

  if (list.length === 0) {
    catalogEmpty.hidden = false;
    resultsCount.textContent = "0 عباية";
    return;
  }

  catalogEmpty.hidden = true;
  resultsCount.textContent = `${list.length} ${list.length === 1 ? "عباية" : "عبايات"}`;

  const fragment = document.createDocumentFragment();
  list.forEach((abaya) => fragment.appendChild(buildProductCard(abaya)));
  catalogGrid.appendChild(fragment);
  observeReveal(catalogGrid);
}

// ========================================
// RENDER: FAVORITES
// ========================================
function renderFavorites() {
  const liked = getLikedAbayas();
  favoritesGrid.innerHTML = "";

  if (liked.length === 0) {
    favEmpty.hidden = false;
    favSub.textContent = "";
    return;
  }

  favEmpty.hidden = true;
  favSub.textContent = `${liked.length} ${liked.length === 1 ? "عباية محفوظة" : "عبايات محفوظة"}`;

  const fragment = document.createDocumentFragment();
  liked.forEach((abaya) => fragment.appendChild(buildProductCard(abaya)));
  favoritesGrid.appendChild(fragment);
  observeReveal(favoritesGrid);
}

// ========================================
// SEARCH (simple instant search — no filters)
// ========================================
function searchAbayas(list, query) {
  if (!query) return list;
  const q = query.trim().toLowerCase();
  return list.filter((a) =>
    [a.name, a.color, a.fabric, a.details].some((field) =>
      field.toLowerCase().includes(q)
    )
  );
}

function applySearch() {
  const result = searchAbayas(abayas, searchInput.value);
  renderAbayas(result);
}

// ========================================
// LIGHTBOX
// ========================================
function openLightbox(abayaId, startIndex = 0) {
  lightboxState = { abayaId, index: startIndex };
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  updateLightboxImage();
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function updateLightboxImage() {
  const abaya = abayas.find((a) => a.id === lightboxState.abayaId);
  if (!abaya) return;

  lightboxImage.classList.remove("visible");
  const src = abaya.images[lightboxState.index];
  const alt = `${abaya.name} - صورة ${lightboxState.index + 1}`;

  const img = new Image();
  img.onload = () => {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    requestAnimationFrame(() => lightboxImage.classList.add("visible"));
  };
  img.src = src;

  lightboxCounter.textContent = `${lightboxState.index + 1} / ${abaya.images.length}`;

  // keep the card's active thumbnail in sync with the lightbox
  activeThumbIndex[abaya.id] = lightboxState.index;
}


function nextImage() {
  const abaya = abayas.find((a) => a.id === lightboxState.abayaId);
  if (!abaya) return;
  lightboxState.index = (lightboxState.index + 1) % abaya.images.length;
  updateLightboxImage();
}

function previousImage() {
  const abaya = abayas.find((a) => a.id === lightboxState.abayaId);
  if (!abaya) return;
  lightboxState.index =
    (lightboxState.index - 1 + abaya.images.length) % abaya.images.length;
  updateLightboxImage();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", nextImage);
lightboxPrev.addEventListener("click", previousImage);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Basic swipe support for touch screens
let touchStartX = null;
lightbox.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].clientX;
  },
  { passive: true }
);
lightbox.addEventListener(
  "touchend",
  (e) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 40) {
      // RTL layout: a leftward swipe reveals the next image.
      if (deltaX < 0) nextImage();
      else previousImage();
    }
    touchStartX = null;
  },
  { passive: true }
);

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  // RTL layout: visually-right arrow key still maps to "next" in reading order.
  if (e.key === "ArrowLeft") nextImage();
  if (e.key === "ArrowRight") previousImage();
});

// ========================================
// MOBILE MENU
// ========================================
function closeMobileMenu() {
  mainNav.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// ========================================
// SEARCH TOGGLE
// ========================================
searchToggle.addEventListener("click", () => {
  const isHidden = searchBar.hidden;
  searchBar.hidden = !isHidden;
  searchToggle.setAttribute("aria-expanded", String(isHidden));
  if (isHidden) searchInput.focus();
});

searchInput.addEventListener("input", applySearch);

// ========================================
// GLOBAL WHATSAPP CONTACT (bottom section + footer link)
// ========================================
globalWhatsappBtn.addEventListener("click", () => openBrandWhatsApp());
footerWhatsappLink.addEventListener("click", (e) => {
  e.preventDefault();
  openBrandWhatsApp();
});

// ========================================
// SCROLL REVEAL (subtle entrance for cards)
// ========================================
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const revealObserver = prefersReducedMotion
  ? null
  : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

function observeReveal(container) {
  if (prefersReducedMotion) return;
  container.querySelectorAll(".reveal:not(.in-view)").forEach((el) => {
    revealObserver.observe(el);
  });
}

// ========================================
// INIT
// ========================================
function init() {
  renderAbayas(abayas);
  renderFavorites();
  updateFavCount();
  initFirebase();
}

document.addEventListener("DOMContentLoaded", init);
