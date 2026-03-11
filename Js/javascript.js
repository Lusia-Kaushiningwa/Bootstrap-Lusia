const backToTop = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};