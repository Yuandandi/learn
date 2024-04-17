// document.querySelector('#football').addEventListener('click', function(e) {
//   console.log('Football is clicked');
//   const target = e.target;
//   if(target.matches('li')) { // matches() string method; to find matches based on regex matching
//     target.style.backgroundColor = 'lightgrey'
//   }
// });

// document.querySelector('#basketball').addEventListener('click', function(e) {
//   console.log('Basketball is clicked');
//   const target = e.target;
//   if(target.matches('li')) { // matches() string method; to find matches based on regex matching
//     target.style.backgroundColor = 'lightgrey'
//   }
// });

// document.querySelector('#boxing').addEventListener('click', function(e) {
//   console.log('Boxing is clicked');
//   const target = e.target;
//   if(target.matches('li')) { // matches() string method; to find matches based on regex matching
//     target.style.backgroundColor = 'lightgrey'
//   }
// });

// document.querySelector('#tennis').addEventListener('click', function(e) {
//   console.log('Tennis is clicked');
//   const target = e.target;
//   if(target.matches('li')) { // matches() string method; to find matches based on regex matching
//     target.style.backgroundColor = 'lightgrey'
//   }
// });

// document.querySelector('#golf').addEventListener('click', function(e) {
//   console.log('Golf is clicked');
//   const target = e.target;
//   if(target.matches('li')) { // matches() string method; to find matches based on regex matching
//     target.style.backgroundColor = 'lightgrey'
//   }
// });

// make thing simpler bellow are the same as the above

// EVENT DELEGATION

// allows users to append a single event listener to a parent element that adds It to all of it's present and future descendants that match a selector;
// more performance (less memory);
// interactive ; You can add or remove list within JavaScript or html

document.querySelector('#sports').addEventListener('click', function(e){
  console.log(e.target.getAttribute('id') + ' is clicked');
  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
  };
})

// it's giving the information about How many times users click a button and their historical clicking;

const sports = document.querySelector('#sports');
const newSports = document.createElement('li');

newSports.innerText = 'rugby';
newSports.setAttribute('id', 'rugby');

sports.appendChild(newSports);
