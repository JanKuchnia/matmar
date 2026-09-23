function initMobileDrawer() {
  const openBtn = document.getElementById('mobileMenuOpenBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('mobileDrawerBackdrop');

  if (!drawer || !backdrop) return;

  function openDrawer() {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');

    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    drawer.setAttribute('aria-hidden', 'false');

    if (openBtn) {
      openBtn.setAttribute('aria-expanded', 'true');
    }

    document.body.classList.add('overflow-hidden');

    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  }

  function closeDrawer() {
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');

    drawer.classList.remove('translate-x-0');
    drawer.classList.add('translate-x-full');
    drawer.setAttribute('aria-hidden', 'true');

    if (openBtn) {
      openBtn.setAttribute('aria-expanded', 'false');
      openBtn.focus();
    }

    document.body.classList.remove('overflow-hidden');
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }

  backdrop.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('translate-x-0')) {
      closeDrawer();
    }
  });

  // Close drawer on internal link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  if (typeof Cart !== 'undefined') {
    Cart.updateNavBadge();
  }
  initMobileDrawer();
});
