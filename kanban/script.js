const columns = document.querySelectorAll(".column_cards");
const cards = document.querySelectorAll('.card');

//elemento global dos cards
let draggedCard;

//função para iniciar ao mover draggdCard
const dragStart = (event)=>{
    draggedCard = event.target;
    console.log(draggedCard);
    event.dataTransfer.effectAllowed = 'move';
}

//tira o bloqueio ao mover o cursor
const dragOver = (event)=>{
    event.preventDefault();
}

//cria seleção do css azul ao mover em outro card
const dragEnter = ({target})=>{
    if(target.classList.contains("column_cards")){
        target.classList.add("column_highLight")
    }
}

//para não selecionar as duas colunas ao mesmo tempo
const dragLeave = ({target})=>{
    target.classList.remove("column_highLight")
}

//para mover os cards de uma coluna a outra
//para não colocar os cards em cima do outro
const drop = ({target})=>{
    if(target.classList.contains("column_cards")){
        target.classList.remove("column_highLight")
        target.append(draggedCard)
    }
}

//para criar os cards
const creatCards = ({target})=>{
    if(target.classList.contains("column_cards")) return;
    const card = document.createElement("section");

    card.className = "card"
    card.draggable = "true"
    card.contentEditable = "true"

    //quando não estiver no card não selecionar
    card.addEventListener("focusout",()=>{
        card.contentEditable = "false";
        if(!card.textContent) card.remove();
    })

    card.addEventListener("dragstart",dragStart);
    target.append(card);
    //para selecionar quando estiver no card
    card.focus();
}

//para receber cada elemento da lista, criar um evento ao mover;
cards.forEach((card)=>{
    card.addEventListener("dragstart", dragStart);
})

columns.forEach((column)=>{
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dblclick", creatCards);
})


