//******************************************* */
//Fonte de Pesquisa:
//https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//https://www.ti-enxame.com/pt/javascript/como-posso-remover-um-estilo-adicionado-com-funcao-.css/970783861/
//https://www.w3schools.com/
//https://www.horadecodar.com.br/2020/01/08/como-riscar-uma-palavra-com-css/
//********************************************* */
//Implementação: Tonis Torres
//********************************************* */


/*após o carregamento dos elementos HTML na página 
execute as funções dentro de window.onload*/
window.onload = function () {


}

/*a Constante buttonCreateListAssignment recebe a Tag HTML refenre 
ao Button no documento HTML. A mesma é capturada pelo método 
getElementById por meio do id da tag buttom 
*/
const buttonCreateListAssignment = document.getElementById('criar-tarefa');
const buttonClearList = document.getElementById('apaga-tudo');

let eventTarget;

/*a variável capitura a Tag HTML onde se encontra o texto que será 
digitado pelo usuario para ser adicionada na lista de tarefas*/
let caputeTextAssignment = document.getElementById('texto-tarefa');


/********* INICIO ESCUTA E FUNÇÃO ADICIONAR TAREFAS A LISTA ****** */
buttonCreateListAssignment.addEventListener("click", addAssignment);

function addAssignment() {
    criateElementLI();
    caputeTextAssignment.value = "";
}

/** INICIO CRIA ELEMENTO LI E CAPTURA O VALOR DIGITADO ADICIONA LISTA **/
function criateElementLI() {
    let containerList = document.querySelector('.tarefas');
    let listItem = document.createElement('li');
    listItem.setAttribute("class", "lista-itens")
    listItem.addEventListener("click", functionColor);
    listenDuploClick();
    listItem.innerText += document.querySelector('#texto-tarefa').value;
    containerList.appendChild(listItem);
}

/********INICIO FUNÇÃO BACKGROUND******/
function functionColor(event) {
    eventTarget = document.querySelectorAll('.lista-itens');
    for (let i = 0; i < eventTarget.length; i += 1) {
        eventTarget[i].style.backgroundColor = "transparent";
    }
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

/*******INICIO FUNÇÃO APAGA TUDO***************  */
function clearAllToDoList() {
    let containerListAll = document.querySelectorAll('.tarefas');
    for (let i = 0; i < containerListAll.length; i += 1) {
        containerListAll[i].innerHTML = "";
    }
}

/*********INICIO ESCUTA DA FUNÇÃO APAGA TUDO **************/

buttonClearList.addEventListener("click", clearAllToDoList)
function listenDuploClick() {
    let elementClass = document.querySelectorAll('.tarefas');
    for (let i = 0; i < elementClass.length; i++) {
        elementClass[i].addEventListener("dblclick", functionScratched)
    }
}

/***FUNCIONALIDADE MARCA COMO SELECIONADO OU DESMARCA COM DUPLO CLICK */
function functionScratched() {
    let elementClass = document.querySelector('.tarefas');

    if (event.target.getAttribute("class") === "lista-itens") {
        event.target.setAttribute("class", "completed");
    } else {
        event.target.setAttribute("class", "lista-itens");
    }

}

/**FUNCIONALIDADE APAGA TODOS SELECIONADOS */
let buttonRemoveEnd = document.querySelector('#remover-finalizados');
buttonRemoveEnd.addEventListener("click", clearAllSelected);
function clearAllSelected() {
    let elementClass = document.querySelectorAll('.completed');
    for (let i = 0; i < elementClass.length; i += 1) {
        if (elementClass[i].getAttribute("class") === "completed") {
            elementClass[i].remove();
        }
    }
}