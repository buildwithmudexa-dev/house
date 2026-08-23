// script.js - Complete refined version
(function() {
  'use strict';

  // Translations object with complete coverage
  const translations = {
    en: {
      // Navigation
      home: 'Home',
      properties: 'Properties',
      contact: 'Contact',
      brandAr: 'شركة سمة المتحدة العقارية',
      brandEn: 'SAMA United Real Estate Co',
      
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
      
      // Properties page
      propertiesHeading: 'Our Properties',
      propertiesSubtitle: 'Explore our curated selection of premium properties.',
      filterAll: 'All',
      filterResidential: 'Residential',
      filterCommercial: 'Commercial',
      filterFamily: 'Family',
      filterAvailable: 'Available',
      
      // Contact page
      contactHeading: 'Talk to an Advisor',
      contactSubtitle: 'Our team is ready to help you with your real-estate requirements.',
      formHeading: 'Send an Inquiry',
      labelName: 'Full Name',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelPropertyType: 'Property Type',
      labelMessage: 'Message',
      optionResidential: 'Residential',
      optionCommercial: 'Commercial',
      optionFamily: 'Family',
      optionOther: 'Other',
      submitBtn: 'Send Inquiry',
      locationHeading: 'Visit our location',
      locationAddress: 'Al-Thuqbah, Al Khobar, Saudi Arabia',
      ctaHeading: 'Ready to find the right property?',
      ctaSubtitle: 'Speak with our real-estate advisor and get professional property guidance.',
      
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
      
      // Form validation
      fillName: 'Please enter your full name',
      validEmail: 'Please enter a valid email address',
      fillPhone: 'Please enter your phone number',
      fillMessage: 'Please enter your message',
      formSuccess: 'Your inquiry has been sent successfully! We will contact you soon.'
    },
    ar: {
      // Navigation
      home: 'الرئيسية',
      properties: 'العقارات',
      contact: 'اتصل بنا',
      brandAr: 'شركة سمة المتحدة العقارية',
      brandEn: 'SAMA United Real Estate Co',
      
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
      
      // Properties page
      propertiesHeading: 'عقاراتنا',
      propertiesSubtitle: 'استكشف مجموعتنا المختارة من العقارات المتميزة.',
      filterAll: 'الكل',
      filterResidential: 'سكني',
      filterCommercial: 'تجاري',
      filterFamily: 'عائلي',
      filterAvailable: 'متاح',
      
      // Contact page
      contactHeading: 'تحدث إلى مستشار',
      contactSubtitle: 'فريقنا مستعد لمساعدتك في متطلباتك العقارية.',
      formHeading: 'أرسل استفساراً',
      labelName: 'الاسم الكامل',
      labelEmail: 'البريد الإلكتروني',
      labelPhone: 'الهاتف',
      labelPropertyType: 'نوع العقار',
      labelMessage: 'الرسالة',
      optionResidential: 'سكني',
      optionCommercial: 'تجاري',
      optionFamily: 'عائلي',
      optionOther: 'أخرى',
      submitBtn: 'إرسال الاستفسار',
      locationHeading: 'موقعنا',
      locationAddress: 'الثقبة، الخبر، المملكة العربية السعودية',
      ctaHeading: 'هل أنت مستعد للعثور على العقار المناسب؟',
      ctaSubtitle: 'تحدث مع مستشارنا العقاري واحصل على إرشاد عقاري احترافي.',
      
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
      
      // Form validation
      fillName: 'يرجى إدخال الاسم الكامل',
      validEmail: 'يرجى إدخال بريد إلكتروني صحيح',
      fillPhone: 'يرجى إدخال رقم الهاتف',
      fillMessage: 'يرجى إدخال رسالتك',
      formSuccess: 'تم إرسال استفسارك بنجاح! سنتواصل معك قريباً.'
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
      areaAr: '180 م²',
      description: 'Spacious and modern family apartment with premium finishes.',
      descriptionAr: 'شقة عائلية واسعة وعصرية بتشطيبات فاخرة.',
      price: 'SAR 850,000',
      priceAr: '850,000 ريال',
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
      areaAr: '250 م²',
      description: 'Premium commercial space in a prime business location.',
      descriptionAr: 'مساحة تجارية متميزة في موقع أعمال رئيسي.',
      price: 'SAR 1,200,000',
      priceAr: '1,200,000 ريال',
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
      areaAr: '320 م²',
      description: 'Beautiful family villa with a private garden and modern amenities.',
      descriptionAr: 'فيلا عائلية جميلة مع حديقة خاصة ومرافق عصرية.',
      price: 'SAR 2,100,000',
      priceAr: '2,100,000 ريال',
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
      areaAr: '150 م²',
      description: 'Luxury apartment with sea view and premium amenities.',
      descriptionAr: 'شقة فاخرة مع إطلالة بحرية ومرافق متميزة.',
      price: 'SAR 1,500,000',
      priceAr: '1,500,000 ريال',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
      badge: 'Residential'
    },
    {
      id: 5,
      category: 'commercial',
      type: 'commercial',
      title: 'Retail Space Downtown',
      titleAr: 'مساحة تجزئة وسط المدينة',
      location: 'Al Khobar',
      locationAr: 'الخبر',
      beds: 0,
      baths: 1,
      area: '120 m²',
      areaAr: '120 م²',
      description: 'Prime retail space in the heart of downtown Al Khobar.',
      descriptionAr: 'مساحة تجزئة رئيسية في قلب وسط مدينة الخبر.',
      price: 'SAR 950,000',
      priceAr: '950,000 ريال',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
      badge: 'Commercial'
    },
    {
      id: 6,
      category: 'family',
      type: 'available',
      title: 'Family Townhouse',
      titleAr: 'منزل عائلي',
      location: 'Al-Thuqbah, Al Khobar',
      locationAr: 'الثقبة، الخبر',
      beds: 3,
      baths: 3,
      area: '220 m²',
      areaAr: '220 م²',
      description: 'Comfortable family townhouse with community amenities.',
      descriptionAr: 'منزل عائلي مريح مع مرافق مجتمعية.',
      price: 'SAR 1,350,000',
      priceAr: '1,350,000 ريال',
      status: 'available',
      image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=600&q=80',
      badge: 'Family'
    }
  ];

  // State management
  let currentLanguage = 'en';
  let currentFilter = 'all';

  // DOM element references
  const elements = {};

  // Initialize DOM references
  function initElements() {
    elements.header = document.getElementById('siteHeader');
    elements.menuToggle = document.getElementById('menuToggle');
    elements.mobileNav = document.getElementById('mobileNav');
    elements.featuredGrid = document.getElementById('featuredGrid');
    elements.allPropertiesGrid = document.getElementById('allPropertiesGrid');
    elements.filterBar = document.getElementById('filterBar');
    elements.contactForm = document.getElementById('contactForm');
    elements.formSuccess = document.getElementById('formSuccess');
    elements.formError = document.getElementById('formError');
    elements.openingHoursContainer = document.getElementById('openingHoursContainer');
    elements.hoursStatus = document.getElementById('hoursStatus');
    elements.statsContainer = document.getElementById('statsContainer');
  }

  // Set language
  function setLanguage(lang) {
    currentLanguage = lang;
    
    // Save to localStorage
    try {
      localStorage.setItem('sama_language', lang);
    } catch (e) {
      console.warn('Unable to save language preference:', e);
    }
    
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
    renderAllProperties();
    renderOpeningHours();
    updateOpeningStatus();
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // Apply translations to static elements
  function applyTranslations() {
    const t = translations[currentLanguage];
    
    // Helper function to safely set text
    function setText(selector, text) {
      const el = document.querySelector(selector);
      if (el) el.textContent = text;
    }
    
    // Helper to set text for all matching elements
    function setTextAll(selector, text) {
      document.querySelectorAll(selector).forEach(el => {
        el.textContent = text;
      });
    }
    
    // Navigation
    setTextAll('[data-nav="home"]', t.home);
    setTextAll('[data-nav="properties"]', t.properties);
    setTextAll('[data-nav="contact"]', t.contact);
    
    // Brand
    setTextAll('.brand-ar', t.brandAr);
    setTextAll('.brand-en', t.brandEn);
    setTextAll('.footer-brand-ar', t.brandAr);
    setTextAll('.footer-brand-en', t.brandEn);
    
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
    
    // Properties page
    setText('#propertiesHeading', t.propertiesHeading);
    setText('#propertiesSubtitle', t.propertiesSubtitle);
    setText('#filterAll', t.filterAll);
    setText('#filterResidential', t.filterResidential);
    setText('#filterCommercial', t.filterCommercial);
    setText('#filterFamily', t.filterFamily);
    setText('#filterAvailable', t.filterAvailable);
    
    // Contact page
    setText('#contactHeading', t.contactHeading);
    setText('#contactSubtitle', t.contactSubtitle);
    setText('#formHeading', t.formHeading);
    setText('#labelName', t.labelName);
    setText('#labelEmail', t.labelEmail);
    setText('#labelPhone', t.labelPhone);
    setText('#labelPropertyType', t.labelPropertyType);
    setText('#labelMessage', t.labelMessage);
    setText('#optionResidential', t.optionResidential);
    setText('#optionCommercial', t.optionCommercial);
    setText('#optionFamily', t.optionFamily);
    setText('#optionOther', t.optionOther);
    setText('#submitBtn span', t.submitBtn);
    setText('#locationHeading', t.locationHeading);
    setText('#locationAddress', t.locationAddress);
    setText('#ctaHeading', t.ctaHeading);
    setText('#ctaSubtitle', t.ctaSubtitle);
    setText('#ctaViewBtn span', t.viewProperties);
    setText('#ctaAdvisorBtn span', t.talkAdvisor);
    
    // Footer
    setTextAll('#footerTagline', t.footerTagline);
    setTextAll('#footerCompany', t.footerCompany);
    setTextAll('#footerAbout', t.footerAbout);
    setTextAll('#footerProperties', t.footerProperties);
    setTextAll('#footerContact', t.footerContact);
    setTextAll('#footerAdvisor', t.footerAdvisor);
    setTextAll('#footerServices', t.footerServices);
    setTextAll('#footerResidential', t.footerResidential);
    setTextAll('#footerCommercial', t.footerCommercial);
    setTextAll('#footerGuidance', t.footerGuidance);
    setTextAll('#footerConsultation', t.footerConsultation);
    setTextAll('#footerLegal', t.footerLegal);
    setTextAll('#footerPrivacy', t.footerPrivacy);
    setTextAll('#footerTerms', t.footerTerms);
    setTextAll('#footerCookie', t.footerCookie);
    setTextAll('#footerContactHeading', t.footerContactHeading);
    setTextAll('#footerAddress', t.footerAddress);
    setTextAll('#footerHoursHeading', t.footerHoursHeading);
    setTextAll('#footerCopyright', t.footerCopyright);
  }

  // Render featured properties (home page)
  function renderFeaturedProperties() {
    if (!elements.featuredGrid) return;
    
    const t = translations[currentLanguage];
    const featuredProps = properties.slice(0, 3);
    
    elements.featuredGrid.innerHTML = featuredProps.map(prop => 
      createPropertyCard(prop, t)
    ).join('');
    
    initializeIcons();
    initializeAnimations();
  }

  // Render all properties (properties page)
  function renderAllProperties(filter = currentFilter) {
    if (!elements.allPropertiesGrid) return;
    
    const t = translations[currentLanguage];
    let filteredProps = properties;
    
    if (filter !== 'all') {
      filteredProps = properties.filter(p => 
        p.category === filter || p.type === filter || p.status === filter
      );
    }
    
    elements.allPropertiesGrid.innerHTML = filteredProps.map(prop => 
      createPropertyCard(prop, t)
    ).join('');
    
    initializeIcons();
    initializeAnimations();
  }

  // Create property card HTML
  function createPropertyCard(prop, t) {
    const isArabic = currentLanguage === 'ar';
    const title = isArabic ? prop.titleAr : prop.title;
    const location = isArabic ? prop.locationAr : prop.location;
    const description = isArabic ? prop.descriptionAr : prop.description;
    const price = isArabic ? prop.priceAr : prop.price;
    const area = isArabic ? prop.areaAr : prop.area;
    
    const badgeText = isArabic ? 
      (prop.badge === 'Residential' ? t.residential : prop.badge === 'Commercial' ? t.commercial : t.family) : 
      prop.badge;
    
    return `
      <article class="property-card fade-in">
        <div class="property-image">
          <img src="${prop.image}" alt="${title}" loading="lazy" decoding="async" width="600" height="400">
          <span class="property-badge">${badgeText}</span>
        </div>
        <div class="property-body">
          <h3 class="property-title">${title}</h3>
          <p class="property-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${location}
          </p>
          <div class="property-features">
            ${prop.beds > 0 ? `<span class="feature"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg> ${prop.beds} ${t.bedrooms}</span>` : ''}
            <span class="feature"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z"/><path d="M6 12V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/></svg> ${prop.baths} ${t.bathrooms}</span>
            <span class="feature"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><path d="M8 13V3"/><path d="M16 13V3"/><path d="M8 3h8"/></svg> ${area}</span>
          </div>
          <p class="property-description">${description}</p>
          <div class="property-footer">
            <span class="property-price">${price}</span>
            <button class="btn-view" aria-label="${t.viewProperty}: ${title}">
              ${t.viewProperty}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // Render opening hours
  function renderOpeningHours() {
    if (!elements.openingHoursContainer) return;
    
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
    
    elements.openingHoursContainer.innerHTML = hours.map(h => `
      <div class="hours-row">
        <span class="hours-day">${h.day}</span>
        <span class="hours-time">${h.time}</span>
      </div>
    `).join('');
  }

  // Update opening status
  function updateOpeningStatus() {
    if (!elements.hoursStatus) return;
    
    const t = translations[currentLanguage];
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    let isOpen = false;
    
    // Convert JS day (0=Sunday) to our schedule (0=Saturday)
    const scheduleDay = (day + 6) % 7;
    
    if (scheduleDay >= 0 && scheduleDay <= 5) {
      const timeRanges = [];
      
      if (scheduleDay <= 2) {
        // Saturday, Sunday, Monday
        timeRanges.push([9 * 60, 11 * 60 + 30]);
        timeRanges.push([15 * 60 + 30, 21 * 60 + 30]);
      } else {
        // Tuesday, Wednesday, Thursday
        timeRanges.push([9 * 60, 11 * 60 + 30]);
        timeRanges.push([13 * 60 + 30, 21 * 60 + 30]);
      }
      
      isOpen = timeRanges.some(([start, end]) => currentTime >= start && currentTime <= end);
    }
    
    if (isOpen) {
      elements.hoursStatus.textContent = t.nowOpen;
      elements.hoursStatus.className = 'hours-status hours-open';
    } else {
      elements.hoursStatus.textContent = t.nowClosed;
      elements.hoursStatus.className = 'hours-status hours-closed';
    }
  }

  // Contact form handling
  function setupContactForm() {
    if (!elements.contactForm) return;
    
    elements.contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const t = translations[currentLanguage];
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      let isValid = true;
      let errorText = '';
      
      if (!name) {
        isValid = false;
        errorText = t.fillName;
      } else if (!email || !email.includes('@') || !email.includes('.')) {
        isValid = false;
        errorText = t.validEmail;
      } else if (!phone || phone.length < 7) {
        isValid = false;
        errorText = t.fillPhone;
      } else if (!message) {
        isValid = false;
        errorText = t.fillMessage;
      }
      
      if (!isValid) {
        if (elements.formError) {
          elements.formError.textContent = errorText;
          elements.formError.classList.remove('hidden');
          elements.formSuccess.classList.add('hidden');
        }
        return;
      }
      
      // Simulate successful submission
      if (elements.formSuccess) {
        elements.formSuccess.textContent = t.formSuccess;
        elements.formSuccess.classList.remove('hidden');
        elements.formError.classList.add('hidden');
        elements.contactForm.reset();
      }
    });
  }

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

  // Initialize counters
  function initCounters() {
    if (!elements.statsContainer) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.stat-number[data-count]');
          counters.forEach(counter => {
            if (!counter.classList.contains('animated')) {
              counter.classList.add('animated');
              if (counter.getAttribute('data-count') !== 'Local') {
                animateCounter(counter);
              }
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(elements.statsContainer);
  }

  // Initialize icons
  function initializeIcons() {
    if (typeof lucide !== 'undefined') {
      try {
        lucide.createIcons();
      } catch (e) {
        console.warn('Lucide icons initialization failed:', e);
      }
    }
  }

  // Initialize animations
  function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // Mobile navigation
  function setupMobileNav() {
    if (!elements.menuToggle || !elements.mobileNav) return;
    
    elements.menuToggle.addEventListener('click', function() {
      const isOpen = elements.mobileNav.classList.contains('open');
      
      if (isOpen) {
        elements.mobileNav.classList.remove('open');
        elements.mobileNav.setAttribute('aria-hidden', 'true');
        elements.menuToggle.setAttribute('aria-expanded', 'false');
        elements.menuToggle.setAttribute('aria-label', 'Open menu');
      } else {
        elements.mobileNav.classList.add('open');
        elements.mobileNav.setAttribute('aria-hidden', 'false');
        elements.menuToggle.setAttribute('aria-expanded', 'true');
        elements.menuToggle.setAttribute('aria-label', 'Close menu');
      }
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (elements.mobileNav.classList.contains('open') && 
          !elements.mobileNav.contains(e.target) && 
          !elements.menuToggle.contains(e.target)) {
        elements.mobileNav.classList.remove('open');
        elements.mobileNav.setAttribute('aria-hidden', 'true');
        elements.menuToggle.setAttribute('aria-expanded', 'false');
        elements.menuToggle.setAttribute('aria-label', 'Open menu');
      }
    });
    
    // Close mobile nav on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && elements.mobileNav.classList.contains('open')) {
        elements.mobileNav.classList.remove('open');
        elements.mobileNav.setAttribute('aria-hidden', 'true');
        elements.menuToggle.setAttribute('aria-expanded', 'false');
        elements.menuToggle.setAttribute('aria-label', 'Open menu');
        elements.menuToggle.focus();
      }
    });
  }

  // Sticky header shadow
  function setupStickyHeader() {
    if (!elements.header) return;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        elements.header.classList.add('scrolled');
      } else {
        elements.header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Property filtering
  function setupPropertyFilters() {
    if (!elements.filterBar || !elements.allPropertiesGrid) return;
    
    elements.filterBar.addEventListener('click', function(e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      
      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      
      // Update active button
      elements.filterBar.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      
      // Filter properties
      renderAllProperties(filter);
    });
  }

  // Language selector
  function setupLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
        
        // Close mobile nav if open
        if (elements.mobileNav && elements.mobileNav.classList.contains('open')) {
          elements.mobileNav.classList.remove('open');
          elements.mobileNav.setAttribute('aria-hidden', 'true');
          elements.menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Smooth scroll for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Initialize everything
  function init() {
    // Initialize DOM references
    initElements();
    
    // Load saved language
    try {
      const savedLang = localStorage.getItem('sama_language');
      if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        currentLanguage = savedLang;
      }
    } catch (e) {
      console.warn('Unable to load language preference:', e);
    }
    
    // Set initial language
    setLanguage(currentLanguage);
    
    // Setup all functionality
    setupMobileNav();
    setupStickyHeader();
    setupLanguageSelector();
    setupPropertyFilters();
    setupContactForm();
    setupSmoothScroll();
    initCounters();
    
    // Update opening status every minute
    setInterval(updateOpeningStatus, 60000);
    
    // Initialize icons
    initializeIcons();
    
    // Initialize animations
    initializeAnimations();
    
    console.log('SAMA United Real Estate Co. website initialized');
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
