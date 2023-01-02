let chords = ["C", "C#", "D", "D#", "F", "G", "G#", "A", "A#", "B"]
let alterations = ["m", "7", "7+", "dim", "9", "aum", "sus4", "11", "6", "9b", "#11"]
let genre = ["Jazz", "Samba", "Blues", "Bossa Nova", "Country", "Pop", "Eletronic"]
let manyChords = 3

let rangeInput = document.querySelector("#counter")

rangeInput.addEventListener("input", () => {
    manyChords = Number(rangeInput.value)
    
})

function generateChords(number) {
    console.log(number)
    let order = [chords[Math.floor(Math.random() * chords.length)]]
    let chord
    for(let i = 1 ; i < number; i++) {

        do {
            chord = chords[Math.floor(Math.random() * chords.length)]

        } while(order.includes(chord))
        
        order.push(chord)
    }
    
    
    
    return order

}


document.querySelector(".generate").addEventListener("click", () => {
    let progression = generateChords(manyChords)
    document.querySelector(".genres").textContent = genre[Math.floor(Math.random() * genre.length)]
    document.querySelector(".chords").textContent = progression
})