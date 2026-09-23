document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.setAttribute('aria-selected', 'false');
        b.className = 'catalog-filter-btn px-3.5 py-1.5 bg-white border border-slate-300 text-slate-800 hover:border-slate-500 hover:text-blue-800 font-label-sm text-label-sm font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';
      });

      btn.setAttribute('aria-selected', 'true');
      btn.className = 'catalog-filter-btn px-3.5 py-1.5 bg-blue-600 text-white font-label-sm text-label-sm rounded shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600';

      productCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        card.style.display = (filter === 'all' || cardCat === filter) ? 'flex' : 'none';
      });
    });
  });
});

function selectProductForQuote(category, productInfo) {
  const catSelect = document.getElementById('productCategory');
  const specsInput = document.getElementById('projectSpecs');
  const quoteSection = document.getElementById('kalkulator-b2b');

  if (catSelect && category) {
    catSelect.value = category;
  }
  if (specsInput && productInfo) {
    specsInput.value = `Zapytanie dot. pozycji: ${productInfo}\nSzacowana ilość: `;
  }
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const companyInput = document.getElementById('companyName');
      if (companyInput) companyInput.focus();
    }, 600);
  }
}
