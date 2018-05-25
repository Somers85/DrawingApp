var blockSize  = '32px';
var gridSize = 1024;
var drawing  = false;


// draws grid
function drawGrid(){    
    for (var i = 0; i<gridSize; i++)
    {
        var newDiv = document.createElement('div');
        newDiv.id = 'box'+i;
        newDiv.style.backgroundColor = 'black';
        newDiv.style.width = blockSize;
        newDiv.style.height = blockSize;
        newDiv.style.display = 'inline-block';
        newDiv.style.opacity = '0';
        newDiv.addEventListener('mousedown',mousedwn);
        newDiv.addEventListener('mousemove',mousemove);
        newDiv.addEventListener('mouseup',mouseup);
        document.getElementById('container').appendChild(newDiv);
    }
}

// handles functionality
function mousedwn(event){
    drawing = true;
}

function mouseup(event){
    drawing = false;
}

function mousemove(event){
    if(drawing)
    {
        event.target.style.opacity = '1';
    }
}

drawGrid();