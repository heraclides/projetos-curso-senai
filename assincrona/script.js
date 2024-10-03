//JavaScript Assincrono
//resposta exercicio 1 

const nome = prompt('digite seu nome')

setTimeout(function() {
    alert(`Tenha um otimo Dia ${nome}`)
}, 2000)

//resposta exercício 21

const mult = Promise.resolve(7*3)

console.log('o resultado da multiplicação emtre 7 e 3 é', mult)

mult.then((value) => {
    console.log(`adicionando 5 ao resultado ${value + 5}`)
})

// Resposta exercíccio 3

const frase = prompt("Digite uma Frase")

setTimeout(() => {
    alert(`A frase digitada foi "${frase}"`)
},4000)

// Resposta Exercício 4

const nomeProduto = Promise.resolve(String)
    

nomeProduto
.then((produto) => {
    produto = 'camiseta'
    console.log('o produto digitado foi', produto)
    const quantidade = 3
    return `${quantidade} ${produto}`
})

.then((novoProduto) => {
    console.log(`a quantidade de produto e: ${novoProduto}`)
})

//Resposta exercício 5

const soma = Promise.resolve(3 + 5)

soma
.then((mostrarSoma) => {
    console.log(`a soma de 5 e 3 é: ${mostrarSoma}`)
    return mostrarSoma
})
.then((soma) => {
   const mult = soma * 2
    return mult
})
.then((resultado) => {
    console.log(`o resultado da soma multiplicado por 2 é: ${resultado}`)    
})

//Respostas Exercícios 6

async function multiplicarComDelay(x ,y) {
    return(x*y)
}

multiplicarComDelay(6,7).then((resultado) => {
    alert('o calculo está sendo realizado');
    return resultado
})

.then((resultado) => {
    console.log(`o resultado da multiplicação entre 6 e 7 é: ${resultado}`)
})