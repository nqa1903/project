function signin(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById('pass').value;
    var user = localStorage.getItem("user");
    var data = JSON.parse(user);

    if(user == null){
        alert("Please enter");
    }else if(email == data.email && password == data.password){
        alert("Welcome back");
        window.location.href ="cered.html";
    }else{
        alert("Wrong email or password");
    }
}