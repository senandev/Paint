const
    canv = document.getElementById('canvas');
ctx = canv.getContext("2d")
canv.width = 1280;
canv.height = 900;
isMouseDown = false;
let lineBrush = 2

ctx.lineWidth = lineBrush * 2;
ctx.fillStyle = document.getElementById('range').onclick = () => {
    lineBrush = document.getElementById('range').value;
    ctx.lineWidth = lineBrush * 2;
    console.log(lineBrush)
}
ctx.fillStyle = document.getElementById('color_button').onclick = () => {
    let color = document.getElementById('color').value;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    console.log(color)
}


canv.addEventListener('mousedown', function () {
    isMouseDown = true;
})
canv.addEventListener('mouseout', function () {
    isMouseDown = false;
})
canv.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
})



canv.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, lineBrush, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)

    } else {
        ctx.beginPath();
    }
})


function getImage(canv){
    var imageData = canv.toDataURL();
    var image = new Image();
    image.src = imageData;
    return image;
}
 
function saveImage(image) {
    var link = document.createElement("a");
 
    link.setAttribute("href", image.src);
    link.setAttribute("download", "canvasImage");
    link.click();
}
 
function saveCanvasAsImageFile(){
    var image = getImage(document.getElementById("canvas"));
    saveImage(image);
}