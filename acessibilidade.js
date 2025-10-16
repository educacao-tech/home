/**
 * acessibilidade.js
 * 
 * Este arquivo centraliza as funcionalidades de acessibilidade do site,
 * separando a lógica do HTML (prática de Unobtrusive JavaScript).
 */

// Aguarda o carregamento completo do DOM antes de registrar os eventos.
document.addEventListener('DOMContentLoaded', function() {

    // --- Funções de Acessibilidade ---
    // NOTA: A implementação real destas funções deve ser adicionada aqui.
    // Elas manipulam o DOM para alterar fontes, cores, etc.

    function aumentarFonte() {
        console.log('Função "aumentarFonte" foi chamada.');
        // Exemplo de implementação:
        // const elements = document.querySelectorAll('body, p, a, h1, h2, h3, h4, h5, h6, span, li, button');
        // elements.forEach(el => {
        //     let currentSize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
        //     if (currentSize < 24) { // Limite para não ficar gigante
        //        el.style.fontSize = (currentSize + 1) + 'px';
        //     }
        // });
    }

    function diminuirFonte() {
        console.log('Função "diminuirFonte" foi chamada.');
        // Implementação aqui...
    }

    function autoContraste() {
        console.log('Função "autoContraste" foi chamada.');
        // Exemplo de implementação:
        document.body.classList.toggle('alto-contraste');
        // Você precisaria definir a classe .alto-contraste no seu CSS.
    }

    function invertColors() {
        console.log('Função "invertColors" foi chamada.');
        // Exemplo de implementação:
        // document.documentElement.classList.toggle('invert-colors');
        // CSS: html.invert-colors { filter: invert(1); }
    }

    function reiniciarAjustesAcessibilidade() {
        console.log('Função "reiniciarAjustesAcessibilidade" foi chamada.');
        // Implementação aqui... (remover classes e resetar estilos inline)
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
