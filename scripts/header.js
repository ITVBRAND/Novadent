const burgerBtn = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const burgerWrap = document.querySelector('#burgerWrap');
const burgerMenu = document.querySelector('#burgerMenu');
const burgerLink = document.querySelector('.header__burger--link');

burgerBtn.addEventListener('click', function () {
    burgerWrap.classList.add('active');
    burgerMenu.classList.add('active');
})

closeMenu.addEventListener('click', function () {
    burgerWrap.classList.remove('active');
    burgerMenu.classList.remove('active');
})

document.querySelector('.header__burger--list').addEventListener('click', function(e) {
    const link = e.target.closest('.header__burger--link');
    
    if (link && !link.classList.contains('dropdown-toggle')) {
        burgerWrap.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
});

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    dropdownContent.classList.toggle('active');
    dropdownToggle.classList.toggle('open');
});

AOS.init({
    offset: -150,
    duration: 600,
});