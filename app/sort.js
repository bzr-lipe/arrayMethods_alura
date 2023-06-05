const btnOrdenar = document.getElementById('btnOrdenarPorPreco')

btnOrdenar.addEventListener('click', ordenarLivrosPorPreco) 

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}