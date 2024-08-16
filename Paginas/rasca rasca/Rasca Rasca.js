const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'foto.jpg'; // Asegúrate de tener una imagen llamada 'foto.jpg' en la misma carpeta

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

let isDrawing = false;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.globalCompositeOperation = 'destination-out';
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 20, 0, Math.PI * 2, false);
        ctx.fill();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});