
        const container = document.getElementById("imageContainer");
        const title = document.getElementById("title");
        const date = document.getElementById("date");
        const about = document.getElementById("about");

        function updateContent(image) {
            title.textContent = image.dataset.title;
            date.textContent = image.dataset.date;
            about.textContent = image.dataset.about;
        }

        container.addEventListener("scroll", () => {
            let images = Array.from(container.getElementsByTagName("img"));
            let centerIndex = Math.round(container.scrollLeft / (images[0].width + 10));
            updateContent(images[centerIndex]);
        });
  
