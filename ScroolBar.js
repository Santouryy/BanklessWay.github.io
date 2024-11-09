document.addEventListener('DOMContentLoaded', function() {
    const topLine = document.querySelector('.top-line');
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Прокрутка вверх
            topLine.classList.remove('hidden');
        } else {
            // Прокрутка вниз
            topLine.classList.add('hidden');
        }

        prevScrollPos = currentScrollPos;
    });
});