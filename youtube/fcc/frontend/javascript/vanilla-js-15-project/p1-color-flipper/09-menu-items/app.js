// items

const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// window.addEventListener('DOMContentLoaded', function() { // DOMContentLoaded, When index.html fully loaded
//   // console.log("shake and bake"); // simple check if It works
//   let displayMenu = menu.map(function (item) { // iterate menu array 
//     // console.log(item); // this will display every array in menu, print as an object
//     // return item;
//     // return "<h1>Hello world</h1>"; // will return h1 tag Hello world 10 times(as much as the array length)
//     // return `<h1>${item.title}</h1>`; // will return the content of title in the menu array, You can only use backtick `` to apply the element
//     return `<article class="menu-item">
//       <img src=${item.img} alt=${item.title} class="photo">
//       <div class="item-info">
//       <header>
//       <h4>${item.title}</h4>
//       <h4 class="price">${item.price}</h4>
//       </header>
//       <p class="item-text">${item.desc}</p>
//       </div>
//       </article>`;
//   });
//   // joining in one string;
//   // here will return giant string from menu array join method as a placeholder that can make array into a string;
//   displayMenu = displayMenu.join(""); // join ; method returns an array as a string, doesn't change the original array. any separator can be specified, the default is comma
//   console.log(displayMenu); // print as an array
//   sectionCenter.innerHTML = displayMenu; // now all the string turns into an actual element and loop though them one by one
// });

// debug the code and place It inside the Function so You can call anytime You want;

// load items

window.addEventListener('DOMContentLoaded', function() { 
  displayMenuItems(menu); // by commenting this You will hide the rest items
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <img src=${item.img} alt=${item.title} class="photo">
      <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
      </div>
      </article>`;
  });
  displayMenu = displayMenu.join(""); 
  // console.log(displayMenu);  // will displa all the element inside article tag into a full string
  sectionCenter.innerHTML = displayMenu; 
};

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories.map(function (category) {
    return `<button type="button" class="filter-btn" date-id=${category}</button>`;
  })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // will return domstringmap with id given in data-*="" ;
      // add the .id to return only the id string;
      // console.log(e.currentTarget.dataset.id); // dataset ; property read-only property of the htmlelement interface provides read/write access to custom data attribute (data) on elements
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) { // filter ; method creates a new array filled with elements that pass a tets provided by a Function, doesn't change the original array, doesn't execute the Function for empty elements
        // console.log(menuItem.category); // will return al menuItem category
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory)
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
