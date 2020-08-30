var cesar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function cifraCesar(msg, chave){
    var nova= []

    for(var i = 0; i < msg.length; i++){
        if(msg[i] == " "){
            nova.push(" ")
        }else{
            nova.push(cesar[(chave + cesar.indexOf(msg[i])) % 26])
        
        }
    }
    return nova
}


function desCifra(txt, chave){
    var des = []
    
    for(var i = 0; i < txt.length; i++){
        if(txt[i] == " "){
            des.push(" ")
        }else{
            des.push(cesar[(cesar.indexOf(txt[i]) - chave) % 26])
            
        }
    }
    return des
}

function criptografar(){
    var chaves = Number(document.getElementById("chaves").value)
    var texto = String(document.getElementById("texto").value).toLowerCase()

    var tnovo = document.getElementById("texto2")
    var mensagem = cifraCesar(texto, chaves)
    tnovo.value = mensagem.join("")
}

function descriptografar(){
    var chave = Number(document.getElementById("chave").value)
    var msg =String(document.getElementById("msg").value).toLowerCase()

    var msg2 = document.getElementById("msg2")
    var txtn = desCifra(msg, chave)
    msg2.value = txtn.join("")

}
