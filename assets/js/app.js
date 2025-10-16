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

    let surname = $(".popup-register input[name='surname']");
    let name = $(".popup-register input[name='name']");
    let lastName = $(".popup-register input[name='last-name']");
    let phone = $(".popup-register input[name='phone']");
    let email = $(".popup-register input[name='email']");
    let site = $(".popup-register input[name='site']");
    let siteCount = $(".popup-register input[name='site-count']");
    let orgForm = $(".popup-register input[name='org-form']");
    let accessPerson = $(".popup-register input[name='access-person']");
    let accessSubscribe = $(".popup-register input[name='access-subscribe']");

    const fields = [surname, name, lastName, phone, email, site, siteCount];

    // 📝 базовая проверка
    let isValid = true;
    fields.forEach(field => {
      if (field.val().trim() === "") {
        field.parents(".form-group").addClass("error");
        isValid = false;
      } else {
        field.parents(".form-group").removeClass("error");
      }
    });

    // дополнительные проверки (фамилия, имя и т.п.)
    if (surname.val().trim().length < 2 || surname.val().trim().length > 18) {
      surname.parents(".form-group").addClass("error")
        .find(".form-error").text("Введите корректную фамилию!");
      isValid = false;
    }

    if (name.val().trim().length < 2 || name.val().trim().length > 12) {
      name.parents(".form-group").addClass("error")
        .find(".form-error").text("Введите корректное имя!");
      isValid = false;
    }

    if (lastName.val().trim().length < 2 || lastName.val().trim().length > 12) {
      lastName.parents(".form-group").addClass("error")
        .find(".form-error").text("Введите корректное отчество!");
      isValid = false;
    }

    if (phone.val().trim().length < 12) {
      phone.parents(".form-group").addClass("error")
        .find(".form-error").text("Введите корректный номер телефона!");
      isValid = false;
    }

    if (email.val().trim().indexOf("@") === -1 || email.val().trim().indexOf(".") === -1) {
      email.parents(".form-group").addClass("error")
        .find(".form-error").text("Введите корректный e-mail!");
      isValid = false;
    }

    if (site.val().trim().length < 5) {
      site.parents(".form-group").addClass("error")
        .find(".form-error").text("Введите корректный сайт!");
      isValid = false;
    }

    if (!orgForm.is(":checked")) {
      orgForm.parents(".form-group").addClass("error");
      isValid = false;
    } else {
      orgForm.parents(".form-group").removeClass("error");
    }

    if (!accessPerson.is(":checked")) {
      accessPerson.parents(".form-group").addClass("error");
      isValid = false;
    } else {
      accessPerson.parents(".form-group").removeClass("error");
    }

    if (!accessSubscribe.is(":checked")) {
      accessSubscribe.parents(".form-group").addClass("error");
      isValid = false;
    } else {
      accessSubscribe.parents(".form-group").removeClass("error");
    }

    if (!isValid) {
      return; // ❌ если форма невалидна — останавливаем
    }

    // ✅ Собираем данные для отправки
    let data = {
      surname: surname.val().trim(),
      name: name.val().trim(),
      "last-name": lastName.val().trim(),
      phone: phone.val().trim(),
      email: email.val().trim(),
      site: site.val().trim(),
      "site-count": siteCount.val().trim(),
      "org-form": $(".popup-register input[name='org-form']:checked").val(),
      "access-person": accessPerson.is(":checked") ? "Да" : "Нет",
      "access-subscribe": accessSubscribe.is(":checked") ? "Да" : "Нет"
    };

    // 🚀 Отправляем через AJAX
    $.ajax({
      type: "POST",
      url: "../../mail.php",
      data: data,
      success: function (response) {
        console.log("Ответ сервера:", response);

        // Красиво заменяем содержимое формы
        $(".popup-register .form").fadeOut(300, function () {
          $(".popup-register .popup-title").html("Спасибо за заявку!");
        });
      },
      error: function (xhr, status, error) {
        console.error("Ошибка отправки:", error);
        alert("Произошла ошибка при отправке. Попробуйте позже.");
      }
    });

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