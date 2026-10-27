const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');


// --- 1. ENVIO DO FORMULÁRIO (CORRIGIDO) ---
if (formNewsletter && inputEmail && btnSubmit) {
    formNewsletter.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // CORREÇÃO: Capturando o valor digitado corretamente
        const emailDigitado = inputEmail.value.trim();

        if (emailDigitado !== '') {
            // Altera o texto do botão para confirmar o recebimento
            btnSubmit.textContent = 'Inscrição Confirmada! 🎉';
            btnSubmit.style.backgroundColor = '#22c55e'; // Verde de sucesso
            btnSubmit.disabled = true; // Evita cliques duplicados

            // Limpa o campo de entrada
            inputEmail.value = '';

            console.log(`E-mail cadastrado com sucesso: ${emailDigitado}`);
        }
    });
}

// --- 2. MENU MOBILE (MELHORADO) ---
if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function() {
        headerNav.classList.toggle('header__nav--active');
    });

    // MELHORIA: Fecha o menu automaticamente ao clicar em qualquer link dele
    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('header__nav--active');
        });
    });
}

// --- 3. ALTERNAR TEMA COM PERSISTÊNCIA (MELHORADO) ---
// Recupera o tema salvo no navegador (se houver)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
}

if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');

        if (document.body.classList.contains('light-theme')) {
            themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light'); // Salva preferência
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');  // Salva preferência
        }
    });
}

    //--- 4. CRIAÇÃO DINÂMICA DA MENSAGEM DE FEEDBACK ---\\
const feedbackText = document.createElement ('small');
feedbackText.style.display = 'block';
feedbackText.style.marginTop = '8px';
feedbackText.style.fontSize = '0.85rem';
feedbackText.style.fontWeight = '600';

// Insere o elemento <small> logo abaixo do input de e-mail
inputEmail.parentNode.appendChild(feedbackText);

//--- 5. FUNÇÃO QUE VALIDA O FORMULÁRIO VIA REGEX
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email); // Retorna true ou false
}


