// Function to validate Name
function validateName() {
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameerror');
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (name.match(nameRegex)) {
        nameError.style.display = 'none';
        return true;
    } else {
        nameError.style.display = 'block';
        return false;
    }
}

// Function to validate Password
function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passworderror');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.match(passwordRegex)) {
        passwordError.style.display = 'none';
        return true;
    } else {
        passwordError.style.display = 'block';
        return false;
    }
}

// Function to validate Phone Number
function validatePhoneNumber() {
    const phoneno = document.getElementById('phoneno').value;
    const phoneError = document.getElementById('phoneerror');
    const phoneRegex = /^\d{10}$/;

    if (phoneno.match(phoneRegex)) {
        phoneError.style.display = 'none';
        return true;
    } else {
        phoneError.style.display = 'block';
        return false;
    }
}

// Function to validate Street
function validateStreet() {
    const street = document.getElementById('street').value;
    const streetError = document.getElementById('streeterror');
    const streetRegex = /^[a-zA-Z\s]+$/;

    if (street.match(streetRegex)) {
        streetError.style.display = 'none';
        return true;
    } else {
        streetError.style.display = 'block';
        return false;
    }
}

// Function to validate Area
function validateArea() {
    const area = document.getElementById('area').value;
    const areaError = document.getElementById('areaerror');
    const areaRegex = /^[a-zA-Z\s]+$/;

    if (area.match(areaRegex)) {
        areaError.style.display = 'none';
        return true;
    } else {
        areaError.style.display = 'block';
        return false;
    }
}

// Function to validate City
function validateCity() {
    const city = document.getElementById('city').value;
    const cityError = document.getElementById('cityerror');
    const cityRegex = /^[a-zA-Z\s]+$/;

    if (city.match(cityRegex)) {
        cityError.style.display = 'none';
        return true;
    } else {
        cityError.style.display = 'block';
        return false;
    }
}

// Function to validate Pincode
function validatePincode() {
    const pincode = document.getElementById('pincode').value;
    const pincodeError = document.getElementById('pincodeerror');
    const pincodeRegex = /^\d{6}$/;

    if (pincode.match(pincodeRegex)) {
        pincodeError.style.display = 'none';
        return true;
    } else {
        pincodeError.style.display = 'block';
        return false;
    }
}

// Add event listeners for blur events
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('phoneno').addEventListener('blur', validatePhoneNumber);
document.getElementById('street').addEventListener('blur', validateStreet);
document.getElementById('area').addEventListener('blur', validateArea);
document.getElementById('city').addEventListener('blur', validateCity);
document.getElementById('pincode').addEventListener('blur', validatePincode);
