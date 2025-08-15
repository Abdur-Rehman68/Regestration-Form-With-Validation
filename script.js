document.getElementById("regForm").addEventListener("submit", function (event) {
    event.preventDefault();


    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    let valid = true;


    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }


    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }


    let password = document.getElementById("password").value.trim();
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        valid = false;
    }


    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        valid = false;
    }



    let country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").textContent = "Please select a country.";
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
        document.getElementById("regForm").reset();
    }
});