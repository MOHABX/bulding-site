// دالة لتحميل السلة من localStorage
function loadCartItems() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}
