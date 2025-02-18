$(document).ready(function () {
    $('.drop-catalog-button').click(function () {
        if ($(this).css('background-color') === 'rgb(255, 255, 0)') {
            $(this).css('background-color', 'white');
        } else {
            $(this).css('background-color', 'yellow');
        }
    });
    // let initialCategory = localStorage.getItem('initialCategory') || 'liquid';
    // let currentCategory = initialCategory;

    // function setActive(category, isDropdown) {
    //     if (!isDropdown) {
    //         $('.category-button').removeClass('active');
    //         $(`.category-button[data-category="${category}"]`).addClass('active');
    //     }
    //     $('.menu-button').removeClass('active');
    //     $(`.menu-button[data-category="${category}"]`).addClass('active');
    //     $('.category-content').removeClass('active');
    //     $(`#content-${category}`).addClass('active');
    // }

    // setActive(initialCategory, false);

    // $('#catalog-toggle').click(function () {
    //     $('#catalog-menu').slideToggle();
    //     setActive(currentCategory, true);
    // });

    // $('.category-button').click(function () {
    //     initialCategory = $(this).data('category');
    //     localStorage.setItem('initialCategory', initialCategory);
    //     currentCategory = initialCategory;
    //     setActive(initialCategory, false);
    // });

    // $('.menu-button').click(function () {
    //     currentCategory = $(this).data('category');
    //     setActive(currentCategory, true);
    // });

})
