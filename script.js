//Use javascript to make a square and create it within #container
let gridSize = 16;

function createSquares() {
    const container = document.getElementById('container'); // Assuming you have a container element
  
    for (let i = 0; i < gridSize * gridSize; i++) {
      // Create a new element (e.g., a div)
      const newSquare = document.createElement('newSquare');
      newSquare.classList.add('square');;
      newSquare.style.width = (960/gridSize) + 'px';
      newSquare.style.height = (960/gridSize) + 'px';
        
      // Append the element to the container
      container.appendChild(newSquare);
    }
  }
  

  createSquares();

const button = document.getElementById("resetButton");


button.addEventListener("click", function(){
  const gridSize = parseInt(prompt("Please choose a grid size(No larger than 100):"));

  if (gridSize <= 100 && gridSize > 0){
    while (container.firstChild)
      container.firstChild.remove();
  
  for (let i = 0; i < (gridSize * gridSize); i++) {
      // Create a new element (e.g., a div)
      const newSquare = document.createElement('div');
      newSquare.className = 'square';
      newSquare.style.width = (960/gridSize) + 'px';
      newSquare.style.height = (960/gridSize) + 'px';
        
      // Append the element to the container
      container.appendChild(newSquare);
    }
  }
});