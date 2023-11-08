
const canvas = document.querySelector(".canvas");
const canvasSize = 800;
const gridWidth = 16;
let gridElements = null;
let ink = "black";

function changeGrid(){
    gridElements.forEach((box) => {
        box.remove();
    });
    let newGrid = prompt("Please enter your new desired grid width (MAX: 100): ");
    if (newGrid > 100){
        newGrid = 100;
    }
    generateGrid(newGrid);
    getGridElements();
}

function getGridElements(){
    gridElements = document.querySelectorAll(".gridElement");
    gridElements.forEach((square) =>{
        square.addEventListener('mouseenter', () => {
            console.log(getColor());
            square.style.backgroundColor = getColor();
        })
    });
}

function getColor(){
    if (ink === "rainbow"){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    } else {
        return ink;
    }
}

function setColor(color = "black"){
   ink = color;
}

function generateGrid(size){
    let tileWidth = canvasSize / size;
    for (let x = 0; x < size; x++){
        for (let y = 0; y < size; y++){
            // console.log(x,y);
            const square = document.createElement('div');
            square.setAttribute("id", "X" + x + "Y" + y);
            square.setAttribute("class", "gridElement");
            square.setAttribute("style", "width: " + tileWidth + "px; height: " + tileWidth + "px;");
            // square.setAttribute("border", "1px solid green");
            canvas.appendChild(square);
        }
    }
    getGridElements();
}

function resetGrid(){
    gridElements.forEach((square) => {
        square.style.backgroundColor = "white";
    });
}

generateGrid(gridWidth);
// getGridElements();


const gridButton = document.querySelector("#grid");


