document.addEventListener("DOMContentLoaded", function() {
  const botoesLixeira = document.querySelectorAll('.fa-trash');
  
  botoesLixeira.forEach(botao => {
      botao.addEventListener('click', function(e) {
          e.preventDefault();
          
          if(confirm('Tem certeza que deseja remover este produto?')) {
              const produto = this.closest('.product-list-grid');
              
              produto.style.transition = 'opacity 0.3s ease';
              produto.style.opacity = '0';
              
              setTimeout(() => {
                  produto.remove();
              }, 300);
          }
      });
  });
});