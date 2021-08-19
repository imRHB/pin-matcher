/* document.getElementById('generate-button').addEventListener('click', function () {
    const generateDisplay = document.getElementById('generate-display');
    const pin = Math.round(Math.random() * 10000);
    generateDisplay.value = pin;
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pinString;
    }
    else {
        function ();
    }


    // console.log(pin);
}) */

function pinGenerator() {
    const pinDisplay = document.getElementById('display-output');
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    console.log(pinString);
    if (pinString.length == 4) {
        pinDisplay.value = pinString;
    }
    else {
        console.log('found less than 4 digit pin and it is: ', pinString);
        pinGenerator();
    }
};

document.getElementById('keypad').addEventListener('click', function () {
    const number = event.target.innerText;
    const inputDisplay = document.getElementById('input-display');
    inputDisplay.value = inputDisplay.value + number;
});

document.getElementById('submit-button').addEventListener('click', function () {

    console.log('clicked');
});