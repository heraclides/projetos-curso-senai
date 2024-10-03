//Respostas Exercício 1
const listaTarefas = document.querySelector('#tarefas');

const novaTarefa = document.createElement('li');
novaTarefa.textContent = 'Estudar JavaScript';
listaTarefas.insertBefore(novaTarefa, listaTarefas.firstChild);

const segundaTarefa = listaTarefas.children[2]; 
const novaTarefaTreino = document.createElement('li');
novaTarefaTreino.textContent = 'Ir ao treino';
listaTarefas.replaceChild(novaTarefaTreino, segundaTarefa); 


const tarefaFinal = document.createElement('li');
tarefaFinal.textContent = 'Fazer compras online';
listaTarefas.appendChild(tarefaFinal);

//Respostas Exercíco 2

const listaCompras = document.querySelector('#compras')

const novoItem = document.createElement('li')
novoItem.textContent = 'Pão'
listaCompras.insertBefore(novoItem, listaCompras.children[0])

const segundoItem = listaCompras.children[2]
const ItemManteiga = document.createElement('li')
ItemManteiga.textContent = 'Manteiga';
listaCompras.replaceChild(ItemManteiga, segundoItem)

const itemCafe = document.createElement('li');
itemCafe.textContent = 'Café'
listaCompras.appendChild(itemCafe)

//Resposta Exercício 3
const galeria = document.querySelector("#galeria")

const novaImagem = document.createElement('li')
novaImagem.textContent = 'imagem 0';
galeria.insertBefore(novaImagem, galeria.firstChild)

const imagem2 = galeria.children[2];
const imagem3 = document.createElement('li');
imagem3.textContent = 'imagem 3';
galeria.replaceChild(imagem3, imagem2)

const imagem4 = document.createElement('li');
imagem4.textContent = 'imagem 4';
galeria.appendChild(imagem4)

//respostas exercício 4

const listaPratos = document.querySelector('#menu');

const novaSalada = document.createElement('li');
novaSalada.textContent = 'Salada de Frutas';
listaPratos.insertBefore(novaSalada, listaPratos.firstChild);

const segundoPrato = listaPratos.children[2]; 
const prato3 = document.createElement('li');
prato3.textContent = 'Escondidinho de Carne';
listaPratos.replaceChild(prato3, segundoPrato); 

const novoSorvete = document.createElement('li');
novoSorvete.textContent = 'Sorvete de Chocolate';
listaPratos.appendChild(novoSorvete); 


const pratoEspecial = document.createElement('li');
pratoEspecial.textContent = 'Peixe Grelhado' 
listaPratos.insertBefore(pratoEspecial, listaPratos.firstChild); 
pratoEspecial.parentNode.removeChild(pratoEspecial);