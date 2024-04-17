// const
// has all the features of let but it's also read only, can't be reassigned

function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + "is cool"; // bestpractice to use all uppercase for const variable to remember that is a constant
  // SENTENCE = str + " is amazing!"; // at Object.<anonymous> (/home/danzor/repos/github.com/yuandandi/learn/youtube/fcc/frontend/javascript/109-declare-a-read-only-variable-with-the-const-keyword.js:13:1)
  for (let i = 0; i < str.length; i += 2) { // always use let to use the const variable not var
    console.log(SENTENCE);
  }
}

printManyTimes("freeCodeCamp");
