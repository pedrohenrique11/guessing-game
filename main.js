const fistScreen = document.querySelector(".screen1")
const secondScreen =document.querySelector(".screen2")

const handleNumber = Math.round(Math.random() * 10); // Número aleatorio de 1 a 10

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let attempts = 1; 


function handleTryClick(e) {
    e.preventDefault();
    
    const inputNumber = document.querySelector("#inputNumber");
    
    if(Number(inputNumber.value) == handleNumber) {
        toggleScreen()
        
        document.querySelector("h2").innerText = `Acertou em ${attempts} tentativas!`
    }
    inputNumber.value = ""
    attempts++ // Acresenta uma tentativa ao número de tentativas
}
function resetClick() {
    toggleScreen()

    attempts = 1
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', resetClick)

function toggleScreen() {
    secondScreen.classList.toggle("hide") 
    fistScreen.classList.toggle("hide") 
}