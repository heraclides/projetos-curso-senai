const columns = document.querySelectorAll(".column_cards");
const cards = document.querySelectorAll('.card');

let draggedCard;
let moveCount = 0; // Variável para contar as movimentações
const moveCounterElement = document.getElementById("moveCounter"); // Elemento do contador

const dragStart = (event) => {
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = 'move';
};

const dragOver = (event) => {
    event.preventDefault();
};

const dragEnter = (event) => {
    const target = event.target;
    if (target.classList.contains("column_cards")) {
        target.classList.add("column_highLight");
    }
};

const dragLeave = (event) => {
    const target = event.target;
    if (target.classList.contains("column_cards")) {
        target.classList.remove("column_highLight");
    }
};

const getCardCount = (column) => {
    return column.querySelectorAll('.card').length;
};

const drop = (event) => {
    const target = event.target;
    const currentCardCount = getCardCount(target);
    // const isThirdColumn = Array.from(columns).indexOf(target) === 0;
    // const maxCards = isThirdColumn ? 4 : 6 ;

     const maxCards = 6;

     // Verifica se o card arrastado é o último card da coluna de origem
     const sourceColumn = draggedCard.parentElement;
     const isLastCard = draggedCard === sourceColumn.lastElementChild;

     if (target.classList.contains("column_cards") && isLastCard) {
         if (currentCardCount < maxCards) {
             target.classList.remove("column_highLight");
             target.append(draggedCard);
             moveCount++;
             moveCounterElement.textContent = moveCount; // Atualiza o contador na interface
             updateCardCount();
         } else {
            alert('Limite de cards atingido nesta coluna.');
            }
        } else {
            alert('Somente o último card pode ser movido.');
        }
};

const updateCardCount = () => {
    columns.forEach((column) => {
        const cardCount = getCardCount(column);
        console.log(`Quantidade de cards na coluna: ${cardCount}`);
    });
};

const creatCards = (event) => {
    const target = event.target;
    if (target.classList.contains("column_cards")) return;

    const card = document.createElement("section");
    card.className = "card";
    card.draggable = "true";
    card.contentEditable = "true";

    card.addEventListener("focusout", () => {
        card.contentEditable = "false";
        if (!card.textContent) card.remove();
        updateCardCount();
    });

    card.addEventListener("dragstart", dragStart);
    target.append(card);
    card.focus();
    updateCardCount();
};

cards.forEach((card) => {
    card.addEventListener("dragstart", dragStart);
});

columns.forEach((column) => {
    column.addEventListener("dragover", dragOver);
    column.addEventListener("dragenter", dragEnter);
    column.addEventListener("dragleave", dragLeave);
    column.addEventListener("drop", drop);
    column.addEventListener("dblclick", creatCards);
});

updateCardCount();