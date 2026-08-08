// Script base para The-BarberG-Studio
document.addEventListener('DOMContentLoaded', function(){
  console.log('The-BarberG-Studio cargado');
  // Abrir imagen en nueva pestaña al clic
  document.querySelectorAll('.galeria img, .grid img').forEach(img=>{
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', ()=>{
      window.open(img.src, '_blank');
    });
  });

  // Toggle menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(){
      navMenu.classList.toggle('open');
      // accessible text
      this.setAttribute('aria-expanded', navMenu.classList.contains('open'))
    });
  }
});
