function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Mock validation for example
    if (username === "admin" && password === "password") {
        showSection('registration-form');
    } else {
        alert("Invalid credentials! Please try again.");
    }

    return false;
}

function submitApplication() {
    var startupName = document.getElementById("startupName").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var description = document.getElementById("description").value;
    var documents = document.getElementById("documents").files;

    if (startupName && email && contact && description && documents.length > 0) {
        // Example of status update, in practice this would involve a backend call
        document.getElementById("statusText").innerText = "Application submitted successfully. Status: Pending approval.";
    } else {
        alert("Please fill out all fields and upload the necessary documents.");
    }

    return false;
}

function showSection(sectionId) {
    // Hide all sections
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("support-resources").style.display = "none";

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}

function showSupportSection(contentId) {
    // Hide all support content
    var supportContents = document.getElementsByClassName("support-content");
    for (var i = 0; i < supportContents.length; i++) {
        supportContents[i].style.display = "none";
    }

    // Show the selected content
    document.getElementById(contentId).style.display = "block";
}