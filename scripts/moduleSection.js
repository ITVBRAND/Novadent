document.addEventListener('DOMContentLoaded', function() {
    const moduleOneBtn = document.getElementById('moduleOneBtn');
    const moduleTwoBtn = document.getElementById('moduleTwoBtn');
    const moduleOneContent = document.getElementById('moduleOneContent');
    const moduleTwoContent = document.getElementById('moduleTwoContent');

    // Check if elements exist before adding event listeners
    if (moduleOneBtn && moduleTwoBtn && moduleOneContent && moduleTwoContent) {
        moduleOneBtn.addEventListener('click', () => {
            moduleOneContent.style.opacity = '1';
            moduleOneContent.style.position = 'relative';
            moduleTwoContent.style.opacity = '0';
            moduleTwoContent.style.position = 'absolute';
            moduleOneBtn.classList.add('active');
            moduleTwoBtn.classList.remove('active');
        });

        moduleTwoBtn.addEventListener('click', () => {
            moduleOneContent.style.opacity = '0';
            moduleOneContent.style.position = 'absolute';
            moduleTwoContent.style.opacity = '1';
            moduleTwoContent.style.position = 'relative';
            moduleTwoBtn.classList.add('active');
            moduleOneBtn.classList.remove('active');
        });

        // Initial state
        moduleOneContent.style.opacity = '1';
        moduleOneContent.style.position = 'relative';
        moduleTwoContent.style.opacity = '0';
        moduleTwoContent.style.position = 'absolute';
    } else {
        console.error('One or more elements not found');
    }
});