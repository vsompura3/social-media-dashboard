const themeToggle = document.getElementById('theme-toggle');
const html = document.querySelector('html');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    html.classList.add('theme-dark');
  } else {
    html.classList.remove('theme-dark');
  }
});
