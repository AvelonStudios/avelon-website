/* =========================================
   AVÈLON STUDIOS — nav.js
   Shared navigation, footer & lang toggle
   ========================================= */
(function () {
  'use strict';

  /* ── Detect active page ── */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === '') page = 'index.html';

  var navItems = [
    { href: 'index.html',        de: 'Home',        en: 'Home' },
    { href: 'services.html',     de: 'Leistungen',  en: 'Services' },
    { href: 'portfolio.html',    de: 'Portfolio',   en: 'Portfolio' },
    { href: 'about.html',         de: 'Über uns',    en: 'About' },
    { href: 'contact.html',      de: 'Kontakt',     en: 'Contact' },
  ];

  function navLinksHTML() {
    return navItems.map(function (item) {
      var active = (page === item.href) ? ' active' : '';
      return '<a href="' + item.href + '" class="' + active.trim() + '">'
        + '<span class="de">' + item.de + '</span>'
        + '<span class="en">' + item.en + '</span>'
        + '</a>';
    }).join('');
  }

  function mobileLinksHTML() {
    return navItems.map(function (item) {
      return '<a href="' + item.href + '">'
        + '<span class="de">' + item.de + '</span>'
        + '<span class="en">' + item.en + '</span>'
        + '</a>';
    }).join('');
  }

  /* ── Nav HTML ── */
  var navHTML = ''
    + '<div class="scarcity-bar">'
    +   '<span class="de">🔥 Nur 3 Projektplätze verfügbar im Juni &mdash; <strong><a href="contact.html">Jetzt sichern</a></strong></span>'
    +   '<span class="en">🔥 Only 3 project slots available in June &mdash; <strong><a href="contact.html">Secure yours now</a></strong></span>'
    + '</div>'
    + '<nav class="nav">'
    +   '<div class="nav-inner">'
    +     '<a href="index.html" class="nav-logo">AV&Egrave;L<span class="accent">&Ocirc;</span>N STUDIOS</a>'
    +     '<div class="nav-links">' + navLinksHTML() + '</div>'
    +     '<div class="nav-right">'
    +       '<button class="lang-toggle" id="langToggle" aria-label="Toggle language">EN</button>'
    +       '<a href="contact.html" class="btn btn-primary"><span class="de">Projekt starten</span><span class="en">Start Project</span></a>'
    +     '</div>'
    +     '<button class="hamburger" id="hamburger" aria-label="Open menu">'
    +       '<span></span><span></span><span></span>'
    +     '</button>'
    +   '</div>'
    + '</nav>'
    + '<div class="mobile-nav" id="mobileNav" role="dialog" aria-modal="true">'
    +   '<button class="mobile-nav-close" id="mobileClose" aria-label="Close menu">&times;</button>'
    +   mobileLinksHTML()
    +   '<a href="contact.html" class="btn btn-primary btn-lg"><span class="de">Projekt starten</span><span class="en">Start Project</span></a>'
    +   '<button class="lang-toggle" id="langToggleMobile">EN</button>'
    + '</div>';

  /* ── Footer HTML ── */
  var footerHTML = ''
    + '<footer class="footer">'
    +   '<div class="container">'
    +     '<div class="footer-grid">'
    +       '<div>'
    +         '<div class="footer-logo">AV&Egrave;L<span class="text-gold">&Ocirc;</span>N STUDIOS</div>'
    +         '<p class="footer-desc de">Premium Brand &amp; Web Design Agentur aus Berlin. Wir erschaffen Marken, die begeistern, und Websites, die konvertieren.</p>'
    +         '<p class="footer-desc en">Premium Brand &amp; Web Design Agency based in Berlin. We create brands that inspire and websites that convert.</p>'
    +         '<div class="footer-socials">'
    +           '<a href="#" class="footer-social" aria-label="Instagram">IG</a>'
    +           '<a href="#" class="footer-social" aria-label="LinkedIn">LI</a>'
    +           '<a href="#" class="footer-social" aria-label="Behance">BE</a>'
    +           '<a href="#" class="footer-social" aria-label="Pinterest">PI</a>'
    +         '</div>'
    +       '</div>'
    +       '<div>'
    +         '<div class="footer-col-head de">Leistungen</div>'
    +         '<div class="footer-col-head en">Services</div>'
    +         '<div class="footer-links">'
    +           '<a href="services.html#web"><span class="de">Web Design</span><span class="en">Web Design</span></a>'
    +           '<a href="management.html"><span class="de">Website Management</span><span class="en">Website Management</span></a>'
    +           '<a href="about.html"><span class="de">Über uns</span><span class="en">About</span></a>'
    +         '</div>'
    +       '</div>'
    +       '<div>'
    +         '<div class="footer-col-head de">Agentur</div>'
    +         '<div class="footer-col-head en">Agency</div>'
    +         '<div class="footer-links">'
    +           '<a href="portfolio.html"><span class="de">Portfolio</span><span class="en">Portfolio</span></a>'
    +           '<a href="contact.html"><span class="de">Kontakt</span><span class="en">Contact</span></a>'
    +         '</div>'
    +       '</div>'
    +       '<div>'
    +         '<div class="footer-col-head de">Kontakt</div>'
    +         '<div class="footer-col-head en">Contact</div>'
    +         '<div class="footer-links" style="color:var(--white-muted);font-size:0.875rem;">'
    +           '<span>avelon.business1@gmail.com</span>'
    +           '<span class="de">Hamm, Deutschland</span>'
    +           '<span class="en">Hamm, Germany</span>'
    +         '</div>'
    +       '</div>'
    +     '</div>'
    +     '<div class="footer-bottom">'
    +       '<div><span class="de">&copy; 2026 Av&egrave;lon Studios. Alle Rechte vorbehalten.</span><span class="en">&copy; 2026 Av&egrave;lon Studios. All rights reserved.</span></div>'
    +       '<div class="footer-legal">'
    +         '<a href="datenschutz.html"><span class="de">Datenschutz</span><span class="en">Privacy Policy</span></a>'
    +         '<a href="impressum.html"><span class="de">Impressum</span><span class="en">Imprint</span></a>'
    +         '<a href="agb.html"><span class="de">AGB</span><span class="en">Terms</span></a>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
    + '</footer>';

  /* ── Inject on DOM ready ── */
  function init() {
    var navEl = document.getElementById('nav-placeholder');
    var footEl = document.getElementById('footer-placeholder');
    if (navEl)  navEl.innerHTML  = navHTML;
    if (footEl) footEl.innerHTML = footerHTML;

    /* Lang from localStorage */
    var savedLang = localStorage.getItem('avelon-lang') || 'de';
    document.documentElement.dataset.lang = savedLang;
    syncLangButtons(savedLang);

    /* Hamburger */
    document.addEventListener('click', function (e) {
      var target = e.target;

      /* Lang toggles */
      if (target.id === 'langToggle' || target.id === 'langToggleMobile') {
        var cur  = document.documentElement.dataset.lang || 'de';
        var next = cur === 'de' ? 'en' : 'de';
        document.documentElement.dataset.lang = next;
        localStorage.setItem('avelon-lang', next);
        syncLangButtons(next);
        return;
      }

      /* Hamburger open */
      if (target.id === 'hamburger' || target.closest('#hamburger')) {
        var mob = document.getElementById('mobileNav');
        var ham = document.getElementById('hamburger');
        if (mob) mob.classList.add('open');
        if (ham) ham.classList.add('open');
        document.body.style.overflow = 'hidden';
        return;
      }

      /* Mobile close */
      if (target.id === 'mobileClose') {
        closeMobileNav();
        return;
      }

      /* Click on mobile nav link → close */
      if (target.closest && target.closest('.mobile-nav') && target.tagName === 'A') {
        closeMobileNav();
      }
    });

    /* ESC closes mobile nav */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  function closeMobileNav() {
    var mob = document.getElementById('mobileNav');
    var ham = document.getElementById('hamburger');
    if (mob) mob.classList.remove('open');
    if (ham) ham.classList.remove('open');
    document.body.style.overflow = '';
  }

  function syncLangButtons(lang) {
    var label = lang === 'de' ? 'EN' : 'DE';
    document.querySelectorAll('#langToggle, #langToggleMobile').forEach(function (btn) {
      btn.textContent = label;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
