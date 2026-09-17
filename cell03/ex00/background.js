// 1. Find the button in the HTML using its ID
const button = document.getElementById('colorButton');

// 2. Create a function to generate a random hex color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // Pick a random character from 'letters' and add it to the color string
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 3. Listen for a 'click' event on the button
button.addEventListener('click', function() {
    // When clicked, get a random color and apply it to the body's background
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
});