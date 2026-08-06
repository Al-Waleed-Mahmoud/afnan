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
    name: '1',
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
    name: '2',
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
    name: '3',
    fabric: 'قماش شموه ناعم أسود فاحم',
    tailoring: "قصة ربع كلوش",
    color: 'أسود فحمي',
    sizes: '50 · 52 · 54 · 56 · 58',
    desc: 'قصة راقية وعصرية تمنح الحركة أناقة إضافية.',
    images: [
      'https://cdn.salla.sa/gmlgv/7b06ce6f-87e1-4e88-9257-bdeaa867e535-562.5x1000-qHVvW22iPZN48RqkXjoPUTHiIFRh88NpITC7etjr.jpg',
      'https://cdn.salla.sa/gmlgv/36b29d4a-2408-426b-97b4-b8d683d094ac-562.5x1000-9pDDjDyymVUfYEHJURx6wano2giYa59VFm8KoUIA.jpg',
      'https://cdn.salla.sa/gmlgv/78fd6ad2-3fe6-4da2-a82e-7191b2049459-562.5x1000-jZmIg9rUkG7yzwPtBDYh31kOiOaCqEjNlAahhZ7B.jpg'
    ]
  },
  {
    name: '4',
    fabric: 'انترنت سواد فاحم ',
    tailoring: "قصة نص كلوش، ",
    color: 'أسود  فحمي',
    sizes: '52 · 54 · 56',
    desc: 'نسيج ناعم صيفي وانسيابي مع اضافة تطريز أسود فاخر بالكم',
    images: [
      'https://cdn.salla.sa/gmlgv/c9e5d606-d9f5-4d71-a12d-4ce5e72f2e6e-562.5x1000-efp5C9fxk4SKGCJ5UQQeRuljqW39YTfKwAnyoSdJ.jpg',
      'https://cdn.salla.sa/gmlgv/2f5e79ab-25f3-42ce-b26b-5933eb6566c1-562.5x1000-Zq9vrVqPeDhW8VqY7cncpzohtOlMcbIn5xEHX7s0.jpg',
      'https://cdn.salla.sa/gmlgv/c5f38946-bcf1-4cfb-a68c-37f2c68da686-562.5x1000-KX53qhGuBnbsGygHIAsClAXwxQcgkqtCOSaU67m8.jpg'
    ]
  },
  {
    name: '5',
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
    name: '6',
    fabric: ' انترنت كوري ',
    tailoring: '   قصة ربع كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'تصميم أنيق وناعم صيفي انسيابي مع اضافة جاكار أسود فاخر الى الأكمام',
    images: [
      'https://cdn.salla.sa/gmlgv/dc8a5e06-f55c-4027-9e5c-21ddb4eead2a-562.5x1000-ClMZmk4yrsdgvZp4d6NFfKXtxafRhnWeLKLvHKEh.jpg',
      'https://cdn.salla.sa/gmlgv/b5a6ce56-f2d3-4a40-aa07-154ef0db8db4-562.5x1000-oB5URsOkUqDTPyRQoNXnbDzDTCiyXLo4ZUWjINKS.jpg',
      'https://cdn.salla.sa/gmlgv/b140fba1-d637-4eaf-a38a-fa91ecf20b2c-562.5x1000-F4bdgwpe36ZUVHSUCHlrLIxLj0LbmdVQps5BZfvY.jpg'
    ]
  },
  {
    name: '7',
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
    name: '8',
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
    name: '9',
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
    name: '10',
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
    name: '11',
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
    name: '12',
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
  },
  {
    name: '13',
    fabric: 'ليزر بريميوم',
    tailoring: '   قصة ربع كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'عباية تعكس فخامة هادئة وحضور راق من قماش الليزر مع شيفون كوري خارجي   ',
    images: [
      'https://cdn.salla.sa/gmlgv/0645bfc2-d5d6-4c94-b16e-d782b2b4b475-562.5x1000-fIaEazyTY1BgQbtbniz5D3x9IYP0OIIIvGOQ6h71.jpg',
      'https://cdn.salla.sa/gmlgv/314f2568-d783-498b-9ff6-5e797b7799e1-562.5x1000-a1RrVvmdm8ByzK2ck6ZN5dhFWtGzFZivyjsjts59.jpg',
      'https://cdn.salla.sa/gmlgv/0832cd4d-09c5-435b-a055-dcd372f20625-562.5x1000-gBguTQjXeSWvmeYz9ntjANIKH5Wz6D1sdHymDoZe.jpg'
    ]
  },
  {
    name: '14',
    fabric: 'كريب ملكي',
    tailoring: '   قصة نص كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'عباية تعكس فخامة هادئة وحضور راق من قماش الكريب الملكي وتطريو وفستان خارجي   ',
    images: [
      'https://cdn.salla.sa/gmlgv/1de158bd-2e19-4986-8914-25b80da65fbb-562.5x1000-emyZK9DQeIsk9Wu8fsQCrmnPcd09CPgqbbvpe6Z7.jpg',
      'https://cdn.salla.sa/gmlgv/126cb382-83ee-435a-b965-0a45cc24d431-562.5x1000-jslTSl7wO4ydSF68i0BX78uCy5wX4Cr3ID8SWi0h.jpg',
      'https://cdn.salla.sa/gmlgv/11924204-0653-4526-b622-0bae70bc5a15-562.5x1000-RO3XpnTAoJqVLI5qsXzyUiD3I0bf5jyxujkArLp3.jpg'
    ]
  },
  {
    name: '15',
    fabric: 'انترنت',
    tailoring: '   قصة نص كلوش',
    color: 'أسود',
    sizes: '50 · 52 · 54 · 56',
    desc: 'عباية تعكس فخامة هادئة وحضور راق من قماش الانترنت وتطريو بالكم ومن الامام    ',
    images: [
      'https://cdn.salla.sa/gmlgv/52e27491-5df3-4dfc-8076-f8cae32c5f32-562.5x1000-I9kxBnJ8XF8yFkgJQBBdgZRVCdc3nxWfhsrIk8Ln.jpg',
      'https://cdn.salla.sa/gmlgv/10d862ba-2390-42be-97a8-be134a8517a5-562.5x1000-29ABwTRCjGtOkKkVyW3gYqlujTbF4WcvReuMlQ3q.jpg',
      'https://cdn.salla.sa/gmlgv/722dc73c-c2e4-4471-88fa-8877b8c006ff-562.5x1000-SyRm0SpI1gZg7FDAb3je6LfANmm2dXNoTGtPOOqg.jpg'
    ]
  }
];

/* ---------------------------------------------------------
   2) WhatsApp helpers
   --------------------------------------------------------- */

function buildWhatsappMessage(product, size) {
  const lines = [
  
    'عرض السعر التقريبي للعباية التالية:',
    `رقم العباية: [${product.name.padStart(3, '0')}]`,
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
      <h3 class="product-name">[ ${String(index +1).padStart(3, '0')} ]</h3>
      <ul class="spec-list">
        <li><b>القماش</b>${product.fabric}</li>
        <li><b>التفصيل</b>${product.tailoring}</li>
        <li><b>اللون</b>${product.color}</li>
        <li><b>المقاسات</b>${product.sizes}</li>
      </ul>
      <p class="product-desc">${product.desc}</p>
      <button type="button" class="card-cta">${svgWhatsappIcon()}<span>ارسل السعر واتساب</span></button>
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
    const genericMessage = 'السلام عليكم\n\n';
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
