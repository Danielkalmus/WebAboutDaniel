let showContactInfo = document.getElementById("showContactInfo");

showContactInfo.addEventListener("click", function () {
    var contactInfo = document.getElementById("btn");
    if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
        contactInfo.style.display = "block";
        showContactInfo.textContent = "Hide Contact Information";
    } else {
        contactInfo.style.display = "none";
        showContactInfo.textContent = "Show Contact Information";
    }
});
