const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
  // console.log(e.target); // check will return which element user click and returning in tag form
  // console.log(e.target.dataset.id); // let me get the value of id elements, because id is equals to the text itself
  // if You try to click on the h2 or p tag It will return undefined, but if You click the buttons it'll return the id values, because They have the id;
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other button;
    btns.forEach(function(btn) {
      btn.classList.remove('active'); // change the white color to grey
      e.target.classList.add('active'); // change the clicked button to white
    });
    // hide other articles;
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active'); // now the h2 and p tag showed properly
  };
});
