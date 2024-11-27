const viewer = document.querySelector('spline-viewer');

// Listen for clicks on specific parts of the Spline model
viewer.addEventListener('click', (event) => {
    const objectName = event.target.name; // Name of the clicked object in Spline
    if (objectName === 'Head') {
        openVideo('videos/head.mp4');
    } else if (objectName === 'Abdomen') {
        openVideo('videos/abdomen.mp4');
    } else if (objectName === 'Base') {
        openVideo('videos/base.mp4');
    }
});

// Function to open videos in a new tab
function openVideo(videoPath) {
    window.open(videoPath, '_blank');
}
