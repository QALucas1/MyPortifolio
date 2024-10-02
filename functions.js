// Função para exibir uma seta para voltar ao topo da página
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementsByClassName('material-symbols-outlined')[0]; // Acesse o primeiro elemento
    
    // Mostrar ou esconder o botão ao rolar a página
        window.onscroll = function() {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        };
    
        // Função para voltar ao topo
        backToTopButton.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    });