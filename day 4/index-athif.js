// command form validation
function validateForm(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let errorname = "";
    let errorpassword = "";

    if (username.trim() === "") {
        errorname = "Nama cannot be empty";
    }

    if (password === "") {
        errorpassword = "Password cannot be empty";
    } else if (password.length < 6) {
        errorpassword = "Password needs to be at minimal 6 character";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
        errorpassword = "Password must contain 1 lower case, 1 upper case, 1 number, dan 1 special symbol";
    }

    document.getElementById("errorname").innerHTML = errorname;
    document.getElementById("errorpassword").innerHTML = errorpassword;

    if (errorname === "" && errorpassword === "") {
        // validation success, redirect ke about
        window.location.href = "about-athif.html";
    }

    return false; // command step ke default
}

// command show password
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// command caps lock
document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById("password");

    passwordField.addEventListener("keyup", function(event) {
        const capsLockWarning = document.getElementById("capsLockWarning");
        event.getModifierState("CapsLock")
            ? (capsLockWarning.style.display = "block")
            : (capsLockWarning.style.display = "none");
    });

});

// command rotate logo
let degree = 0;
function rotateLogo() {
    const logoImage = document.getElementById("logo-rotated");
    logoImage.style.transition = "transform 1s ease-in-out";

    degree += 360;
    logoImage.style.transform = `rotate(${degree}deg)`;
}


