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
});
