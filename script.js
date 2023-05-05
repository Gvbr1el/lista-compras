var contadora = 0

function addNaLista2(input){
    //para capturar o h1 do html e dar o valor que eu quero apenas depois que clicar no botão
    var titulo = document.getElementById("titulo");
    titulo.innerText = "Lista de Compras"

    //capturar a lista do html
    var lista = document.getElementById("listaOrdenada");
    var criarItem;
    //criar os elementos li da lista
    criarItem = document.createElement("li");
    //add o conteúdo de cada item da lista por parâmetro, o conteúdo da lista é pego no on-click do botão
    criarItem.innerText = input;
    //dizer que o item li é filho da lista
    lista.appendChild(criarItem);

    //colorir só as linhas pares
    if(contadora % 2 === 0){
        criarItem.style = "background-color : grey"
    }

    contadora++;
}