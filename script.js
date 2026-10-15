const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');

formNewsletter.addEventListener('submit', function(event) {
    
    event.preventDefault();