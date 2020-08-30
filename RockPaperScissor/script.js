//jogada do computador
var escolhas = ["tesoura", "pedra", "papel"]
var jogaComp =""
var vc = 0
//mostrar quem venceu
var res = document.getElementById("res")
var cont = document.getElementById("contador")
//mostrar oq o computador escolheu
var div = document.getElementById("mostrar")
var jogada = document.getElementById("jogada")

//jogada do jogador
var tesoura = 0
var papel = 0
var pedra = 0
var jogador = document.getElementById("aparecer")
var vj = 0
//Não consegui pensar em uma forma melhor de receber o qual figura o jogador escolheu
function etesoura(){
    tesoura++
    jogador.innerHTML = "Escolhi Tesoura"
}
function epapel(){
    papel++
    jogador.innerHTML = "Escolhi Papel"
    
}
function epedra(){
    pedra++
    jogador.innerHTML = "Escolhi Pedra"
   
}

function MosComp(){  
    jogaComp = escolhas[Math.floor(Math.random()*3)]
    var img = document.createElement("IMG")
    img.src = jogaComp+".png"
    div.innerHTML = " "
    div.style.textAlign = "center"
    jogada.innerHTML = `Escolhi ${jogaComp}`
    div.appendChild(img)
      
}

function vitoria(j, c){
    //Jogador == tesoura
    if(j =="tesoura" && c == "pedra"){ 
        res.innerHTML = "Computador ganhou"
        vc += 1
    }else if(j == "tesoura" && c =="papel"){
        res.innerHTML = "Jogador ganhou"
        vj += 1
    }else if(j == "tesoura" && c == "tesoura"){
        res.innerHTML = "Empate"
    }
    //Jogador == pedra
    if(j =="pedra" && c == "pedra"){ 
        res.innerHTML = "Empate"
    }else if(j == "pedra" && c =="papel"){
        res.innerHTML = "Computador ganhou"
        vc += 1
    }else if(j == "pedra" && c == "tesoura"){
        res.innerHTML = "Jogador ganhou"
        vj += 1
    }
    //Jogador == papel
    if(j =="papel" && c == "pedra"){ 
        res.innerHTML = "Jogador ganhou"
        vj += 1
    }else if(j == "papel" && c =="papel"){
        res.innerHTML = "Empate"
    }else if(j == "papel" && c == "tesoura"){
        res.innerHTML = "Computador ganhou"
        vc += 1
    }

}


function escolher(){
    
    MosComp()

    if(tesoura == 1){
        vitoria("tesoura", jogaComp)
        tesoura--
    }else if(pedra == 1){
        vitoria("pedra", jogaComp)
        pedra--
    }else if(papel == 1){
        vitoria("papel", jogaComp)
        papel--
    }else{
        alert("Escolha alguma opção")
    }
    
    cont.innerHTML = `Jogador ${vj}|| Computador ${vc}`
    if(vj + vc == 5){
        alert(`O ganhador foi o ${vj > vc? "Jogador" : "Computador"}`)
        document.location.reload(true)
    }
}