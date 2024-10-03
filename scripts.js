function loadNavBar() {
  console.log("Loading navbar...");
  $("#nav-placeholder").load("navbar.html", function() {
    console.log("Navbar loaded.");
    const menu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    if (menu && menuLinks) {
      menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
      });
    } else {
      console.error("Menu or Menu Links not found");
    }
  });
}

$(document).ready(function() {
  loadNavBar();
});
