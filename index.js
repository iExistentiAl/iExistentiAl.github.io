window.onscroll = function() {changeNavbarColor()};

function changeNavbarColor() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function openPopup() {
    var popup = document.getElementById("popup-form");
    popup.style.display = "block";
}

// Function to close the pop-up
function closePopup() {
    var popup = document.getElementById("popup-form");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var closeBtn = document.querySelector(".close-btn");

    // Close the pop-up when the user clicks on the close button
    closeBtn.addEventListener("click", closePopup);

    // Close the pop-up when the user clicks anywhere outside of the pop-up content
    window.addEventListener("click", function(event) {
        var popup = document.getElementById("popup-form");
        if (event.target == popup) {
            closePopup();
        }
    });
});