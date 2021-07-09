    // importar 
const filmes = require('./database')
    //pegar o input
const readLine = require('readline-sync')

const entradaInicial = readLine.question('Deseja escolher um filme? S/N ')

    // Se for sim, mostra as categorias disponíveis e qual categoria quer escolher
    // Se for não, mostra todos os filmes em ordem crescente pelo ID
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('Romance', '/Ação', '/Animação', '/Comedia', '/Crime')

    const entradaCategoria = readLine.question('Qual categoria voce escolhe: ')

    const retorno = filmes.filter(filmes => filmes.categoria === entradaCategoria)

    console.table(retorno)
} else {
    
    const filmesOrdenados = filmes.sort((a,b) => b.ano - a.ano)
    console.log('Esses são os filmes disponíveis')
    console.table(filmesOrdenados)
}

