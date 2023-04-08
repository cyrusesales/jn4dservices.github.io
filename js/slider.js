var radioButtons = document.getElementsByName("radio-btn");
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", function() {
    var currentSlide = document.querySelector(".slide:first-child");
    var checkedButton = document.querySelector("input[name='radio-btn']:checked");
    var nextSlide = checkedButton.parentNode.nextElementSibling;
    currentSlide.classList.remove("first");
    nextSlide.classList.add("first");
  });
}
