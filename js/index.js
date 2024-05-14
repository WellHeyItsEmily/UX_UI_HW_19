document.addEventListener("DOMContentLoaded", function() {

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            alert('Thank You! Your message was submitted, I will get back to you soon.');
        });
    } else {
        console.error("Element with ID 'contactForm' not found.");
    }

    $(document).ready(function() {
        $("#scrollToContact").on("click", function() {
            $('html, body').animate({
                scrollTop: $("#contactForm").offset().top
            }, 1000);
        });
    });
});
