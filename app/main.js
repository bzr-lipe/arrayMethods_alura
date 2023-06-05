let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi();
// async significa que essa função só rodará quando ela receber a promessa (pois poderia acontecer de demorar muito para receber os dados da api, então para não deixar o codigo lento, usamos o async)

async function getBuscarLivrosDaApi() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)
    
    exibirLivros(livrosComDesconto)
}


