document.addEventListener("DOMContentLoaded", function () {
    // Navbar active link toggle
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Dark/Light Mode Toggle
    const themeBtn = document.getElementById("theme-btn");
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("bg-gray-900");
        document.body.classList.toggle("text-white");
        document.body.classList.toggle("bg-white");
        document.body.classList.toggle("text-black");
    });

    // Translate Toggle
    const translateBtn = document.getElementById("translate-btn");
    let isEnglish = true;
    translateBtn.addEventListener("click", function () {
        const navLinks = document.querySelectorAll("#nav-links li a");
        const heroTitle = document.getElementById("hero-title");
        const heroText = document.getElementById("hero-text");

        if (isEnglish) {
            // Translate to Arabic
            const arabicText = ["الرئيسية", "معلومات عنا", "الخدمات", "الفريق", "اتصل بنا"];
            navLinks.forEach((link, index) => link.textContent = arabicText[index]);
            heroTitle.textContent = "اكتشف عقارك المثالي مع إيستين";
            heroText.textContent = "رحلتك للعثور على العقار المثالي تبدأ هنا. تصفح قوائمنا للعثور على المنزل الذي يناسب أحلامك.";
        } else {
            // Translate to English
            const englishText = ["Home", "About", "Services", "Team", "Contact"];
            navLinks.forEach((link, index) => link.textContent = englishText[index]);
            heroTitle.textContent = "Discover Your Dream Property with Estatein";
            heroText.textContent = "Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.";
        }
        isEnglish = !isEnglish;
    });
});
