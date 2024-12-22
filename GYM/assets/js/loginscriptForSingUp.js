const submitBtn = document.querySelector('.submit-btn'),
      phone = document.querySelector('#phone'),
      password = document.querySelector('#user-password'),
      passwordConfirm = document.querySelector('#user-password-confirm'),
      email = document.querySelector('#mail'),
      errorDisplayers = document.getElementsByClassName('error'),
      inputFields = document.querySelectorAll('input'),
      cardContainer = document.querySelector('.card-container'),
      outroOverlay = document.querySelector('.outro-overlay');

let count = 2;

function onValidation(current, messageString, booleanTest) {
    let message = current;
    message.textContent = messageString;
    booleanTest != 0 ? ++count : count;
}

// Check if input fields exist before adding event listeners
inputFields.forEach((currentInputField, i) => {
    let currentErrorDisplayer = errorDisplayers[i];

    if (currentInputField) {
        currentInputField.addEventListener('keyup', (e) => {
            let message = currentErrorDisplayer;
            e.target.value != "" ? onValidation(currentErrorDisplayer, '', 0) : onValidation(currentErrorDisplayer, '*This field is Required', 0);
        });
    }
});

// Add event listener for phone field if it exists
if (phone) {
    phone.addEventListener('keyup', (e) => {
        let message = errorDisplayers[3];
        e.target.value == e.target.value.replace(/\D/g, '') ? onValidation(message, '', 1) : onValidation(message, '*Please enter valid number', 0);
    });
}

// Add event listener for email field if it exists
if (email) {
    email.addEventListener('keyup', (e) => {
        let message = errorDisplayers[2];
        email.value.includes('@') && email.value.includes('.com') ? onValidation(message, '', 1) : onValidation(message, '*Please provide a valid Email', 0);
    });
}

// Add event listener for password field if it exists
if (password) {
    password.addEventListener('keyup', (e) => {
        let message = errorDisplayers[4];
        password.value.length >= 8 ? onValidation(message, '', 1) : onValidation(message, 'Password requires minimum 8 characters', 0);
    });
}

// Add event listener for password confirmation field if it exists
if (passwordConfirm) {
    passwordConfirm.addEventListener('keyup', (e) => {
        let message = errorDisplayers[5];
        password.value === e.target.value ? onValidation(message, '', 1) : onValidation(message, '*Password did not match', 0);
    });
}

// Check if submit button exists before adding event listener
if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (count > 5) {
            cardContainer.style.display = 'none';
            outroOverlay.classList.remove('disabled');
        } else {
            for (let i = 0; i < errorDisplayers.length; i++) {
                errorDisplayers[i].textContent = '*This field is Required';
            }
        }
    });
}