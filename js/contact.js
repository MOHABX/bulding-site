// ✅ عند تحميل الصفحة
$(document).ready(function () {
  $('#contactForm').on('submit', function (e) {
    e.preventDefault(); // يمنع التحديث التلقائي

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    // ✅ التحقق من الحقول
    if (name === '' || email === '' || message === '') {
      $('#formMessage')
        .html('❌ من فضلك املأ جميع الحقول!')
        .css({ color: 'red' });

      $('#contactForm').addClass('shake'); // تأثير اهتزاز

      setTimeout(() => {
        $('#contactForm').removeClass('shake');
      }, 400);
    } else {
      $('#formMessage')
        .html('✅ تم إرسال البيانات بنجاح!')
        .css({ color: 'green' });

      $('#contactForm')[0].reset(); // يمسح البيانات بعد الإرسال
    }
  });
});
