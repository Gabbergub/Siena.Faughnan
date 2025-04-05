
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