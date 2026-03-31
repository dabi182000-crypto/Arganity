/* ============================================
   ARGANITY — Custom JavaScript Enhancements
   ============================================ */

(function () {
  'use strict';

  /* --- Wait for DOM ready --- */
  document.addEventListener('DOMContentLoaded', function () {
    initStickyHeader();
    initSmoothScroll();
    initProductImageZoom();
    initBackToTop();
    initHeaderSearch();
  });

  /* ============================================
     STICKY HEADER WITH SHADOW ON SCROLL
     ============================================ */
  function initStickyHeader() {
    var header = document.querySelector('header, .site-header, .elementor-location-header');
    if (!header) return;

    var lastScroll = 0;

    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 16px rgba(0, 0, 0, 0.08)';
        header.style.borderBottom = '1px solid transparent';
      } else {
        header.style.boxShadow = 'none';
        header.style.borderBottom = '1px solid #E8E2D9';
      }

      lastScroll = currentScroll;
    });
  }

  /* ============================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================ */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ============================================
     PRODUCT IMAGE HOVER ZOOM (Shop page cards)
     ============================================ */
  function initProductImageZoom() {
    var productImages = document.querySelectorAll(
      'li.product img, .products .product img, .wc-block-grid__product-image img'
    );

    productImages.forEach(function (img) {
      var parent = img.closest('a') || img.parentElement;
      if (parent) {
        parent.style.overflow = 'hidden';
        parent.style.display = 'block';
      }
    });
  }

  /* ============================================
     BACK TO TOP BUTTON
     ============================================ */
  function initBackToTop() {
    /* Create the button */
    var btn = document.createElement('button');
    btn.id = 'arganity-back-to-top';
    btn.innerHTML = '&#8593;';
    btn.setAttribute('aria-label', 'Back to top');

    /* Style the button */
    var styles = {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '46px',
      height: '46px',
      borderRadius: '50%',
      backgroundColor: '#45a750',
      color: '#FFFFFF',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      opacity: '0',
      visibility: 'hidden',
      transition: 'all 0.3s ease',
      zIndex: '9999',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    };

    Object.assign(btn.style, styles);
    document.body.appendChild(btn);

    /* Show/hide on scroll */
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 400) {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
      } else {
        btn.style.opacity = '0';
        btn.style.visibility = 'hidden';
      }
    });

    /* Hover effect */
    btn.addEventListener('mouseenter', function () {
      btn.style.backgroundColor = '#E9C177';
      btn.style.transform = 'translateY(-3px)';
    });

    btn.addEventListener('mouseleave', function () {
      btn.style.backgroundColor = '#45a750';
      btn.style.transform = 'translateY(0)';
    });

    /* Scroll to top on click */
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================
     HEADER SEARCH ICON (adds search to nav)
     ============================================ */
  function initHeaderSearch() {
    var nav = document.querySelector('.elementor-nav-menu, header nav');
    if (!nav) return;

    /* Check if search already exists */
    if (document.querySelector('.arganity-search-toggle')) return;

    /* Create search icon button */
    var searchBtn = document.createElement('button');
    searchBtn.className = 'arganity-search-toggle';
    searchBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';
    searchBtn.setAttribute('aria-label', 'Search');

    var searchBtnStyles = {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      color: '#231f20',
      transition: 'color 0.3s ease',
      display: 'flex',
      alignItems: 'center'
    };
    Object.assign(searchBtn.style, searchBtnStyles);

    /* Create search overlay */
    var overlay = document.createElement('div');
    overlay.className = 'arganity-search-overlay';

    var overlayStyles = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(253, 250, 246, 0.97)',
      zIndex: '99999',
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '0',
      transition: 'opacity 0.3s ease'
    };
    Object.assign(overlay.style, overlayStyles);

    overlay.innerHTML =
      '<div style="text-align:center;width:90%;max-width:600px;">' +
        '<div style="font-family:DIN Next LT Arabic,sans-serif;font-size:13px;letter-spacing:0.15em;text-transform:uppercase;color:#6B6B6B;margin-bottom:16px;">Search Arganity</div>' +
        '<input type="text" class="arganity-search-input" placeholder="What are you looking for?" style="' +
          'width:100%;padding:16px 24px;border:2px solid #E8E2D9;border-radius:30px;' +
          'font-family:DIN Next LT Arabic,sans-serif;font-size:16px;color:#231f20;' +
          'outline:none;background:white;transition:border-color 0.3s ease;' +
        '" />' +
        '<button class="arganity-search-close" style="' +
          'position:absolute;top:30px;right:30px;background:none;border:none;' +
          'font-size:32px;cursor:pointer;color:#231f20;font-weight:300;' +
        '">&times;</button>' +
      '</div>';

    document.body.appendChild(overlay);

    /* Insert search button near nav */
    var cartIcon = document.querySelector('a[href*="cart"], .elementor-menu-cart__toggle-button');
    if (cartIcon && cartIcon.parentElement) {
      cartIcon.parentElement.insertBefore(searchBtn, cartIcon);
    }

    /* Toggle search overlay */
    searchBtn.addEventListener('click', function () {
      overlay.style.display = 'flex';
      requestAnimationFrame(function () {
        overlay.style.opacity = '1';
      });
      var input = overlay.querySelector('.arganity-search-input');
      if (input) {
        setTimeout(function () { input.focus(); }, 300);
      }
    });

    /* Close search */
    var closeBtn = overlay.querySelector('.arganity-search-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        overlay.style.opacity = '0';
        setTimeout(function () { overlay.style.display = 'none'; }, 300);
      });
    }

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.style.display === 'flex') {
        overlay.style.opacity = '0';
        setTimeout(function () { overlay.style.display = 'none'; }, 300);
      }
    });

    /* Handle search submit */
    var searchInput = overlay.querySelector('.arganity-search-input');
    if (searchInput) {
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && this.value.trim()) {
          window.location.href = '/?s=' + encodeURIComponent(this.value.trim()) + '&post_type=product';
        }
      });

      searchInput.addEventListener('focus', function () {
        this.style.borderColor = '#45a750';
      });

      searchInput.addEventListener('blur', function () {
        this.style.borderColor = '#E8E2D9';
      });
    }

    /* Hover effect on search icon */
    searchBtn.addEventListener('mouseenter', function () {
      searchBtn.style.color = '#45a750';
    });

    searchBtn.addEventListener('mouseleave', function () {
      searchBtn.style.color = '#231f20';
    });
  }
})();
