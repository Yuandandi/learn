const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

// kalo ada diapus kalo ga ada ditambahin
function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')
  ) {
    hiddenContent.classList.remove('reveal-btn') // if You comment this line It only has a powers to display not remove the text
  } else {
    hiddenContent.classList.add('reveal-btn')
  }
};

revealBtn.addEventListener('click', revealContent);
