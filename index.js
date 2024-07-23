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

function closePopup() {
    var popup = document.getElementById("popup-form");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", closePopup);

    window.addEventListener("click", function(event) {
        var popup = document.getElementById("popup-form");
        if (event.target == popup) {
            closePopup();
        }
    });
});


document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {

        button.classList.toggle('active');
        

        const content = button.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});