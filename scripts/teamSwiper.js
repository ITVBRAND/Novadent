const teamSwiper = new Swiper('.team__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.team__button-next',
        prevEl: '.team__button-prev',
    },
    pagination: {
        el: ".team__pagination",
        clickable: true,
    },
});