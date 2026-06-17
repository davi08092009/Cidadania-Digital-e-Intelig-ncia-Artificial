/**
 * Script de Funcionalidades Dinâmicas e Acessibilidade
 * Projeto: Cidadania Digital e Inteligência Artificial (#cidadaniadigital2026)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Funcionalidade: Modo Escuro (Acessibilidade)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Captura preferência anterior guardada no navegador do usuário
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = 'Acessibilidade: Modo Claro';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = 'light';
        
        // Verifica o tema atual e alterna
        if (document.documentElement.getAttribute('data-theme') !== 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = 'Acessibilidade: Modo Claro';
            theme = 'dark';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = 'Acessibilidade: Modo Escuro';
        }
        
        // Salva a escolha do usuário no LocalStorage
        localStorage.setItem('theme', theme);
    });

    // ==========================================
    // 2. Funcionalidade: Validador do Quiz Anti-Desinformação
    // ==========================================
    const quizForm = document.getElementById('quiz-form');
    const feedbackBox = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', (event) => {
        // Previne o recarregamento automático padrão da página
        event.preventDefault();

        // Armazena a opção selecionada usando FormData
        const formData = new FormData(quizForm);
        const selectedAnswer = formData.get('quiz-answer');

        // Limpa classes anteriores do container de feedback
        feedbackBox.classList.remove('hidden', 'correct', 'incorrect');

        // Processa as variáveis e atualiza dinamicamente o DOM de acordo com o resultado
        if (selectedAnswer === 'correta') {
            feedbackBox.textContent = '✅ Resposta correta! Investigar e checar fatos antes de compartilhar é a melhor arma para combater deepfakes e desinformação.';
            feedbackBox.classList.add('correct');
        } else {
            feedbackBox.textContent = '❌ Resposta incorreta! Compartilhar sem checar ou aceitar mídias cegamente espalha a desinformação automatizada gerada por IA.';
            feedbackBox.classList.add('incorrect');
        }
    });
});
