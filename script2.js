
const navbarMenu = document.getElementById('navbar-menu');
function toggleNavbarMenu() {
  navbarMenu.classList.toggle('hidden');
}

window.onbeforeunload = function() {
    return "¡Atención! Estás abandonando el sitio. ¿Estás seguro?";
  };