let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % totalSlides;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showDetails(event) {
    // Retrieve the clicked menu item
    const menuItem = event.currentTarget;
    
    // Get the description from the data attribute
    const description = menuItem.getAttribute('data-description');
    
    // Show the description in an alert
    alert(description);
}

// Attach event listeners to all menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', showDetails);
});

function reserveTable() {
    alert('Reservation system is under construction.');
}

function orderNow() {
    alert('Ordering system is under construction.');
}

// Initialize slideshow
showSlides();