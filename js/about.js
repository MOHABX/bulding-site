// عند تحميل الصفحة
$(function () {
  // عند الضغط على الزر
  $("#about-btn").on("click", function () {
    // تأثير الزر (هزة)
    $(this).addClass("btn-animate");

    // إزالة الكلاس بعد 0.5 ثانية
    setTimeout(() => {
      $(this).removeClass("btn-animate");
    }, 500);

    // إظهار القسم المخفي بتأثير ناعم
    $("#extra-info").removeClass("d-none").hide().fadeIn(800);

    // عرض رسالة الشكر
    $("#thank-you").removeClass("d-none").hide().fadeIn(1000);

    // تحويل للصفحة بعد 3 ثواني
    setTimeout(() => {
      window.location.href = "Contact us.html";
    }, 3000);
  });
});
