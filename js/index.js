const numberOfImages = 4;
let current = 1;
let timer = null;

const images = document.querySelectorAll("#banner img");

function scroll() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
  images[current - 1].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
}
function nextSlide() {
  if (current === numberOfImages) {
    current = 1;
  } else {
    current++;
  }
  scroll();
}
document
  .getElementById("banner-arrow-left")
  .addEventListener("click", function () {
    if (current === 1) {
      current = numberOfImages;
    } else {
      current--;
    }
    scroll();
  });
document
  .getElementById("banner-arrow-right")
  .addEventListener("click", nextSlide);

timer = setInterval(nextSlide, 2500);
