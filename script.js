const container = document.getElementById("container");

const gridSize = 16; 
const totalSquares = gridSize * gridSize;

for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  square.addEventListener("mouseenter", () => {
    square.classList.add("active");
  });
}
