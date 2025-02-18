$(document).ready(function () {
    // кнопка каталог
    $('.btn-drop-catalog-menu').click(function () {
        $('#drop-down-active').toggleClass('drop-down-active');
        $('.drop-catalog-container').toggleClass('drop-catalog-active');
        $('#overlay').toggleClass('overlay-active');
        $('body').toggleClass('no-scroll');
    });
    // отзыв товара
    $('.card-product-review-text').click(function () {
        $(this).closest('.product-card-block').find('.card-product-review-stars').toggleClass('active-review-stars');
        let stars = $(this).closest('.product-card-block').find('.card-product-review-stars');
        if(stars.hasClass('active-review-stars')){
            $(this).hide();
        }
    });
    const products = document.querySelectorAll('.product-card-block');
    products.forEach(product => {
        const stars = product.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                setRating(product, value);
            });
        });
    });
    function setRating(product, value) {
        const stars = product.querySelectorAll('.star');
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });

        // Алерт временно
        alert(`Вы оценили товар в ${value} звезды.`);
    }

    // collapsible-text
    const text = document.querySelector('.collapsible-text');
    // const button = document.querySelector('.collapsible-btn');
    if (text.offsetHeight <= 595) {
        $('.collapsible-btn').toggleClass('collapsible-btn-none');
    }
    $('.collapsible-btn').click(function () {
        $('.collapsible-text').toggleClass('collapsible-text-active');
        if ($('.collapsible-text').hasClass('collapsible-text-active')) {
            $('.collapsible-btn').text('Згорнуты');
        } else {
            $('.collapsible-btn').text('Развернуть');
        }
    })

    // акордион
    $(".accordion__title")
        .off("click")
        .on("click", function (event) {

            // Предотвращаем всплытие
            event.stopPropagation();

            // Получаем текущие элементы
            var content = $(this).next(".accordion__content");
            var arrow = $(this).find(".accordion__arrow-item");

            // Проверяем видимость контента
            if (content.is(":visible")) {

                content.slideUp();
                arrow.removeClass("accordion__arrow-active")
                    .html(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 10H10M19 10H10M10 10V1M10 10V19" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      `);
                $(this).removeClass("accordion__title-active");
            } else {

                // Закрываем другие аккордеоны
                $(".accordion__content").slideUp();
                $(".accordion__arrow-item").removeClass("accordion__arrow-active")
                    .html(`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 10H10M19 10H10M10 10V1M10 10V19" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round"/>
                      </svg>`);
                $(".accordion__title").removeClass("accordion__title-active");

                // Открываем текущий
                content.slideDown();
                arrow.addClass("accordion__arrow-active")
                    .html(`<svg width="20" height="2" viewBox="0 0 20 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1H10H19" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round"/>
          </svg>`);
                $(this).addClass("accordion__title-active");
            }
        });

        if($('.card-product-price .discount-price').next().length) {
            $('.card-product-price .discount-price').next().toggleClass('old-price');
        }else{
            $('.card-product-price').next().toggleClass('');
        }

        $(window).resize(function () {
            let winWidth = $(window).width();
            $(".choise-btn-page-container::before").css({
              width: winWidth + "px",
              left: "50%",
              "margin-left": -winWidth / 2 + "px",
            });
          });

})
