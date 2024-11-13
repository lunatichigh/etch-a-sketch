//Use javascript to make a square and create it within #container

function createSquares(numSquares) {
    const container = document.getElementById('container'); // Assuming you have a container element
  
    for (let i = 1; i < 257; i++) {
      // Create a new element (e.g., a div)
      const newSquare = document.createElement('div');
      newSquare.className = 'square';
        
      // Append the element to the container
      container.appendChild(newSquare);
    }
  }
  

  createSquares(16);


