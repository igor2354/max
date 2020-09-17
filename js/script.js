$(document).ready(function () {
  //===============SLIDER==========================
  $(".certificate__slider").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".transfer__slider").slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".reviews__slider").slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".delivery__slider").slick({
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  });
  $(".partners__slider").slick({
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  });

  $(".slider-big").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-small",
  });
  $(".slider-small").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-big",
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  //================BURGER==============

  $(".header__burger").on("click", function () {
    $(this).addClass("active");
    $(".popup-header").addClass("active");
  });
  $(".popup-header__close").on("click", function () {
    $(".header__burger").removeClass("active");
    $(".popup-header").removeClass("active");
  });

  //================QUIZ================

  $(".quiz__wrap").on("click", function (event) {
    $.each($(".quiz__wrap"), function (index, val) {
      $(val).removeClass("active");
    });
    $(this).addClass("active");
  });

  $(".quiz__next > a").on("click", function (event) {
    event.preventDefault();
    if ($(".quiz__wrap").hasClass("active")) {
      $.each($(".quiz__lsit"), function (index, val) {
        if ($(val).next()[0] === $(".quiz__lsit:last")[0]) {
          $(".quiz__button").css({ display: "none" });
          $(".quiz__next > a").unbind("click");
        }

        if ($(val).hasClass("current")) {
          $(val).animate({ left: "-500px", opacity: "0" });
          setTimeout(() => {
            $(val).next().addClass("current");
            $(val).removeClass("current");
          }, 500);

          $.each($(".quiz__wrap"), function (index, val) {
            $(val).removeClass("active");
          });
          return false;
        }
      });
    }
  });

  $(".quiz__finish > a").on("click", function (event) {
    event.preventDefault();
    $.each($(".quiz__lsit"), function (index, val) {
      $(val).removeClass("current");
    });
    $(".quiz__lsit:last").addClass("current");
    $(".quiz__button").css({ display: "none" });
  });

  //===============SELECT=========================

  $(".select__input").on("click", function () {
    $(this).parent().find($(".select__menu")).css({ display: "block" });
  });
  $(".select__option").on("click", function () {
    $(this).parents(".select").find($(".select__text")).text($(this).text());

    $.each($(this).parent().find(".select__option"), function (index, val) {
      $(val).removeClass("select__option_selected");
    });
    $(this).addClass("select__option_selected");
    $(this).parent().css({ display: "none" });
  });

  //==============ACCORDION====================

  $(".question__issue").on("click", function () {
    $(".question__issue").not($(this)).removeClass("active");
    $(".question__text").not($(this).next()).slideUp(300);
    $(this).toggleClass("active").next().slideToggle(200);
    $(".question__issue").find("span").text("?");
    if ($(".question__issue").hasClass("active")) {
      $(this).find("span").text("!");
    } else {
      $(this).find("span").text("?");
    }
  });

  $(".comparison__name_click").on("click", function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("active");
  });

  $(".tabs__toggle-slide").on("click", function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("active");
  });

  //====================POPUP==================

  $.each($(".popup-open"), function (index, val) {
    $(val).on("click", function () {
      $(".popup").addClass("open");
      $("body").addClass("lock");
    });
  });
  $.each($(".popup-close"), function (index, val) {
    $(val).on("click", function (e) {
      if (e.target === $(".popup__body")[0] || e.target === $(".popup__close")[0]) {
        $(".popup").removeClass("open");
        $("body").removeClass("lock");
      }
    });
  });

  //=================MATCH=============================================

  let math = [window.matchMedia("(max-width: 1415px)"), window.matchMedia("(max-width: 768px)"), window.matchMedia("(max-width: 500px)")];

  function resizeBlock() {
    if (math[0].matches) {
      $(".advantages__group").before($(".advantages__column_image"));
    } else {
      $(".advantages__column:last").before($(".advantages__column_image"));
    }
  }

  math[0].addListener(resizeBlock);
  resizeBlock();

  function formmMvung() {
    if (math[1].matches) {
      $(".consultation__form").find(".form-contact__wrpap").before($(".consultation__form").find(".form-contact__check"));
      $(".quiz__form").find(".form-contact__wrpap").before($(".quiz__form").find(".form-contact__check"));
    } else {
      $(".consultation__form").find(".form-contact__field").after($(".consultation__form").find(".form-contact__check"));
      $(".quiz__form").find(".form-contact__field").after($(".quiz__form").find(".form-contact__check"));
    }
  }

  math[1].addListener(formmMvung);
  formmMvung();

  function activateSlider() {
    if (math[2].matches) {
      $(".tabs__slider").slick({ variableWidth: true });
    } else {
      if ($(".tabs__slider").hasClass("slick-initialized")) {
        $(".tabs__slider").slick("unslick");
      }
    }
  }
  math[2].addListener(activateSlider);
  activateSlider();

  function removeClass() {
    if (!math[1].matches) {
      $(".tabs__toggle-slide").removeClass("active");
      $(".tabs__wrap").css({ display: "block" });
    } else {
      $(".tabs__toggle-slide").removeClass("active");
      $(".tabs__wrap").css({ display: "block" });
    }
  }

  math[1].addListener(removeClass);
  removeClass();

  //=================TABS============================
  $(".tabs__trigger").on("click", function (event) {
    event.preventDefault();
    $(".tabs__trigger").removeClass("active");
    $(".tabs__item").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });
  $(".tabs__trigger:first").click();

  //================COUNTER FORM INPUT===================
  $(".form-model_math").on("click", function () {
    let counter = $(".form-model__counter").val();
    let text = $(".form-model__cost").find("span").text().split(" ").join("");
    if ($(this).hasClass("form-model__sub") && counter > 0) {
      $(".form-model__counter").val(counter - 1);

      $(".form-model__cost")
        .find("span")
        .text(Number(text) - 14990);
    } else {
      if ($(this).hasClass("form-model__add")) {
        $(".form-model__counter").val(Number(counter) + 1);
        $(".form-model__cost")
          .find("span")
          .text(Number(text) + 14990);
      }
    }
  });
});

//================CHECKBOX DISABLED=====================

$("input:checkbox").on("change", function () {
  let button = $(this).parents("form").find("button");
  if (!$(this).prop("checked")) {
    button.prop("disabled", true);
    button.addClass("disabled");
  } else {
    button.prop("disabled", false);
    button.removeClass("disabled");
  }
});

$(window).on("load", function () {
  $("input:checkbox").prop("checked", true);
});
