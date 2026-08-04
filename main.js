/* =========================================================
   دار الوقار — script.js
   Vanilla JavaScript only. No frameworks, no libraries.
   ========================================================= */

/* ---------------------------------------------------------
   1) CONFIG — edit these values to customise the store
   --------------------------------------------------------- */

// WhatsApp number in international format, digits only (no + or spaces).
// Example: Saudi number 05xxxxxxxx -> 9665xxxxxxxx
const WHATSAPP_NUMBER = '966530315738';

// Product catalogue. Replace image URLs with your own photography.
const PRODUCTS = [
  {
    name: '0001',
    fabric: 'قماش ذانايس عالي الجودة ',
    tailoring: 'كسرتان أنيقتان في الأمام والخلف تضيفان انسيابية وجمالًا',
    color: 'أسود',
    sizes: '52 · 54 · 56 · 58 · 60',
    desc: 'قصة كلاسيكية أنيقة بخطوط ناعمة تناسب الإطلالة اليومية والمناسبات الرسمية.',
    images: [
      'https://cdn.salla.sa/RYOGz/051393e2-d38f-47f8-b604-d362f84d6c68-666.66666666667x1000-e3HEcoSMVDnPkFixEyq79kDlOfarbKYhjuQPa8d3.jpg',
      'https://cdn.salla.sa/RYOGz/00212372-be38-4f3e-9057-fc3186531a58-666.66666666667x1000-jISJzZPyvb7zICCZyhISfSqxKR4hQXUYKvzRN9Qq.jpg',
      'https://cdn.salla.sa/RYOGz/14b980df-70e9-4d26-bbfc-587147981628-610.89743589744x1000-dbalz9V1CNUdedRItfqnVu7JtIDimrDNGjkuvsf0.jpg'
    ]
  },
  {
    name: '0002',
    fabric: 'صالونا ',
    tailoring: 'تصنع من قماش سادة عالي الجودة، وتتميز بقصة مستقيمة وأنيقة ',
    color: 'أسود  ',
    sizes: '52 · 54 · 56 · 58',
    desc: 'قطعة راقية وعصرية تتميز بتصميمها الأنيق والعملي في آن واحد.',
    images: [
      'https://cdn.salla.sa/RYOGz/UgWs2ke9CL7AfkuJt6CYo2Ei06JWNUtkumOTSOwq.jpg',
      'https://cdn.salla.sa/RYOGz/ZRt68NENDdowwyv58I66INemlnlgPSV4lVN3JQx4.jpg',
      'https://cdn.salla.sa/RYOGz/MNwNPJwwTl60w279M5DcluQpgxb5QmkyzmQICiEn.jpg'
    ]
  },
  {
    name: '0003',
    fabric: 'قماش شموه ناعم أسود فاحم',
    tailoring: "قصة ربع كلوش",
    color: 'أسود فحمي',
    sizes: '50 · 52 · 54 · 56 · 58',
    desc: 'قصة راقية وعصرية تمنح الحركة أناقة إضافية.',
    images: [
      'https://cdn.salla.sa/gmlgv/8163b928-2d2e-49b6-bdc2-7c90a5db59be-750x1000-lfH1hmkayAd79irF8GkOndCYHHeTzhWUuuXlCL5M.jpg',
      'https://cdn.salla.sa/gmlgv/add42b2e-9dff-4032-8640-c44d526af08f-750x1000-f8E7NXmkbT8dlMAeZ2dLM6zCpezPAXcnlOag8Lhj.jpg',
      'https://cdn.salla.sa/gmlgv/8337ced4-b80d-47ee-b010-dead8616368e-750x1000-G5KKmy9FTpmlusZ33XABAs0LsogxhLEVtBgsk9cD.jpg'
    ]
  },
  {
    name: '0004',
    fabric: 'انترنت سواد فاحم ',
    tailoring: "قصة نص كلوش، ",
    color: 'أسود  فحمي',
    sizes: '52 · 54 · 56',
    desc: 'نسيج ناعم صيفي وانسيابي مع اضافة تطريز أسود فاخر بالكم',
    images: [
      'https://cdn.salla.sa/gmlgv/9662dde5-8894-47de-a36b-079d0d1dde80-562.5x1000-wCK6aEgDjE7qNZrTzeMKdE3n3VxNQWCR5hB6IjDk.jpg',
      'https://cdn.salla.sa/gmlgv/ec982200-ef6b-4331-891f-6df9b5035cc6-562.5x1000-EVFovxxonwbKwMvZ6WE3BJphdIGl0YQrYW7Af4FM.jpg',
      'https://cdn.salla.sa/gmlgv/14b0c135-51d2-407c-b6a7-19eb43a4be4f-562.5x1000-DYGa41HTZaLFDFonsksUvY6QiZOD2RBlvLory98n.jpg'
    ]
  },
  {
    name: '0005',
    fabric: '  كريب ملكي كوري',
    tailoring: ' قصة ربع كلوش  ',
    color: ' أسود فحمي',
    sizes: '52 · 54 · 56 · 58 · 60',
    desc: 'تصميم أنيق عملي ومريح بأكمام أنيقة تأتي بإضافة دانتيل أسود',
    images: [
      'https://cdn.salla.sa/gmlgv/71befbae-3ba4-435a-a1ff-0a60308fa8ed-562.5x1000-ok1Tllro7uiSj7D7rVkgUK62ezyBfQSo7ORjys1M.jpg',
      'https://cdn.salla.sa/gmlgv/520afed6-e41c-4f67-85db-cf8c42106b1c-562.5x1000-YUUNHAvwU9L1BXkaPrZj9JcwoufSjtarHmxq4A9b.jpg',
      'https://cdn.salla.sa/gmlgv/2715bb90-5651-4737-9ac4-066195873fa1-562.5x1000-BLnuPGLCgpImfZxvnaXzRI1yRrhLGBvCOuyb0qfv.jpg'
    ]
  },
  {
    name: '0006',
    fabric: ' انترنت كوري ',
    tailoring: '   قصة ربع كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم صيفي انسيابي مع اضافة جاكار أسود فاخر الى الأكمام',
    images: [
      'https://cdn.salla.sa/gmlgv/c4a588ad-a525-4ac9-b6f7-c772da76fcfd-562.5x1000-Hyfwyuf3mtx5qMB3qDdbsi1j3d01N0UWrwyBHqRw.jpg',
      'https://cdn.salla.sa/gmlgv/17057f24-7487-4d3c-bf9f-d979de0c0e37-562.5x1000-EKyieBrsJ9mb8WKW6OjAMf3RDUg3iPZojs9wdKbl.jpg',
      'https://cdn.salla.sa/gmlgv/aee68450-04bc-4727-aa55-9e9646ae840f-562.5x1000-frNIF3cHjLzaw1H4oLsV5jjIREbNRDTCGTW0Y9JK.jpg'
    ]
  },
  {
    name: '0007',
    fabric: '  زهره القمر كوري ',
    tailoring: '   قصة نص كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم صيفي انسيابي مع تطريز خفيف على الكم',
    images: [
      'https://cdn.salla.sa/gmlgv/40894289-791e-4d66-a3f3-3bb7fe226baf-562.5x1000-ngy1COy01nXxNbTZiNU7fKU55tlnf0pBHmkFtSw9.jpg',
      'https://cdn.salla.sa/gmlgv/e8f11463-2c03-44e2-b9e2-de292751ba84-562.5x1000-jpGVY5LSw29g4ddIGjpOKEgPaqEakXBhYxaLZISh.jpg',
      'https://cdn.salla.sa/gmlgv/b64e5378-98ac-49d9-9b27-d7302f54f713-562.5x1000-bCLuTsmkXjrpzIc2JSIsDC8VL1MspMGvqOm8tMh7.jpg'
    ]
  },
  {
    name: '0008',
    fabric: 'كريب ملكي ',
    tailoring: '   قصة نص كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم صيفي انسيابي مع تطريز خفيف على الكم',
    images: [
      'https://cdn.salla.sa/gmlgv/3a288d70-69d9-4362-8c5f-1385241ac846-562.5x1000-lVH9KCsa6wB1QiaFwE2hNAC6nChpPjdhj8qyYueR.jpg',
      'https://cdn.salla.sa/gmlgv/63e2ebd7-bebf-4d78-a9c1-a125c9ebb71c-562.5x1000-L5QPdgrj1ItzSziDIy2JnBx79i2Kb5l51dGqWfE0.jpg',
      'https://cdn.salla.sa/gmlgv/71cd631b-517f-4e4d-b269-027cf13a03b5-562.5x1000-zy5bax9P3tBUNZ8hvGogbMB6yiDwTceocR2zk08p.jpg'
    ]
  },
  {
    name: '0009',
    fabric: 'كريب ملكي متوسط الثقل',
    tailoring: '   قصة نص كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم بلمسة شتوية عملية يعطي حضور مرتب بأكمام مخمل تضيف لمسة فاخرة ',
    images: [
      'https://cdn.salla.sa/gmlgv/ed4c978c-376b-4d94-accd-ff1b3d866c9b-562.5x1000-2ObnZBLQzd5NXT0uLgWYG3yybaIqaSCgVLs49KVD.jpg',
      'https://cdn.salla.sa/gmlgv/b1ab7cf9-174e-4dcf-847f-ca144ebf67c8-562.5x1000-mpiSfqC6082rK5TnoLwMfAXTij3ZCrQ4RazVrSBx.jpg',
      'https://cdn.salla.sa/gmlgv/271b7caf-f418-4529-af55-4d0a7d64a062-562.5x1000-6rVBb49HQCbatFAD3zLrtKI1UjGh0IcPPRnP6be4.jpg'
    ]
  },
  {
    name: '00010',
    fabric: 'انترنت',
    tailoring: '   قصة ربع كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم بلمسة شتوية وكسرات مرتبة تعطي حضور متميز',
    images: [
      'https://cdn.salla.sa/gmlgv/O5fSZ6a7sFHpE87DaYk2Ep4AABoGABVGblbZbj3p.jpg',
      'https://cdn.salla.sa/gmlgv/MkP5mmYFPvIRhQxwAiGRONLdujIoVaVzIzuk5PCx.jpg',
      'https://cdn.salla.sa/gmlgv/MkP5mmYFPvIRhQxwAiGRONLdujIoVaVzIzuk5PCx.jpg'
    ]
  },
  {
    name: '00011',
    fabric: 'انترنت',
    tailoring: '   قصة ربع كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم بلمسة شتوية وكسرات في الكم  تعطي حضور نادرا',
    images: [
      'https://cdn.salla.sa/gmlgv/fe74cb0e-09ce-4e1e-9b91-b85456afae92-562.5x1000-kw2SCr39dGGtJeUshtOuWHDfYaocaOAtUjsSZxxc.jpg',
      'https://cdn.salla.sa/gmlgv/0b384566-ea86-40d7-86a3-6e40150d6391-562.5x1000-uZzOlPHdi5S3iptwslmO27aefoFRPTrM05XADaUg.jpg',
      'https://cdn.salla.sa/gmlgv/c3029cad-e2cb-4397-a0b9-18b81bcd581c-562.5x1000-p5a4ZTLbEAjbLleoorlmqedtBqvkVpDSYEHytzJ8.jpg'
    ]
  },
  {
    name: '00012',
    fabric: 'انترنت',
    tailoring: '   قصة ربع كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم بلمسة شتوية بجيوب مخفية وسحاب والكم ضيق مناسبة للدوام    ',
    images: [
      'https://cdn.salla.sa/gmlgv/e2798f78-77ab-44d5-ae71-5a1983f82952-562.5x1000-cjMPNamh1g8u6Y8BRg6XJDIbBCuqYFKfsW9MtNP9.jpg',
      'https://cdn.salla.sa/gmlgv/fa2ffd20-6499-413f-9cbf-7c522540ed6e-562.5x1000-4q6uR4pr7GaJiXXjaPQ4AMLAouETBPxFoiTnnPU7.jpg',
      'https://cdn.salla.sa/gmlgv/8a943e18-ce17-409d-a05e-171373ae6729-562.5x1000-sXZqrnSeV1qt43Trz87fswbjx81X8tyA5sjPUOCb.jpg'
    ]
  }
];

/* ---------------------------------------------------------
   2) WhatsApp helpers
   --------------------------------------------------------- */

function buildWhatsappMessage(product, size) {
  const lines = [
    'السلام عليكم',
    '',
    'عرض السعر التقريبي للعباية التالية:',
    `رقم العباية: ${product.name}`,
    `القماش: ${product.fabric}`,
    `التفصيل: ${product.tailoring}`,
    `اللون: ${product.color}`,
    // `المقاس: ${size || 'غير محدد'}`,
    'السعر: ',
   
  ];
  return lines.join('\n');
}

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------
   3) Render product cards
   --------------------------------------------------------- */

function svgWhatsappIcon() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path fill="currentColor" d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.99.583 3.845 1.588 5.405L2 22l4.72-1.552a9.96 9.96 0 0 0 5.284 1.51h.004c5.518 0 10.004-4.486 10.004-10.004C22.012 6.486 17.526 2 12.004 2zm5.86 15.86a8.302 8.302 0 0 1-5.86 2.427h-.003a8.3 8.3 0 0 1-4.428-1.278l-.318-.19-2.802.922.93-2.732-.207-.328a8.284 8.284 0 0 1-1.276-4.412c0-4.583 3.727-8.31 8.31-8.31 2.22 0 4.307.865 5.876 2.435a8.253 8.253 0 0 1 2.432 5.878c0 4.583-3.727 8.31-8.654 8.588z"/></svg>`;
}

function createProductCard(product, index) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.style.transitionDelay = `${(index % 3) * 90}ms`;

  card.innerHTML = `
    <div class="card-media">
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
    </div>
    <div class="thumb-row" role="group" aria-label="صور مصغّرة لـ ${product.name}"></div>
    <div class="card-body">
      <h3 class="product-name">${product.name}</h3>
      <ul class="spec-list">
        <li><b>القماش</b>${product.fabric}</li>
        <li><b>التفصيل</b>${product.tailoring}</li>
        <li><b>اللون</b>${product.color}</li>
        <li><b>المقاسات</b>${product.sizes}</li>
      </ul>
      <p class="product-desc">${product.desc}</p>
      <button type="button" class="card-cta">${svgWhatsappIcon()}<span>استفسر عبر واتساب</span></button>
    </div>
  `;

  const mediaImg = card.querySelector('.card-media img');
  const thumbRow = card.querySelector('.thumb-row');

  product.images.forEach((src, i) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'thumb' + (i === 0 ? ' active-thumb' : '');
    thumb.setAttribute('aria-label', `صورة ${i + 1}`);
    thumb.innerHTML = `<img src="${src}" alt="" loading="lazy">`;

    thumb.addEventListener('click', () => {
      if (mediaImg.src === src) return;

      // Smooth fade swap — no page reload, pure JS + CSS transition.
      mediaImg.classList.add('fading');
      window.setTimeout(() => {
        mediaImg.src = src;
        mediaImg.classList.remove('fading');
      }, 220);

      thumbRow.querySelectorAll('.thumb').forEach(t => t.classList.remove('active-thumb'));
      thumb.classList.add('active-thumb');
    });

    thumbRow.appendChild(thumb);
  });

  // WhatsApp inquiry button — generates the message for this specific product.
  const ctaBtn = card.querySelector('.card-cta');
  ctaBtn.addEventListener('click', () => {
    const message = buildWhatsappMessage(product, product.sizes.split('·')[0].trim());
    window.open(whatsappLink(message), '_blank', 'noopener');
  });

  return card;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  PRODUCTS.forEach((product, index) => {
    grid.appendChild(createProductCard(product, index));
  });
}

/* ---------------------------------------------------------
   4) Sticky header state
   --------------------------------------------------------- */

function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------------------------------------------------------
   5) Mobile navigation
   --------------------------------------------------------- */

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if (!hamburger || !nav) return;

  const closeNav = () => {
    nav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

/* ---------------------------------------------------------
   6) Active navigation link on scroll
   --------------------------------------------------------- */

function initActiveNav() {
  const sections = ['home', 'gallery', 'about', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const links = Array.from(document.querySelectorAll('.nav-link'));
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        link.classList.toggle(
          'active-link',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ---------------------------------------------------------
   7) Reveal-on-scroll animation
   --------------------------------------------------------- */

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(target => observer.observe(target));
}

/* ---------------------------------------------------------
   8) Footer year + main WhatsApp CTA
   --------------------------------------------------------- */

function initFooter() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mainWhatsapp = document.getElementById('mainWhatsapp');
  if (mainWhatsapp) {
    const genericMessage = 'السلام عليكم\n\nأرغب بالاستفسار عن مجموعة العبايات لديكم.\n\nوشكراً.';
    mainWhatsapp.href = whatsappLink(genericMessage);
  }
}

/* ---------------------------------------------------------
   Init
   --------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initStickyHeader();
  initMobileNav();
  initActiveNav();
  initScrollReveal();
  initFooter();
});