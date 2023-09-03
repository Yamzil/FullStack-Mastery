const gridCanvas = document.getElementById('canva-container');
const gridSlider = document.getElementById('range-slider');
const gridColor = document.getElementById('colorpicker').value;
const context = gridCanvas.getContext('2d');

let gridSize = parseInt(gridSlider.value);
const canvasSize = 600;
const cellSize = canvasSize / gridSize;

function Clear() {
    drawGrid()
}

function drawGrid() {
    gridSize = parseInt(gridSlider.value);
    const cellSize = canvasSize / gridSize;
    gridCanvas.width = canvasSize;
    gridCanvas.height = canvasSize;
    context.clearRect(0, 0, canvasSize, canvasSize);

    for (let i = 0; i < gridSize; i++) {
        const pos = i * cellSize;
        context.beginPath();
        context.moveTo(pos, 0);
        context.lineTo(pos, canvasSize);
        context.stroke();

        context.beginPath();
        context.moveTo(0, pos);
        context.lineTo(canvasSize, pos);
        context.stroke();
    }
}

function handleMouseOver(event) {
    let reload = false;
    const rect = gridCanvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const col = Math.floor(mouseX / cellSize);
    const row = Math.floor(mouseY / cellSize);

    if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        context.beginPath();
        context.rect(col * cellSize, row * cellSize, cellSize, cellSize);
        context.fillStyle = gridColor;
        context.fill();
        reload = true;
    }
    if (reload){
        location.reload();
    }
}
drawGrid();

gridSlider.addEventListener('input', drawGrid);
gridCanvas.addEventListener('mousemove', handleMouseOver);