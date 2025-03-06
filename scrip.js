// Slideshow functionality
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(changeSlide, 2000);

// Surprise Gift Reveal
document.getElementById("giftButton").addEventListener("click", function() {
    document.getElementById("gift").classList.remove("hidden");
});