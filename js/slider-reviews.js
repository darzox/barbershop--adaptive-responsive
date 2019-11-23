var slideFirst2 = document.querySelector(".slider2__item4");
var slideSecond2 = document.querySelector(".slider2__item5");
var slideThird2 = document.querySelector(".slider2__item6");

var toggleFirst2 = document.querySelector(".slider2__toggle4");
var toggleSecond2 = document.querySelector(".slider2__toggle5");
var toggleThird2 = document.querySelector(".slider2__toggle6");

var buttonPrev = document.querySelector(".reviews__prev");
var buttonPrev = document.querySelector(".reviews__next");

toggleFirst2.addEventListener("click", function() {
  if (slideFirst2.classList.contains("slider2__item4--off")) {
    slideFirst2.classList.remove("slider2__item4--off");
    slideFirst2.classList.add("slider2__item4--on");
    slideSecond2.classList.add("slider2__item5--off");
    slideThird2.classList.add("slider2__item6--off");
    toggleFirst2.classList.add("slider2__toggle2--on");
    toggleSecond2.classList.remove("slider2__toggle2--on");
    toggleThird2.classList.remove("slider2__toggle2--on");
  } 
})

toggleSecond2.addEventListener("click", function() {
  if (slideSecond2.classList.contains("slider2__item5--off")) {
    slideSecond2.classList.remove("slider2__item5--off");
    slideSecond2.classList.add("slider2__item5--on");
    slideFirst2.classList.add("slider2__item4--off");
    slideThird2.classList.add("slider2__item6--off");
    toggleSecond2.classList.add("slider2__toggle2--on");
    toggleFirst2.classList.remove("slider2__toggle2--on");
    toggleThird2.classList.remove("slider2__toggle2--on");
  }
})

toggleThird2.addEventListener("click", function() {
  if (slideThird2.classList.contains("slider2__item6--off")) {
    slideThird2.classList.remove("slider2__item6--off");
    slideThird2.classList.add("slider2__item6--on");
    slideFirst2.classList.add("slider2__item4--off");
    slideSecond2.classList.add("slider2__item5--off");
    toggleThird2.classList.add("slider2__toggle2--on");
    toggleFirst2.classList.remove("slider2__toggle2--on");
    toggleSecond2.classList.remove("slider2__toggle2--on");
  }
})