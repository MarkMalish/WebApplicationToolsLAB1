function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
var homeButton = document.getElementById("home");

if (homeButton) {
    homeButton.addEventListener("click", scrollToTop);
}
function scrollToBand() {
    var bandSection = document.getElementById("band");
    bandSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToTour() {
    var tourSection = document.getElementById("tour");
    tourSection.scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
} 
var contactFormElements = document.querySelectorAll(".contact-form-element");
contactFormElements.forEach(function (element) {
    element.classList.add("slide-in");
});
var contactFormElements = document.querySelectorAll(".contact-form-element");
contactFormElements.forEach(function (element) {
    element.classList.add("slide-in");
});