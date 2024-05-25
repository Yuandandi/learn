// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false
let likesStartups = true

if (likesDocumentaries === true || likesStartups === false) { // if one of condition is met the execute the body if
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!")
}
