
const container = document.getElementById("imageContainer");
const title = document.getElementById("title");
const date = document.getElementById("date");
const about = document.getElementById("about");

function updateContent(image) {
    if (image) {
        title.textContent = image.dataset.title || "";
        date.textContent = image.dataset.date || "";
        about.textContent = image.dataset.about || "";
    }
}

function getClosestImageToCenter() {
    const images = Array.from(container.querySelectorAll("img"));
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestImage = null;
    let closestDistance = Infinity;

    for (const img of images) {
        const rect = img.getBoundingClientRect();
        const imageCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - imageCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestImage = img;
        }
    }

    return closestImage;
}

container.addEventListener("scroll", () => {
    const closestImage = getClosestImageToCenter();
    updateContent(closestImage);
});

window.addEventListener("load", () => {
    updateContent(getClosestImageToCenter());
});






window.addEventListener('scroll', function() {
    const scrollElement = document.querySelector('.scroll');
    if (window.scrollY > 50) {  // Adjust this value as needed
        scrollElement.classList.add('hidden');
    } else {
        scrollElement.classList.remove('hidden');
    }
});





// Function to detect if an element is in the viewport (fade-in)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add the 'visible' class to elements when they come into view
function handleScroll() {
    const sections = document.querySelectorAll('.overlay-gallery');
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Call handleScroll on scroll
window.addEventListener('scroll', handleScroll);

// Also call handleScroll once when the page loads to show elements already in view
document.addEventListener('DOMContentLoaded', handleScroll);







    document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#imageContainer img");
    const title = document.getElementById("title");
    const date = document.getElementById("date");
    const about = document.getElementById("about");

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        const currentImg = images[index];
        title.textContent = currentImg.dataset.title;
        date.textContent = currentImg.dataset.date;
        about.textContent = currentImg.dataset.about;
    }

    document.getElementById("imageContainer").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Initial display
    showImage(currentIndex);
});
