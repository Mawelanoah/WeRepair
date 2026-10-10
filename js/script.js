// WeRepair Website JavaScript

document.addEventListener('DOMContentLoaded', function () {
  // ===== Year in Footer =====
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Sticky Header Shadow =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== Scroll to Top Button =====
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== Mobile Navigation =====
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
      navToggle.classList.toggle('active');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
  }

  // ===== Active Nav Link on Scroll =====
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', highlightNav);

  // ===== Pre-fill service from price cards =====
  const serviceButtons = document.querySelectorAll('[data-service]');
  const serviceSelect = document.getElementById('service');
  
  serviceButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const service = btn.getAttribute('data-service');
      if (serviceSelect && service) {
        const options = serviceSelect.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === service || options[i].text.includes(service.split(' ')[0])) {
            serviceSelect.value = options[i].value;
            break;
          }
        }
      }
    });
  });

  // ===== Repair Form → WhatsApp =====
  const repairForm = document.getElementById('repair-form');
  
  if (repairForm) {
    repairForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const brand = document.getElementById('brand').value.trim();
      const model = document.getElementById('model').value.trim();
      const service = document.getElementById('service').value.trim();
      const problem = document.getElementById('problem').value.trim();
      const name = document.getElementById('name').value.trim();
      const preferredDate = document.getElementById('preferred-date').value;
      const contactMethod = document.getElementById('contact-method').value;
      
      if (!brand || !model || !service || !problem || !name) {
        alert('Please fill in all required fields marked with *.');
        return;
      }
      
      let message = 'Hi WeRepair, I would like to enquire about a phone repair.\n\n';
      message += '*Name:* ' + name + '\n';
      message += '*Phone Brand:* ' + brand + '\n';
      message += '*Phone Model:* ' + model + '\n';
      message += '*Service Needed:* ' + service + '\n';
      message += '*Problem Description:* ' + problem + '\n';
      
      if (preferredDate) {
        message += '*Preferred Date:* ' + preferredDate + '\n';
      }
      
      message += '*Preferred Contact:* ' + contactMethod + '\n\n';
      message += 'Please let me know the availability, estimated price and next steps. Thank you!';
      
      const encoded = encodeURIComponent(message);
      const whatsappUrl = 'https://wa.me/27738178823?text=' + encoded;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // ===== Contact Form → WhatsApp =====
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('c-name').value.trim();
      const messageText = document.getElementById('c-message').value.trim();
      
      if (!name || !messageText) {
        alert('Please fill in your name and message.');
        return;
      }
      
      let message = 'Hi WeRepair,\n\n';
      message += '*Name:* ' + name + '\n';
      message += '*Message:* ' + messageText + '\n\n';
      message += 'Looking forward to your reply. Thank you!';
      
      const encoded = encodeURIComponent(message);
      const whatsappUrl = 'https://wa.me/27738178823?text=' + encoded;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // ===== Smooth scroll for internal links (fallback) =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
