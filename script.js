/**
 * Main Application Script
 * Handles navigation, animations, and dynamic content rendering
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme first (before content renders)
    initTheme();

    // Hide page loader
    hidePageLoader();

    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavHighlight();
    initBackToTop();
    initWhatsAppButton();
    initContactForm();
    renderDynamicContent();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect for navigation
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
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
}

/**
 * Render dynamic content from config
 */
function renderDynamicContent() {
    // Render navigation links
    renderNavLinks();

    // Render hero section
    renderHero();

    // Render problems section
    renderProblems();

    // Render industries section
    renderIndustries();

    // Render philosophy section
    renderPhilosophy();

    // Render architecture section
    renderArchitecture();

    // Render devices section
    renderDevices();

    // Render process section
    renderProcess();

    // Render products section
    renderProducts();

    // Render pricing section
    renderPricing();

    // Render competitive section
    renderCompetitive();

    // Render technology section
    renderTechnology();

    // Render contact section
    renderContact();

    // Render footer
    renderFooter();

    // Re-initialize animations after content is rendered
    setTimeout(initScrollAnimations, 100);
}

function renderNavLinks() {
    const navLinksContainer = document.getElementById('nav-links-container');
    if (!navLinksContainer) return;

    SITE_CONFIG.nav.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.href}" class="nav-link">${item.label}</a>`;
        navLinksContainer.appendChild(li);
    });
}

function renderHero() {
    const hero = SITE_CONFIG.hero;

    setTextContent('hero-title', hero.headline);
    setTextContent('hero-subtitle', hero.subheadline);
    setTextContent('hero-description', hero.description);
    setTextContent('hero-cta-primary', hero.ctaPrimary);
    setTextContent('hero-cta-secondary', hero.ctaSecondary);
}

function renderProblems() {
    const problems = SITE_CONFIG.problems;
    const container = document.getElementById('problems-grid');
    if (!container) return;

    setTextContent('problems-title', problems.title);
    setTextContent('problems-subtitle', problems.subtitle);

    problems.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card problem-card card-glow';
        card.innerHTML = `
      <div class="card-icon">${item.icon}</div>
      <h4 class="card-title">${item.title}</h4>
      <p class="card-description">${item.description}</p>
    `;
        container.appendChild(card);
    });

    // Render result section
    const resultContainer = document.getElementById('problems-result');
    if (resultContainer) {
        setTextContent('problems-result-title', problems.result.title);
        const resultList = document.getElementById('problems-result-list');
        if (resultList) {
            problems.result.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                resultList.appendChild(li);
            });
        }
    }
}

function renderIndustries() {
    const industries = SITE_CONFIG.industries;
    const container = document.getElementById('industries-grid');
    if (!container) return;

    setTextContent('industries-title', industries.title);
    setTextContent('industries-subtitle', industries.subtitle);

    industries.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card industry-card';
        card.innerHTML = `
      <span class="industry-icon">${item.icon}</span>
      <span class="industry-name">${item.name}</span>
    `;
        container.appendChild(card);
    });

    // Render ideal client
    setTextContent('ideal-client-title', industries.idealClient.title);
    const traitsContainer = document.getElementById('ideal-client-traits');
    if (traitsContainer) {
        industries.idealClient.traits.forEach(trait => {
            const li = document.createElement('li');
            li.textContent = trait;
            traitsContainer.appendChild(li);
        });
    }
}

function renderPhilosophy() {
    const philosophy = SITE_CONFIG.philosophy;

    setTextContent('philosophy-title', philosophy.title);
    setTextContent('philosophy-quote', philosophy.quote);
    setTextContent('philosophy-emphasis', philosophy.emphasis);
    setTextContent('philosophy-footer', philosophy.footer);

    const pillarsContainer = document.getElementById('philosophy-pillars');
    if (pillarsContainer) {
        philosophy.pillars.forEach(pillar => {
            const card = document.createElement('div');
            card.className = 'card pillar-card';
            card.innerHTML = `
        <div class="card-icon">${pillar.icon}</div>
        <h4 class="card-title">${pillar.title}</h4>
        <p class="card-description">${pillar.description}</p>
      `;
            pillarsContainer.appendChild(card);
        });
    }
}

function renderArchitecture() {
    const architecture = SITE_CONFIG.architecture;
    const container = document.getElementById('architecture-layers');
    if (!container) return;

    setTextContent('architecture-title', architecture.title);
    setTextContent('architecture-subtitle', architecture.subtitle);

    architecture.layers.forEach(layer => {
        const card = document.createElement('div');
        card.className = 'layer-card fade-in';

        let featuresHtml = '';
        if (layer.features) {
            featuresHtml = `
        <div class="layer-features">
          <h4>Features</h4>
          <ul>
            ${layer.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `;
        }

        let replacesHtml = '';
        if (layer.replaces) {
            replacesHtml = `
        <div class="layer-replaces">
          <h4>Replaces</h4>
          <ul>
            ${layer.replaces.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `;
        }

        let examplesHtml = '';
        if (layer.examples) {
            examplesHtml = `
        <div class="layer-examples">
          <h4>Examples</h4>
          <ul>
            ${layer.examples.map(e => `<li>${e}</li>`).join('')}
          </ul>
        </div>
      `;
        }

        let purposeHtml = '';
        if (layer.purpose) {
            purposeHtml = `
        <div class="layer-examples">
          <h4>Purpose</h4>
          <ul>
            ${layer.purpose.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      `;
        }

        card.innerHTML = `
      <div class="layer-header">
        <span class="badge badge-${layer.badgeColor}">${layer.badge}</span>
        <h3 class="layer-title">${layer.title}</h3>
      </div>
      <p class="layer-description">${layer.description}</p>
      <div class="layer-content">
        ${featuresHtml}
        ${replacesHtml}
        ${examplesHtml}
        ${purposeHtml}
      </div>
    `;
        container.appendChild(card);
    });
}

function renderDevices() {
    const devices = SITE_CONFIG.devices;
    const container = document.getElementById('devices-grid');
    if (!container) return;

    setTextContent('devices-title', devices.title);
    setTextContent('devices-subtitle', devices.subtitle);
    setTextContent('devices-tagline', devices.tagline);

    devices.platforms.forEach(platform => {
        const item = document.createElement('div');
        item.className = 'device-item';
        item.innerHTML = `
      <span class="device-icon">${platform.icon}</span>
      <span class="device-name">${platform.name}</span>
    `;
        container.appendChild(item);
    });
}

function renderProcess() {
    const process = SITE_CONFIG.process;
    const container = document.getElementById('process-timeline');
    if (!container) return;

    setTextContent('process-title', process.title);
    setTextContent('process-subtitle', process.subtitle);
    setTextContent('process-footer', process.footer);

    process.steps.forEach(step => {
        const stepEl = document.createElement('div');
        stepEl.className = 'process-step';
        stepEl.innerHTML = `
      <div class="process-step-content">
        <div class="process-step-side">${step.side === 'you' ? 'Your Part' : 'Our Part'}</div>
        <h4 class="process-step-title">${step.title}</h4>
        <p class="process-step-description">${step.description}</p>
      </div>
      <div class="process-step-number">${step.number}</div>
    `;
        container.appendChild(stepEl);
    });
}

function renderProducts() {
    const products = SITE_CONFIG.products;
    const container = document.getElementById('products-grid');
    if (!container) return;

    setTextContent('products-title', products.title);
    setTextContent('products-subtitle', products.subtitle);

    products.items.forEach(product => {
        const card = document.createElement('div');
        card.className = `product-card ${product.color}`;

        // Image section - shows placeholder if no image
        const imageHtml = product.image
            ? `<div class="product-image"><img src="${product.image}" alt="${product.name}" onerror="this.parentElement.innerHTML='<span class=\\'product-image-placeholder\\'>📱</span>'"></div>`
            : `<div class="product-image"><span class="product-image-placeholder">📱</span></div>`;

        card.innerHTML = `
            ${imageHtml}
            <h3 class="product-name">${product.name}</h3>
            <p class="product-tagline">${product.tagline}</p>
            <p class="product-description">${product.description}</p>
        `;
        container.appendChild(card);
    });
}

function renderPricing() {
    const pricing = SITE_CONFIG.pricing;

    setTextContent('pricing-title', pricing.title);
    setTextContent('pricing-subtitle', pricing.subtitle);

    // Timeline
    const timelineContainer = document.getElementById('pricing-timeline');
    if (timelineContainer) {
        pricing.timeline.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'pricing-item';
            div.innerHTML = `
        <span class="pricing-label">${item.label}</span>
        <span class="pricing-value">${item.value}</span>
      `;
            timelineContainer.appendChild(div);
        });
    }

    // Payment
    const paymentContainer = document.getElementById('pricing-payment');
    if (paymentContainer) {
        pricing.payment.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'pricing-item';
            div.innerHTML = `
        <span class="pricing-label">${item.label}</span>
        <span class="pricing-value highlight">${item.percentage}%</span>
      `;
            paymentContainer.appendChild(div);
        });
    }

    // Investment
    const investmentContainer = document.getElementById('pricing-investment');
    if (investmentContainer) {
        pricing.ranges.items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'pricing-item';
            div.innerHTML = `
        <span class="pricing-label">${item.label}</span>
        <span class="pricing-value">${item.range}</span>
      `;
            investmentContainer.appendChild(div);
        });
    }

    setTextContent('pricing-note', pricing.ranges.note);
}

function renderCompetitive() {
    const competitive = SITE_CONFIG.competitive;

    setTextContent('competitive-title', competitive.title);
    setTextContent('competitive-subtitle', competitive.subtitle);

    // They do
    const theyDoList = document.getElementById('competitive-they-do');
    if (theyDoList) {
        competitive.theyDo.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            theyDoList.appendChild(li);
        });
    }

    // You risk
    const youRiskList = document.getElementById('competitive-you-risk');
    if (youRiskList) {
        competitive.youRisk.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            youRiskList.appendChild(li);
        });
    }

    // You gain
    const youGainList = document.getElementById('competitive-you-gain');
    if (youGainList) {
        competitive.youGain.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            youGainList.appendChild(li);
        });
    }
}

function renderTechnology() {
    const technology = SITE_CONFIG.technology;

    setTextContent('technology-title', technology.title);

    // Principles
    const principlesContainer = document.getElementById('technology-principles');
    if (principlesContainer) {
        technology.principles.forEach(principle => {
            const item = document.createElement('div');
            item.className = 'principle-item';
            item.innerHTML = `
        <span class="principle-icon">${principle.icon}</span>
        <span class="principle-text">${principle.title}</span>
      `;
            principlesContainer.appendChild(item);
        });
    }

    // Ensures
    const ensuresContainer = document.getElementById('technology-ensures');
    if (ensuresContainer) {
        technology.ensures.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ensuresContainer.appendChild(li);
        });
    }

    setTextContent('technology-footer', technology.footer);
}

function renderContact() {
    const contact = SITE_CONFIG.contact;

    setTextContent('contact-title', contact.title);
    setTextContent('contact-subtitle', contact.subtitle);
    setTextContent('contact-cta', contact.cta);
    setTextContent('contact-footer', contact.footer);
}

function renderFooter() {
    const footer = SITE_CONFIG.footer;
    const brand = SITE_CONFIG.brand;

    setTextContent('footer-logo', brand.name);
    setTextContent('footer-tagline', footer.tagline);
    setTextContent('footer-copyright', footer.copyright);
}

/**
 * Utility function to set text content by ID
 */
function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

/**
 * Theme Toggle Functionality
 */
function initTheme() {
    const storageKey = SITE_CONFIG.theme?.storageKey || 'growth-team-theme';
    const defaultTheme = SITE_CONFIG.theme?.default || 'dark';

    // Get saved theme or use default
    const savedTheme = localStorage.getItem(storageKey) || defaultTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = `
        <span class="icon-sun">☀️</span>
        <span class="icon-moon">🌙</span>
    `;
    document.body.appendChild(themeToggle);

    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem(storageKey, newTheme);
    });
}

/**
 * Page Loader
 */
function hidePageLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
}

/**
 * Active Navigation Highlight on Scroll
 */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * WhatsApp Floating Button
 */
function initWhatsAppButton() {
    if (!SITE_CONFIG.whatsapp?.enabled) return;

    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsappBtn.setAttribute('target', '_blank');
    whatsappBtn.setAttribute('rel', 'noopener noreferrer');

    const message = encodeURIComponent(SITE_CONFIG.whatsapp.message || '');
    whatsappBtn.href = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${message}`;

    // WhatsApp SVG icon
    whatsappBtn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    `;

    document.body.appendChild(whatsappBtn);
}

/**
 * Contact Form with Web3Forms
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.form-submit');
        const messageDiv = document.getElementById('form-message');
        const originalText = submitBtn.textContent;

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Hide previous messages
        messageDiv.className = 'form-message';
        messageDiv.style.display = 'none';

        try {
            const formData = new FormData(form);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                messageDiv.textContent = SITE_CONFIG.contactForm?.successMessage || 'Thank you! We\'ll get back to you soon.';
                messageDiv.className = 'form-message success';
                messageDiv.style.display = 'block';
                form.reset();
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            messageDiv.textContent = SITE_CONFIG.contactForm?.errorMessage || 'Oops! Something went wrong. Please try again.';
            messageDiv.className = 'form-message error';
            messageDiv.style.display = 'block';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}
