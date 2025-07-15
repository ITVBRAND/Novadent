document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const burgerBtn = document.querySelector('#openMenu');
    const closeMenu = document.querySelector('#closeMenu');
    const burgerWrap = document.querySelector('#burgerWrap');
    const burgerMenu = document.querySelector('#burgerMenu');
    const burgerList = document.querySelector('.header__burger--list');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Check if burger menu elements exist
    if (burgerBtn && burgerWrap && burgerMenu) {
        burgerBtn.addEventListener('click', function() {
            burgerWrap.classList.add('active');
            burgerMenu.classList.add('active');
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', function() {
                burgerWrap.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        }

        if (burgerList) {
            burgerList.addEventListener('click', function(e) {
                const link = e.target.closest('.header__burger--link');
                if (link && !link.classList.contains('dropdown-toggle')) {
                    burgerWrap.classList.remove('active');
                    burgerMenu.classList.remove('active');
                }
            });
        }
    }

    // Check if dropdown elements exist
    if (dropdownToggle && dropdownContent) {
        dropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownContent.classList.toggle('active');
            dropdownToggle.classList.toggle('open');
        });
    }
});