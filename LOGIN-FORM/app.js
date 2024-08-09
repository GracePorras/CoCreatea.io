const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".carousel .image");
  const bullets = document.querySelectorAll(".bullets span");

  function slideToImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("show", i === index);
    });
    bullets.forEach((bullet, i) => {
      bullet.classList.toggle("active", i === index);
    });
  }

  // Add event listeners to toggle links
  document.querySelectorAll(".toggle").forEach(toggleLink => {
    toggleLink.addEventListener("click", function(event) {
      event.preventDefault();
      const targetForm = toggleLink.textContent.includes("Register") ? 1 : 0;
      slideToImage(targetForm);
    });
  });
});

function openPopup() {
  const popup = document.getElementById('termsPopup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('termsPopup');
  popup.style.display = 'none';
}
