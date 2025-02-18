$(document).ready(function () {
    function initializeCarousel(
        selector, loop, margin, nav, dots,
        itemsVisible_1000, itemsVisible_800, itemsVisible_600,
        itemsVisible_0, showProgressBar, fadeEffect) {

        var owl = $(selector);
        var progressBar;

        if (showProgressBar) {
            progressBar = $("<div class='progress-container'><div class='progress-bar'></div></div>");
            owl.after(progressBar);
        }

        var owlSettings = {
            loop: loop,
            margin: margin,
            nav: nav,
            dots: dots,
            responsive: {
                0: { items: itemsVisible_0 },
                600: { items: itemsVisible_600 },
                800: { items: itemsVisible_800 },
                1000: { items: itemsVisible_1000 }
            },
            onInitialized: function (event) {
                if (showProgressBar) {
                    updateProgressBar(event, progressBar, itemsVisible_1000);
                }
            },
            onTranslated: function (event) {
                if (showProgressBar) {
                    updateProgressBar(event, progressBar, itemsVisible_1000);
                }
            }
        };

        if (fadeEffect) {
            owlSettings["animateOut"] = "fadeOut";
            owlSettings["animateIn"] = "fadeIn";
        }

        owl.owlCarousel(owlSettings);

        function updateProgressBar(event, bar, itemsVisible_1000) {
            var itemsTotal = event.item.count;
            var currentIndex = event.item.index;
            var itemsMax = itemsTotal - itemsVisible_1000;
            if (itemsMax <= 0) {
                bar.find(".progress-bar").css("width", "100%");
                return;
            }
            var progress = ((currentIndex) / (itemsMax)) * 100;
            bar.find(".progress-bar").css("width", progress + "%");
        }
    }

    // Добавляем fade эффект для первых четырёх слайдеров
    initializeCarousel(".pages-select-carousel1", false, 20, false, false, 1, 1, 1, 1, false, true);
    initializeCarousel(".pages-select-carousel2", false, 20, false, false, 1, 1, 1, 1, false, true);
    initializeCarousel(".pages-select-carousel3", false, 20, false, false, 1, 1, 1, 1, false, true);
    initializeCarousel(".pages-select-carousel4", false, 20, false, false, 1, 1, 1, 1, false, true);

    // Другие слайдеры без fade эффекта
    initializeCarousel("#product-carousel", false, 20, true, true, 6, 4, 3, 1, true, false);
    initializeCarousel("#new-product-carousel", false, 20, true, true, 6, 4, 3, 1, true, false);
    initializeCarousel("#discount-product-carousel", false, 20, true, true, 6, 4, 3, 1, true, false);
    initializeCarousel("#popular-brands-carousel", false, 20, true, true, 6, 4, 3, 1, true, false);
    initializeCarousel("#reviewed-products-carousel", false, 20, true, true, 6, 4, 3, 1, true, false);

});
