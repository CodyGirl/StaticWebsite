// script.js

let currentIndex = 0;
const images = [];
const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotContainer = document.querySelector('.dot-indicators');

function loadImages() {
    for (let i = 1; i <= 5; i++) { // Assuming there are 5 images numbered 1 to 5
        const img = new Image();
        img.src = `pictures/image${i}.jpg`; // Update with the correct image path
        images.push(img);
    }
    displayImage();
    createDots();
}

function displayImage() {
    carouselContainer.innerHTML = '';
    const img = images[currentIndex];
    carouselContainer.appendChild(img);
    updateDots();
}

function createDots() {
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => { 
            currentIndex = i;
            displayImage();
            resetAutoCycle();
        });
        dotContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    displayImage();
}

let autoCycle;
function startAutoCycle() {
    autoCycle = setInterval(nextImage, 4000);
}

function resetAutoCycle() {
    clearInterval(autoCycle);
    startAutoCycle();
}

nextButton.addEventListener('click', () => {
    nextImage();
    resetAutoCycle();
});

prevButton.addEventListener('click', () => {
    prevImage();
    resetAutoCycle();
});

loadImages();
startAutoCycle();
