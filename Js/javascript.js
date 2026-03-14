// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});


// Bootstrap Validation + Success Message
(function () {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')
  const successMessage = document.getElementById("successMessage");

  Array.prototype.slice.call(forms)
    .forEach(function (form) {

      form.addEventListener('submit', function (event) {

        if (!form.checkValidity()) {

          event.preventDefault()
          event.stopPropagation()

        } else {

          event.preventDefault()

          // show success message
          successMessage.classList.remove("d-none")

          // clear form
          form.reset()

          // remove validation style
          form.classList.remove('was-validated')

          // hide message after 4 seconds
          setTimeout(function () {
            successMessage.classList.add("d-none")
          }, 4000)

        }

        form.classList.add('was-validated')

      }, false)

    })
})();