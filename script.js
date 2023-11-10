window.addEventListener('scroll', function() {
    const image = document.querySelector('.image');
    const scrollY = window.scrollY;
    const transformValue = `translate(${scrollY}px, ${scrollY}px)`;
    image.style.transform = transformValue;
});
