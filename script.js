const canvas = document.querySelector(".canvas");
const canvasSize = 800;
const gridWidth = 64;
let tileWidth = canvasSize / gridWidth;
// console.log(tileWidth);

for (let x = 0; x < gridWidth; x++){
    for (let y = 0; y < gridWidth; y++){
        // console.log(x,y);
        const square = document.createElement('div');
        square.setAttribute("id", "X" + x + "Y" + y);
        square.setAttribute("class", "gridElement");
        square.setAttribute("style", "width: " + tileWidth + "px; height: " + tileWidth + "px;");
        // square.setAttribute("border", "1px solid green");
        canvas.appendChild(square);
    }
}

const gridElements = document.querySelectorAll(".gridElement");
// console.log(gridElements);
gridElements.forEach((square) =>{
    square.addEventListener('mouseenter', () => {
        // console.log(square.getAttribute("id"));
        square.style.backgroundColor = "red";
    })
});