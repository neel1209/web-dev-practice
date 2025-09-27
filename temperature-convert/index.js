const inputtext = document.getElementById("inputtext");
const fromRadios = document.querySelectorAll('input[name ="from"]');
const toRadios = document.querySelectorAll('input[name = "to"]');
const result = document.getElementById("result");
const convertbtn = document.getElementById("convertbtn");
const fromWarning = document.getElementById("fromWarning");
const toWarning = document.getElementById("toWarning");
const inputWarning = document.getElementById("inputWarning");

// Adding click event listener to the convert button
convertbtn.addEventListener('click', (e) =>{
    e.preventDefault();

    // Variables to store selected radio values and input value
    let fromSelectedValue;
    let toSelectedValue;
    let inputValue = parseFloat(inputtext.value)

    // Validating input value to ensure it is a valid number
    if(isNaN(inputValue)){
        inputWarning.textContent = "Please enter a valid Number.";
        inputWarning.hidden = false;
    }
    else{
        inputWarning.hidden = true;
    }

    // Checking which 'from' radio button is selected
    fromRadios.forEach(radio =>{
        if(radio.checked){
            fromSelectedValue = radio.value;
            fromWarning.hidden = true;        
        }
    })

    // Showing warning if no 'from' option is selected
    if(!fromSelectedValue){
       fromWarning.textContent = `You have to select one option.`;
       fromWarning.hidden = false;
    }

    // Checking which 'to' radio button is selected
    toRadios.forEach(radio =>{
        if(radio.checked){
            toSelectedValue = radio.value;
            toWarning.hidden = true;        
        }
    })

    // Showing warning if no 'to' option is selected
    if(!fromSelectedValue){
       toWarning.textContent = `You have to select one option.`;
       toWarning.hidden = false;
    }

    // Proceeding with conversion only if all inputs are valid and selections are made
    if(fromWarning.hidden && toWarning.hidden && inputWarning.hidden){
        result.hidden = false;

        // Conversion logic using nested switch-case based on selected units
        switch(fromSelectedValue){
            case "celsius":
                switch(toSelectedValue){
                    case "celsius":
                        result.textContent = `${inputValue.toFixed(2)} °C`;
                        break;
                    case "fahrenheit":
                        result.textContent = `${((inputValue*(9/5))+32).toFixed(2)} °F`;
                        break;
                    case "kelvin":
                        result.textContent = `${(inputValue + 273.15).toFixed(2)} K`;
                        break;
                }
                break;
        }
        switch(fromSelectedValue){
            case "fahrenheit":
                switch(toSelectedValue){
                    case "celsius":
                        result.textContent = `${((inputValue - 32)*(5/9)).toFixed(2)} °C`;
                        break;
                    case "fahrenheit":
                        result.textContent = `${inputValue.toFixed(2)} °F`;
                        break;
                    case "kelvin":
                        result.textContent = `${((inputValue - 32)*(5/9)+273.15).toFixed(2)} K`;
                        break;
                }
                break;
        }
        switch(fromSelectedValue){
            case "kelvin":
                switch(toSelectedValue){
                    case "celsius":
                        result.textContent = `${(inputValue - 273.15).toFixed(2)} °C`;
                        break;
                    case "fahrenheit":
                         result.textContent = `${(((inputValue - 273.15)*(9/5))+32).toFixed(2)} °F`;
                        break;
                    case "kelvin":
                        result.textContent = `${inputValue.toFixed(2)} K`;
                        break;
                }
                break;
        }
    }
});