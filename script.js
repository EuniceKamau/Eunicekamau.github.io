function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_k5qcigr", "template_xs8zmyr", params)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send email. Please try again later.");
            console.log("FAILED...", error);
        });
}

