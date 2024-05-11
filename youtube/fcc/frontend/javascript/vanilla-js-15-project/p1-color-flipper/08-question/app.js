// TRAVERSING THE DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function(e) {
//     // console.log(e.currentTarget); // get the currentTarget
//     // console.log(e.currentTarget.parentElement); // get the parent  of currentTarget
//     const question = e.currentTarget.parentElement.parentElement // get the article class which contains question and the answer
//     question.classList.toggle('show-text'); // this will adding or remove how-text classes in home.html
//   });
// });

// USING SELECTORS INSIDE THE ELEMENT;

const questions = document.querySelectorAll('.question');
// console.log(questions); // get the node list of an article tag

questions.forEach(function (question) {
  // console.log(question); // get the article tag
  const btn = question.querySelector('.question-btn'); // get all the button, in here we are not Using document because It will select all the buttons, instead we use question. we will loop through these three buttons only
  // console.log(btn);
  btn.addEventListener("click", function() {
    questions.forEach(function(item) {
      if (item !== question) {
        item.classList.remove('show-text')
      }
    });
    question.classList.toggle("show-text"); // toggle show or hide the answer
  });
});
