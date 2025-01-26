const viewer = document.querySelector('spline-viewer');

viewer.addEventListener('click', (event) => {
    const objectName = event.target.name; 
    if (objectName === 'Head') {
        openVideo('videos/head.mp4');
    } else if (objectName === 'Abdomen') {
        openVideo('videos/abdomen.mp4');
    } else if (objectName === 'Base') {
        openVideo('videos/base.mp4');
    }
});

function openVideo(videoPath) {
    window.open(videoPath, '_blank');
}
