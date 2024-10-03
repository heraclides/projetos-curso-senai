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
            document.getElementById('contentSinal').classList.add('active');
            break;
        case 4:
            document.getElementById('contentEstacao').classList.add('active');
            break;

            case 5:
            document.getElementById('contentEnsino').classList.add('active');
            break;

            case 6:
            document.getElementById('contentClima').classList.add('active');
            break;
        default:
            alert("Exercício não encontrado");
    }
}

function verificarCategoria() {
    let codigo = parseInt(document.getElementById('codigoCategoria').value);
    let resultado;
    switch (codigo) {
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

function verificarClima() {
    let codigo = parseInt(document.getElementById('codigoClima').value);
    let resultado;
    switch (codigo) {
        case 1:
            resultado = "Ensolarado";
            break;
        case 2:
            resultado = "Nublado";
            break;
        case 3:
            resultado = "Chuvoso";
            break;
        case 4:
            resultado = "Nevando";
            break;
        case 5:
            resultado = "Ventando";
            break;
        default:
            resultado = "Clima inválido";
            break;
    }
    document.getElementById('resultadoClima').textContent = resultado;
}

function verificarDiaSemana() {
    let numero = parseInt(document.getElementById('numeroSemana').value);
    let resultado;
    switch (numero) {
        case 1:
            resultado = "Domingo";
            break;
        case 2:
            resultado = "Segunda-feira";
            break;
        case 3:
            resultado = "Terça-feira";
            break;
        case 4:
            resultado = "Quarta-feira";
            break;
        case 5:
            resultado = "Quinta-feira";
            break;
        case 6:
            resultado = "Sexta-feira";
            break;
        case 7:
            resultado = "Sábado";
            break;
        default:
            resultado = "Número inválido";
            break;
    }
    document.getElementById('resultadoDiaSemana').textContent = resultado;
}

function verificarSinal() {
    let codigo = parseInt(document.getElementById('codigoSinal').value);
    let resultado;
    switch (codigo) {
        case 1:
            resultado = "Verde";
            break;
        case 2:
            resultado = "Amarelo";
            break;
        case 3:
            resultado = "Vermelho";
            break;
        default:
            resultado = "Código inválido";
            break;
    }
    document.getElementById('resultadoSinal').textContent = resultado;
}

function verificarEstacao() {
    let codigo = parseInt(document.getElementById('codigoEstacao').value);
    let resultado;
    switch (codigo) {
        case 1:
            resultado = "outono";
            break;
        case 2:
            resultado = "primavera";
            break;
        case 3:
            resultado = "verão";
            break;
        case 4:
            resultado = "inverno";
            break;
        default:
            resultado = "Código inválido";
            break;
    }
    document.getElementById('resultadoEstacao').textContent = resultado;
}

function verificarEscolaridade() {
    let codigo = parseInt(document.getElementById('codigoEnsino').value);
    let resultado;
    switch (codigo) {
        case 1:
            resultado = "Ensino Fundamental";
            break;
        case 2:
            resultado = "Ensino Médio";
            break;
        case 3:
            resultado = "Ensino Superior";
            break;
        case 4:
            resultado = "Pòs-graduação";
            break;
        default:
            resultado = "Nível Inválido";
            break;
    }
    document.getElementById('resultadoEscolaridade').textContent = resultado;
}