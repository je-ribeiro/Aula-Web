/**
 * SCRIPT DE INTERATIVIDADE DO BLOG - JEFFERSON RIBEIRO
 * Este script controla a alternância entre os estados 'Sério' e 'Amigável'.
 */

// Seleção dos elementos principais
const toggleBtn = document.getElementById('toggle-all');
const modeText = document.getElementById('mode-text');
const body = document.body;

/**
 * Função para alternar o estado do site.
 * O CSS faz 90% do trabalho através das variáveis, o JS apenas troca a classe.
 */
toggleBtn.addEventListener('click', () => {
    // Alterna a classe no body
    const isFriendly = body.classList.toggle('friendly-mode');

    // Se estiver no modo amigável (Light Mode / Arredondado)
    if (isFriendly) {
        modeText.textContent = "Amigável [Light]";
        console.log("Interface alterada para: MODO AMIGÁVEL (Light/Rounded)");
    } 
    // Se estiver no modo padrão (Matrix / Quadrado)
    else {
        modeText.textContent = "Sério [Matrix]";
        console.log("Interface alterada para: MODO SÉRIO (Matrix/Square)");
    }
});

// Mensagem de log para confirmar que o Analista de Sistemas Jefferson está online
console.log("Sistema de Portfólio v2.0 carregado com sucesso.");
