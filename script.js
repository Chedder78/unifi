document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle
    const toggleSwitch = document.getElementById('darkModeToggle');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Loading Animation
    window.addEventListener('load', () => {
        document.querySelector('.loading').style.display = 'none';
    });         
 


    // Search Functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            document.querySelectorAll('.card').forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(query) ? 'block' : 'none';
            });
        });
    }
});

// Function to open the corresponding large box
function openLargeBox(boxId) {
    var box = document.getElementById('largeBox' + boxId);
    box.style.display = 'block'; // Show the large box
    // Add functionality to close the box when clicked outside
    window.onclick = function(event) {
        if (event.target == box) {
            box.style.display = 'none'; // Hide the box
        }
    }
}
;
