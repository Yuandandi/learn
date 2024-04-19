// VARIABLES

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// EVENT LISTENERS;

// show the modal;
openBtn.addEventListener('click', function() {
  modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modalContainer.style.display = 'none';
});

// window is highest level of element so You can close on anywhere on the page
window.addEventListener('click', function(e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

