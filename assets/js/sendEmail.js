// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

(function(){
  emailjs.init('txtAO6j71CVwmMAHx');
})();

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var fullName = document.querySelector('[name="fullname"]').value;
      var email = document.querySelector('[name="email"]').value;
      var message = document.querySelector('[name="message"]').value;
      
      emailjs.send('service_o6evh1r', 'template_s3ynuiy', {
        fullName: fullName,
        email: email,
        message: message
      })
      .then(function(response) {
        console.log('Success!', response.status, response.text);
        // Find the <span> inside the button and update its text
        const spanElement = formBtn.querySelector("span");
        if (spanElement) {
            spanElement.innerText = "Success! Email sent.";
        }
    }, function(error) {
        console.log('Failed...', error);
        const spanElement = formBtn.querySelector("span");
        if (spanElement) {
            spanElement.innerText = "Error. Email not sent.";
        }
    });
  });
});
