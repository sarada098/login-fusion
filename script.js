document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorUsername = username.nextElementSibling;
    const errorPassword = password.nextElementSibling;

    // Reset error messages
    errorUsername.style.display = 'none';
    errorPassword.style.display = 'none';

    let valid = true;

    if (username.value.trim() === '') {
        errorUsername.style.display = 'block';
        username.classList.add('error');
        valid = false;
    } else {
        username.classList.remove('error');
    }

    if (password.value.trim() === '' || password.value.length < 6) {
        errorPassword.style.display = 'block';
        password.classList.add('error');
        valid = false;
    } else {
        password.classList.remove('error');
    }

    if (valid) {
        // Submit form or handle successful login
        alert('Login successful!');
    }
});


