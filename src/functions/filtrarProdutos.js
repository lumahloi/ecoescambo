function filtrarProdutos() {
  const mostrarApenasInteressados =
    document.getElementById("form-filter-2").checked;
  const produtos = document.querySelectorAll(".product-list-grid");

  produtos.forEach((produto) => {
    const botao = produto.querySelector("button");
    if (mostrarApenasInteressados) {
      if (botao.textContent === "Tirar interesse") {
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
    filtro.addEventListener("change", filtrarProdutos);
  });

  // Aplicar filtro inicial caso "Só interessados" já esteja marcado
  if (document.getElementById("form-filter-2").checked) {
    filtrarProdutos();
  }
});
