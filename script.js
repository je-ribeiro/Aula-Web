// Seleciona o botão de troca de tema e o corpo da página
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para alternar entre Dark Mode e Light Mode
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento body
    body.classList.toggle('dark-mode');

    // Altera o ícone do botão baseando-se no modo atual
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️'; // Ícone de sol para voltar ao light mode
    } else {
        themeToggle.textContent = '🌙'; // Ícone de lua para voltar ao dark mode
    }
});
