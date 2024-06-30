
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('menubar').addEventListener('click', function() {
    const sidebar = document.querySelector('.side_bar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    });
function toggleDiv() {
    var hiddenContent = document.getElementById('hiddenContent');
    var toggleButton = document.getElementById('toggleButton');
    
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        toggleButton.innerHTML = 'Less' ;
    } else {
        hiddenContent.style.display = 'none';
        toggleButton.innerHTML = 'More';
        }
    }


document.querySelectorAll('.git_container').forEach(function(element) {
    element.onclick = function() {
        window.location.href = element.getAttribute('data-url');
    };
});
document.querySelectorAll('.cont').forEach(function(element) {
    element.onclick = function() {
        window.location.href = element.getAttribute('data-url');
    };
});
    
