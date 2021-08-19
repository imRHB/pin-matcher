function pinGenerator() {
    const pinDisplay = document.getElementById('display-output');
    const inputPinField = document.getElementById('input-display');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const emptyMessage = document.getElementById('empty-message');
    inputPinField.value = '';
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        pinDisplay.value = pinString;
    }
    else {
        pinGenerator();
    }
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emptyMessage.style.display = 'none';
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
    const generatedPinField = document.getElementById('display-output');
    const generatedPin = generatedPinField.value;
    const inputPinField = document.getElementById('input-display');
    const typedPin = inputPinField.value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const emptyMessage = document.getElementById('empty-message');
    if (inputPinField.value == '' && generatedPinField.value == '') {
        emptyMessage.style.display = 'block';
    }

    else if (generatedPin == typedPin) {
        generatedPinField.value = '';
        inputPinField.value = '';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        emptyMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        emptyMessage.style.display = 'none';
    }
};

document.getElementById('submit-button').addEventListener('click', function () {
    verifyPin();
});

document.getElementById('clear-button').addEventListener('click', function () {
    const generatedPinField = document.getElementById('display-output');
    const inputPinField = document.getElementById('input-display');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const emptyMessage = document.getElementById('empty-message');
    generatedPinField.value = '';
    inputPinField.value = '';
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emptyMessage.style.display = 'none';
})
/* function activateSubmitButton() {
    const inputPinField = document.getElementById('input-display');
    const typedPin = inputPinField.value;
    if (typedPin.length == 4) {
        document.getElementById('submit-button').disabled = false;
    }
} */