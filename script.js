const container = document.getElementById("container");

let gridSize = 16; 
let totalSquares = gridSize * gridSize;
let mouseDown = false;
let randMode = false;

container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("square")) {
    mouseDown = true;
  }
});

document.addEventListener("mouseup", () => {
  mouseDown = false;
});

function createGrid(size){
  totalSquares = size * size;
  const containerSize = container.clientWidth;
  const squareSize = containerSize / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";

    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
      if (mouseDown){
        if (randMode){
          square.classList.remove("active");
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        else{
          square.classList.add("active");
        }
      }
    });
  }
}

createGrid(16);

const resizeBtn = document.getElementById("resizeBtn");
resizeBtn.addEventListener("click", handleResize);

function handleResize(){
  const input =  prompt("Enter size of grid sides (100 max):");
  const num = Number(input);
  if (num === null || num <= 0 || num > 100){ return; }
  container.innerHTML = "";
  createGrid(num);
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  const squares = container.querySelectorAll(".square");
  squares.forEach(square => {
  square.classList.remove("active");
  square.style.backgroundColor = "";
});
});

borderBtn.addEventListener("click", () => {
  container.classList.toggle("borders-on");
});

const randColour = document.getElementById("randColourBtn");
randColour.addEventListener("click", () => {
  randMode = !randMode;
});
