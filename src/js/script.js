
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
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = Array.from(document.querySelectorAll('.gallery img'));
let currentIndex = -1;

galleryImages.forEach((img, index) => {
  img.dataset.index = index;
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(index);
    lightbox.classList.add('active');
  });
});

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
}

function showImage(index) {
  if (index >= 0 && index < galleryImages.length) {
    lightboxImg.src = galleryImages[index].src;
    currentIndex = index;

    // Mostrar u ocultar flechas según el índice
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    prevBtn.style.display = (currentIndex === 0) ? 'none' : 'block';
    nextBtn.style.display = (currentIndex === galleryImages.length - 1) ? 'none' : 'block';

    const counter = document.getElementById('lightbox-counter');
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
  }
}

document.getElementById('lightbox-close').addEventListener('click', () => {
  lightbox.classList.remove('active');
});

document.getElementById('lightbox-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  showImage(currentIndex - 1);
});

document.getElementById('lightbox-next').addEventListener('click', (e) => {
  e.stopPropagation();
  showImage(currentIndex + 1);
});

lightbox.addEventListener('click', (e) => {
  if (e.target.id === 'lightbox') {
    lightbox.classList.remove('active');
  }
});
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'ArrowLeft' && currentIndex > 0) {
    showImage(currentIndex - 1);
  } else if (e.key === 'ArrowRight' && currentIndex < galleryImages.length - 1) {
    showImage(currentIndex + 1);
  } else if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});


let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
}, false);

function handleGesture() {
  const diff = touchEndX - touchStartX;
  if (Math.abs(diff) > 50) {
    if (diff > 0 && currentIndex > 0) {
      showImage(currentIndex - 1); // swipe derecha → imagen anterior
    } else if (diff < 0 && currentIndex < galleryImages.length - 1) {
      showImage(currentIndex + 1); // swipe izquierda → imagen siguiente
    }
  }
}

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
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600); // coincide con el transition
  }
});