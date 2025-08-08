$(document).ready(function () {
  $(".add-to-cart").click(function () {
    const product = {
      id: $(this).data("id"),
      name: $(this).data("name"),
      price: $(this).data("price")
    };

    addToCart(product);
    alert("تمت إضافة المنتج للسلة!");
  });
});
