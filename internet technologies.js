document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission to handle validation

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        // Reset any previous messages
        clearMessages();

        if (!name || !email || !message) {
            displayMessage("All fields are required", "error");
            return;
        }

        if (!validateEmail(email)) {
            displayMessage("Please enter a valid email address", "error");
            return;
        }

        // If all validations pass
        displayMessage("Thank you for contacting us", "success");

        // You can submit the form programmatically if needed
        // form.submit();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function displayMessage(message, type) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.className = type === "success" ? "success-message" : "error-message";
        form.appendChild(messageDiv);
    }

    function clearMessages() {
        const messages = document.querySelectorAll(".success-message, .error-message");
        messages.forEach((msg) => msg.remove());
    }
});
