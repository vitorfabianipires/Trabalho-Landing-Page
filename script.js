const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');

formNewsletter.addEventListener('submit', function(event) {
    
    event.preventDefault();

 if (emailDigitado !== '') {
        // Altera o texto do botão para confirmar o recebimento
        btnSubmit.textContent = 'Inscrição Confirmada! 🎉';
        btnSubmit.style.backgroundColor = '#22c55e'; // Verde de sucesso

        // Limpa o campo de entrada
        inputEmail.value = '';

        console.log(`E-mail cadastrado com sucesso: ${emailDigitado}`);
    }
});
