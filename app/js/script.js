const check = document.getElementById('theme-toggle');
const html = document.querySelector('html');

check.addEventListener('change', e => {
  if (check.checked) {
    html.classList.add('theme-dark');
  } else {
    html.classList.remove('theme-dark');
  }
});
