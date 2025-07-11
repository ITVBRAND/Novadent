document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isShowing = item.classList.contains('show');
        
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('show');
        });
        
        if (!isShowing) {
            item.classList.add('show');
        }
    });
});