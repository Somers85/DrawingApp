var blockSize  = '16px';
var gridSize = 2304;
var drawing  = false;
var useColor = false;


drawGrid();

// draws grid
function drawGrid(){
    for (var i = 0; i<gridSize; i++)
    {
        var newDiv = document.createElement('div');
        newDiv.id = 'box'+i;
        newDiv.style.backgroundColor = 'white';
        newDiv.style.width = blockSize;
        newDiv.style.height = blockSize;
        newDiv.style.display = 'inline-block';
        newDiv.addEventListener('mousedown',mousedwn);
        newDiv.addEventListener('mousemove',mousemove);
        newDiv.addEventListener('mouseup',mouseup);
        document.getElementById('container').appendChild(newDiv);
    }
}

// handles functionality
function mousedwn(event){
    drawing = true;
    if(drawing&&!useColor)
    {
        event.target.style.backgroundColor = 'black';
    }
    else if (drawing&&useColor)
    {
        event.target.style.backgroundColor = "rgb(" +  Math.floor(Math.random() *255) + "," +  Math.floor(Math.random() *255) + "," +  Math.floor(Math.random() *255) + ")";
    }
}

function mouseup(event){
    drawing = false;
}

function mousemove(event){
    if(drawing&&!useColor)
    {
        event.target.style.backgroundColor = 'black';
    }
    else if (drawing&&useColor)
    {
        event.target.style.backgroundColor = "rgb(" +  Math.floor(Math.random() *255) + "," +  Math.floor(Math.random() *255) + "," +  Math.floor(Math.random() *255) + ")";
    }
}

// adds additional functionality
// resets grid
document.getElementById('reset').addEventListener('mousedown',resetGrid);

function resetGrid(event){
    for (var i=0; i<gridSize; i++)
    {
        document.getElementById('box'+i).style.backgroundColor = 'white';
    } 
}

document.getElementById('colors').addEventListener('mousedown',colors);

function colors(event){
    if(useColor===false)
    {
        useColor = true;
        document.getElementById('colors').style.color = 'red';
    }
    else if(useColor===true)
    {
        useColor = false
        document.getElementById('colors').style.color = 'black';
    }
    console.log(useColor);
}

