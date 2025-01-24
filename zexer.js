document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed"); // Debugging

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");
    const expandableImages = document.querySelectorAll(".expandable");

    expandableImages.forEach(image => {
        image.addEventListener("click", () => {
            console.log("Image clicked:", image.src); // Debugging
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
        });
    });

    lightboxClose.addEventListener("click", () => {
        console.log("Close button clicked"); // Debugging
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            console.log("Outside of image clicked"); // Debugging
            lightbox.style.display = "none";
        }
    });
});
