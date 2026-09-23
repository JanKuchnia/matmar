let toastTimeout = null;

function setQuantity(val) {
  const input = document.getElementById('customQty');
  input.value = val;
  updateEstimate();

  document.querySelectorAll('.qty-btn').forEach(btn => {
    if (btn.innerText.includes(val.toLocaleString('pl-PL'))) {
      btn.className = 'qty-btn py-2 px-3 border-2 border-blue-600 bg-blue-600 text-white font-label-sm font-semibold rounded text-center';
    } else {
      btn.className = 'qty-btn py-2 px-3 border border-slate-300 bg-white hover:border-blue-600 text-slate-800 font-label-sm font-semibold rounded text-center';
    }
  });
}

function updateEstimate() {
  const input = document.getElementById('customQty');
  const weightEl = document.getElementById('weightEst');
  const qty = parseInt(input.value) || 0;
  // Approx 84g per unit with plate
  const weight = (qty * 0.084).toFixed(1);
  weightEl.innerText = `${weight} kg`;
}

function hideCartToast() {
  const toast = document.getElementById('cartToastNotification');
  if (toast) {
    toast.classList.add('translate-y-24', 'opacity-0');
    toast.classList.remove('pointer-events-auto');
    toast.classList.add('pointer-events-none');
  }
}

function addToQuoteCart() {
  const qtyInput = document.getElementById('customQty');
  const qty = parseInt(qtyInput.value) || 500;
  const item = {
    id: 'ZAW-CLIP-110-HYD',
    name: 'Zawias Hydrauliczny Clip-On 110° Nakładany H-0',
    qty: qty,
    unit: 'szt.'
  };

  Cart.addItem(item);

  Cart.updateNavBadge();
  const badge = document.getElementById('navCartBadge');
  if (badge) {
    badge.classList.add('scale-125', 'bg-emerald-400', 'text-slate-900');
    setTimeout(() => {
      badge.classList.remove('scale-125', 'bg-emerald-400', 'text-slate-900');
    }, 400);
  }

  const feedback = document.getElementById('cartFeedback');
  if (feedback) {
    feedback.classList.remove('hidden');
  }

  const btn = document.getElementById('addToCartBtn');
  const btnText = document.getElementById('addToCartBtnText');
  if (btn && btnText) {
    const originalText = btnText.innerText;
    btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    btn.classList.add('bg-emerald-600', 'hover:bg-emerald-700');
    btnText.innerText = 'Dodano do Koszyka! ✓';
    setTimeout(() => {
      btn.classList.remove('bg-emerald-600', 'hover:bg-emerald-700');
      btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
      btnText.innerText = originalText;
    }, 2200);
  }

  const toast = document.getElementById('cartToastNotification');
  const toastDesc = document.getElementById('cartToastDesc');
  if (toast && toastDesc) {
    toastDesc.innerText = `${item.name} (${qty.toLocaleString('pl-PL')} ${item.unit})`;
    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('pointer-events-auto');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      hideCartToast();
    }, 4500);
  }

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
