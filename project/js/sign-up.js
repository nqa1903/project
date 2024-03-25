function signup(event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('tel').value;
    var password = document.getElementById('pass').value;

    if (!firstName || !lastName || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert("User registered successfully");

    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('pass').value = '';

    windown.location.href = "cered-sign-in";
}
