// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Handle mobile menu toggle
  const menuBtn = document.getElementById("menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Handle dark mode toggle
  const darkModeToggle = document.getElementById("dark-mode-toggle")

  if (darkModeToggle) {
    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
      document.documentElement.classList.add("dark")
      updateDarkModeIcon(true)
    }

    darkModeToggle.addEventListener("click", () => {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("darkMode", "disabled")
        updateDarkModeIcon(false)
      } else {
        document.documentElement.classList.add("dark")
        localStorage.setItem("darkMode", "enabled")
        updateDarkModeIcon(true)
      }
    })
  }

  function updateDarkModeIcon(isDark) {
    if (darkModeToggle) {
      if (isDark) {
        darkModeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        `
      } else {
        darkModeToggle.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        `
      }
    }
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Format message for WhatsApp
      const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`

      // Open WhatsApp with the message
      window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, "_blank")
    })
  }

  // Hide loader when page is loaded
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader")
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0"
        setTimeout(() => {
          loader.style.display = "none"
        }, 500)
      }, 1000)
    }
  })

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href !== "#") {
        e.preventDefault()
        const targetElement = document.querySelector(href)

        if (targetElement) {
          // Close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden")
          }

          // Scroll to the target element
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    })
  })
})

