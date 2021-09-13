/*após o carregamento dos elementos HTML na página 
execute as funções dentro de window.onload*/
window.onload = function () {


}

/*a Constante buttonCreateListAssignment recebe a Tag HTML refenre 
ao Button no documento HTML. A mesma é capturada pelo método 
getElementById por meio do id da tag buttom 
*/
const buttonCreateListAssignment = document.getElementById('criar-tarefa');
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
function criateElementLI(ev) {
    let containerList = document.querySelector('.tarefas');
    let listItem = document.createElement('li');
    listItem.setAttribute("class", "lista-itens")
    listItem.addEventListener("click",functionColor);
    listItem.innerText += document.querySelector('#texto-tarefa').value;
    containerList.appendChild(listItem);
}

/********INICIO FUNÇÃO BACKGROUND******/
function functionColor(event){

eventTarget=document.querySelectorAll('.lista-itens');

alert('escuta colocada:'+eventTarget)

for (let i = 0; i < eventTarget.length; i++) {
    eventTarget[i].style.backgroundColor="transparent";
    
    
}

//event.target.style.backgroundColor="transparent";
event.target.style.backgroundColor="rgb(128, 128, 128)";

}





