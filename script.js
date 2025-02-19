function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
        errorMessage.textContent = "Please enter both email and password.";
        return;
    }

    if (!email.includes("@")) {
        errorMessage.textContent = "Enter a valid email address.";
        return;
    }

    
    alert("Login Successful!");
}
