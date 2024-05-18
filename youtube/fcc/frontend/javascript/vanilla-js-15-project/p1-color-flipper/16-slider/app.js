const slides = document.querySelectorAll('.slide') // because It more than one item so Using querySelectorAll("b") 
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`; // get left 100% move It to the right
});

let counter = 0;
nextBtn.addEventListener("click", function() { // move to the next item by adding counter
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () { // move to the previous item by adding counter
  counter--;
  carousel();
});

function carousel() {
  // basic next or prev button;
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }

  if (counter < slides.length - 1) { // 3 < 4 -1 ; false return none "the last slide didn't have a nextBtn"
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) { // 0 > 0 ; false return none "the first item didn't have prev button"
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`; // -100% means move 1 item to the left ; which make next transiting
  });
}

prevBtn.style.display = "none";
