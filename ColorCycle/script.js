function getRandomColor()  {
    var letra = "0123456789ABCDEF"
    var color = "#"
    for(let i = 0; i < 6; i++){
        color += letra[Math.floor(Math.random() * 16)]
    }
    cor.style.color = color
    cor.value = color
    return color
}

var caixa = document.querySelector("#color-change")
var play = document.querySelector("#Start")
var end = document.querySelector("#Stop")
var cor = document.querySelector("#color-name")
var pick = document.querySelector("#color-id")
var p = document.querySelector("#verifier")

var hexa = ["#","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","a","b","c","d","e","f"]

pick.addEventListener("keyup", () => {
    var palavra = pick.value
    for(let i =0;i < palavra.length; i++){
        if(hexa.indexOf(palavra[i]) < 0 || palavra.length > 7){
            p.style.backgroundColor = "red"
            p.innerHTML = "<br>ERRO, verifique se está colocando um ID válido"
            play.disabled = true

        } else {
            p.innerHTML = "<br>Continue assim! Logo encontrará a cor que deseja"
            p.style.backgroundColor = "green"
            play.disabled = false
        }
    }
    
})


function start () {
    caixa.style.backgroundColor = getRandomColor()
}



var color;

play.addEventListener("click", () => {
    play.disabled = true
    pick.disabled = true
    if(pick.value == ""){
        color = setInterval(start, 1000)

    } else {
        cor.style.color = pick.value
        cor.value = pick.value
        caixa.style.backgroundColor = pick.value 
        pick.value = ""
    }
})

end.addEventListener("click", () => {
    pick.disabled = false
    play.disabled = false
    clearInterval(color)
})