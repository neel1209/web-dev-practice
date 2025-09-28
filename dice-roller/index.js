const inputValue = document.getElementById('inputValue');
const rollDiceBtn = document.getElementById('rollDiceBtn');
const result = document.getElementById('result');
const pictureOfDice =document.getElementById('pictureOfDice');

rollDiceBtn.addEventListener("click", () =>{
    let values = [];
    let diceImages = [];
    for(let i = 1; i<=(inputValue.value); i++){
        let value = Math.floor((Math.random() * 6) + 1);
        values.push(value);
        diceImages.push(`<img src="assets/${value}.png" alt="${value}"></img>`)
    }
    result.textContent = "Dice : ";
    pictureOfDice.innerHTML = "";
    result.textContent = `Dice : ${values.join(", ")}`;
    pictureOfDice.innerHTML = diceImages.join("");
});