var game = document.querySelector("#game")
var currentPlayer = document.querySelector("#current-player")
var select = document.querySelector("#game-option")





var cells = []

for(let i = 0; i < 9; i++){
    var div = document.createElement("div")

    cells.push(div)

    game.appendChild(div)
}

var playerTurn = 2
var symbols = ["X", "O"]
var checkWin = ["0","1","2","3","4","5","6","7","8"]
var round = 8


for(let i in cells){
    cells[i].addEventListener("click", () => {        
        vitory(checkWin, playerTurn)        
        if(round == -1 ){
            alert("Empate")
            location.reload()
        }
        
        playerTurn == 2? playerTurn-- : playerTurn++
        currentPlayer.innerHTML = `Jogador ${playerTurn}`       

        if(checkWin[i] != "X" && checkWin[i] != "O"){        
            
            var p = document.createElement("p")
            p.appendChild(document.createTextNode(symbols[playerTurn - 1]))

        
            
        
            checkWin[i] = (symbols[playerTurn - 1])
            cells[i].appendChild(p)
        }
        
        
    
        vitory(checkWin, playerTurn)   
        round--
    } )
}
/*
0 1 2
3 4 5
6 7 8
*/

function vitory(game, player) {
    if(game[0] == game[1] && game[1] == game[2] || game[3] == game[4] && game[4] == game[5] || game[6] == game[7] && game[7] == game[8]){
        alert(`O Jogador ${player} ganhou com uma linha`)
        location.reload()
        return false

    } else if(game[0] == game[3] && game[3] == game[6] || game[1] == game[4] && game[4] == game[7] || game[2] == game[5] && game[5] == game[8]) {
        alert(`O Jogador ${player} ganhou com uma coluna`)
        location.reload()
        return false

    } else if(game[0] == game[4] && game[4] == game[8] || game[2] == game[4] && game[4] == game[6]) {
        alert(`O Jogador ${player} ganhou com uma diagonal`)
        location.reload()
        return false
    }
    return true
}