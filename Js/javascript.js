// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});


// Contact Form
const form = document.getElementById("contactForm");
const successPopup = document.getElementById("successPopup");

form.addEventListener("submit", function(event){

  event.preventDefault();

  if(form.checkValidity()){

    successPopup.classList.remove("d-none");

    form.reset();

    setTimeout(function(){
      successPopup.classList.add("d-none");
    },3000);

  }

});

