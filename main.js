var da = document.getElementById('drawArea');
var dax = da.getContext('2d');

var boxsize = 20;
var _draw = false;

dax.canvas.width = window.innerWidth;
dax.canvas.height = window.innerHeight;

document.getElementById('drawArea').addEventListener('mousedown',startDraw);
document.getElementById('drawArea').addEventListener('tick',update);
document.getElementById('drawArea').addEventListener('mouseup',stopDraw);

function startDraw(event){
    _draw = true;
}

function update()
{
   if (_draw===true)
   {
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        dax.beginPath();
        dax.rect(mouseX,mouseY,boxsize,boxsize);
        dax.fill();
   } 
}

function stopDraw(event)
{
    _draw = false;
}