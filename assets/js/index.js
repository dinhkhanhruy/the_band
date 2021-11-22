const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const close = document.querySelector('.modal-close');
const closex = document.querySelector('.modal-footer-close');
const modalContainer = document.querySelector('.modal-container')

function closeTickets() {
    modal.classList.remove('open');
}

function openTickets() {
    modal.classList.add('open');
}

for (let buyBtn of buyBtns) {
    buyBtn.addEventListener('click', openTickets)
}

close.addEventListener('click', closeTickets);
closex.addEventListener('click', closeTickets);
modal.addEventListener('click', closeTickets);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})