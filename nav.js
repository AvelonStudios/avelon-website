/* =========================================
   AVÈLON STUDIOS — nav.js v20261118
   Shared navigation & footer
   ========================================= */
(function () {
  'use strict';

  var navItems = [
    { id: 'start',      href: 'index.html',       label: 'Home' },
    { id: 'leistungen', href: 'services.html',     label: 'Leistungen' },
    { id: 'arbeiten',   href: 'portfolio.html',    label: 'Webdesign' },
    { id: 'inserate',   href: '3d-inserate.html',  label: '3D-Inserate' },
    { id: 'ueber',      href: 'about.html',        label: 'Über uns' }
  ];

  var pageId = (function () {
    var p = window.location.pathname.split('/').pop() || 'index.html';
    if (p === '' || p === '/') return 'index.html';
    return p;
  })();

  function getActiveId() {
    var map = {
      'index.html':      'start',
      'services.html':   'leistungen',
      'portfolio.html':  'arbeiten',
      '3d-inserate.html':'inserate',
      'about.html':      'ueber',
      'contact.html':    'kontakt'
    };
    return map[pageId] || '';
  }

  function navLinksHTML(activeId) {
    return navItems.map(function (item) {
      var cls = item.id === activeId ? ' class="active"' : '';
      return '<a href="' + item.href + '"' + cls + '>' + item.label + '</a>';
    }).join('');
  }

  function mobileLinksHTML() {
    return navItems.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('');
  }

  var activeId = getActiveId();

  var headerHTML = ''
    + '<header class="site-header">'
    +   '<div class="container header-inner">'
    +     '<a href="index.html" class="logo-mark" aria-label="AvèlonStudios – Startseite">'
    +       'Avèlon<span class="logo-studios">Studios</span>'
    +     '</a>'
    +     '<nav class="desktop-nav" aria-label="Hauptnavigation">'
    +       navLinksHTML(activeId)
    +     '</nav>'
    +     '<a href="contact.html" class="nav-cta">Kontakt</a>'
    +     '<button class="burger-btn" id="burgerBtn" aria-expanded="false" aria-controls="mobileOverlay" aria-label="Menü öffnen">'
    +       '<span class="burger-line"></span>'
    +       '<span class="burger-line"></span>'
    +       '<span class="burger-line"></span>'
    +     '</button>'
    +   '</div>'
    + '</header>'
    + '<div class="mobile-overlay" id="mobileOverlay" role="dialog" aria-modal="true" aria-label="Navigation">'
    +   '<div class="mobile-overlay-top">'
    +     '<a href="index.html" class="logo-mark" aria-hidden="true" tabindex="-1">'
    +       'Avèlon<span class="logo-studios">Studios</span>'
    +     '</a>'
    +     '<button class="mobile-close-btn" id="mobileCloseBtn" aria-label="Menü schließen">✕</button>'
    +   '</div>'
    +   '<nav class="mobile-nav-links" aria-label="Mobile Navigation">'
    +     mobileLinksHTML()
    +   '</nav>'
    +   '<a href="contact.html" class="mobile-cta">Kontakt</a>'
    + '</div>';

  var footerHTML = ''
    + '<footer class="site-footer">'
    +   '<div class="container footer-inner">'
    +     '<div class="footer-brand">'
    +       '<div class="footer-logo">Avèlon<span>Studios</span></div>'
    +       '<div class="footer-rule"></div>'
    +       '<p class="footer-desc">Webdesign und 3D-Inserate für Unternehmen und Makler – aus Hamm, für ganz Deutschland.</p>'
    +     '</div>'
    +     '<div class="footer-nav">'
    +       '<div class="footer-col">'
    +         '<div class="footer-col-head">Studio</div>'
    +         '<a href="services.html">Leistungen</a>'
    +         '<a href="portfolio.html">Webdesign</a>'
    +         '<a href="3d-inserate.html">3D-Inserate</a>'
    +         '<a href="about.html">Über uns</a>'
    +       '</div>'
    +       '<div class="footer-col">'
    +         '<div class="footer-col-head">Kontakt</div>'
    +         '<a href="mailto:kontakt@avelonstudios.de">kontakt@avelonstudios.de</a>'
    +         '<a href="contact.html">Anfrageformular</a>'
    +         '<span class="footer-location">Hamm · NRW</span>'
    +       '</div>'
    +       '<div class="footer-col">'
    +         '<div class="footer-col-head">Rechtliches</div>'
    +         '<a href="impressum.html">Impressum</a>'
    +         '<a href="datenschutz.html">Datenschutz</a>'
    +         '<a href="agb.html">AGB</a>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
    +   '<div class="footer-bottom">'
    +     '<div class="container footer-bottom-inner">'
    +       '<span>© 2026 AvèlonStudios</span>'
    +       '<span>Gestaltet und entwickelt in Hamm</span>'
    +     '</div>'
    +   '</div>'
    + '</footer>';

  function init() {
    var navEl  = document.getElementById('nav-placeholder');
    var footEl = document.getElementById('footer-placeholder');
    if (navEl)  navEl.innerHTML  = headerHTML;
    if (footEl) footEl.innerHTML = footerHTML;

    var burger      = document.getElementById('burgerBtn');
    var overlay     = document.getElementById('mobileOverlay');
    var closeBtn    = document.getElementById('mobileCloseBtn');

    function openMenu() {
      if (!overlay || !burger) return;
      overlay.classList.add('is-open');
      burger.classList.add('is-active');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      var firstLink = overlay.querySelector('a[href], button');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      if (!overlay || !burger) return;
      overlay.classList.remove('is-open');
      burger.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      burger.focus();
    }

    if (burger) {
      burger.addEventListener('click', function () {
        if (overlay && overlay.classList.contains('is-open')) {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('is-open')) {
        closeMenu();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target && e.target.tagName === 'A') {
          closeMenu();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
