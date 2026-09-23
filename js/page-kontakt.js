function handleContactSubmit(e) {
  e.preventDefault();
  document.getElementById('contactForm').classList.add('opacity-50', 'pointer-events-none');
  const success = document.getElementById('contactSuccess');
  success.classList.remove('hidden');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}
