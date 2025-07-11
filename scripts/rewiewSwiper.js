var swiper = new Swiper(".rewiew__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".rewiew__pagination",
        clickable: true,
    },
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },

    },
});