const lightbox = document.getElementById('lightbox');
const imagenAmpliada = document.getElementById('imagen-ampliada');
const caption = document.getElementById('caption');
const cerrar = document.querySelector('.cerrar');
const imagenes = document.querySelectorAll('.galeria img');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    imagenAmpliada.src = img.src;
    caption.textContent = img.alt;
  });
});

cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
