const login = document.querySelector("a.login");
const transition = document.querySelector(
  ".transition");
const main = document.querySelector("main");

login.addEventListener('click', () => {
  main.classList.toggle('logged-in');
});
transition.addEventListener('click', () => {
  main.classList.toggle('logged-in');
});