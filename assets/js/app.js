document.addEventListener('DOMContentLoaded', function () {

  console.log('start');

  if (document.getElementById('current-date')) { document.getElementById('current-date').innerHTML = '© ' + new Date().getFullYear() + ' '; }

  // Лёгкий ход для якорей
  $("a.ancLinks").on('click', function () {
    let elementClick = $(this).attr("href");
    let destination = Math.round($(elementClick).offset().top);
    $("html,body").animate({ scrollTop: destination - 100 }, 1100);
    return false;
  });



})

document.addEventListener('DOMContentLoaded', function () {
  $('.header-burger').on("click", function () {
    $('.header-container').slideToggle()
    $(".overlay").addClass("active")
  })

  $('.ancLinks, .header-close').on('click', function () {
    $('.header-container').hide()
    $(".overlay").removeClass("active")
  })
})