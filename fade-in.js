const scrollText = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
  const fadeStart = 50;  // Start fading after 50px
  const fadeEnd = 250;   // Fully faded by 250px

  const scrollTop = window.scrollY;
  let opacity = 1;

  if (scrollTop > fadeStart) {
    opacity = Math.max(0, 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart));
  }

  scrollText.style.opacity = opacity;
});