document.addEventListener('DOMContentLoaded', function () {

  console.log('start');

  if (document.getElementById('current-date')) { document.getElementById('current-date').innerHTML = '© ' + new Date().getFullYear() + ' '; }

  // ******
  // header
  $('.header').on("click", ".header-burger", function () {
    $(".header").toggleClass("active")
  })

  $("body").on("click", ".popup-close", function () {
    $(".popup-register").slideToggle()

    $("header, footer, main, section").css({
      "filter": "blur(0px)"
    })
  })

  $("body").on("click", ".show-popup-register", function () {
    $(".popup-register").slideToggle()

    $("header, footer, main, section").css({
      "filter": "blur(10px)"
    })

    setTimeout(() => {
      changeColorAnimated("Нафандрайзим", ".popup-register .popup-title", "#2478FF");
    }, 400);
  })


  // ************
  // Лёгкий ход для якорей
  $("body").on('click', ".ancLinks, a.ancLinks", function () {
    let elementClick = $(this).attr("href");
    let destination = Math.round($(elementClick).offset().top);
    $("html,body").animate({ scrollTop: destination - 100 }, 1100);
    return false;
  });


})