// use DOM queries to get access to the DOM elements that you need
let dsp = document.getElementById('display');
let eqls = document.getElementById('btnEqual');
let opr = document.getElementsByClassName('operation');
let Clear = document.getElementById('btnClear');
let button = document.getElementsByClassName('digit');

// link the displayDigit function to the click event of the digit buttons
button[0].addEventListener('click',displayDigit);
button[1].addEventListener('click',displayDigit);
button[2].addEventListener('click',displayDigit);
button[3].addEventListener('click',displayDigit);
button[4].addEventListener('click',displayDigit);
button[5].addEventListener('click',displayDigit);
button[6].addEventListener('click',displayDigit);
button[7].addEventListener('click',displayDigit);
button[8].addEventListener('click',displayDigit);
button[9].addEventListener('click',displayDigit);

//link the operationClicked function to the click even of the operation buttons
opr[0].addEventListener('click', operationClicked);
opr[1].addEventListener('click', operationClicked);
opr[2].addEventListener('click', operationClicked);
opr[3].addEventListener('click', operationClicked);

eqls.addEventListener('click', equalClicked);
Clear.addEventListener('click', clear);

// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
// to the contents of the display label
function displayDigit(e){
    dsp.innerHTML = dsp.innerHTML+e.target.innerHTML;
}

// set the click event of the clear button
// to an anonymous function that clears the text of the display lable
function clear(e){
    dsp.innerHTML = null;
}


let firstValue = "";
let secondValue = ""; 
let operation;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
    //Convert the value in the display label into a number and store it in the variable firstValue
    //Store the text of the clicked button in the variable 'operation' for latter reference
    //Clear the display lable to allow the user to enter the second value

function operationClicked(e){
    firstValue = parseInt(dsp .innerHTML);
    operation = e.target.innerHTML;
    dsp.innerHTML = null;
}


//Define the equalClicked function to handlet the click event of the equal button with the following steps
    //Convert the value in the display label to a number and store it in the variable secondValue
    // based on the value stored in the operation apply the corresponding operator on the first and second values
    // and display the result in the display label.

function equalClicked(e){
    secondValue = parseInt(dsp.innerHTML);

    /*if(operation=="+"){
        displ.innerHTML = firstValue+secondValue;
    }
    if(operation=="-"){
        displ.innerHTML = firstValue - secondValue;
    }
    if(operation=="*"){
        displ.innerHTML = firstValue*secondValue;
    }
    if(operation=="/"){
        displ.innerHTML = firstValue/secondValue;
    }**/

    switch(operation){
        case '+':
            dsp.innerHTML = firstValue+secondValue;
            break;
        case '-':
            dsp.innerHTML = firstValue - secondValue;
            break;
        case '*':
            dsp.innerHTML = firstValue*secondValue;
            break;
        case '/':
            dsp.innerHTML = firstValue/secondValue;
            break;
    }
}