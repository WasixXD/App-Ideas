//Pegar cada canto
var topl = document.querySelector("#top-left")
var botl = document.querySelector("#bottom-left")

var topr = document.querySelector("#top-right")
var botr = document.querySelector("#bottom-right")

//Organiza-los numa lista
lista = [topl, botl, topr, botr]

div = document.querySelector(".border-custom")
text = document.querySelector("#copy-css")


//executar a função para cada item da lista 
for(let i = 0; i < lista.length; i++){
    
    lista[i].addEventListener("keyup", () => {
        div.style.borderRadius = `${Number(lista[0].value)}px ${Number(lista[2].value)}px ${Number(lista[3].value)}px ${Number(lista[1].value)}px`
        text.value = `border-radius:${Number(lista[0].value)}px ${Number(lista[2].value)}px ${Number(lista[3].value)}px ${Number(lista[1].value)}px;`
        //Sim tenho vergonha mais não achei outra maneira :(
        if(Number(lista[0].value) > 0){
            text.value += `\nborder-top-left-radius: ${Number(lista[0].value)}px;` 
        }

        if(Number(lista[1].value) > 0){
            text.value += `\nborder-bottom-left-radius: ${Number(lista[1].value)}px;` 
        }

        if(Number(lista[2].value) > 0){
            text.value += `\nborder-top-right-radius: ${Number(lista[2].value)}px;` 
        }

        if(Number(lista[3].value) > 0){
            text.value += `\nborder-bottom-right-radius: ${Number(lista[3].value)}px;` 
        }

    })
   
}