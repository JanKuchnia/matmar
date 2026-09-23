function applyFilters() {
  const selectedCats = Array.from(document.querySelectorAll('.filter-cat:checked')).map(cb => cb.value);
  const selectedSpecs = Array.from(document.querySelectorAll('.filter-spec:checked')).map(cb => cb.value);

  const cards = document.querySelectorAll('.catalog-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cat = card.getAttribute('data-category');
    const specs = card.getAttribute('data-specs') || '';

    const catMatches = selectedCats.includes(cat);
    let specMatches = true;

    if (cat === 'zawiasy' && selectedSpecs.length > 0) {
      specMatches = selectedSpecs.some(s => specs.includes(s));
    }

    if (catMatches && specMatches) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  const countEl = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyCatalogState');

  countEl.innerText = `${visibleCount} ${visibleCount === 1 ? 'model' : (visibleCount > 1 && visibleCount < 5 ? 'modele' : 'modeli')}`;

  if (visibleCount === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }
}

function resetAllFilters() {
  document.querySelectorAll('.filter-cat, .filter-spec').forEach(cb => cb.checked = true);
  applyFilters();
}

function quickAddQuote(sku, name, qty) {
  Cart.addItem({ id: sku, name: name, qty: qty, unit: 'szt.' });
  Cart.updateNavBadge();

  const toast = document.getElementById('toastNotification');
  const toastDesc = document.getElementById('toastDesc');
  toastDesc.innerText = `Dodano: ${name} (${qty.toLocaleString('pl-PL')} szt.)`;

  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}
