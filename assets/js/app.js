document.addEventListener('DOMContentLoaded', function () {

  console.log('start');

  if (document.getElementById('current-date')) { document.getElementById('current-date').innerHTML = '© ' + new Date().getFullYear() + ' '; }

  $('.header').on("click", ".header-burger", function () {
    $(".header").toggleClass("active")
  })

  // Лёгкий ход для якорей
  $("body").on('click', ".ancLinks, a.ancLinks", function () {
    let elementClick = $(this).attr("href");
    let destination = Math.round($(elementClick).offset().top);
    $("html,body").animate({ scrollTop: destination - 100 }, 1100);
    return false;
  });


})