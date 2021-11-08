function fazerAcao(nome, idade){
    var principal =document.getElementById("principal");

    var texto = prompt("Qual seu sobrenome");

    principal.innerHTML= nome+" "+ texto+" tem "+idade+" anos" ;

}