window.addEventListener('scroll', function() {
    const image = document.querySelector('.image');
    const scrollY = window.scrollY;
    const Value = `translate(${scrollY}px, ${scrollY}px)`;
    image.style.transform = Value;
});
