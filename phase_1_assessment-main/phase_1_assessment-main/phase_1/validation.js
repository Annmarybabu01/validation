function emailValidation() {
    const emailInput=document.getElementById('email');
    const emailError=document.getElementById('emailErrorMessage');
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern
    // Clear the error message when the user focuses on the input
    emailError.style.display='none';
    emailError.textContent='';
    // Optional: Check the email format as the user focuses
    if (emailInput.value && !emailPattern.test(emailInput.value)) {
        emailError.textContent='Invalid email address format';
        emailError.style.display='block';//will start on a new line and stretch to fill the container's width.
    }
}
function phoneNumberValidation() {
    const phoneNumberInput=document.getElementById('phoneNumber');
    const error=document.getElementById('phoneNumberErrorMessage');
    const phoneNumberPattern=/^[789]\d{9}$/;
    // Clear the error message when the user focuses on the input
    error.style.display='none';
    error.textContent='';
    if (phoneNumberInput.value && !phoneNumberPattern.test(phoneNumberInput.value)) {
        error.textContent='Invalid phone number format';
        error.style.display='block';//will start on a new line and stretch to fill the container's width.
    }
}
function validateFullName() {
    const nameInput = document.getElementById('fullName');
    const nameError = document.getElementById('nameErrorMessage');
    const namePattern = /^[A-Z][a-zA-Z' -]+$/; // Simplified pattern
    // Clear previous error message
    nameError.style.display = 'none';
    nameError.textContent = '';
    // Validate the name
    if (nameInput.value && !namePattern.test(nameInput.value)) {
        nameError.textContent = 'Invalid format';
        nameError.style.display = 'block'; // Show error message
    }
}