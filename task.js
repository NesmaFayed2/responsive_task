const toggleButton = document.getElementById('menu-toggle');
const menuWrapper = document.getElementById('menu-wrapper');

toggleButton.addEventListener('click', () => {
  menuWrapper.classList.toggle('active');
});