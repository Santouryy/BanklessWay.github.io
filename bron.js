document.addEventListener('DOMContentLoaded', function() {
    const topLine = document.querySelector('.top-line');
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Прокрутка вверх
            topLine.style.top = '0';
        } else {
            // Прокрутка вниз
            topLine.style.top = `-${topLine.offsetHeight}px`;
        }

        prevScrollPos = currentScrollPos;
    });
});