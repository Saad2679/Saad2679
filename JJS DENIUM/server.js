const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received form submission: ${name}, ${email}, ${message}`);
    res.send("Form submitted successfully!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            if (email && password) {
                // Simulate login process
                alert("Logged in successfully!");
                loginForm.reset();
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("signupConfirmPassword").value;

            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    // Simulate signup process
                    alert("Account created successfully!");
                    signupForm.reset();
                } else {
                    alert("Passwords do not match.");
                }
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});

