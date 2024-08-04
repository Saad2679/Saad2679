document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded!");

    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            // Simulate form submission
            alert("Thank you for reaching out, " + name + "! We will get back to you soon.");
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
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
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded!");
});

