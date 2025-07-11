const moduleOneBtn = document.getElementById('moduleOneBtn');
const moduleTwoBtn = document.getElementById('moduleTwoBtn');
const moduleOneContent = document.getElementById('moduleOneContent');
const moduleTwoContent = document.getElementById('moduleTwoContent');

moduleOneBtn.addEventListener('click', () => {
    moduleOneContent.style.opacity = '1';
    moduleOneContent.style.position = 'relative';
    moduleTwoContent.style.opacity = '0';
    moduleTwoContent.style.position = 'absolute';
});

moduleTwoBtn.addEventListener('click', () => {
    moduleOneContent.style.opacity = '0';
    moduleOneContent.style.position = 'absolute';
    moduleTwoContent.style.opacity = '1';
    moduleTwoContent.style.position = 'relative';
});

moduleOneBtn.addEventListener('click', () => {
    moduleOneBtn.classList.add('active');
    moduleTwoBtn.classList.remove('active');
});

moduleTwoBtn.addEventListener('click', () => {
    moduleTwoBtn.classList.add('active');
    moduleOneBtn.classList.remove('active');
});

moduleOneContent.style.opacity = '1';
moduleOneContent.style.position = 'relative';
moduleTwoContent.style.opacity = '0';
moduleTwoContent.style.position = 'absolute';