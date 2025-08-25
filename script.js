document.addEventListener('DOMContentLoaded', function() {
    // Sistema de abas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Função para alternar abas
    function switchTab(tabName) {
        // Remove classe active de todos os botões e conteúdos
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adiciona classe active ao botão e conteúdo correspondentes
        document.querySelector(`.tab-button[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(tabName).classList.add('active');
        
        // Salva a aba atual no localStorage
        localStorage.setItem('lastActiveTab', tabName);
    }
    
    // Adiciona evento de clique a todos os botões de aba
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Verifica se há uma aba salva no localStorage
    const lastActiveTab = localStorage.getItem('lastActiveTab');
    if (lastActiveTab) {
        switchTab(lastActiveTab);
    }
    
    // Efeito de digitação no título (opcional)
    const title = document.querySelector('h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Inicia a animação de digitação
    typeWriter();
    
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efeito de parallax no header (opcional)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        document.querySelector('header').style.backgroundPosition = `0px ${rate}px`;
    });
});