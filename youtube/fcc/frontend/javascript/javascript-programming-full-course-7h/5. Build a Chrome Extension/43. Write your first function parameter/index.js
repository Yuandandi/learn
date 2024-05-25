// const welcomeEl = document.getElementById("welcome-el")
// function greetUser(name) {
//   welcomeEl.textContent = `Welcome back, ${name} 👋`
// }
// greetUser("Danzor")

const welcomeEl = document.getElementById("welcome-el");
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetingBack(greeting) {
  welcomeEl.textContent = `${greeting}, Danzor`;
};

greetingBack("Hello");
