// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Handle dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  if (darkModeToggle) {
    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      document.documentElement.classList.add("dark");
      updateDarkModeIcon(true);
    }

    darkModeToggle.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
        updateDarkModeIcon(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
        updateDarkModeIcon(true);
      }
    });
  }

  function updateDarkModeIcon(isDark) {
    if (darkModeToggle) {
      darkModeToggle.innerHTML = isDark
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>`;
    }
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Format message for WhatsApp
      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

      // Open WhatsApp with the message
      window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, "_blank");
    });
  }

  // Hide loader when page is loaded
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }, 1000);
    }
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href !== "#") {
        e.preventDefault();
        const targetElement = document.querySelector(href);

        if (targetElement) {
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
          }

          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Add CSS for Arabic text (bolder)
  const style = document.createElement('style');
  style.textContent = `
    .arabic-mode {
      font-weight: 600;
    }
    
    .arabic-mode h1, .arabic-mode h2, .arabic-mode h3, .arabic-mode h4 {
      font-weight: 700;
    }
  `;
  document.head.appendChild(style);

  // Language Translation
  const translations = {
    en: {
      // Navigation
      home: "Home",
      about: "About",
      services: "We Provide",
      contact: "Contact",
      langButton: "English",
      
      // Hero section
      heroTitle: "Discover Your Dream Property with EGY PROJECTS",
      heroDescription: "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.",
      learnMore: "Learn More",
      happyCustomers: "Happy Customers",
      propertiesForClients: "Properties For Clients",
      
      // About section
      aboutTitle: "About EGY PROJECTS",
      aboutDescription1: "At EGY PROJECTS, we are dedicated to connecting people with their dream properties. With over 10 years of experience, we've established ourselves as a trusted name in the real estate industry, offering an extensive range of properties to meet the diverse needs of our clients.",
      aboutDescription2: "Our team of experts works tirelessly to ensure customer satisfaction, delivering exceptional services, from property listings to personalized consultations. Let us help you find the perfect place to call home.",
      
      // Why Choose Us section
      whyChooseUs: "Why Choose Us?",
      whyChooseUsDescription: "At EGY PROJECTS, we stand out from the competition for several compelling reasons.",
      expertise: "Unmatched Expertise",
      expertiseDescription: "With over 10 years in the real estate industry, our team brings unparalleled knowledge and expertise to every client interaction. We understand the market intricacies and leverage this insight to your advantage.",
      clientCentered: "Client-Centered Approach",
      clientCenteredDescription: "We prioritize your needs and preferences, tailoring our services to match your unique requirements. Our client-centered approach ensures that your property journey is smooth, transparent, and successful.",
      exclusivePortfolio: "Exclusive Property Portfolio",
      exclusivePortfolioDescription: "Access our exclusive portfolio of premium properties across diverse locations. We maintain strong relationships with top developers, giving you first access to the best properties before they hit the market.",
      
      // Mission & Vision
      ourMission: "Our Mission",
      missionDescription: "Our mission at EGY PROJECTS is to transform the real estate experience through integrity, innovation, and exceptional service. We are committed to:",
      missionPoint1: "Connecting clients with properties that enhance their quality of life and meet their investment goals.",
      missionPoint2: "Providing transparent, ethical guidance throughout the property acquisition process.",
      missionPoint3: "Building lasting relationships based on trust, expertise, and exceptional results.",
      
      ourVision: "Our Vision",
      visionDescription: "We envision a future where finding and acquiring property is a seamless, enjoyable experience for everyone. Our vision encompasses:",
      visionPoint1: "Being the most trusted and innovative real estate partner in Egypt and beyond.",
      visionPoint2: "Setting new standards for client satisfaction and service excellence in the real estate industry.",
      visionPoint3: "Contributing to community development through responsible real estate practices and partnerships.",
      
      // Services
      weProvide: "We Provide",
      servicesDescription: "Comprehensive real estate solutions tailored to your specific needs.",
      firstHome: "First Home",
      firstHomeDescription: "Find your perfect first home with our expert guidance and exclusive listings tailored for first-time buyers.",
      secondHome: "Second Home",
      secondHomeDescription: "Discover the perfect vacation or investment property to complement your primary residence.",
      commercial: "Commercial",
      commercialDescription: "Premium commercial spaces for businesses of all sizes, from retail locations to office complexes.",
      clinics: "Clinics",
      clinicsDescription: "Specialized properties designed for healthcare professionals, with optimal layouts for medical practices.",
      developmentLand: "Development Land",
      developmentLandDescription: "Prime land parcels for development projects, with strategic locations and growth potential.",
      admin: "Admin",
      adminDescription: "Comprehensive administrative services for property owners, including management and maintenance solutions.",
      
      // Partners & Developers
      ourPartners: "Our Partners",
      partnersDescription: "We collaborate with industry leaders to bring you the best property options and services.",
      topDevelopers: "We Deal With Top Developers",
      developersDescription: "Access exclusive properties from Egypt's premier real estate developers through our established partnerships.",
      
      // Footer
      companyInfo: "Providing top-tier real estate solutions for over 10 years.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      address: "First Settlement-Mirage Mall-3rd Floor",
      rights: "© 2025 EGY PROJECTS. All Rights Reserved.",
      whyUs: "Why Us"
    },
    ar: {
      // Navigation
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "اتصل بنا",
      langButton: "العربية",
      
      // Hero section
      heroTitle: "اكتشف عقارك المثالي مع إيجي بروجكتس",
      heroDescription: "رحلتك للعثور على العقار المثالي تبدأ هنا. استكشف قوائمنا للعثور على المنزل الذي يطابق أحلامك.",
      learnMore: "اعرف المزيد",
      happyCustomers: "عميل سعيد",
      propertiesForClients: "عقار لعملائنا",
      
      // About section
      aboutTitle: "عن إيجي بروجكتس",
      aboutDescription1: "في إيجي بروجكتس، نحن مكرسون لربط الناس بعقاراتهم المثالية. مع أكثر من 10 سنوات من الخبرة، أسسنا أنفسنا كاسم موثوق به في صناعة العقارات، ونقدم مجموعة واسعة من العقارات لتلبية الاحتياجات المتنوعة لعملائنا.",
      aboutDescription2: "يعمل فريق الخبراء لدينا بلا كلل لضمان رضا العملاء، وتقديم خدمات استثنائية، من قوائم العقارات إلى الاستشارات الشخصية. دعنا نساعدك في العثور على المكان المثالي لتسميه منزلك.",
      
      // Why Choose Us section
      whyChooseUs: "لماذا تختارنا؟",
      whyChooseUsDescription: "في إيجي بروجكتس، نتميز عن المنافسة لعدة أسباب مقنعة.",
      expertise: "خبرة لا مثيل لها",
      expertiseDescription: "مع أكثر من 10 سنوات في صناعة العقارات، يجلب فريقنا معرفة وخبرة لا مثيل لها لكل تفاعل مع العملاء. نحن نفهم تعقيدات السوق ونستفيد من هذه الرؤية لصالحك.",
      clientCentered: "نهج يركز على العميل",
      clientCenteredDescription: "نحن نعطي الأولوية لاحتياجاتك وتفضيلاتك، ونصمم خدماتنا لتتناسب مع متطلباتك الفريدة. نهجنا الذي يركز على العميل يضمن أن تكون رحلتك العقارية سلسة وشفافة وناجحة.",
      exclusivePortfolio: "محفظة عقارية حصرية",
      exclusivePortfolioDescription: "الوصول إلى محفظتنا الحصرية من العقارات الفاخرة عبر مواقع متنوعة. نحافظ على علاقات قوية مع كبار المطورين، مما يمنحك حق الوصول الأول إلى أفضل العقارات قبل طرحها في السوق.",
      
      // Mission & Vision
      ourMission: "مهمتنا",
      missionDescription: "مهمتنا في إيجي بروجكتس هي تحويل تجربة العقارات من خلال النزاهة والابتكار والخدمة الاستثنائية. نحن ملتزمون بـ:",
      missionPoint1: "ربط العملاء بالعقارات التي تعزز جودة حياتهم وتلبي أهدافهم الاستثمارية.",
      missionPoint2: "تقديم إرشادات شفافة وأخلاقية طوال عملية اقتناء العقارات.",
      missionPoint3: "بناء علاقات دائمة على أساس الثقة والخبرة والنتائج الاستثنائية.",
      
      ourVision: "رؤيتنا",
      visionDescription: "نحن نتصور مستقبلاً يكون فيه العثور على العقارات واقتناؤها تجربة سلسة وممتعة للجميع. تشمل رؤيتنا:",
      visionPoint1: "أن نكون الشريك العقاري الأكثر ثقة وابتكارًا في مصر وخارجها.",
      visionPoint2: "وضع معايير جديدة لرضا العملاء والتميز في الخدمة في صناعة العقارات.",
      visionPoint3: "المساهمة في تنمية المجتمع من خلال ممارسات وشراكات عقارية مسؤولة.",
      
      // Services
      weProvide: "نقدم",
      servicesDescription: "حلول عقارية شاملة مصممة خصيصًا لتلبية احتياجاتك المحددة.",
      firstHome: "المنزل الأول",
      firstHomeDescription: "اعثر على منزلك الأول المثالي مع توجيهاتنا الخبيرة وقوائمنا الحصرية المصممة للمشترين لأول مرة.",
      secondHome: "المنزل الثاني",
      secondHomeDescription: "اكتشف العقار المثالي للإجازة أو الاستثمار لتكملة مسكنك الرئيسي.",
      commercial: "تجاري",
      commercialDescription: "مساحات تجارية متميزة للشركات من جميع الأحجام، من مواقع البيع بالتجزئة إلى مجمعات المكاتب.",
      clinics: "عيادات",
      clinicsDescription: "عقارات متخصصة مصممة للمتخصصين في الرعاية الصحية، مع تخطيطات مثالية للممارسات الطبية.",
      developmentLand: "أراضي للتطوير",
      developmentLandDescription: "قطع أراضي رئيسية لمشاريع التطوير، مع مواقع استراتيجية وإمكانات للنمو.",
      admin: "إدارة",
      adminDescription: "خدمات إدارية شاملة لمالكي العقارات، بما في ذلك حلول الإدارة والصيانة.",
      
      // Partners & Developers
      ourPartners: "شركاؤنا",
      partnersDescription: "نتعاون مع الشركات الرائدة في الصناعة لنقدم لك أفضل خيارات وخدمات العقارات.",
      topDevelopers: "نتعامل مع كبار المطورين",
      developersDescription: "الوصول إلى عقارات حصرية من أفضل مطوري العقارات في مصر من خلال شراكاتنا الراسخة.",
      
      // Footer
      companyInfo: "نقدم حلول عقارية من الدرجة الأولى لأكثر من 10 سنوات.",
      quickLinks: "روابط سريعة",
      contactUs: "اتصل بنا",
      address: "التجمع الاول-ميراج مول-الدور3",
      rights: "© 2025 إيجي بروجكتس. جميع الحقوق محفوظة.",
      whyUs: "لماذا نحن"
    },
  };

  // Store initial language preference (default to English)
  let currentLang = localStorage.getItem('siteLanguage') || "en";
  
  // Function to set RTL/LTR direction based on language
  function setDirection(lang) {
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.body.classList.add('arabic-mode');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.classList.remove('arabic-mode');
    }
  }
  
  // Function to directly translate section headings with spans
  function translateSectionHeadings() {
    // About section heading
    const aboutHeading = document.querySelector('#about h2');
    if (aboutHeading) {
      aboutHeading.innerHTML = `${translations[currentLang].about} <span class="text-amber-500">EGY PROJECTS</span>`;
    }
    
    // Why Choose Us heading
    const whyUsHeading = document.querySelector('#why-us h2');
    if (whyUsHeading) {
      whyUsHeading.innerHTML = `${translations[currentLang].whyChooseUs.split('?')[0]} <span class="text-amber-500">${translations[currentLang].whyChooseUs.includes('?') ? '?' : ''}</span>`;
    }
    
    // We Provide heading
    const weProvideHeading = document.querySelector('#serv h2');
    if (weProvideHeading) {
      weProvideHeading.innerHTML = `${translations[currentLang].weProvide.split(' ')[0]} <span class="text-amber-500">${translations[currentLang].weProvide.split(' ').slice(1).join(' ')}</span>`;
    }
    
    // Our Mission heading
    const missionHeading = document.querySelector('.bg-amber-100:nth-of-type(1) h2');
    if (missionHeading) {
      missionHeading.innerHTML = `${translations[currentLang].ourMission.split(' ')[0]} <span class="text-amber-500">${translations[currentLang].ourMission.split(' ').slice(1).join(' ')}</span>`;
    }
    
    // Our Vision heading
    const visionHeading = document.querySelector('.bg-amber-100:nth-of-type(2) h2');
    if (visionHeading) {
      visionHeading.innerHTML = `${translations[currentLang].ourVision.split(' ')[0]} <span class="text-amber-500">${translations[currentLang].ourVision.split(' ').slice(1).join(' ')}</span>`;
    }
    
    // Our Partners heading
    const partnersHeading = document.querySelector('.bg-amber-50.py-16:nth-of-type(6) h2');
    if (partnersHeading) {
      partnersHeading.innerHTML = `${translations[currentLang].ourPartners.split(' ')[0]} <span class="text-amber-500">${translations[currentLang].ourPartners.split(' ').slice(1).join(' ')}</span>`;
    }
    
    // We Deal With Top Developers heading
    const developersHeading = document.querySelector('.bg-amber-50.py-16:nth-of-type(7) h2');
    if (developersHeading) {
      developersHeading.textContent = translations[currentLang].topDevelopers;
    }
    
    // Contact Us in footer
    const contactUsHeading = document.querySelector('footer h4:nth-of-type(2)');
    if (contactUsHeading) {
      contactUsHeading.textContent = translations[currentLang].contactUs;
    }
    
    // Properties For Clients - special handling
    const propertiesForClients = document.querySelector('.text-4xl.font-bold.text-amber-500 + .text-amber-800');
    if (propertiesForClients) {
      propertiesForClients.textContent = translations[currentLang].propertiesForClients;
    }
  }
  
  // First, let's add data attributes to all elements that need translation
  function setupTranslationAttributes() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach((link, index) => {
      const keys = ['home', 'about', 'services', 'contact'];
      link.setAttribute('data-translate-key', keys[index]);
    });
    
    // Mobile menu links
    document.querySelectorAll('#mobile-menu a').forEach((link, index) => {
      const keys = ['home', 'about', 'services', 'contact'];
      link.setAttribute('data-translate-key', keys[index]);
    });
    
    // Hero section
    const heroSection = document.querySelector('.relative.bg-gray-900.text-white');
    if (heroSection) {
      const heroTitle = heroSection.querySelector('h1.text-4xl');
      if (heroTitle) heroTitle.setAttribute('data-translate-key', 'heroTitle');
      
      const heroDesc = heroSection.querySelector('p.text-lg.mb-6');
      if (heroDesc) heroDesc.setAttribute('data-translate-key', 'heroDescription');
      
      const learnMoreBtn = heroSection.querySelector('button.px-6.py-3');
      if (learnMoreBtn) learnMoreBtn.setAttribute('data-translate-key', 'learnMore');
      
      const happyCustomers = heroSection.querySelector('.text-4xl.font-bold.text-amber-500 + .text-amber-800:first-of-type');
      if (happyCustomers) happyCustomers.setAttribute('data-translate-key', 'happyCustomers');
      
      // Properties For Clients - using a more specific selector
      const propertiesForClients = document.querySelectorAll('.text-amber-800');
      if (propertiesForClients.length >= 2) {
        propertiesForClients[1].setAttribute('data-translate-key', 'propertiesForClients');
      }
    }
    
    // About section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const aboutDesc1 = aboutSection.querySelector('p:nth-of-type(1)');
      if (aboutDesc1) aboutDesc1.setAttribute('data-translate-key', 'aboutDescription1');
      
      const aboutDesc2 = aboutSection.querySelector('p:nth-of-type(2)');
      if (aboutDesc2) aboutDesc2.setAttribute('data-translate-key', 'aboutDescription2');
    }
    
    // Why Choose Us section
    const whyUsSection = document.getElementById('why-us');
    if (whyUsSection) {
      const whyUsDesc = whyUsSection.querySelector('.text-center > p');
      if (whyUsDesc) whyUsDesc.setAttribute('data-translate-key', 'whyChooseUsDescription');
      
      // The three cards
      const cards = whyUsSection.querySelectorAll('.grid > div');
      if (cards.length >= 3) {
        const titles = ['expertise', 'clientCentered', 'exclusivePortfolio'];
        const descs = ['expertiseDescription', 'clientCenteredDescription', 'exclusivePortfolioDescription'];
        
        cards.forEach((card, index) => {
          if (index < 3) {
            const title = card.querySelector('h3');
            if (title) title.setAttribute('data-translate-key', titles[index]);
            
            const desc = card.querySelector('p');
            if (desc) desc.setAttribute('data-translate-key', descs[index]);
          }
        });
      }
    }
    
    // Mission & Vision
    const missionVisionSection = document.querySelector('.grid-cols-1.md\\:grid-cols-2.gap-12');
    if (missionVisionSection) {
      const cards = missionVisionSection.querySelectorAll('.bg-amber-100');
      
      // Mission card
      if (cards.length >= 1) {
        const missionDesc = cards[0].querySelector('p');
        if (missionDesc) missionDesc.setAttribute('data-translate-key', 'missionDescription');
        
        const missionPoints = cards[0].querySelectorAll('li span');
        if (missionPoints.length >= 3) {
          missionPoints[0].setAttribute('data-translate-key', 'missionPoint1');
          missionPoints[1].setAttribute('data-translate-key', 'missionPoint2');
          missionPoints[2].setAttribute('data-translate-key', 'missionPoint3');
        }
      }
      
      // Vision card
      if (cards.length >= 2) {
        const visionDesc = cards[1].querySelector('p');
        if (visionDesc) visionDesc.setAttribute('data-translate-key', 'visionDescription');
        
        const visionPoints = cards[1].querySelectorAll('li span');
        if (visionPoints.length >= 3) {
          visionPoints[0].setAttribute('data-translate-key', 'visionPoint1');
          visionPoints[1].setAttribute('data-translate-key', 'visionPoint2');
          visionPoints[2].setAttribute('data-translate-key', 'visionPoint3');
        }
      }
    }
    
    // Services section
    const servSection = document.getElementById('serv');
    if (servSection) {
      const servDesc = servSection.querySelector('.text-center > p');
      if (servDesc) servDesc.setAttribute('data-translate-key', 'servicesDescription');
      
      // Service cards
      const serviceCards = servSection.querySelectorAll('.grid > div');
      if (serviceCards.length >= 6) {
        const titles = ['firstHome', 'secondHome', 'commercial', 'clinics', 'developmentLand', 'admin'];
        const descs = ['firstHomeDescription', 'secondHomeDescription', 'commercialDescription', 'clinicsDescription', 'developmentLandDescription', 'adminDescription'];
        
        serviceCards.forEach((card, index) => {
          if (index < 6) {
            const title = card.querySelector('h3');
            if (title) title.setAttribute('data-translate-key', titles[index]);
            
            const desc = card.querySelector('p');
            if (desc) desc.setAttribute('data-translate-key', descs[index]);
          }
        });
      }
    }
    
    // Partners section
    const partnersSection = document.querySelector('.bg-amber-50.py-16:nth-of-type(6)');
    if (partnersSection) {
      const partnersDesc = partnersSection.querySelector('.text-center > p');
      if (partnersDesc) partnersDesc.setAttribute('data-translate-key', 'partnersDescription');
    }
    
    // Top Developers section
    const developersSection = document.querySelector('.bg-amber-50.py-16:nth-of-type(7)');
    if (developersSection) {
      const developersDesc = developersSection.querySelector('.text-center > p');
      if (developersDesc) developersDesc.setAttribute('data-translate-key', 'developersDescription');
    }
    
    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
      const companyInfo = footer.querySelector('.mt-3.text-amber-800');
      if (companyInfo) companyInfo.setAttribute('data-translate-key', 'companyInfo');
      
      const quickLinks = footer.querySelector('h4:nth-of-type(1)');
      if (quickLinks) quickLinks.setAttribute('data-translate-key', 'quickLinks');
      
      const address = footer.querySelector('.flex.items-center.space-x-3 span:nth-of-type(2)');
      if (address) address.setAttribute('data-translate-key', 'address');
      
      const rights = footer.querySelector('.border-t p');
      if (rights) rights.setAttribute('data-translate-key', 'rights');
      
      // Footer quick links
      const footerLinks = footer.querySelectorAll('ul.space-y-2 a');
      if (footerLinks.length >= 5) {
        const keys = ['home', 'about', 'services', 'whyUs', 'contact'];
        footerLinks.forEach((link, index) => {
          if (index < 5) {
            link.setAttribute('data-translate-key', keys[index]);
          }
        });
      }
    }
  }
  
  // Apply translations based on the current language
  function applyTranslations() {
    // Set RTL/LTR direction
    setDirection(currentLang);
    
    // Update language toggle button text
    const langToggleBtn = document.getElementById("lang-toggle");
    if (langToggleBtn) {
      langToggleBtn.textContent = translations[currentLang].langButton;
    }
    
    // First, handle the special section headings
    translateSectionHeadings();
    
    // Then update all elements with data-translate-key attribute
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[currentLang][key]) {
        element.textContent = translations[currentLang][key];
      }
    });
    
    // Store the current language preference
    localStorage.setItem('siteLanguage', currentLang);
  }

  // Toggle language function
  function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyTranslations();
  }

  // Initialize the translation system
  function initializeTranslation() {
    // Setup translation attributes on page load
    setupTranslationAttributes();
    
    // Apply initial translations
    applyTranslations();
    
    // Attach event listener to language toggle button
    const langToggleBtn = document.getElementById("lang-toggle");
    if (langToggleBtn) {
      langToggleBtn.addEventListener("click", toggleLanguage);
    }
  }
  
  // Initialize translations when DOM is loaded
  initializeTranslation();
});