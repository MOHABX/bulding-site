// لما تفتح الصفحة
document.addEventListener("DOMContentLoaded", function () {
  // نجيب الزر والمعرض
  const btn = document.getElementById("toggle-gallery");
  const gallery = document.getElementById("gallery");

  // كل ما تضغط الزر، يبدل العرض والإخفاء
  btn.addEventListener("click", function () {
    if (gallery.style.display === "none" || gallery.style.display === "") {
      gallery.style.display = "block";
    } else {
      gallery.style.display = "none";
    }
  });



  });
