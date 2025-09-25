const minNumber = document.getElementById("minNumber");
const maxNumber = document.getElementById("maxNumber");
const resetbtn = document.getElementById("reset");
const numberRangeStatement = document.getElementById("numberRangeStatement");
const guessNumber = document.getElementById("guessNumber");
const guessbtn = document.getElementById("guess");
const hint = document.getElementById("hint")

let min;
let max;
let attempt = 0;
function initialValueSet(){
    min = parseInt(minNumber.value);
    max = parseInt(maxNumber.value);
    attempt = 1
    console.log(min,max)
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

initialValueSet();
console.log(randomNumber);
resetbtn.onclick = function(){
    initialValueSet();
    numberRangeStatement.textContent = `Number has been selected between ${min} and ${max}`;
    hint.textContent =``;
    console.log(randomNumber);
}

guessbtn.onclick = function(){
    if(!guessNumber.value.trim()){
        hint.textContent =`You need to enter number.🙈`
    }
    else if(parseInt(guessNumber.value.trim())>max || parseInt(guessNumber.value.trim())< min){
        hint.textContent =`Your number should be between ${min} and ${max} 🫨`;
    }
    else{
        let guessNo = parseInt(guessNumber.value.trim())
        if( guessNo === randomNumber){
            hint.textContent = `You entered correct number in ${attempt} attempt(s). ✅`
        }
        else if( guessNo < randomNumber){
            hint.textContent = `😕 Try Higher number. 🔼`
            attempt++;
        }
        else{
            hint.textContent = `😕 Try Lower number. 🔽`
            attempt++;
        }     
    }   
}
