/**
 * Growth Teams — Main Script
 * Handles navigation, animations, content rendering, and form logic.
 */

document.addEventListener('DOMContentLoaded', () => {
    hidePageLoader();
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNavHighlight();
    initBackToTop();
    initWhatsAppButton();
    initContactForm();
    renderAll();
});

/* ── Render All ──────────────────────────────── */
function renderAll() {
    renderNavLinks();
    renderHero();
    renderServices();
    renderWork();
    renderProcess();
    renderPricing();
    renderAbout();
    renderContact();
    renderFooter();
    // Re-run scroll animations after DOM is populated
    setTimeout(initScrollAnimations, 150);
}

/* ── Navigation ──────────────────────────────── */
function initNavigation() {
    const nav      = document.getElementById('nav');
    const toggle   = document.getElementById('nav-toggle');
    const mobile   = document.getElementById('nav-mobile');

    // Scroll shadow
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // Mobile toggle
    if (toggle && mobile) {
        toggle.addEventListener('click', () => {
            const isOpen = mobile.classList.toggle('open');
            toggle.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    // Close on backdrop click (mobile)
    document.addEventListener('click', (e) => {
        if (mobile && mobile.classList.contains('open')) {
            if (!mobile.contains(e.target) && !toggle.contains(e.target)) {
                mobile.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        }
    });
}

function renderNavLinks() {
    const desktop = document.getElementById('nav-links-container');
    const mobile  = document.getElementById('nav-mobile-links');
    if (!SITE_CONFIG.nav) return;

    SITE_CONFIG.nav.forEach(item => {
        if (desktop) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.href}" class="nav-link">${item.label}</a>`;
            desktop.appendChild(li);
        }
        if (mobile) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.href}" class="nav-mobile-link">${item.label}</a>`;
            mobile.appendChild(li);

            li.querySelector('a').addEventListener('click', () => {
                const mobileMenu = document.getElementById('nav-mobile');
                const navToggle  = document.getElementById('nav-toggle');
                mobileMenu.classList.remove('open');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        }
    });
}

/* ── Page Loader ─────────────────────────────── */
function hidePageLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    setTimeout(() => loader.classList.add('hidden'), 300);
}

/* ── Smooth Scroll ───────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 72; // nav height
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* ── Scroll Animations ───────────────────────── */
function initScrollAnimations() {
    const els = document.querySelectorAll('.fade-in, .stagger');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}

/* ── Active Nav Highlight ────────────────────── */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');

    const update = () => {
        const pos = window.scrollY + 120;
        sections.forEach(section => {
            const top    = section.offsetTop;
            const height = section.offsetHeight;
            const id     = section.getAttribute('id');
            if (pos >= top && pos < top + height) {
                links.forEach(link => {
                    const active = link.getAttribute('href') === `#${id}`;
                    link.classList.toggle('active', active);
                });
            }
        });
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
}

/* ── Back to Top ─────────────────────────────── */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── WhatsApp Button ─────────────────────────── */
function initWhatsAppButton() {
    if (!SITE_CONFIG.whatsapp?.enabled) return;
    const a = document.createElement('a');
    a.className = 'whatsapp-btn';
    a.setAttribute('aria-label', 'Chat on WhatsApp');
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    const msg = encodeURIComponent(SITE_CONFIG.whatsapp.message || '');
    a.href = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${msg}`;
    a.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
    document.body.appendChild(a);
}

/* ── Contact Form ────────────────────────────── */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const btn     = form.querySelector('.btn-submit');
        const msgDiv  = document.getElementById('form-message');
        const origText = btn.textContent;

        btn.disabled = true;
        btn.textContent = 'Sending...';
        msgDiv.className = 'form-message';
        msgDiv.style.display = 'none';

        try {
            const res  = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(form),
            });
            const data = await res.json();
            if (data.success) {
                msgDiv.textContent = SITE_CONFIG.contactForm?.successMessage || 'Thank you. We will be in touch shortly.';
                msgDiv.className   = 'form-message success';
                form.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch {
            msgDiv.textContent = SITE_CONFIG.contactForm?.errorMessage || 'Something went wrong. Please try again.';
            msgDiv.className   = 'form-message error';
        } finally {
            msgDiv.style.display = 'block';
            btn.disabled = false;
            btn.textContent = origText;
        }
    });
}

/* ── Render: Hero ────────────────────────────── */
function renderHero() {
    const h = SITE_CONFIG.hero;
    setText('hero-eyebrow', h.eyebrow);
    setText('hero-title',    h.headline);
    setText('hero-subtitle', h.subheadline);
    setText('hero-cta-primary',   h.ctaPrimary);
    setText('hero-cta-secondary', h.ctaSecondary);

    const statsEl = document.getElementById('hero-stats');
    if (statsEl && h.stats) {
        h.stats.forEach(stat => {
            const div = document.createElement('div');
            div.className = 'stat-item';
            div.innerHTML = `
                <div class="stat-value">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            `;
            statsEl.appendChild(div);
        });
    }
}

/* ── Render: Services ────────────────────────── */
function renderServices() {
    const s = SITE_CONFIG.services;
    setText('services-eyebrow',  s.eyebrow);
    setText('services-title',    s.headline);
    setText('services-subtitle', s.subtitle);

    const list = document.getElementById('services-list');
    if (!list || !s.items) return;

    list.classList.add('stagger');

    s.items.forEach(item => {
        const el = document.createElement('div');
        el.className = 'service-item';

        const tags = item.tags.map(t => `<span class="service-tag">${t}</span>`).join('');

        let useCasesHtml = '';
        if (item.useCases && item.useCases.length > 0) {
            const cases = item.useCases.map(uc => `
                <li class="use-case-item">
                    <span class="use-case-label">${uc.label}</span>
                    <span class="use-case-detail">${uc.detail}</span>
                </li>
            `).join('');
            useCasesHtml = `<ul class="use-cases-list">${cases}</ul>`;
        }

        el.innerHTML = `
            <span class="service-number">${item.number}</span>
            <div class="service-body">
                <h3 class="service-title">${item.title}</h3>
                <p class="service-description">${item.description}</p>
                <div class="service-tags">${tags}</div>
                ${useCasesHtml}
            </div>
            <span class="service-arrow" aria-hidden="true">→</span>
        `;
        list.appendChild(el);
    });
}

/* ── Render: Work / Case Studies ─────────────── */
function renderWork() {
    const w = SITE_CONFIG.work;
    setText('work-eyebrow', w.eyebrow);
    setText('work-title',   w.headline);

    const grid = document.getElementById('work-grid');
    if (!grid || !w.items) return;

    grid.classList.add('stagger');

    w.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'work-card fade-in';

        const imageHtml = item.image
            ? `<div class="work-card-image"><img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'work-card-image-placeholder\\'>${item.name[0]}</span>'"></div>`
            : `<div class="work-card-image"><span class="work-card-image-placeholder">${item.name[0]}</span></div>`;

        card.innerHTML = `
            ${imageHtml}
            <div class="work-card-body">
                <p class="work-card-category">${item.category}</p>
                <h3 class="work-card-name">${item.name}</h3>
                <p class="work-card-description">${item.description}</p>
                <div class="work-card-outcome">${item.outcome}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ── Render: Process ─────────────────────────── */
function renderProcess() {
    const p = SITE_CONFIG.process;
    setText('process-eyebrow',  p.eyebrow);
    setText('process-title',    p.headline);
    setText('process-subtitle', p.subtitle);

    const stepsEl = document.getElementById('process-steps');
    if (!stepsEl || !p.steps) return;

    stepsEl.classList.add('stagger');

    p.steps.forEach(step => {
        const el = document.createElement('div');
        el.className = 'process-step';
        el.innerHTML = `
            <span class="process-step-number">${step.number}</span>
            <div>
                <span class="process-step-owner">${step.owner}</span>
                <h3 class="process-step-title">${step.title}</h3>
                <p class="process-step-description">${step.description}</p>
            </div>
        `;
        stepsEl.appendChild(el);
    });
}

/* ── Render: Pricing ─────────────────────────── */
function renderPricing() {
    const p = SITE_CONFIG.pricing;
    setText('pricing-eyebrow',  p.eyebrow);
    setText('pricing-title',    p.headline);
    setText('pricing-subtitle', p.subtitle);
    setText('pricing-note',     p.note);

    // Tiers
    const tiersEl = document.getElementById('pricing-tiers');
    if (tiersEl && p.tiers) {
        p.tiers.forEach(tier => {
            const card = document.createElement('div');
            card.className = 'pricing-card fade-in' + (tier.highlight ? ' highlighted' : '');

            const badge  = tier.highlight ? `<span class="pricing-badge">Most Popular</span><br>` : '';
            const incl   = tier.includes.map(i => `<li class="pricing-include-item">${i}</li>`).join('');

            card.innerHTML = `
                ${badge}
                <div class="pricing-tier-name">${tier.name}</div>
                <div class="pricing-range">${tier.range}</div>
                <div class="pricing-timeline">${tier.timeline} delivery</div>
                <p class="pricing-description">${tier.description}</p>
                <ul class="pricing-includes">${incl}</ul>
            `;
            tiersEl.appendChild(card);
        });
    }

    // Payment structure
    const paymentEl = document.getElementById('pricing-payment-section');
    if (paymentEl && p.payment) {
        const items = p.payment.items.map(i => `
            <div class="payment-item">
                <span class="payment-percent">${i.percentage}%</span>
                <span class="payment-item-label">${i.label}</span>
            </div>
        `).join('');

        paymentEl.innerHTML = `
            <span class="payment-label">${p.payment.title}</span>
            <div class="payment-items">${items}</div>
        `;
    }
}

/* ── Render: About ───────────────────────────── */
function renderAbout() {
    const a = SITE_CONFIG.about;
    setText('about-eyebrow', a.eyebrow);
    setText('about-title',   a.headline);

    // Paragraphs
    const parasEl = document.getElementById('about-paragraphs');
    if (parasEl && a.paragraphs) {
        a.paragraphs.forEach(para => {
            const p = document.createElement('p');
            p.className = 'about-paragraph';
            p.textContent = para;
            parasEl.appendChild(p);
        });
    }

    // Values
    const valuesEl = document.getElementById('about-values');
    if (valuesEl && a.values) {
        a.values.forEach(val => {
            const div = document.createElement('div');
            div.className = 'value-item';
            div.innerHTML = `
                <div class="value-title">${val.title}</div>
                <p class="value-description">${val.description}</p>
            `;
            valuesEl.appendChild(div);
        });
    }
}

/* ── Render: Contact ─────────────────────────── */
function renderContact() {
    const c = SITE_CONFIG.contact;
    setText('contact-eyebrow',  c.eyebrow);
    setText('contact-title',    c.headline);
    setText('contact-subtitle', c.subtitle);
    setText('contact-cta',      c.cta);
    setText('contact-footer',   c.footer);
}

/* ── Render: Footer ──────────────────────────── */
function renderFooter() {
    const f = SITE_CONFIG.footer;
    const b = SITE_CONFIG.brand;
    setText('footer-logo',      b.name);
    setText('footer-tagline',   f.tagline);
    setText('footer-copyright', f.copyright);
    setText('footer-location',  f.location);

    const linksEl = document.getElementById('footer-links');
    if (linksEl && SITE_CONFIG.nav) {
        SITE_CONFIG.nav.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.href}" class="footer-link">${item.label}</a>`;
            linksEl.appendChild(li);
        });
    }
}

/* ── Utility ─────────────────────────────────── */
function setText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.textContent = text;
}
