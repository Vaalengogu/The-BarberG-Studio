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
      this.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  // Carrusel de servicios con flechas
  const servicesCarousel = document.getElementById('servicesCarousel');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  if (servicesCarousel && prevButton && nextButton) {
    const scrollAmount = 320;

    prevButton.addEventListener('click', () => {
      servicesCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      servicesCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});
