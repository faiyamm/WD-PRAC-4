document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cF');
    const inputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone')
    };

    // errors
    const error = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError')
    };

    const errorMessages = {
        name: 'Please enter a valid name',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid phone'
    };

    // error functions
    function showError(field) {
        inputs[field].classList.add('error');
        error[field].style.display = 'block';
        error[field].textContent = errorMessages[field];
    }

    function hideError(field) {
        inputs[field].classList.remove('error');
        error[field].style.display = 'none';
        error[field].textContent = '';
    }

    // patterns
    const patterns = {
        name: /^[a-z ,.'-]+$/i,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[\d\s\-+()]{10,15}$/
    };

    // validate function
    function validateField(field) {
        const value = inputs[field].value.trim();
        const isValid = patterns[field].test(value);

        if (!isValid) {
            showError(field);
            return false;
        } else {
            hideError(field);
            return true;
        }
    };

    // submissions
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let isValid = true;
        Object.keys(inputs).forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        if (isValid) {
            alert('Form submitted successfully');
            form.submit();
        }
    });
});