function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeInElements() {
  var elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fade-in');
    }
  });
}

document.addEventListener('scroll', fadeInElements);
