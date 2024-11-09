document.addEventListener('DOMContentLoaded', function() {
    const topLine = document.querySelector('.top-line');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Прокрутка вниз
            topLine.style.visibility = 'hidden';
        } else {
            // Прокрутка вверх
            topLine.style.visibility = 'visible';
        }
        lastScrollTop = scrollTop;
    });
});