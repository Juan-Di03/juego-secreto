let secretNumber = 0;
let counter = 0;
let numberList = [];
let maxNumber = 10;

function asignarTextoElemento(element, text){
    let HTMLElement = document.querySelector(element);
    HTMLElement.innerHTML = text;
    return;
}

function initialConditions(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Ingresa un número del 1 al ${maxNumber}`);
    secretNumber = getSecretNumber();
    counter = 1;
}

function verificarIntento() {
    userNumber = parseInt(document.getElementById("valueUser").value);
    if (userNumber == secretNumber) {
    asignarTextoElemento("p",`Felicitaciones, hacertaste el número secreto lo hisite en ${counter} ${(counter === 1) ? "intento": "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(userNumber > secretNumber){
            asignarTextoElemento("p", "El número secreto es menor");
            counter++;
        }
        else if(userNumber < secretNumber){
            asignarTextoElemento("p", "El número secreto es mayor");
            counter++;
        }    
        else{
            asignarTextoElemento("p", `No ingresaste ningun número, por favor ingresa un numero del 1 al ${maxNumber}`);
        }
        celanBox();
    }
    return;
}

function celanBox(){
    document.querySelector("#valueUser").value = ""; //El # permite obtener la id del elemento sin usar get element by id
}

function getSecretNumber() {
    let numberGenerated = Math.floor(Math.random()*maxNumber)+1;

    console.log(numberGenerated);
    console.log(numberList);
    if(numberList.length == maxNumber){
        asignarTextoElemento("p", "Se han adivinado todos los números posibles :D");
    }

    else {

        if(numberList.includes(numberGenerated)){
            return getSecretNumber();
        }

        else{
            numberList.push(numberGenerated);
            return numberGenerated;
        }
    }
}

function resetGame(){
    celanBox();
    initialConditions();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

initialConditions();
