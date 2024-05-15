// set date;
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear(); // soft coding, dynamically get the current year

// close links;
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  // linksContainer.classList.toggle('show-links') // show or hide the links
  const containerHeight = linksContainer.getBoundingClientRect().height; // return the size of an element
  // console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;  // return the height only, if You add the links then It will increase, if You remove the links It will decrease
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`; // inline style (like this line) was stronger than the external CSS style
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link');

// fixed navbar, make navbar stay on top of Your page
window.addEventListener('scroll', function() {
  // console.log(window.pageYOffset); // get the scrolled value, the top is 0, if you scrolled down the value getting bigger
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) { // kalo scroll height lebih besar dari navbar height, bakal munculin navbar, 
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  
  // show the scrol link button When the scroll has reached the certain value;
  if (scrollHeight > 500) { // arbitrary number
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  };
});

// smooth scroll;
const scrollLink = document.querySelectorAll('.scroll-link');

scrollLink.forEach(function(link) {
  link.addEventListener('click', function(e) {
    // prevent default;
    e.preventDefault();
    // navigate to specific spot;
    const id = e.currentTarget.getAttribute("href").slice(1); // Using slice and passing index 1 to remove "#"
    console.log(id);
    // console.log(id); // lets see if You get the value of href #home, #about etc or not, and then we can use  getElementById()
    const element = document.getElementById(id);
    // calculate the height;
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    // let position = element.offsetTop; // before  It was hide by the navbar
    let position = element.offsetTop - navHeight; // after each section will be on the top
    // fixed When the user scroll after You click certain link because the navbar height that already gone in calculation;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    // console.log(position);  // cek aja dulu top position dari parent element by pixels
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0; // remove the links container after use click one of the link
  });
});
