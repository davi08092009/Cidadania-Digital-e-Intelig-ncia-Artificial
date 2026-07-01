document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Funcionalidade: Modo Escuro (Acessibilidade)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = 'Acessibilidade: Modo Claro';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = 'light';
        
        if (document.documentElement.getAttribute('data-theme') !== 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.textContent = 'Acessibilidade: Modo Claro';
            theme = 'dark';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggleBtn.textContent = 'Acessibilidade: Modo Escuro';
        }
        
        localStorage.setItem('theme', theme);
    });

    // ==========================================
    // 2. Funcionalidade: Validador do Quiz Anti-Desinformação
    // ==========================================
    const quizForm = document.getElementById('quiz-form');
    const feedbackBox = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(quizForm);
        const selectedAnswer = formData.get('quiz-answer');

        feedbackBox.classList.remove('hidden', 'correct', 'incorrect');

        if (selectedAnswer === 'correta') {
            feedbackBox.textContent = '✅ Resposta correta! Investigar e checar fatos antes de compartilhar é a melhor arma para combater deepfakes e desinformação.';
            feedbackBox.classList.add('correct');
        } else {
            feedbackBox.textContent = '❌ Resposta incorreta! Compartilhar sem checar ou aceitar mídias cegamente espalha a desinformação automatizada gerada por IA.';
            feedbackBox.classList.add('incorrect');
        }
    });
});
