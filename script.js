const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');


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

if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function() {
        // Alterna a classe que exibe/oculta o menu no CSS
        headerNav.classList.toggle('header__nav--active');
    });
}

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        // Alterna a classe 'light-theme' no <body>
        document.body.classList.toggle('light-theme');

        // Troca o ícone de Lua (🌙) para Sol (☀️) dependendo do estado
        if (document.body.classList.contains('light-theme')) {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
    });
}
