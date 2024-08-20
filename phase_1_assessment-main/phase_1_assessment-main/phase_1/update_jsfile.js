//full name validation
function nameValidation() {
    const nameInput=document.getElementById('fullName'); // Reference to full name input
    const nameError=document.getElementById('nameErrorMessage'); // Reference to full name error message
    const namePattern=/^[A-Za-z\s]{3,}$/; // Pattern for full name validation
    const fullNameValue=nameInput.value.trim(); // Trim whitespace from input value
    // Clear previous error message and styling
    nameError.style.display='none';
    nameError.textContent='';
    nameInput.classList.remove('inputError', 'inputValid');
    // Check if input is empty
    if (fullNameValue==='') {
        nameError.textContent='Please enter your full name';
        nameError.style.display='block'; // Show the error message
        nameInput.classList.add('inputError'); // Add error styling
        setError(nameInput, "Please enter your full name");
    } 
    // Validate the full name format
    else if (!namePattern.test(fullNameValue)) {
        nameError.textContent='Contain least 3 characters and only letters and spaces';
        nameError.style.display='block'; // Show the error message
        nameInput.classList.add('inputError'); // Add error styling
        setError(nameInput, "Contain least 3 characters and only letters and spaces");
    } 
    // If valid
    else {
        nameInput.classList.add('inputValid'); // Add valid styling
        setSuccess(nameInput);
    }
}
//date of birth validation
function dateOfBirthValidation() {
    const dateOfBirthInput = document.getElementById('dateOfBirth');
    const dateOfBirthError = document.getElementById('dateErrorMessage');
    const ageMessage = document.getElementById('ageMessage');
    // Get the current date and the selected date
    const today = new Date();
    const selectedDate = new Date(dateOfBirthInput.value);
    // Clear previous error messages and styling
    dateOfBirthError.style.display = 'none';
    dateOfBirthError.textContent = '';
    ageMessage.textContent = '';
    dateOfBirthInput.classList.remove('inputError','inputValid');
    // Check for a valid date
    if (isNaN(selectedDate.getTime())) {
        dateOfBirthError.textContent = 'Please select a valid date';
        dateOfBirthError.style.display = 'block';
        dateOfBirthInput.classList.add('inputError');
        setError(dateOfBirthInput, "Please select a valid date");
    }
    // Check if the date is in the future
    if (selectedDate > today) {
        dateOfBirthError.textContent = 'Date cannot be in the future';
        dateOfBirthError.style.display = 'block';
        dateOfBirthInput.classList.add('inputError');
        setError(dateOfBirthInput, "Date cannot be in the future");
    }
    // Calculate age
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDifference = today.getMonth() - selectedDate.getMonth();
    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < selectedDate.getDate())) {
        age--;
    }
    // Check if the user is at least 18 years old
    if (age < 18) {
        dateOfBirthError.textContent = 'You must be at least 18 years old';
        dateOfBirthError.style.display = 'block';
        dateOfBirthInput.classList.add('inputError');
        setError(dateOfBirthInput, "You must be at least 18 years old");
    } else {
        dateOfBirthInput.classList.add('inputValid');
        ageMessage.textContent = `Your age is: ${age} years`;
        setSuccess(dateOfBirthInput);
    }
}
//phone number validation
function phoneNumberValidation() {
    const phoneNumberInput=document.getElementById('phoneNumber');
    const error=document.getElementById('phoneNumberErrorMessage');
    const phoneNumberPattern=/^[6789]\d{9}$/;
    // Clear the error message when the user focuses on the input
    error.style.display='none';
    error.textContent='';
    phoneNumberInput.classList.remove('inputError', 'inputValid');
    if (phoneNumberInput.value && !phoneNumberPattern.test(phoneNumberInput.value)) {
        error.textContent='Invalid phone number format';
        error.style.display='block';//will start on a new line and stretch to fill the container's width.
        phoneNumberInput.classList.add('inputError');
        setError(phoneNumberInput, "invalid phone number format");
    }
    else if (phoneNumberInput.value) {
        phoneNumberInput.classList.add('inputValid');
        setSuccess(phoneNumberInput);
    }
    else if(phoneNumberInput.value===""){
        error.textContent='Please enter phone number';
        error.style.display='block';//will start on a new line and stretch to fill the container's width.
        phoneNumberInput.classList.add('inputError');
        setError(phoneNumberInput, "Please enter phone number");
    }
}
//email validation
function emailValidation() {
    const emailInput=document.getElementById('email');
    const emailError=document.getElementById('emailErrorMessage');
    const emailPattern=/^[a-zA-Z0-9._%+-]+@(gmail.com|yahoo.com|outlook.com)$/;
    // Clear the error message when the user focuses on the input
    emailError.style.display='none';
    emailError.textContent='';
    emailInput.classList.remove('inputError', 'inputValid');
    if (emailInput.value && !emailPattern.test(emailInput.value)) {
        emailError.textContent='Invalid email format';
        emailError.style.display='block';//will start on a new line and stretch to fill the container's width.
        emailInput.classList.add('inputError');
        setError(emailInput, "Invalid email format");
    }
    else if (emailInput.value) {
        emailInput.classList.add('inputValid');
        setSuccess(emailInput);
    }
    else if(emailInput.value===""){
        emailError.textContent='Please enter mail id';
        emailError.style.display='block';//will start on a new line and stretch to fill the container's width.
        emailInput.classList.add('inputError');
        setError(emailInput, "Please enter mail id");
    }
}
//Number of tickets Validation
function numberOfTicketValidation() {
    const numberOfTicketInput=document.getElementById('numberOfTicket');
    const numberOfTicketError=document.getElementById('numberOfTicketErrorMessage');
    const numberOfTicketPattern=/^[1-9]\d*$/;
    // Clear the error message when the user focuses on the input
    const ticketNumber = parseInt(numberOfTicketInput.value, 10);//convert string into number
    numberOfTicketError.style.display='none';
    numberOfTicketError.textContent='';
    numberOfTicketInput.classList.remove('inputError', 'inputValid');
    if (numberOfTicketInput.value && !numberOfTicketPattern.test(numberOfTicketInput.value) || ticketNumber > 12) {
        numberOfTicketError.textContent='Invalid format or maximum number of tickets can purchase is 12';
        numberOfTicketError.style.display='block';//will start on a new line and stretch to fill the container's width.
        numberOfTicketInput.classList.add('inputError');
        setError(numberOfTicketInput, "Invalid format or maximum number of tickets can purchase is 12");
    }
    else if (numberOfTicketInput.value) {
        numberOfTicketInput.classList.add('inputValid');
        setSuccess(numberOfTicketInput);
    }
    else if(numberOfTicketInput.value===""){
        numberOfTicketError.textContent='Please enter number of tickets';
        numberOfTicketError.style.display='block';//will start on a new line and stretch to fill the container's width.
        numberOfTicketInput.classList.add('inputError');
        setError(numberOfTicketInput, "Enter number of tickets");
    }
}
function checkPayment() {
    const paymentError = document.getElementById("");
    const creditCardRadio = document.getElementById("creditCard");
    const debitCardRadio = document.getElementById("debitCard");
    const cashRadio = document.getElementById("cash");
    const checkRadio = document.getElementById("check");

     if (!creditCardRadio.checked && !debitCardRadio.checked && !cashRadio.checked && !checkRadio.checked) {
        paymentError.innerText = "Please select a payment method.";
        paymentError.style.display = "block";
    } else {
        paymentError.style.display = "none";
    }
}
function setError(input, message) {
    let submitbutton = document.getElementById("submit");
    const formControl = input.parentElement; // Get the parent element of the input field
    let small = formControl.querySelector("small"); //attempts to find an existing <small> element within the parent element.
    //if (!small) {
        //small = document.createElement("small");
        //formControl.appendChild(small);
    //} smmall is to display error messages
    small.className = "smallshown";//This class will be applied to the <small> element to display an error message.
    small.innerText = message;//sets the text content of the <small> element to the error message passed as an argument to the function.
    submitbutton.disabled = true;
}
function setSuccess(input) {
    let submitbutton = document.getElementById("submit");
    const formControl = input.parentElement;
    let small = formControl.querySelector("small");
    if (small) {
        small.className = "smallhidden"; //This class will be applied to hide the <small> element when there’s no error.
        small.innerText = "";
    }
    submitbutton.disabled = false;
}
function firstCheckValidation() {
    nameValidation();
    dateOfBirthValidation();
    phoneNumberValidation();
    emailValidation();
}
function checkValidation() {
    numberOfTicketValidation();
    checkPayment();
}

