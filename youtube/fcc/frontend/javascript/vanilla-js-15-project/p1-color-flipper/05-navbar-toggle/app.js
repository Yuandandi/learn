// classList - shows/gets all classses
// contains - checks classList for specific class
// add - add class, add() method
// remove - remove class, remove() method
// toggle - toggles class, toggle ; one liner for toggling rather than Using add and remove method combined

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');;

navToggle.addEventListener('click', function() {
  // console.log(links.classList); // print the list of classes the "links" currently has
  // console.log(links.classList.contains("random")); // will return false, because this "random" class is not on the class
  // console.log(links.classList.contains("links"));  // will return true
  // kalo ada diapus, kalo gaada ditambahin;

  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  // } else {
  //   links.classList.add('show-links');
  // };

  links.classList.toggle("show-links")

});
