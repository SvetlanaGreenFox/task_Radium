const content = document.querySelector('.card__title');

content.addEventListener('mouseenter', function () {
  content.classList.add('colorUpdate');
});

content.addEventListener('mouseleave', function () {
  content.classList.remove('colorUpdate');
});

content.addEventListener('click', function () {
  content.style.opacity = 0;
});

document.addEventListener('keydown', function (e) {
  if (e.code == '32') {
    e.preventDefault();
    content.remove();
  }
});
