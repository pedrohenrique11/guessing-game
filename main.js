const handleNumber = Math.round(Math.random() * 10);
let attempts = 1;

function handleClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber) == handleNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        console.log("acertou cabeção!!!")
    }
    else console.log("errou")

    attempts++
}
    
console.log(inputNumber)