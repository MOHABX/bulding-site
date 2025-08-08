$(document).ready(function () {
  $("#loginBtn").click(function (e) {
    e.preventDefault();

    let username = $("#username").val();

    if (username.trim() === "") {
      alert("من فضلك اكمل جميع البيانات.");
    } else {
      alert("أهلاً يا " + username + " 👋");
    }
  });
});
