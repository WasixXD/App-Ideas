let button = document.querySelector("#create")
let input = document.querySelector("#pass")
let copy = document.querySelector("#copy")

function createPassword() {
    let length = Number(document.querySelector("#length").value) - 1
    let lower = document.querySelector("#lower").checked
    let upper = document.querySelector("#upper").checked
    let numeric = document.querySelector("#num").checked
    let symbol = document.querySelector("#sym").checked

    let lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let numericList = [1,2,3,4,5,6,7,8,9]
    let symbolList = ["\\", "/", "!", "@", "#", "$", "%", "&",  "*", "(", ")", "{", "}", ",", ".", "[", "]", "?", "+", "-", "=", "_", ";", ":", "<", ">", "^", "`", "´", "~"]


    let password = ""
    if(typeof length == "number") {
       while(password.length <= length) {
        let choice = Math.floor(Math.random() * 11) / 10
        
        if(choice > 0 && choice <= 0.5 && lower) {
            password += lowerList[Math.floor(Math.random() * lowerList.length)]    
        } else if(choice <= 0.7 && upper) {
            password += lowerList[Math.floor(Math.random() * lowerList.length)].toUpperCase()    
        } else if(choice <= 0.8 && numeric) {
            password += numericList[Math.floor(Math.random() * numericList.length)]
        } else if(choice <= 1 && symbol) {
            password += symbolList[Math.floor(Math.random() * symbolList.length)]
        } else {
            password += lowerList[Math.floor(Math.random() * lowerList.length)]    

        }
    }
        return password
     
    } else {
        alert("Only numbers")
    }

    return " "
}


button.addEventListener("click" , () => {
    copy.innerHTML = "COPY"
    input.value = createPassword()
})

copy.addEventListener("click", () => {
    input.select()
    copy.innerHTML = "COPIED"
    document.execCommand("copy")
    
})