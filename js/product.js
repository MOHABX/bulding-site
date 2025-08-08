// دالة لتحميل السلة من localStorage
function loadCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// دالة لحفظ السلة
function saveCartItems(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// دالة لحذف منتج حسب الـ index
function removeCartItem(index) {
  let cart = loadCartItems();
  cart.splice(index, 1); // حذف العنصر
  saveCartItems(cart);
}
