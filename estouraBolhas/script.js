function addBolha(){
    var bolha= document.createElement("div");
    bolha.setAttribute("class", "bolha");

    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

    var p1 =Math.floor(Math.random()*500);

    var p2 =Math.floor(Math.random()*400);

    bolha.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;"+"background-color:"+randomColor);
    

    bolha.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bolha);

}

function estourar(objeto){
    document.body.removeChild(objeto);
     
}

function start(){
    setInterval(addBolha, 1000);
}

