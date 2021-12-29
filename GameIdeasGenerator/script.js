let genres = ["Platform", "Shooter", "Beat'em up", "Stealth", "Survival", "Rhythm", "Battle Royale", "Metroidvania", "Text", "Graphics","Interactive", "Real-time 3D", "Breakout clone", "Action RPG", "MMORPG", "Roguelikes","JRPG", "Moster Tamer", "Contruction and Management", "Life", "Vehicle", "4X", "Artillery", "Auto Battler", "MOBA", "RTS", "RTT", "Turn-based", "Wargame", "Racing", "Fighting"]
let genreLabel = document.querySelector(".genero")


let themes = ["Adventure", "Alchemy", "Aliens", "War", "Ancient", "Animals", "Archaeology", "Assassination", "Baking", "Aviation", "Birds", "Islands", "Books", "Building", "Cars", "Castles", "Celebrities", "Circus", "Cities", "Cooking", "Crime", "Cryptography", "Cyberpunk", "Death", "Detectives", "Dinosaurs", "Dragons", "Dreams", "Dungeons", "Economy", "Escape", "Evolution", "Exploration", "Fantasy", "Winter","Zombies", "Tropical", "Vampires", "Trains", "Time Travel", "Treasure", "Super Heroes", "Super Villains", "Steampunk", "Sports", "Space", "Samurai", "Plants", "Planets", "Middle Age", "Horror"]
let themeLabel = document.querySelector(".tema")

let mechanics = ["Turns", "Action Points", "Auction or Bidding", "Cards", "Capture/Eliminate", "Catch-up","Dice", "Movement", "Resouce Management", "Risk and Reward", "Role-Playing", "Tile-laying", "Worker-Placement", "Game Modes", "Levels", "Progression", "Journey", "Quests", "Loss Aversion", "Badges", "Countdown", "Emotion", "Narrative", "Discovery", "Scaffolding", "Game Rules"]
let mecanicaLabel = document.querySelector(".mecanica")

document.querySelector("button").addEventListener("click", () => {
    genreLabel.innerHTML = genres[Math.floor(Math.random() * genres.length)]
    themeLabel.innerHTML = themes[Math.floor(Math.random() * themes.length)]
    mecanicaLabel.innerHTML = mechanics[Math.floor(Math.random() * mechanics.length)]
}) 