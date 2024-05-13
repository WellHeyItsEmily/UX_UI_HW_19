console.log("your index.js file is loaded correctly!");

document.getElementById('contactForm').addEventListener('submit', function(event) {
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

  $(document).ready(function() {
    $("#scrollToContact").on("click", function() {
      $('html, body').animate({
        scrollTop: $("#contactForm").offset().top
      }, 1000); // Adjust the duration as needed
    });
  });