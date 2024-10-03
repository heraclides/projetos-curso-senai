console.log("exercicio 1")

const mult = (...rest) => {
    let total = 1

    for (let i = 0; i < rest.length; i++){
        total*= rest;
    }
    return total    
}

console.log(mult(10,20))

console.log('exercicio 2')

const maiorNum = (...rest) =>{
    let maior = rest[0]
     
    for (let numero of rest) {
        if (numero > maior) {
            maior = numero;
        }
}
 return maior 

}
console.log(maiorNum(1,2,3,4,5,6,7))

console.log('exercicio 4')
const sub = (...rest) => {
    let total = rest[0]

  for (num of rest.slice(1)){
    total-= num
  }
    return total    
}
console.log(sub(10,30,-20))

console.log('exercício 4')

const dobrarValores = (...rest) =>{
   const total = [];
    for(dobro of rest){
        total.push(dobro * 2);
    }
     return total
}
   const numeros = [2,5,9]
console.log(`o dobro dos números ${numeros} é ${dobrarValores(...numeros)}`)

console.log ("exercício 5")

const usuarios = ['João', 'Maria', 'Lucas']
const [nome1, nome2, nome3] = usuarios
console.log(`nome 1: ${nome1}, nome 2: ${nome2}, nome3: ${nome3}`)

console.log('exercicio 6')

const livros = [
    {titulo: 'A Segunda Era das Máquinas', autor: 'Erick Brynjolfsson', ano: 2015},
    {titulo: 'O Poder dos Quietos', autor: 'Susan Cain', ano: 2012},
    {titulo: 'Use a Cabeça: Programação', autor: 'Paul Barry', ano: 2010},
];

// Desestruturação
const [primeiroLivro, segundoLivro, {titulo: ultimoLivro}] = livros;

console.log(`O primeiro livro é "${primeiroLivro.titulo}"`); 
console.log(`O último livro é "${ultimoLivro}"`); 
console.log(`O autor do segundo livro é "${segundoLivro.autor}"`); 

console.log('exercício 7')

const produtos = [
    { nome: 'Smartphone', categoria: 'Eletrônicos', quantidadeEmEstoque: 50 },
    { nome: 'Camiseta', categoria: 'Vestuário', quantidadeEmEstoque: 20 },
    { nome: 'Notebook', categoria: 'Eletrônicos', quantidadeEmEstoque: 30 },
    { nome: 'Maçã', categoria: 'Alimentos', quantidadeEmEstoque: 100 },
    { nome: 'Tênis', categoria: 'Vestuário', quantidadeEmEstoque: 15 }
];

const [{ nome: nomePrimeiroProduto }, { quantidadeEmEstoque: quantidadeSegundoProduto, categoria: categoriaSegundoProduto }] = produtos;

console.log(`Nome do primeiro produto: ${nomePrimeiroProduto}`); 
console.log(`Quantidade em estoque do segundo produto: ${quantidadeSegundoProduto}`); 
console.log(`Categoria do segundo produto: ${categoriaSegundoProduto}`); 