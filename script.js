document.querySelector('.sign-up-form').addEventListener('submit', function (e) {
    var password = document.querySelector('#password').value;
    var confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        e.preventDefault();
    }
});