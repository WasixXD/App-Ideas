let img = document.querySelector(".imgMeal")
let title = document.querySelector(".modal-title")
let instructions = document.querySelector(".instructions")
let ingredients = document.querySelector(".ingredients")

let favorite = document.querySelector("#favoriteButton")
let favoriteDiv = document.querySelector(".favoriteDiv")
let favoriteListData = []
let favoriteListDiv = []
let data

let nx = document.querySelector("#next")
let pv = document.querySelector("#previous")




function haveKey(object, value) {
   
    for(let x in object) {
        let list = Object.values(object[x])
        
        for(let i in list) {
            if(list[i] == value) {
                return true
            }
        }
    }
    
    return false
}

favorite.addEventListener("click", () => {
    setFavorite()
})




nx.addEventListener("click", () => {
    getFood()
})

pv.addEventListener("click", ()=> {
    getFood()
})

function setFood(food) {
    data = food
    img.setAttribute("src", food.strMealThumb)
    title.innerHTML =  `<h1><strong> ${food.strMeal} </strong></h1>`
    ingredients.innerHTML = ""
    ingredients.appendChild(getIngredientsAndMeasure(food))
    instructions.innerHTML = food.strInstructions
}


function displayFavorite() {
    for(let i in favoriteListDiv) {
        favoriteListDiv[i].addEventListener("click", () => {
            setFood(favoriteListData[i])
        })
    }
}


function setFavorite() {
    
    if(!haveKey(favoriteListData, data.strMeal) && favoriteListData.length < 8) {
        let favoriteImg = document.createElement("img")
    
        favoriteImg.setAttribute("src", data.strMealThumb)
        favoriteImg.style.width = "5rem"
        favoriteImg.style.height = "5rem"
        favoriteImg.style.borderRadius= "100%"
        favoriteImg.style.margin = ".5rem"
    

        favoriteDiv.appendChild(favoriteImg)
        favoriteListData.push(data)
        favoriteListDiv.push(favoriteImg)
    }
    displayFavorite()
    
}





function getIngredientsAndMeasure(data) {
    let ingredientsList = []
    let measures = []
   

    for(let i = 1; i < 21; i++) {
        
        if(data[`strIngredient${i}`] != "") {
            ingredientsList.push(data[`strIngredient${i}`])
            measures.push(data[`strMeasure${i}`])
        }
    }
    let ind = 1
    let ul = document.createElement("ul")
    for(let i in ingredientsList) {
        let li = document.createElement("li")
        if(ingredientsList[i] != ""){
            li.appendChild(document.createTextNode(`${measures[i]} ${ingredientsList[i]}`))
            ul.appendChild(li)

        }
        ind++
    }
    return ul
}


function getFood() {

    img.setAttribute("src", "./load.gif")
    
    

    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((message) => {
        
        data = JSON.parse(message.request.response).meals[0]
        
        
        
        setFood(data)

     

    })
    .catch((err) => {
        if(err) throw err
    })
}



getFood()