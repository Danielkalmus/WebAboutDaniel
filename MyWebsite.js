let showContactInfo = document.getElementById("showContactInfo");

showContactInfo.addEventListener("click", function () {
    var contactInfo = document.getElementById("Contact");
    if (contactInfo.style.display === "none" || contactInfo.style.display === "") {
        contactInfo.style.display = "block";
        showContactInfo.textContent = "Hide Contact Information";
    } else {
        contactInfo.style.display = "none";
        showContactInfo.textContent = "Show Contact Information";
    }
});

let showSkills = document.getElementById("showSkills");

showSkills.addEventListener("click", function () {
    var skillsInfo = document.getElementById("Skills");
    if (skillsInfo.style.display === "none" || skillsInfo.style.display === "") {
        skillsInfo.style.display = "block";
        showSkills.textContent = "Hide skills";
    } else {
        skillsInfo.style.display = "none";
        showSkills.textContent = "Show skills";
    }
});
