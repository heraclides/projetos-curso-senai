//resposta exercício 1
// try{
    
//     let num = prompt('digite um numero')
//     if(isNaN(num)){
//         throw new Error('o valor digitado não é um Número')
//     }

//     alert('o valor digitado é um numero ')

// }catch(erro){
//     alert(`Erro: ${erro.message}`)
// }

//resposta exercicio 2

// try{
//     //pede para usuário inserir sua idade
//     let idade = prompt('Digite sua idade');

//     //verifica se a idade digitada e um número
//     if(isNaN(idade)){
//         throw new Error('O valor digitado não está correto')
//     }

//     //informa uma mensagem validando a idade mostrando o valor através de concatenação.
//     alert(`idade positiva ${idade} o valor foi inserido corretamente`)
// }catch(erro) {
//     //exibe uma mensagem de erro amigavél
//     alert(`Erro ${erro.message}`)
// }

//resposta exercício 3

try{
    //pede para o usuário digitar HTML
    let palavra = prompt('Digite a palavra HTML')

    //compara se a palavra esta correta considerando letras maiusculas e minusculas
    if(palavra.toLowerCase() !== 'html') {
        throw new Error('Palavra incorreta. Você deve digitar HTML')
    }

    //informa ao usuário que digitou a palavra correta
    alert('A palavra digitada esta correta')

    //mostra o erro para o usuário
}catch(erro) {
    alert(`Erro: ${erro.message}`)
}


//respostas exercício 4
    try{
        palavra = prompt('Digite uma palavra')
        if(palavra !== 'JavaScript'){
            throw new Error('a palavra digitada esta incorreta: Digite JavaScript')
        }

        alert('Você digitou a paklavra correta')
    }catch(erro){
        alert(`Erro: ${erro.message}`)
    }
