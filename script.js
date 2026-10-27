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

    //--- 6. ESCUTADOR DE EVENTO 'SUBMIT'
formNewsletter.addEventListener('submit', function(event) {
    // Bloqueia o envio do formulário enquanto validamos
    event.preventDefault();

    const emailValor = inputEmail.value.trim();

    // CHECAGEM DE ERRO: Campo vazio ou e-mail fora do padrão
    if (!validarEmail(emailValor)) {
        // Aplica o feedback visual de ERRO
        feedbackText.textContent = '❌ Por favor, digite um e-mail válido (ex: nome@dominio.com).';
        feedbackText.style.color = '#ef4444'; // Vermelho
        inputEmail.style.borderColor = '#ef4444';
        inputEmail.focus(); // Coloca o cursor de volta no campo
    } else {
        // Aplica o feedback visual de SUCESSO
        feedbackText.textContent = '✅ Inscrição realizada com sucesso!';
        feedbackText.style.color = '#22c55e'; // Verde
        inputEmail.style.borderColor = '#22c55e';

        // Limpa o campo de entrada
        inputEmail.value = '';

        console.log(`[Sucesso] E-mail cadastrado: ${emailValor}`);

        // Oculta a mensagem de sucesso após 4 segundos
        setTimeout(function() {
            feedbackText.textContent = '';
            inputEmail.style.borderColor = ''; // Restaura a borda padrão do CSS
        }, 4000);
    }
});
