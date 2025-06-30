document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Ocultar menú al hacer clic en una opción, solo en móviles
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });
});

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

document.getElementById('lightbox-close').addEventListener('click', () => {
  document.getElementById('lightbox').classList.remove('active');
});

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target.id === 'lightbox') {
    e.currentTarget.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let lastScroll = 0;
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      header.classList.add('hide'); // hacia abajo
    } else {
      header.classList.remove('hide'); // hacia arriba
    }

    lastScroll = currentScroll;
  });
});