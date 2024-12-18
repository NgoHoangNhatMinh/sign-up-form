const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const errorMessage = document.querySelector(".error-message");
const signupForm = document.querySelector("#sign-up-form");

function validatePasswords() {
    console.log("validate passwords triggered");
    if (confirmPasswordInput.value === "") {
        confirmPasswordInput.classList.remove("invalid");
        errorMessage.classList.remove("visible");
    } else if (confirmPasswordInput.value === passwordInput.value) {
        errorMessage.classList.remove("visible");
        confirmPasswordInput.classList.remove("invalid");
    } else {
        errorMessage.classList.add("visible");
        confirmPasswordInput.classList.add("invalid");
    }

}

passwordInput.addEventListener("input", validatePasswords);
confirmPasswordInput.addEventListener("input", validatePasswords);

signupForm.addEventListener("submit", (e) => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        alert("Passwords do not match!");
    }
})