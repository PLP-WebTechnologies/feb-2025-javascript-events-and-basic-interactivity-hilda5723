// 🎀 Counter Logic
let counter = 0;
document.getElementById("increase").addEventListener("click", () => {
    counter++;
    document.getElementById("counter").innerText = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        document.getElementById("counter").innerText = counter;
    }
});

// 🎀 Form Validation
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    // Clear errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    let valid = true;

    if (name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
        nameError.style.display = "block";
        valid = false;
    }

    if (!email.includes("@")) {
        emailError.innerText = "Enter a valid email.";
        emailError.style.display = "block";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters.";
        passwordError.style.display = "block";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        document.getElementById("userForm").reset();
    }
});

// 🎀 Toggle Box Visibility
document.getElementById("toggleBoxBtn").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.display = (box.style.display === "none") ? "block" : "none";
});
