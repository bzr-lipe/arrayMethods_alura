let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi();
const containerLivros = document.getElementById('livros')
// async significa que essa função só rodará quando ela receber a promessa (pois poderia acontecer de demorar muito para receber os dados da api, então para não deixar o codigo lento, usamos o async)

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    exibirLivros(livros)
}

function exibirLivros (listaDeLivros) {
    listaDeLivros.forEach(livro => {
        let preco = livro.preco.toFixed(2)
        containerLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}
