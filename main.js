

const container = document.getElementById('container');

//Array of colors to be used for the squares
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71',];

//Number of squares to be created
const SQUARES = 500;

// Loop to create and append squares
for (let i = 0; i< SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    //event listeners for mouseover to set color
    square.addEventListener('mouseover', () => setColor(square))

    //event listeners for mouseout to remove color
    square.addEventListener('mouseout', () => removeColor(square))

    // Append the square to the container
    container.appendChild(square)

}

// Function to set a random color to the square
// and add a shadow effect
function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Function to remove the color and shadow effect
function removeColor(element) {
    
    setTimeout(() => {

        // Set back to the default background color
        element.style.background = '#1d1d1d';

        // Remove the box shadow completely
        element.style.boxShadow = 'none';
        }, 500); // 500 milliseconds delay (adjust this value for a longer or shorter trail)
}   

// Function to get a random color from the colors array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}