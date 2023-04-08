const menuItems = document.querySelectorAll('.side-menu ul li a');
const sidebar = document.querySelector('.side-menu');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    sidebar.classList.toggle('active');
  });
});
