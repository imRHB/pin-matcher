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
        pinGenerator();
    }
};

document.getElementById('keypad').addEventListener('click', function () {
    const number = event.target.innerText;
    const inputDisplay = document.getElementById('input-display');
    if (isNaN(number)) {
        if (number == 'C') {
            inputDisplay.value = '';
        }
    }
    else {
        inputDisplay.value = inputDisplay.value + number;
    }
});

function verifyPin() {
    const generatedPin = document.getElementById('display-output').value;
    const typedPin = document.getElementById('input-display').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    if (generatedPin == typedPin) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
};

document.getElementById('submit-button').addEventListener('click', function () {
    verifyPin();
});