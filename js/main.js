"use strict";

$(document).ready(function () {
  $(".menu__link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // 1. Анімуємо скрол
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
      );

      // 2. Закриваємо бургер-меню (знімаємо галочку з чекбокса)
      $("#nav-burger").prop("checked", false);
    }
  });
});

$(document).ready(function () {
  // Обробка кліку по кнопці btn_down
  $(".btn_down").on("click", function (event) {
    event.preventDefault();

    // Отримуємо значення атрибута href ("#about")
    var target = $(this).attr("href");

    if (target && $(target).length) {
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800,
      );
    }
  });
});

$(document).ready(function () {
  const observerOptions = {
    threshold: 0.3, // Анімація почнеться, коли 30% блоку буде видно
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("appear");
        observer.unobserve(entry.target); // Виконуємо лише один раз
      }
    });
  }, observerOptions);

  $(".projects_box").each(function () {
    observer.observe(this);
  });
});

$(document).ready(function () {
  $(".btn_more").on("click", function () {
    // Знаходимо текстовий абзац, який стоїть перед цією кнопкою
    const $textToCopy = $(this).prev(".projects_box_text");

    // Клонуємо його
    const $newText = $textToCopy.clone();

    // Додаємо невеликий відступ зверху для нового тексту, щоб вони не злипалися
    $newText.css("margin-top", "10px");

    // Вставляємо клонований текст одразу після оригінального
    $textToCopy.after($newText);

    // Ховаємо кнопку (можна використати fadeOut для плавності)
    $(this).hide();
  });
});


$(document).ready(function () {
  $(".gal_btn").on("click", function () {
    
    const newPhotos = `
            <a href="./assets/img/gal_6.webp" class="gal_item"><img src="./assets/img/gal_6.webp" alt="gal_img"></a>
            <a href="./assets/img/gal_7.webp" class="gal_item"><img src="./assets/img/gal_7.webp" alt="gal_img"></a>
            <a href="./assets/img/gal_10.webp" class="gal_item gal_item_col-2 gal_item_row-2"><img src="./assets/img/gal_10.webp" alt="gal_img"></a>
            <a href="./assets/img/gal_8.webp" class="gal_item"><img src="./assets/img/gal_8.webp" alt="gal_img"></a>
            <a href="./assets/img/gal_9.webp" class="gal_item"><img src="./assets/img/gal_9.webp" alt="gal_img"></a>
            
        `;
    $(".gallery").append(newPhotos);
   
    $(this).fadeOut();
  });
});





