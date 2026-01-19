/*jslint browser: true, devel: true */
/*global emailjs */

(function () {
  "use strict";

  // Initialize EmailJS with your public key
  var form;

  emailjs.init("IXJ5g5JeJEtzal1_t");

  // Get the contact form element
  form = document.getElementById("contact-form");

  // Listen for form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Send form using EmailJS
    emailjs.sendForm(
      "service_nlveumm",
      "template_q1lirqs",
      form
    ).then(
      function () {
        alert("Message sent successfully!");
        form.reset();
      },
      function () {
        alert("Failed to send message. Please try again.");
      }
    );
  });

}());

<script>
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
</script>
