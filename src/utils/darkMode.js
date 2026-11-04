const fundoBotao = document.querySelector('.fundo-toogle');
const bolinhaBotao = document.querySelector('.bolinha-toogle');

const botaoDarkMode = document.querySelector('.dark-mode');
let darkModeBolinha;

botaoDarkMode.addEventListener('click', () => {
    bolinhaBotao.classList.toggle('dark-mode-ativo');
    if (bolinhaBotao.classList.contains("dark-mode-ativo")) {
        localStorage.setItem('darkMode', 'ativo');
        aplicarDarkMode();
    } else {
        localStorage.removeItem('darkMode');
        aplicarDarkMode();
    }
})

const root = document.documentElement;
aplicarDarkMode();

export function aplicarDarkMode() {
    let darkModeAtivo = localStorage.getItem('darkMode')
    if (darkModeAtivo === 'ativo') {
        bolinhaBotao.classList.add('dark-mode-ativo');
    }
    darkModeBolinha = bolinhaBotao.classList.contains("dark-mode-ativo")

    // Bolinha do botão de dark mode
    bolinhaBotao.style.marginLeft = darkModeBolinha ? '12px' : '0.5px';
    bolinhaBotao.style.transition = "0.2s";
    // Fundo da pagina
    document.body.style.backgroundImage = darkModeBolinha ? "url('src/assets/backgrounds/background-dark.png')" : "url('src/assets/backgrounds/background.png')";
    //Fundo Header
    const backgroundHeader = document.querySelector('header');
    backgroundHeader.style.backgroundImage = darkModeBolinha ? "url('src/assets/backgrounds/background-header-dark.png')" : "url('src/assets/backgrounds/background-header.png')";
    backgroundHeader.style.boxShadow = darkModeBolinha ? "0 2px 10px rgba(255, 255, 255, 0.2)" : "0 2px 10px rgba(0, 0, 0, 0.2)";
    // Logo Header
    const logoHeader = document.querySelector('.logo-header');
    logoHeader.src = darkModeBolinha ? "src/assets/images/logo-dark.png" : "src/assets/images/markit-logo2.png";
    // Inverter as cores dos ícones do menu
    const menuIcon = document.querySelectorAll('.img');
    menuIcon.forEach(icon => {
        if (!icon.parentNode.classList.contains("selecao-menu")) {
            icon.style.filter = darkModeBolinha ? "invert(100%)" : "invert(0%)";
            icon.style.transition = "0.2s";
        }
    });

    // Inverte a cor do icone de filtrar notas
    /* const filtroNotas = document.querySelector('.filtrar-ocultar-icon');
    filtroNotas.style.filter = darkModeBolinha ? "invert(100%)" : "invert(0%)";
    filtroNotas.style.transition = "0.2s"; */
    // Adiciona umas transições
    document.body.style.transition = "background-image 0.5s ease-in-out";
    backgroundHeader.style.transition = "background-image 0.5s ease-in-out";

    //Alteração das variáveis
    if (darkModeAtivo === 'ativo') {
        root.style.colorScheme = "dark";
        root.style.setProperty("--cor-principal", "#a58b62");
        root.style.setProperty("--cor-main", "rgba(31, 30, 28, 0.96)");
        root.style.setProperty("--cor-texto-menu", "#f4eee4");
        root.style.setProperty("--cor-texto-fundo-claro", "#e7e1d8");
        root.style.setProperty("--cor-texto-suave", "#bdb5a9");
        root.style.setProperty("--cor-texto-mais-suave", "#a79f93");
        root.style.setProperty("--cor-texto-contraste", "#282219");
        root.style.setProperty("--cor-texto-postit", "#342d22");
        root.style.setProperty("--cor-surface", "rgba(48, 46, 42, 0.98)");
        root.style.setProperty("--cor-surface-2", "rgba(59, 56, 51, 0.98)");
        root.style.setProperty("--cor-borda", "rgba(244, 238, 228, 0.12)");
        root.style.setProperty("--cor-borda-forte", "rgba(244, 238, 228, 0.22)");
        root.style.setProperty("--cor-input-fundo", "rgba(37, 35, 32, 0.98)");
        root.style.setProperty("--cor-input-texto", "#f4eee4");
        root.style.setProperty("--cor-input-borda", "rgba(244, 238, 228, 0.2)");
        root.style.setProperty("--cor-hover-controle", "rgba(244, 238, 228, 0.08)");
        root.style.setProperty("--cor-selecao-tab", "rgba(165, 139, 98, 0.28)");
        root.style.setProperty("--cor-foco", "#c5a976");
        root.style.setProperty("--cor-botao-padrao", "#806443");
        root.style.setProperty("--cor-botao-hover", "#8d744c");
        root.style.setProperty("--cor-fundo-acao", "#806443");
        root.style.setProperty("--cor-texto-botao", "#fffaf1");
        root.style.setProperty("--cor-fundo-modal", "#302e2a");
        root.style.setProperty("--cor-hover-modal", "rgba(244, 238, 228, 0.1)");
        root.style.setProperty("--background-input-tarefas", "rgba(48, 46, 42, 0.98)");
        root.style.setProperty("--cor-hover-menu", "rgba(244, 238, 228, 0.08)");
        root.style.setProperty("--cor-card-import", "linear-gradient(135deg, rgba(48, 46, 42, 0.98), rgba(57, 54, 49, 0.98))");
        root.style.setProperty("--cor-card-import-alt", "rgba(37, 35, 32, 0.96)");
        root.style.setProperty("--cor-sombra", "rgba(0, 0, 0, 0.28)");
        root.style.setProperty("--cor-postit-amarelo", "#b7a94d");
    } else {
        root.style.colorScheme = "light";
        root.style.setProperty("--cor-principal", "#c8bfa6");
        root.style.setProperty("--cor-main", "rgba(243, 238, 224, 0.84)");
        root.style.setProperty("--cor-texto-menu", "#2f1b00e4");
        root.style.setProperty("--cor-texto-fundo-claro", "#363636e4");
        root.style.setProperty("--cor-texto-suave", "#666");
        root.style.setProperty("--cor-texto-mais-suave", "#777");
        root.style.setProperty("--cor-texto-contraste", "#2f1b00");
        root.style.setProperty("--cor-texto-postit", "#363327");
        root.style.setProperty("--cor-surface", "rgba(255, 253, 243, 0.96)");
        root.style.setProperty("--cor-surface-2", "rgba(255, 250, 236, 0.92)");
        root.style.setProperty("--cor-borda", "rgba(47, 27, 0, 0.12)");
        root.style.setProperty("--cor-borda-forte", "rgba(47, 27, 0, 0.2)");
        root.style.setProperty("--cor-input-fundo", "rgba(255, 255, 255, 0.86)");
        root.style.setProperty("--cor-input-texto", "#2c2c2c");
        root.style.setProperty("--cor-input-borda", "#e0dddd");
        root.style.setProperty("--cor-hover-controle", "rgba(47, 40, 0, 0.08)");
        root.style.setProperty("--cor-selecao-tab", "rgba(47, 40, 0, 0.18)");
        root.style.setProperty("--cor-foco", "#806b43");
        root.style.setProperty("--cor-botao-padrao", "rgb(169, 162, 140)");
        root.style.setProperty("--cor-botao-hover", "#928b77");
        root.style.setProperty("--cor-fundo-acao", "#2f1b00e4");
        root.style.setProperty("--cor-texto-botao", "#fff");
        root.style.setProperty("--cor-fundo-modal", "#fff");
        root.style.setProperty("--cor-hover-modal", "rgba(56, 38, 0, 0.08)");
        root.style.setProperty("--background-input-tarefas", "rgb(255, 253, 243)");
        root.style.setProperty("--cor-hover-menu", "#c8bfa6bd");
        root.style.setProperty("--cor-card-import", "linear-gradient(135deg, rgba(255, 253, 243, 0.96), rgba(255, 249, 232, 0.92))");
        root.style.setProperty("--cor-card-import-alt", "rgba(255, 255, 255, 0.7)");
        root.style.setProperty("--cor-sombra", "rgba(47, 27, 0, 0.08)");
        root.style.setProperty("--cor-postit-amarelo", "#eee544");
    }
}