/**
 * acessibilidade.js
 * 
 * Este arquivo centraliza as funcionalidades de acessibilidade do site,
 * separando a lógica do HTML (prática de Unobtrusive JavaScript).
 */

// Aguarda o carregamento completo do DOM antes de registrar os eventos.
document.addEventListener('DOMContentLoaded', function() {

    const htmlElement = document.documentElement;
    let currentFontSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
    const initialFontSize = currentFontSize;

    // --- Funções de Acessibilidade ---

    function aumentarFonte() {
        console.log('Função "aumentarFonte" foi chamada.');
        if (currentFontSize < 22) { // Adiciona um limite para não aumentar indefinidamente
            currentFontSize += 1;
            htmlElement.style.fontSize = currentFontSize + 'px';
        }
    }

    function diminuirFonte() {
        console.log('Função "diminuirFonte" foi chamada.');
        if (currentFontSize > 12) { // Adiciona um limite para não diminuir indefinidamente
            currentFontSize -= 1;
            htmlElement.style.fontSize = currentFontSize + 'px';
        }
    }

    function autoContraste() {
        console.log('Função "autoContraste" foi chamada.');
        // Adiciona ou remove a classe 'alto-contraste' do body
        htmlElement.classList.toggle('alto-contraste');
    }

    function invertColors() {
        console.log('Função "invertColors" foi chamada.');
        htmlElement.classList.toggle('invert-colors');
    }

    function reiniciarAjustesAcessibilidade() {
        console.log('Função "reiniciarAjustesAcessibilidade" foi chamada.');
        // Reseta o tamanho da fonte
        currentFontSize = initialFontSize;
        htmlElement.style.fontSize = '';
        // Remove as classes de acessibilidade
        htmlElement.classList.remove('alto-contraste', 'invert-colors');
    }

    // --- Registro dos Event Listeners ---
    // Seleciona cada link do menu de acessibilidade pelo seu ID.

    const btnAumentarFonte = document.getElementById('aumentar-fonte');
    if (btnAumentarFonte) {
        btnAumentarFonte.addEventListener('click', function(event) {
            event.preventDefault(); // Impede a navegação do link
            aumentarFonte();
        });
    }

    const btnDiminuirFonte = document.getElementById('diminuir-fonte');
    if (btnDiminuirFonte) {
        btnDiminuirFonte.addEventListener('click', function(event) {
            event.preventDefault();
            diminuirFonte();
        });
    }

    const btnAutoContraste = document.getElementById('auto-contraste');
    if (btnAutoContraste) {
        btnAutoContraste.addEventListener('click', function(event) {
            event.preventDefault();
            autoContraste();
        });
    }

    const btnInverterCores = document.getElementById('inverter-cores');
    if (btnInverterCores) {
        btnInverterCores.addEventListener('click', function(event) {
            event.preventDefault();
            invertColors();
        });
    }

    const btnReiniciar = document.getElementById('reiniciar-acessibilidade');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', function(event) {
            event.preventDefault();
            reiniciarAjustesAcessibilidade();
        });
    }
});
