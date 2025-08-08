// لما الصفحة تجهز
$(document).ready(function () {
  renderCart();

  // حدث حذف منتج
  $(document).on("click", ".remove-item", function () {
    const index = $(this).data("index");
    removeCartItem(index);
    renderCart(); // إعادة عرض السلة بعد الحذف
  });
});

// دالة عرض السلة
function renderCart() {
  const cart = loadCartItems();
  $("#cart-items").empty(); // تفريغ القائمة
  $("#cart-count").text(cart.length); // عرض عدد المنتجات

  if (cart.length === 0) {
    $("#cart-items").append("<li class='list-group-item'>السلة فاضية</li>");
  } else {
    cart.forEach((item, index) => {
      $("#cart-items").append(`
        <li class='list-group-item d-flex justify-content-between align-items-center'>
          ${item.name} - ${item.price} جنيه
          <button class="btn btn-danger btn-sm remove-item" data-index="${index}">حذف</button>
        </li>
      `);
    });
  }
}
