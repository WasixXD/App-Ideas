function appendWord(word) {
    let container = document.querySelector("#app")

    let article = document.createElement("article")
    article.className = "message is-white box"

    let divHeader = document.createElement("div")
    divHeader.className ="message-header"

    let title = document.createElement("p")
    title.className = "title"
    title.appendChild(document.createTextNode(`${word.word} - ${word.meanings[0].partOfSpeech}`))

    let divContent = document.createElement("div")
    divContent.className = "message-body"

    let subtitle = document.createElement("p")
    subtitle.className = "subtitle"
    subtitle.appendChild(document.createTextNode(word.origin))

    let ol = document.createElement("ol")
    ol.type = "1"
    ol.className = "subtitle"
    for(let i in word.meanings[0].definitions) {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(word.meanings[0].definitions[i].definition))
        ol.appendChild(li)
    }

    divContent.appendChild(subtitle)
    divContent.appendChild(ol)

    divHeader.appendChild(title)

    article.appendChild(divHeader)
    article.appendChild(divContent)

    container.appendChild(article)
}


let input = document.querySelector(".input")

input.addEventListener("keydown",async (keycode) => {
    let code = keycode.code
    if(code == "Enter") {
        let word = document.querySelector(".input").value
        let language = document.querySelector("#language").value

        let url = `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
        let response = await fetch(url)
        let [result] = await response.json()

        appendWord(result)
    }
})
