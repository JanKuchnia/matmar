const Cart = {
  KEY: 'matmar_quote_cart',

  get() {
    return JSON.parse(localStorage.getItem(Cart.KEY) || '[]');
  },

  save(cart) {
    localStorage.setItem(Cart.KEY, JSON.stringify(cart));
    Cart.updateNavBadge();
    return cart;
  },

  addItem(item) {
    const cart = Cart.get();
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
      existing.qty += item.qty;
    } else {
      cart.push(item);
    }
    return Cart.save(cart);
  },

  updateQty(idx, delta) {
    const cart = Cart.get();
    if (cart[idx]) {
      cart[idx].qty = Math.max(100, cart[idx].qty + delta);
      Cart.save(cart);
    }
    return cart;
  },

  setQty(idx, val) {
    const cart = Cart.get();
    if (cart[idx]) {
      cart[idx].qty = Math.max(100, parseInt(val) || 100);
      Cart.save(cart);
    }
    return cart;
  },

  removeItem(idx) {
    const cart = Cart.get();
    cart.splice(idx, 1);
    return Cart.save(cart);
  },

  clear() {
    return Cart.save([]);
  },

  updateNavBadge() {
    const count = Cart.get().length;
    document.querySelectorAll('#navCartBadge, #drawerCartBadge, .cart-count-badge').forEach(badge => {
      badge.textContent = count;
    });
  }
};
