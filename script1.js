document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-link');
    const categoryWindows = document.querySelectorAll('.category-window');

    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior (page reload)

            const targetId = this.getAttribute('data-target');
            const targetWindow = document.getElementById(targetId);

            categoryWindows.forEach(window => {
                if (window !== targetWindow) {
                    window.classList.remove('active');
                }
            });

            targetWindow.classList.toggle('active');
        });
    });
});
