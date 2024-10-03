
function mudarDiv(exercicio) {
    // Oculta todas as divs
    document.querySelectorAll('.content').forEach(div => div.classList.remove('active'));
    
    // Mostra a div correspondente ao exercício selecionado
    switch (exercicio) {
        case 1:
            document.getElementById('categoria').classList.add('active');
            break;
        case 2:
            document.getElementById('diaSemana').classList.add('active');
            break;
        case 3:
            document.getElementById('sinalTransito').classList.add('active');
            break;
        case 4:
            // Implementar o conteúdo para o Exercício 4
            break;
        case 5:
            // Implementar o conteúdo para o Exercício 5
            break;
        default:
            alert("Exercício não encontrado");
    }
}

function verificarCategoria() {

    let valor = parseInt(document.getElementById('codigoCategoria').value) ;

    let resultado;

    switch (valor){
        case 1:
            resultado = "Categoria: Eletrônicos";
            break;
        case 2:
            resultado = "Categoria: Roupas";
            break;
        case 3:
            resultado = "Categoria: Alimentos";
            break;
        case 4:
            resultado = "Categoria: Móveis";
            break;
        case 5:
            resultado = "Categoria: Brinquedos";
            break;
        default:
            resultado = "Código inválido";
            break;
    }

    document.getElementById('resultadoCategoria').textContent = resultado;
}

function VerificarDiaSemana() {

    let valor = document.getElementById('numeroSemana').value;

    const numberValue = parseInt(valor);

    switch (numberValue){
     case 1:
        document.getElementById('resultadoDiaSemana').textContent = `o Dia da semana é Domingo`;
        break;
    

    case 2:
        document.getElementById('resultadoDiaSemana').textContent = `o dia da semana é segunda`
        break;

    case 3:
        document.getElementById('resultadoDiaSemana').textContent = `o dia da semana é terça`
        break;

    case 4:
        document.getElementById('resultadoDiaSemana').textContent = `o dia da semana é quarta`
        break;

    case 5:
        document.getElementById('resultadoDiaSemana').textContent = `o dia da semana é quinta`
        break;

    case 6:
        document.getElementById('resultadoDiaSemana').textContent = `o dia da semana é sexta`
        break;

    case 7:
        document.getElementById('resultadoDiaSemana').textContent = `o dia da semana é sábado`
        break;

    default:
        document.getElementById('resultadoDiaSemana').textContent = `voce digitou um número errado  `
        break;  

    }
}

function verificarSinal() {

    let valor = document.getElementById('codigoSinal').value;

    const numberValue = Number(valor);

    switch (numberValue){
     case 1:
        document.getElementById('resultadoCodigoSinal').textContent = `${numberValue} - a cor correspode verde`;
        break;
    

    case 2:
        document.getElementById('resultadoCodigoSinal').textContent = `${numberValue} - a cor corresponde vermelho`
        break;

    case 3:
        document.getElementById('resultadoCodigoSinal').textContent = `${numberValue} - a cor corresponde amarelo`
        break;

        default:
            document.getElementById('resultadoCodigoSinal').textContent = `${numberValue} - cor inválida  `
            break;  

    }
}
