// 1. Get the balloon element from the HTML
const balloon = document.getElementById('balloon');

// 2. Set up the initial variables
let size = 200;
const colors = ['red', 'green', 'blue']; // The color order required by the subject
let colorIndex = 0; // Starts at 0 (which is 'red')

// 3. Handle the "click" event
balloon.addEventListener('click', function() {
    // Increase size by 10px
    size += 10;
    
    // If the size exceeds 420px, it "explodes" and resets to 200px
    if (size > 420) {
        size = 200;
    }

    // Move to the next color (forward)
    // The modulo operator (%) ensures the index loops back to 0 after 2
    colorIndex = (colorIndex + 1) % 3;

    // Apply the new size and color to the balloon
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
});

// 4. Handle the "mouseleave" event
balloon.addEventListener('mouseleave', function() {
    // Decrease size by 5px
    size -= 5;
    
    // The size cannot go lower than 200px
    if (size < 200) {
        size = 200;
    }

    // Move to the previous color (backward)
    // Adding 3 before using modulo prevents the number from becoming negative
    colorIndex = (colorIndex - 1 + 3) % 3;

    // Apply the new size and color to the balloon
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
});