const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', function() {
  if (!btn.classList.contains("slide")) { // if the button doesn"t have slide class then we"ll add It (!) means not
    btn.classList.add("slide");
    video.pause(); // invoke the video 
  } else {
    btn.classList.remove("slide");
    video.play(); 
  };
});

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
  preloader.classList.add('hide-preloader');
});
