var catBefore = document.querySelector('.example__fat-cat');
var catAfter = document.querySelector('.example__thin-cat');
var buttonBefore = document.querySelector('.example__button-before');
var buttonAfter = document.querySelector('.example__button-after');
var toggle = document.querySelector('.example__toggle');

buttonBefore.addEventListener('click', function() {
  if (catBefore.classList.contains('example__cat-none')) {
    catBefore.classList.remove('example__cat-none');
    catAfter.classList.add('example__cat-none');
    toggle.classList.remove('example__toggle--after');
  } else {
    catAfter.classList.add('example__cat-none');
  }
});

buttonAfter.addEventListener('click', function() {
  if (catAfter.classList.contains('example__cat-none')) {
    catAfter.classList.remove('example__cat-none');
    catBefore.classList.add('example__cat-none');
    toggle.classList.add('example__toggle--after');
  } else {
    catBefore.classList.add('example__cat-none');
  }
});
