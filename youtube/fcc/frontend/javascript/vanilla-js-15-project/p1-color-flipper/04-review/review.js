// local reviews data
// normally You would get this type of data using ajax requests, by perfomming a http requests;

// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// select items;
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.getElementById(".prev-btn");
const nextBtn = document.getElementById(".next-btn");
const randomBtn = document.getElementById(".random-btn");

// set starting items;
let currentItem = 0; // the value must be from 0 - 3 (there are only 4 list, and JavaScript is 0 indexed) // // You can do this way but You have to add or remove manually if there's a new or remove one item, so better to make the Function that does this; // window.addEventListener("DOMContentLoaded", function () { //   // console.log("shake and bake"); // will print When the .html fully loaded and parsed (DOMContentLoaded) //   const item = reviews[currentItem]; //   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// });

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem); }); // Function that does that;

// function showPerson(person) {
function showPerson() {;
  // const item = reviews[person];
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person;
nextBtn.addEventListener('click', function() {
  currentItem++;
  // prevent the index too much ; more than 3;
  if (currentItem > reviews.length - 1) { // reviews.length = 4 -1 to make It max to 3 which the max number of index array
    currentItem = 0;
  };
  showPerson(currentItem);
});

// show prev person;
prevBtn.addEventListener('click', function() {
  currentItem--;
  // prevent the index too much ; more than 3;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  };
  showPerson(currentItem);
});

// show random person;
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem);
  showPerson();
});
