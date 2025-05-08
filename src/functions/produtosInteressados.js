
  function filtrarProdutosComInteressados() {
    const mostrarApenasComInteressados = document.getElementById("form-filter-2").checked;
    const produtos = document.querySelectorAll(".product-list-grid");

    produtos.forEach((produto) => {
      const temInteressados = produto.querySelector('a[href="./ofertasRecebidas.html"]') !== null;
      
      if (mostrarApenasComInteressados) {
        if (temInteressados) {
          produto.classList.remove("hidden");
        } else {
          produto.classList.add("hidden");
        }
      } else {
        produto.classList.remove("hidden");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const filtros = document.querySelectorAll('input[name="form-filter"]');
    filtros.forEach((filtro) => {
      filtro.addEventListener("change", filtrarProdutosComInteressados);
    });

    if (document.getElementById("form-filter-2").checked) {
      filtrarProdutosComInteressados();
    }
  });
