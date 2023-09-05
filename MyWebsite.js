// JavaScript to toggle the visibility of contact information
document.getElementById("showContactInfo").addEventListener("click", function () {
    var contactInfo = document.getElementById("btn"); // Assuming the contact info is the second section
    if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
});