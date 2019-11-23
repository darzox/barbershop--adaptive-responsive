var sliderFirst = document.querySelector(".slider__item1");
var sliderSecond = document.querySelector(".slider__item2");
var sliderThird = document.querySelector(".slider__item3");
var toggleFirst = document.querySelector(".slider__toggle1");
var toggleSecond = document.querySelector(".slider__toggle2");
var toggleThird = document.querySelector(".slider__toggle3");

toggleFirst.addEventListener("click", function(){
  if (sliderFirst.classList.contains("slider__item1--off")) {
    sliderFirst.classList.remove("slider__item1--off");
    sliderFirst.classList.add("slider__item1--on");
    sliderSecond.classList.add("slider__item2--off");
    sliderThird.classList.add("slider__item3--off");
    toggleFirst.classList.add("slider__toggle--on");
    toggleSecond.classList.remove("slider__toggle--on");
    toggleThird.classList.remove("slider__toggle--on");
  }
} );
toggleSecond.addEventListener("click", function(){
  if (sliderSecond.classList.contains("slider__item2--off")) {
    sliderSecond.classList.remove("slider__item2--off");
    sliderSecond.classList.add("slider__item2--on");
    sliderFirst.classList.add("slider__item1--off");
    sliderThird.classList.add("slider__item3--off");
    toggleFirst.classList.remove("slider__toggle--on");
    toggleSecond.classList.add("slider__toggle--on");
    toggleThird.classList.remove("slider__toggle--on");

  }
})

toggleThird.addEventListener("click", function(){
  if (sliderThird.classList.contains("slider__item3--off")) {
    sliderThird.classList.remove("slider__item3--off");
    sliderThird.classList.add("slider__item3--on");
    sliderSecond.classList.add("slider__item2--off");
    sliderFirst.classList.add("slider__item1--off");
    toggleSecond.classList.remove("slider__toggle--on");
    toggleFirst.classList.remove("slider__toggle--on");
    toggleThird.classList.add("slider__toggle--on");
    
  }
})
