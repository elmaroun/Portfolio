document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Change 50 to the threshold you want
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
