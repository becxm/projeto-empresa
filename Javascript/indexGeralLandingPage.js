document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links da navegação
    const navLinks = document.querySelectorAll('nav a');
    
    // Adiciona o evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();
            
            // Obtém o ID da seção alvo (remove o # do href)
            const targetId = this.getAttribute('href').substring(1);
            // Seleciona o elemento alvo pelo ID
            const targetElement = document.getElementById(targetId);
            
            // Verifica se o elemento existe
            if (targetElement) {
                // Calcula a posição do elemento alvo
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                // Rolagem suave
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Também adiciona rolagem suave para o botão de orçamento na seção hero
    const ctaButton = document.querySelector('.hero .btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

const hamburger =  document.querySelector(".hamburger");

const nav = document.querySelector("#navbar");
  
hamburger.addEventListener("click", () => nav.classList.toggle("active"));