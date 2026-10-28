const formNewsletter = document.querySelector('.newsletter__form');
const inputEmail = document.querySelector('.newsletter__input');
const btnSubmit = document.querySelector('.btn--form');
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header-nav');
const themeToggle = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// --- 1. CONFIGURAÇÃO DINÂMICA DA MENSAGEM DE FEEDBACK ---
let feedbackText;
if (inputEmail && inputEmail.parentNode) {
    feedbackText = document.createElement('small');
    feedbackText.style.display = 'block';
    feedbackText.style.marginTop = '8px';
    feedbackText.style.fontSize = '0.85rem';
    feedbackText.style.fontWeight = '600';
    
    // Insere o elemento <small> logo abaixo do input de e-mail
    inputEmail.parentNode.appendChild(feedbackText);
}

// --- 2. FUNÇÃO QUE VALIDA O FORMULÁRIO VIA REGEX ---
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email); // Retorna true ou false
}

// --- 3. ENVIO E VALIDAÇÃO DO FORMULÁRIO (UNIFICADO) ---
if (formNewsletter && inputEmail && btnSubmit && feedbackText) {
    formNewsletter.addEventListener('submit', function(event) {
        event.preventDefault(); // Bloqueia o envio do formulário para validação
        
        const emailValor = inputEmail.value.trim();

        // CHECAGEM DE ERRO: Campo vazio ou e-mail fora do padrão
        if (!validarEmail(emailValor)) {
            // Feedback visual de ERRO
            feedbackText.textContent = '❌ Por favor, digite um e-mail válido (ex: nome@dominio.com).';
            feedbackText.style.color = '#ef4444'; // Vermelho
            inputEmail.style.borderColor = '#ef4444';
            inputEmail.focus(); 
        } else {
            // Feedback visual de SUCESSO
            feedbackText.textContent = '✅ Inscrição realizada com sucesso!';
            feedbackText.style.color = '#22c55e'; // Verde
            inputEmail.style.borderColor = '#22c55e';

            // Altera o estado do botão
            btnSubmit.textContent = 'Inscrição Confirmada! 🎉';
            btnSubmit.style.backgroundColor = '#22c55e'; // Verde de sucesso
            btnSubmit.disabled = true; // Evita cliques duplicados

            // Limpa o campo de entrada
            inputEmail.value = '';

            console.log(`[Sucesso] E-mail cadastrado: ${emailValor}`);

            // Restaura o estado padrão após 4 segundos
            setTimeout(function() {
                feedbackText.textContent = '';
                inputEmail.style.borderColor = ''; 
                btnSubmit.textContent = 'Enviar'; // Substitua pelo texto original do seu botão se for diferente
                btnSubmit.style.backgroundColor = ''; 
                btnSubmit.disabled = false;
            }, 4000);
        }
    });
}

// --- 4. MENU MOBILE ---
if (menuToggle && headerNav) {
    menuToggle.addEventListener('click', function() {
        headerNav.classList.toggle('header__nav--active');
    });

    // Fecha o menu automaticamente ao clicar em qualquer link dele
    const navLinks = headerNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('header__nav--active');
        });
    });
}

// --- 5. ALTERNAR TEMA COM PERSISTÊNCIA ---
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
            localStorage.setItem('theme', 'light'); 
        } else {
            themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');  
        }
    });
}
