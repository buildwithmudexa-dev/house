// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Translations object
  const translations = {
    en: {
      // Navigation
      home: 'Home',
      properties: 'Properties',
      contact: 'Contact',
      brandEn: 'SAMA United Real Estate Co',
      brandAr: 'شركة سمة المتحدة العقارية',
      
      // Hero
      heroEyebrow: 'Real Estate Consultant · Al Khobar',
      heroTitleEn: 'SAMA United Real Estate Co.',
      heroSubtitle: 'Professional and trusted real-estate consultation for clients and families in Al Khobar, Saudi Arabia.',
      viewProperties: 'View Properties',
      talkAdvisor: 'Talk to an Advisor',
      
      // About
      aboutHeading: 'About SAMA United Real Estate Co.',
      aboutDesc: 'SAMA United Real Estate Co. is a professional real-estate consultant serving Al-Thuqbah / Al Khobar, Saudi Arabia. We offer real estate consultation, family properties, property guidance, helpful client support, and professional service.',
      googleRating: 'Google Rating',
      reviews: 'Reviews',
      realEstateConsultant: 'Real Estate Consultant',
      
      // Services
      servicesHeading: 'Real Estate Consultation',
      service1Title: 'Real Estate Consultant',
      service1Desc: 'Professional real-estate consultation for clients in Al Khobar.',
      service1Label: 'Consultant',
      service2Title: 'Clean Family Flats',
      service2Desc: 'Well-maintained family flats with helpful agents and professional guidance.',
      service2Label: 'Family',
      service3Title: 'Property Guidance',
      service3Desc: 'Clear property guidance to help clients make confident real-estate decisions.',
      service3Label: 'Guidance',
      
      // Featured
      featuredHeading: 'Featured Properties',
      viewAll: 'View All Properties',
      
      // Footer
      footerTagline: 'Premium real estate consultancy in Al Khobar.',
      footerCompany: 'Company',
      footerAbout: 'About Us',
      footerProperties: 'Properties',
      footerContact: 'Contact',
      footerAdvisor: 'Talk to an Advisor',
      footerServices: 'Services',
      footerResidential: 'Residential',
      footerCommercial: 'Commercial',
      footerGuidance: 'Property Guidance',
      footerConsultation: 'Real Estate Consultation',
      footerLegal: 'Legal',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms of Service',
      footerCookie: 'Cookie Policy',
      footerContactHeading: 'Contact',
      footerAddress: 'Al-Thuqbah, Al Khobar, Saudi Arabia',
      footerHoursHeading: 'Opening Hours',
      footerCopyright: '© 2026 SAMA United Real Estate Co. All rights reserved.',
      
      // Property cards
      residential: 'Residential',
      commercial: 'Commercial',
      family: 'Family',
      available: 'Available',
      bedrooms: 'Beds',
      bathrooms: 'Baths',
      area: 'Area',
      viewProperty: 'View Property',
      
      // Hours
      saturday: 'Saturday',
      sunday: 'Sunday',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      closed: 'Closed',
      nowOpen: 'Currently Open',
      nowClosed: 'Currently Closed',

      // Legal & Services pages
      privacyHeading: 'Privacy Policy',
      privacySubtitle: 'Last updated: January 2026',
      termsHeading: 'Terms of Service',
      termsSubtitle: 'Last updated: January 2026',
      cookieHeading: 'Cookie Policy',
      cookieSubtitle: 'Last updated: January 2026',
      servicesPageHeading: 'Our Services',
      servicesPageSubtitle: 'Comprehensive real estate solutions for your needs'
    },
    ar: {
      // Navigation
      home: 'الرئيسية',
      properties: 'العقارات',
      contact: 'اتصل بنا',
      brandEn: 'SAMA United Real Estate Co',
      brandAr: 'شركة سمة المتحدة العقارية',
      
      // Hero
      heroEyebrow: 'مستشار عقاري · الخبر',
      heroTitleEn: 'شركة سمة المتحدة العقارية',
      heroSubtitle: 'استشارات عقارية احترافية وموثوقة للعملاء والعائلات في الخبر، المملكة العربية السعودية.',
      viewProperties: 'عرض العقارات',
      talkAdvisor: 'تحدث إلى مستشار',
      
      // About
      aboutHeading: 'عن شركة سمة المتحدة العقارية',
      aboutDesc: 'شركة سمة المتحدة العقارية هي مستشار عقاري محترف يخدم الثقبة / الخبر، المملكة العربية السعودية. نقدم الاستشارات العقارية والعقارات العائلية والإرشاد العقاري ودعم العملاء والخدمة الاحترافية.',
      googleRating: 'تقييم جوجل',
      reviews: 'مراجعة',
      realEstateConsultant: 'مستشار عقاري',
      
      // Services
      servicesHeading: 'الاستشارات العقارية',
      service1Title: 'مستشار عقاري',
      service1Desc: 'استشارات عقارية احترافية للعملاء في الخبر.',
      service1Label: 'استشاري',
      service2Title: 'شقق عائلية نظيفة',
      service2Desc: 'شقق عائلية جيدة الصيانة مع وكلاء متعاونين وإرشاد احترافي.',
      service2Label: 'عائلي',
      service3Title: 'الإرشاد العقاري',
      service3Desc: 'إرشاد عقاري واضح لمساعدة العملاء على اتخاذ قرارات عقارية واثقة.',
      service3Label: 'إرشاد',
      
      // Featured
      featuredHeading: 'عقارات مميزة',
      viewAll: 'عرض جميع العقارات',
      
      // Footer
      footerTagline: 'استشارات عقارية متميزة في الخبر.',
      footerCompany: 'الشركة',
      footerAbout: 'من نحن',
      footerProperties: 'العقارات',
      footerContact: 'اتصل بنا',
      footerAdvisor: 'تحدث إلى مستشار',
      footerServices: 'الخدمات',
      footerResidential: 'سكني',
      footerCommercial: 'تجاري',
      footerGuidance: 'إرشاد عقاري',
      footerConsultation: 'استشارات عقارية',
      footerLegal: 'قانوني',
      footerPrivacy: 'سياسة الخصوصية',
      footerTerms: 'شروط الخدمة',
      footerCookie: 'سياسة ملفات الارتباط',
      footerContactHeading: 'اتصل',
      footerAddress: 'الثقبة، الخبر، المملكة العربية السعودية',
      footerHoursHeading: 'ساعات العمل',
      footerCopyright: '© 2026 شركة سمة المتحدة العقارية. جميع الحقوق محفوظة.',
      
      // Property cards
      residential: 'سكني',
      commercial: 'تجاري',
      family: 'عائلي',
      available: 'متاح',
      bedrooms: 'غرف',
      bathrooms: 'حمامات',
      area: 'المساحة',
      viewProperty: 'عرض العقار',
      
      // Hours
      saturday: 'السبت',
      sunday: 'الأحد',
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
      friday: 'الجمعة',
      closed: 'مغلق',
      nowOpen: 'مفتوح الآن',
      nowClosed: 'مغلق الآن',

      // Legal & Services pages
      privacyHeading: 'سياسة الخصوصية',
      privacySubtitle: 'آخر تحديث: يناير 2026',
      termsHeading: 'شروط الخدمة',
      termsSubtitle: 'آخر تحديث: يناير 2026',
      cookieHeading: 'سياسة ملفات الارتباط',
      cookieSubtitle: 'آخر تحديث: يناير 2026',
      servicesPageHeading: 'خدماتنا',
      servicesPageSubtitle: 'حلول عقارية شاملة لاحتياجاتك'
    }
  };

  // Property data
  const properties = [
    {
      id: 1,
      category: 'residential',
      type: 'family',
      title: 'Modern Family Apartment',
      titleAr: 'شقة عائلية عصرية',
      location: 'Al-Thuqbah, Al Khobar',
      locationAr: 'الثقبة، الخبر',
      beds: 3,
      baths: 2,
      area: '180 m²',
      description: 'Spacious and modern family apartment with premium finishes.',
      descriptionAr: 'شقة عائلية واسعة وعصرية بتشطيبات فاخرة.',
      price: 'SAR 850,000',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      badge: 'Residential'
    },
    {
      id: 2,
      category: 'commercial',
      type: 'commercial',
      title: 'Commercial Office Space',
      titleAr: 'مساحة مكتبية تجارية',
      location: 'Al Khobar Corniche',
      locationAr: 'كورنيش الخبر',
      beds: 0,
      baths: 2,
      area: '250 m²',
      description: 'Premium commercial space in a prime business location.',
      descriptionAr: 'مساحة تجارية متميزة في موقع أعمال رئيسي.',
      price: 'SAR 1,200,000',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
      badge: 'Commercial'
    },
    {
      id: 3,
      category: 'family',
      type: 'family',
      title: 'Family Villa with Garden',
      titleAr: 'فيلا عائلية مع حديقة',
      location: 'Al-Thuqbah, Al Khobar',
      locationAr: 'الثقبة، الخبر',
      beds: 4,
      baths: 3,
      area: '320 m²',
      description: 'Beautiful family villa with a private garden and modern amenities.',
      descriptionAr: 'فيلا عائلية جميلة مع حديقة خاصة ومرافق عصرية.',
      price: 'SAR 2,100,000',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
      badge: 'Family'
    },
    {
      id: 4,
      category: 'residential',
      type: 'available',
      title: 'Luxury Apartment',
      titleAr: 'شقة فاخرة',
      location: 'Al Khobar',
      locationAr: 'الخبر',
      beds: 2,
      baths: 2,
      area: '150 m²',
      description: 'Luxury apartment with sea view and premium amenities.',
      descriptionAr: 'شقة فاخرة مع إطلالة بحرية ومرافق متميزة.',
      price: 'SAR 1,500,000',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
      badge: 'Residential'
    }
  ];

  // State management
  let currentLanguage = localStorage.getItem('sama_language') || 'en';
  let currentFilter = 'all';

  // Language functions
  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('sama_language', lang);
    
    // Update HTML lang and dir
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active-lang');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active-lang');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
    
    // Apply translations
    applyTranslations();
    
    // Re-render dynamic content
    renderFeaturedProperties();
    renderOpeningHours();
    updateOpeningStatus();
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Helper function to safely set text
    function setText(selector, text) {
      const el = document.querySelector(selector);
      if (el) el.textContent = text;
    }
    
    // Navigation
    document.querySelectorAll('[data-nav="home"]').forEach(el => el.textContent = t.home);
    document.querySelectorAll('[data-nav="properties"]').forEach(el => el.textContent = t.properties);
    document.querySelectorAll('[data-nav="contact"]').forEach(el => el.textContent = t.contact);
    
    // Brand
    const brandAr = document.querySelector('.brand-ar');
    const brandEn = document.querySelector('.brand-en');
    if (brandAr) brandAr.textContent = t.brandAr;
    if (brandEn) brandEn.textContent = t.brandEn;
    
    // Hero
    setText('#heroEyebrow', t.heroEyebrow);
    setText('#heroTitle .title-en', t.heroTitleEn);
    setText('#heroSubtitle', t.heroSubtitle);
    setText('#heroPrimaryBtn span', t.viewProperties);
    setText('#heroSecondaryBtn span', t.talkAdvisor);
    
    // About
    setText('#aboutHeading', t.aboutHeading);
    setText('#aboutBrand', `${t.brandAr} ${t.brandEn}`);
    setText('#aboutDesc', t.aboutDesc);
    setText('#statRating', t.googleRating);
    setText('#statReviews', t.reviews);
    setText('#statConsultant', t.realEstateConsultant);
    
    // Services
    setText('#servicesHeading', t.servicesHeading);
    setText('#service1Title', t.service1Title);
    setText('#service1Desc', t.service1Desc);
    setText('#service1Label', t.service1Label);
    setText('#service2Title', t.service2Title);
    setText('#service2Desc', t.service2Desc);
    setText('#service2Label', t.service2Label);
    setText('#service3Title', t.service3Title);
    setText('#service3Desc', t.service3Desc);
    setText('#service3Label', t.service3Label);
    
    // Featured
    setText('#featuredHeading', t.featuredHeading);
    setText('#viewAllLink', t.viewAll);
    
    // Footer
    setText('#footerTagline', t.footerTagline);
    setText('#footerCompany', t.footerCompany);
    setText('#footerAbout', t.footerAbout);
    setText('#footerProperties', t.footerProperties);
    setText('#footerContact', t.footerContact);
    setText('#footerAdvisor', t.footerAdvisor);
    setText('#footerServices', t.footerServices);
    setText('#footerResidential', t.footerResidential);
    setText('#footerCommercial', t.footerCommercial);
    setText('#footerGuidance', t.footerGuidance);
    setText('#footerConsultation', t.footerConsultation);
    setText('#footerLegal', t.footerLegal);
    setText('#footerPrivacy', t.footerPrivacy);
    setText('#footerTerms', t.footerTerms);
    setText('#footerCookie', t.footerCookie);
    setText('#footerContactHeading', t.footerContactHeading);
    setText('#footerAddress', t.footerAddress);
    setText('#footerHoursHeading', t.footerHoursHeading);
    setText('#footerCopyright', t.footerCopyright);
    
    // Footer brand
    const footerBrandAr = document.querySelector('.footer-brand-ar');
    const footerBrandEn = document.querySelector('.footer-brand-en');
    if (footerBrandAr) footerBrandAr.textContent = t.brandAr;
    if (footerBrandEn) footerBrandEn.textContent = t.brandEn;
  }

  // Language selector events
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      
      // Close mobile nav if open
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Mobile navigation
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      
      // Toggle menu icon
      const menuIcon = menuToggle.querySelector('.icon-menu');
      const closeIcon = menuToggle.querySelector('.icon-close');
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
    });
  }

  // Sticky header shadow
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function() {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Animated counter
  function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-count'));
    const decimal = parseInt(element.getAttribute('data-decimal') || '0');
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = target * easeProgress;
      
      element.textContent = currentValue.toFixed(decimal);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toFixed(decimal);
      }
    }
    
    requestAnimationFrame(update);
  }

  // Initialize counters on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number[data-count]');
        counters.forEach(counter => {
          if (!counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter);
          }
        });
      }
    });
  }, { threshold: 0.5 });

  const statsContainer = document.getElementById('statsContainer');
  if (statsContainer) {
    observer.observe(statsContainer);
  }

  // Render featured properties
  function renderFeaturedProperties() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    const t = translations[currentLanguage];
    const featuredProps = properties.slice(0, 3);
    
    grid.innerHTML = featuredProps.map(prop => {
      const title = currentLanguage === 'ar' ? prop.titleAr : prop.title;
      const location = currentLanguage === 'ar' ? prop.locationAr : prop.location;
      const description = currentLanguage === 'ar' ? prop.descriptionAr : prop.description;
      const badge = currentLanguage === 'ar' ? 
        (prop.badge === 'Residential' ? t.residential : prop.badge === 'Commercial' ? t.commercial : t.family) : 
        prop.badge;
      
      return `
        <article class="property-card fade-in">
          <div class="property-image">
            <img src="${prop.image}" alt="${title}" loading="lazy" decoding="async" width="600" height="400">
            <span class="property-badge">${badge}</span>
          </div>
          <div class="property-body">
            <h3 class="property-title">${title}</h3>
            <p class="property-location">
              <i data-lucide="map-pin"></i> ${location}
            </p>
            <div class="property-features">
              ${prop.beds > 0 ? `<span class="feature"><i data-lucide="bed"></i> ${prop.beds} ${t.bedrooms}</span>` : ''}
              <span class="feature"><i data-lucide="bath"></i> ${prop.baths} ${t.bathrooms}</span>
              <span class="feature"><i data-lucide="maximize-2"></i> ${prop.area}</span>
            </div>
            <p class="property-description">${description}</p>
            <div class="property-footer">
              <span class="property-price">${prop.price}</span>
              <a href="properties.html" class="btn-view">
                ${t.viewProperty} <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Property filtering (for properties page)
  function setupPropertyFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyGrid = document.getElementById('allPropertiesGrid');
    
    if (!filterButtons.length || !propertyGrid) return;
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        currentFilter = filter;
        
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter properties
        const filteredProps = filter === 'all' ? properties : properties.filter(p => 
          p.category === filter || p.type === filter || p.status === filter
        );
        
        renderAllProperties(filteredProps);
      });
    });
    
    // Initial render
    renderAllProperties(properties);
  }

  function renderAllProperties(props) {
    const grid = document.getElementById('allPropertiesGrid');
    if (!grid) return;
    
    const t = translations[currentLanguage];
    
    grid.innerHTML = props.map(prop => {
      const title = currentLanguage === 'ar' ? prop.titleAr : prop.title;
      const location = currentLanguage === 'ar' ? prop.locationAr : prop.location;
      const description = currentLanguage === 'ar' ? prop.descriptionAr : prop.description;
      const badge = currentLanguage === 'ar' ? 
        (prop.badge === 'Residential' ? t.residential : prop.badge === 'Commercial' ? t.commercial : t.family) : 
        prop.badge;
      
      return `
        <article class="property-card fade-in">
          <div class="property-image">
            <img src="${prop.image}" alt="${title}" loading="lazy" decoding="async" width="600" height="400">
            <span class="property-badge">${badge}</span>
          </div>
          <div class="property-body">
            <h3 class="property-title">${title}</h3>
            <p class="property-location">
              <i data-lucide="map-pin"></i> ${location}
            </p>
            <div class="property-features">
              ${prop.beds > 0 ? `<span class="feature"><i data-lucide="bed"></i> ${prop.beds} ${t.bedrooms}</span>` : ''}
              <span class="feature"><i data-lucide="bath"></i> ${prop.baths} ${t.bathrooms}</span>
              <span class="feature"><i data-lucide="maximize-2"></i> ${prop.area}</span>
            </div>
            <p class="property-description">${description}</p>
            <div class="property-footer">
              <span class="property-price">${prop.price}</span>
              <button class="btn-view">
                ${t.viewProperty} <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Opening hours
  function renderOpeningHours() {
    const container = document.getElementById('openingHoursContainer');
    if (!container) return;
    
    const t = translations[currentLanguage];
    const hours = [
      { day: t.saturday, time: '09:00–11:30, 15:30–21:30' },
      { day: t.sunday, time: '09:00–11:30, 15:30–21:30' },
      { day: t.monday, time: '09:00–11:30, 15:30–21:30' },
      { day: t.tuesday, time: '09:00–11:30, 13:30–21:30' },
      { day: t.wednesday, time: '09:00–11:30, 13:30–21:30' },
      { day: t.thursday, time: '09:00–11:30, 13:30–21:30' },
      { day: t.friday, time: t.closed }
    ];
    
    container.innerHTML = hours.map(h => `
      <div class="hours-row">
        <span class="hours-day">${h.day}</span>
        <span class="hours-time">${h.time}</span>
      </div>
    `).join('');
  }

  function updateOpeningStatus() {
    const statusEl = document.getElementById('hoursStatus');
    if (!statusEl) return;
    
    const t = translations[currentLanguage];
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    let isOpen = false;
    
    // Convert to our schedule (Saturday = 0, Sunday = 1, ..., Friday = 6)
    // JS: Sunday=0, Monday=1, Tuesday=2, Wednesday=3, Thursday=4, Friday=5, Saturday=6
    const scheduleDay = (day + 6) % 7; // Convert JS day to our schedule
    
    if (scheduleDay >= 0 && scheduleDay <= 5) { // Saturday to Thursday
      const timeRanges = [];
      
      if (scheduleDay <= 2) { // Saturday, Sunday, Monday
        timeRanges.push([9 * 60 + 0, 11 * 60 + 30]);
        timeRanges.push([15 * 60 + 30, 21 * 60 + 30]);
      } else { // Tuesday, Wednesday, Thursday
        timeRanges.push([9 * 60 + 0, 11 * 60 + 30]);
        timeRanges.push([13 * 60 + 30, 21 * 60 + 30]);
      }
      
      isOpen = timeRanges.some(([start, end]) => currentTime >= start && currentTime <= end);
    }
    
    if (isOpen) {
      statusEl.textContent = t.nowOpen;
      statusEl.className = 'hours-status hours-open';
    } else {
      statusEl.textContent = t.nowClosed;
      statusEl.className = 'hours-status hours-closed';
    }
  }

  // Contact form handling
  function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const successMsg = document.getElementById('formSuccess');
    const errorMsg = document.getElementById('formError');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const phone = form.querySelector('#phone').value.trim();
      const propertyType = form.querySelector('#propertyType').value;
      const message = form.querySelector('#message').value.trim();
      
      let isValid = true;
      let errorText = '';
      
      if (!name) {
        isValid = false;
        errorText = currentLanguage === 'ar' ? 'يرجى إدخال الاسم الكامل' : 'Please enter your full name';
      } else if (!email || !email.includes('@')) {
        isValid = false;
        errorText = currentLanguage === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email';
      } else if (!phone) {
        isValid = false;
        errorText = currentLanguage === 'ar' ? 'يرجى إدخال رقم الهاتف' : 'Please enter your phone number';
      } else if (!message) {
        isValid = false;
        errorText = currentLanguage === 'ar' ? 'يرجى إدخال رسالتك' : 'Please enter your message';
      }
      
      if (!isValid) {
        if (errorMsg) {
          errorMsg.textContent = errorText;
          errorMsg.classList.remove('hidden');
          successMsg.classList.add('hidden');
        }
        return;
      }
      
      // Simulate successful submission
      if (successMsg) {
        successMsg.textContent = currentLanguage === 'ar' ? 
          'تم إرسال استفسارك بنجاح! سنتواصل معك قريباً.' : 
          'Your inquiry has been sent successfully! We will contact you soon.';
        successMsg.classList.remove('hidden');
        errorMsg.classList.add('hidden');
        form.reset();
      }
    });
  }

  // Initialize everything
  function init() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Render featured properties
    renderFeaturedProperties();
    
    // Setup property filters
    setupPropertyFilters();
    
    // Render opening hours
    renderOpeningHours();
    
    // Update opening status
    updateOpeningStatus();
    
    // Setup contact form
    setupContactForm();
    
    // Update opening status every minute
    setInterval(updateOpeningStatus, 60000);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Run initialization
  init();
});