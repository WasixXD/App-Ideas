var button = document.querySelector("#search")

var app = document.querySelector(".app")


button.addEventListener("click", () => {
    var input = document.querySelector("#name").value

    var ul = document.createElement("ul")

    var h2 = document.createElement("h2")
    h2.appendChild(document.createTextNode(input))
    
    ul.appendChild(h2)

    //use axios to get all the information that i need
    axios.get(`https://api.github.com/users/${input}/repos`).then((message) =>{

        //get the JSON data
        var num = message.data.length
        var data = message.data
        
        
        //put in HTML
        for(let i = 0; i < num; i++){
            var link = message.data[0].html_url

            var a = document.createElement("a")
            a.setAttribute("href", link)
            a.appendChild(document.createTextNode(data[i].name))

            var li = document.createElement("li")
            li.appendChild(a)
    
            ul.appendChild(li)
    
            app.appendChild(ul)
        }
        
    }).catch((error) =>{
        console.warn("ERRO" + error)
    })

    
    
})