function adicionaritem(){
    var item = document.getElementById("acao").value;

    var listahtml= document.getElementById("lista").innerHTML;

    listahtml= listahtml +"<li>"+item+"</li>"

    document.getElementById("lista").innerHTML = listahtml;
}