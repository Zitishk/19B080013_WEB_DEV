let hamburger = document.querySelector('.cus-nav div');
let items = document.querySelector('.items');
const links = document.querySelectorAll('.items li');

hamburger.addEventListener('click', () => {
  items.classList.toggle('open');
  hamburger.classList.toggle('rot');
});
items.addEventListener('click',() => {
  items.classList.toggle('open');
})
