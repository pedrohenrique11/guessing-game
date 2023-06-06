const fistScreen = document.querySelector(".screen1")
const secondScreen =document.querySelector(".screen2")

const handleNumber = Math.round(Math.random() * 10); // Número aleatorio de 1 a 10

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let attempts = 1; // Tentativas


function handleTryClick(e) {
    e.preventDefault();
    
    const inputNumber = document.querySelector("#inputNumber");
    
    if(Number(inputNumber.value) == handleNumber) {
        fistScreen.classList.add("hide") // adicionando classe .hide
        secondScreen.classList.remove("hide") // removendo a classe .hide
        
        document.querySelector("h2").innerText = `Acertou em ${attempts} tentativas!`
    }
    inputNumber.value = ""
    attempts++ // Acresenta uma tentativa ao número de tentativas
}
function resetClick() {
    secondScreen.classList.add("hide") // adicionando classe .hide
    fistScreen.classList.remove("hide") // removendo a classe .hide

    attempts = 1
}


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', resetClick)