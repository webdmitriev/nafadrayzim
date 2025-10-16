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

  // ******
  // popup-register

  $(".popup-register input[type='text'], .popup-register input[type='email'], .popup-register input[type='radio']").on("input", function () {
    if ($(this).val().trim() != "") {
      $(this).parents(".form-group").removeClass("error");
    }
  });

  $("body").on("click", ".popup-register .form-submit .btn", function (e) {
    e.preventDefault();

    let surname = $(".popup-register input[name='surname']")
    let name = $(".popup-register input[name='name']")
    let lastName = $(".popup-register input[name='last-name']")
    let phone = $(".popup-register input[name='phone']")
    let email = $(".popup-register input[name='email']")
    let site = $(".popup-register input[name='site']")
    let siteCount = $(".popup-register input[name='site-count']")

    let orgForm = $(".popup-register input[name='org-form']");
    let accessPerson = $(".popup-register input[name='access-person']");
    let accessSubscribe = $(".popup-register input[name='access-subscribe']");

    const fields = [surname, name, lastName, phone, email, site, siteCount];
    fields.forEach(field => {
      console.log(field.val().trim());
      if (field.val().trim() == "") {
        $(field).parents(".form-group").addClass("error");
        return false;
      } else {
        $(field).parents(".form-group").removeClass("error");
      }
    });


    if (surname.val().trim().length < 2 || surname.val().trim().length > 18) {
      $(surname).parents(".form-group").addClass("error");
      $(surname).parents(".form-group").find(".form-error").text("Введите корректную фамилию!");
      return false;
    }

    if (name.val().trim().length < 2 || name.val().trim().length > 12) {
      $(name).parents(".form-group").addClass("error");
      $(name).parents(".form-group").find(".form-error").text("Введите корректное имя!");
      return false;
    }

    if (lastName.val().trim().length < 2 || lastName.val().trim().length > 12) {
      $(lastName).parents(".form-group").addClass("error");
      $(lastName).parents(".form-group").find(".form-error").text("Введите корректное отчество!");
      return false;
    }

    if (phone.val().trim().length < 12) {
      $(phone).parents(".form-group").addClass("error");
      $(phone).parents(".form-group").find(".form-error").text("Введите корректный номер телефона!");
      return false;
    }

    if (email.val().trim().indexOf("@") == -1 || email.val().trim().indexOf(".") == -1) {
      $(email).parents(".form-group").addClass("error");
      $(email).parents(".form-group").find(".form-error").text("Введите корректный e-mail!");
      return false;
    }

    if (site.val().trim().length < 5) {
      $(site).parents(".form-group").addClass("error");
      $(site).parents(".form-group").find(".form-error").text("Введите корректный сайт!");
      return false;
    }

    if (!orgForm.is(":checked")) {
      $(orgForm).parents(".form-group").addClass("error");
      return false;
    } else {
      $(orgForm).parents(".form-group").removeClass("error");
    }

    if (!accessPerson.is(":checked")) {
      $(accessPerson).parents(".form-group").addClass("error");
      return false;
    } else {
      $(accessPerson).parents(".form-group").removeClass("error");
    }

    if (!accessSubscribe.is(":checked")) {
      $(accessSubscribe).parents(".form-group").addClass("error");
      return false;
    } else {
      $(accessSubscribe).parents(".form-group").removeClass("error");
    }

    // Все ок, можно отправлять
    console.log("Все ок, можно отправлять");

    let data = {
      "name": name,
      "email": email,
      "phone": phone
    };

    // $.ajax({
    //   type: "POST",
    //   url: "send.php",
    //   data: data,
    //   success: function () {
    //     $(".popup-register .form-button").hide();
    //     changeColorAnimated("Спасибо за заявку!", ".popup-register .popup-title", "#24FF7E");
    //     $(".popup-register .form-subtitle").hide();
    //     $(".popup-register input[name='name']").hide();
    //     $(".popup-register input[name='email']").hide();
    //     $(".popup-register input[name='phone']").hide();
    //   }
    // });

  });

  // ************
  // Лёгкий ход для якорей
  $("body").on('click', ".ancLinks, a.ancLinks", function () {
    let elementClick = $(this).attr("href");
    let destination = Math.round($(elementClick).offset().top);
    $("html,body").animate({ scrollTop: destination - 100 }, 1100);
    return false;
  });


})