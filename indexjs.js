const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector (".mensaje");
const reiniciar = document.querySelector (".reiniciar")
let parrafo = document.querySelector (".parrafo");


let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    parrafo.textContent = "";
    
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0]))
        {
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }  
    return stringEncriptado; 
}

function botondesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    parrafo.textContent = "¡Desencriptado con exito!";
    
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1]))
        {
            stringDesencriptado=stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }  
    return stringDesencriptado;
}


function botonCopiar() {
    const textoCopiar = document.getElementById ("mensaje")
    navigator.clipboard.writeText(mensaje.value)
    return;
}

function botonReiniciar () {
    location.reload();
}

