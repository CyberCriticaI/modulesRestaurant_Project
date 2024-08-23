import { showSlides } from './script.mjs';

function showDetails(event) {
    const menuItem = event.currentTarget;
    const description = menuItem.getAttribute('data-description');
    alert(description);
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', showDetails);
});

function reserveTable() {
    alert('Reservation system is under construction.');
}

function orderNow() {
    alert('Ordering system is under construction.');
}

showSlides();

export { reserveTable, orderNow };