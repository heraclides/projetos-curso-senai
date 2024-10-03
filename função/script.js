
function menu() {
    let number = parseInt(document.getElementById('exercicio').value) ;
    switch (number){
        case 1:
            calcProduto();
            break

        case 2:
            dobraNumero();
            break

        case 3:
            verificaPar();
            break

        case 4:
            somaNum();
            break

        case 5:
            soma2();
            break

        case 6:
            subtrair();
            break

        case 7:
            calcQuadrado(`${num = prompt('Digite um número')}`);
            break

        case 8:
            triplicar(`${num = prompt('Digite um número')}`);
            break
            
    default:
        alert('Numero invalido')
    }
}

function calcProduto(){
    alert ('EXERCÍCIO 1 Custo Produto');

    let produto = prompt('Digite o valor do Produto em R$:');  
    let quantidade = prompt('Digite a quantidade do Produto:');

    produto = parseFloat(produto);
    quantidade = parseInt(quantidade);

    alert(`o custo total e de R$ ${produto * quantidade}`);
}

function dobraNumero(){
    alert ('EXERCÍCIO 2 Dobra Número');

    let num = prompt('Digite o valor de um número para o Dobro dele:');
    num = parseFloat(num);

    alert(`o dobro de ${num} é ${num * 2}`);
}

function verificaPar(){
    alert ('EXERCÍCIO 3 Verifica Par');

    let num = prompt('Digite o valor de um número para saber se e par:')
    num = parseFloat(num);

    if(num % 2 === 0){
    alert(`o número ${num} é par`)
    } else {
    alert (`o número ${num} não é par`)
    }
}

function somaNum(){
    alert ('EXERCÍCIO 4 somar números');

    let num1 = prompt('Digite o primeiro número:');  
    let num2 = prompt('Digite o segundo número:');

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    

    alert(`a soma dos números é igual a  ${num1 + num2}`);
}

function soma2(){
    alert ('EXERCÍCIO 5 somar dois numeros');

    let num1 = prompt('Digite o primeiro número:');  
    let num2 = prompt('Digite o segundo número:');
    let num3 = prompt('Digite o terceiro número:');  
    let num4 = prompt('Digite o quarto número:');

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    num4 = parseInt(num4);
    
    alert(`os número digitados foram ${num1}, ${num2}, ${num3}, ${num4}`);
    alert(`a soma dos números ${num2} e ${num3 } é igual a  ${num2 + num3}`);
}

function subtrair(){
    alert ('EXERCÍCIO 6 subtrair dois números');

    let num1 = prompt('Digite o primeiro numero:');  
    let num2 = prompt('Digite o segundo numero:');
    let num3 = prompt('Digite o terceiro numero:');  
    let num4 = prompt('Digite o quarto numero:');

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    num4 = parseFloat(num4);
    
    alert(`os número digitados foram ${num1}, ${num2}, ${num3}, ${num4}`);
    alert(`a diferença dos números ${num4} e ${num1 } é igual a  ${num4 - num1}`);
}


    let calcQuadrado = (num) => {
        alert(`o quadrado e ${num} é igual ${num * num}`)
    }

    let triplicar = (num) => alert(`o triplo de ${num} é igual ${num * 3}`)
    
