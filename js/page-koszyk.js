function renderCart(cart) {
  const container = document.getElementById('cartItemsList');
  const emptyMsg = document.getElementById('emptyCartMessage');

  if (!cart || cart.length === 0) {
    container.innerHTML = '';
    emptyMsg.classList.remove('hidden');
    return;
  }

  emptyMsg.classList.add('hidden');
  container.innerHTML = cart.map((item, idx) => `
    <div class="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex items-start gap-3 flex-1">
        <div class="w-10 h-10 bg-blue-50 text-blue-700 flex items-center justify-center rounded shrink-0 mt-0.5">
          <i data-lucide="package" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="font-mono text-[11px] font-bold text-blue-700 block">${item.id}</span>
          <h4 class="font-label-md font-bold text-slate-900">${item.name}</h4>
          <span class="text-xs text-slate-500">Pakowanie: Kartony zbiorcze na palecie</span>
        </div>
      </div>
      <div class="flex items-center gap-3 shrink-0">
        <div class="flex items-center border border-slate-300 rounded bg-slate-50">
          <button type="button" onclick="updateQty(${idx}, -500)" class="px-2.5 py-1 text-slate-600 hover:bg-slate-200 font-bold">-</button>
          <input type="number" step="100" min="100" value="${item.qty}" onchange="setCustomQty(${idx}, this.value)" class="w-20 text-xs font-bold text-center border-0 bg-transparent focus:ring-0 p-1"/>
          <button type="button" onclick="updateQty(${idx}, 500)" class="px-2.5 py-1 text-slate-600 hover:bg-slate-200 font-bold">+</button>
        </div>
        <span class="text-xs text-slate-500 font-medium">${item.unit || 'szt.'}</span>
        <button type="button" onclick="removeItem(${idx})" class="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors" title="Usuń z zapytania">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function loadCart() {
  renderCart(Cart.get());
}

function updateQty(idx, delta) {
  renderCart(Cart.updateQty(idx, delta));
}

function setCustomQty(idx, val) {
  renderCart(Cart.setQty(idx, val));
}

function removeItem(idx) {
  renderCart(Cart.removeItem(idx));
}

function clearCart() {
  renderCart(Cart.clear());
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  document.getElementById('quoteSubmitForm').classList.add('opacity-50', 'pointer-events-none');
  const success = document.getElementById('quoteSubmitSuccess');
  success.classList.remove('hidden');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
});
