function valideteForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (name === "" || email === "") {
        message.textContent = "Both Name and Email are required.";
        message.className = "error";
        return false;
    }

    message.textContent = "Form submitted successfully!";
    message.className = "success";
    return false; // Prevent actual form submission (for testing)
}
