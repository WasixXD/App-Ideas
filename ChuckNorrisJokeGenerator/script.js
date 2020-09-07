let getCategories = (url, method) => {
    const xml = new XMLHttpRequest()

    xml.open(method, url, false)
    xml.send()

    return JSON.parse(xml.response)
}

var allCategories = getCategories('https://api.chucknorris.io/jokes/categories', "GET")


const select = document.querySelector("#category")


var categorie = "random"


for(let i in allCategories){
    let option = document.createElement("option")
    option.setAttribute("value", allCategories[i])

    option.appendChild(document.createTextNode(allCategories[i]))

    select.appendChild(option)
}

select.addEventListener("click", () => {
    categorie = select.value
    
})


let getJokes = (num, url, method) => {
    const xml = new XMLHttpRequest()
    var jokes = []

    for(let i = 0; i <= num; i++) {
        xml.open(method, url, false)
        xml.send()
        jokes.push(JSON.parse(xml.response))
    }

    return jokes
}


let categorieJoke = (num, url, method) => {
    const xml = new XMLHttpRequest()
    var jokes = []

    for(let i = 0; i <= num; i++) {
        xml.open(method, url, false)
        xml.send()
        jokes.push(JSON.parse(xml.response))
    }

    return jokes
}




const button = document.querySelector("#get")
var ul = document.querySelector("#list")

button.addEventListener("click", () => {
    var numberJokes = (document.querySelector("#jokesNumber").value ) - 1
    
    ul.innerHTML = ""

    if(categorie == "random") {
        
        var totalJokes = getJokes(numberJokes, 'https://api.chucknorris.io/jokes/random', "GET")
        for(let joke in totalJokes) {
            var li = document.createElement("li")

            li.appendChild(document.createTextNode(totalJokes[joke].value))

            ul.appendChild(li)
        }
    } else {
        
        var totalJokes = getJokes(numberJokes,`https://api.chucknorris.io/jokes/random?category=${categorie}`,"GET")
        for(let joke in totalJokes) {
            var li = document.createElement("li")

            li.appendChild(document.createTextNode(totalJokes[joke].value))

            ul.appendChild(li)
        }
        

    }
})
