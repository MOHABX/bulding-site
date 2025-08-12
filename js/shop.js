// ✅ تحميل السلة من localStorage أو إنشاء سلة جديدة
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ✅ تحديث عداد السلة
function updateCartCount() {
  $("#cart-count").text(cart.length);
}

// ✅ حفظ السلة في localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ إضافة منتج للسلة
function addToCart(id, name) {
  cart.push({ id, name });
  saveCart();
  updateCartCount();
}

// ✅ حذف منتج من السلة
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

// ✅ عرض محتويات السلة في صفحة cart.html
function renderCart() {
  if ($("#cart-items").length) {
    $("#cart-items").empty();
    cart.forEach((item, index) => {
      $("#cart-items").append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${item.name}
          <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">حذف</button>
        </li>
      `);
    });
  }
}

// ✅ عند تحميل الصفحة
$(document).ready(function () {
  updateCartCount();
  renderCart();

  // عند الضغط على "أضف للسلة"
  $(".add-to-cart").click(function () {
    const id = $(this).data("id");
    const name = $(this).siblings("h5").text();
    addToCart(id, name);
  });
});
