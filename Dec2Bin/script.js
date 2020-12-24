//canvas
var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.style.border = "1px solid black"

canvas.width = window.innerWidth
canvas.height = 250

var bin

//inputs

var number
var h = document.querySelector("#bin")
var getBin = document.querySelector("#getBin").addEventListener("click", () => {
    number = Number(document.querySelector("#number").value) 
    bin = transform(number)
    h.innerHTML = `${number} = ${bin}`
    animate()
})

var increment = 0;


function transform(dec) {
    let bin = ""
    while(dec !== 0) {
        let div = dec / 2
        if(Number.isInteger(div)) {
            bin += "0"
        } else {
            bin += "1"
        }
        dec = Math.floor(div)
    }
    return bin.split("").reverse().join("")
}

document.querySelector("#one").addEventListener("click", () => {
    increment = 1
    

})

document.querySelector("#Mone").addEventListener("click", () => {
    increment = -1
})




function animate() {
    requestAnimationFrame(animate)
    number += increment
    increment = 0
    bin = transform(number)
    h.innerHTML = `${number} = ${bin}`
    c.clearRect(0, 0, canvas.width, canvas.height)
    for(let i in bin) {
        c.beginPath()
        let radius = (canvas.width / bin.length) / 13
        c.arc(((radius  * (i + 1)) / 2) + 435, canvas.height / 2, radius, 0, Math.PI * 2, false)
        if(bin[i] == "1") {
            c.fillStyle = "black"
            c.fill()
        } else {
            c.strokeStyle = "black"
            c.stroke()
        }
      
    }
}