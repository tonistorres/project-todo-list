/*após o carregamento dos elementos HTML na página 
execute as funções dentro de window.onload*/
window.onload = function () {


}

/*a Constante buttonCreateListAssignment recebe a Tag HTML refenre 
ao Button no documento HTML. A mesma é capturada pelo método 
getElementById por meio do id da tag buttom 
*/
const buttonCreateListAssignment = document.getElementById('criar-tarefa');

/*a variável capitura a Tag HTML onde se encontra o texto que será 
digitado pelo usuario para ser adicionada na lista de tarefas*/
let caputeTextAssignment = document.getElementById('texto-tarefa');


/********* INICIO ESCUTA E FUNÇÃO ADICIONAR TAREFAS A LISTA ****** */
buttonCreateListAssignment.addEventListener("click", addAssignment);

function addAssignment() {
    criateElementLI();
    //colar escuta na hora da criação 

    caputeTextAssignment.value = "";
}


/** INICIO CRIA ELEMENTO LI E CAPTURA O VALOR DIGITADO ADICIONA LISTA **/
function criateElementLI(ev) {
    let containerList = document.querySelector('.tarefas');
    let listItem = document.createElement('li');
    /*listItem que é o elemento que está sendo criado. Recebe 
    a query hora setada no input que recebe o valor digitado 
    pelo usuário o value esse valor digitado é adicionado na 
    li criado e colocado na lista 
    */
    listItem.setAttribute("class", "lista-itens")
    
    //colocar escuta de Click nos elementos criados
    listItem.addEventListener("click",functionColor);
    //Recuperando texto digitado pelo usuario
    listItem.innerText += document.querySelector('#texto-tarefa').value;
    //adicionado o elemento criado na lista Ordenada
    containerList.appendChild(listItem);
}

/********INICIO FUNÇÃO BACKGROUND******/
function functionColor(event){
alert('escuta colocada')
document.querySelector('.lista-itens').style.background="rgb(128, 128, 128)";
}





