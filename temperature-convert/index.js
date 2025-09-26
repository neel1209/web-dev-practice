const inputtext = document.getElementById("inputtext");
const fromRadios = document.querySelectorAll('input[name ="from"]');
const toRadios = document.querySelectorAll('input[name = "to"]');
const result = document.getElementById("result");
const convertbtn = document.getElementById("convertbtn");
const fromWarning = document.getElementById("fromWarning");
const toWarning = document.getElementById("toWarning");
const inputWarning = document.getElementById("inputWarning");

convertbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let fromSelectedValue;
    let toSelectedValue;
    let inputValue = parseFloat(inputtext.value)
    if(isNaN(inputValue)){
        inputWarning.textContent = "Please enter a valid Number.";
        inputWarning.hidden = false;
    }
    else{
        inputWarning.hidden = true;
    }
    fromRadios.forEach(radio =>{
        if(radio.checked){
            fromSelectedValue = radio.value;
            fromWarning.hidden = true;        
        }
    })
    if(!fromSelectedValue){
       fromWarning.textContent = `You have to select one option.`;
       fromWarning.hidden = false;
    }

    toRadios.forEach(radio =>{
        if(radio.checked){
            toSelectedValue = radio.value;
            toWarning.hidden = true;        
        }
    })
    if(!fromSelectedValue){
       toWarning.textContent = `You have to select one option.`;
       toWarning.hidden = false;
    }
    if(fromWarning.hidden && toWarning.hidden && inputWarning.hidden){
        switch(fromSelectedValue){
            case "celsius":
                switch(toSelectedValue){
                    case "celsius":
                        break;
                    case "fahrenheit":
                        
                }
                break;

            case "fahrenheit":
                break;
            case "kelvin":
                break;
        }
    }
});