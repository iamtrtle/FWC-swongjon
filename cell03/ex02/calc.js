// 1. Alert every 30 seconds
setInterval(function() {
    alert('Please, use me...');
}, 30000); // 30000 milliseconds = 30 seconds

// 2. Get elements
const submitBtn = document.getElementById('submitBtn');

// 3. Handle calculation on click
submitBtn.addEventListener('click', function() {
    const leftInput = document.getElementById('leftMember').value;
    const rightInput = document.getElementById('rightMember').value;
    const operator = document.getElementById('operator').value;

    // Helper function to check if a string contains ONLY positive integers (>=0)
    // The regex /^\d+$/ ensures there are no letters, decimals, or negative signs.
    function isPositiveInteger(str) {
        return /^\d+$/.test(str);
    }

    // Check if inputs are valid positive integers
    if (!isPositiveInteger(leftInput) || !isPositiveInteger(rightInput)) {
        alert('Error :(');
        console.log('Error :(');
        return; // Stop execution
    }

    // Convert strings to numbers for calculation
    const numLeft = parseInt(leftInput, 10);
    const numRight = parseInt(rightInput, 10);

    // Check for division or modulo by zero
    if (numRight === 0 && (operator === '/' || operator === '%')) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return; // Stop execution
    }

    // Perform calculation based on the operator
    let result;
    switch (operator) {
        case '+':
            result = numLeft + numRight;
            break;
        case '-':
            result = numLeft - numRight;
            break;
        case '*':
            result = numLeft * numRight;
            break;
        case '/':
            result = numLeft / numRight;
            break;
        case '%':
            result = numLeft % numRight;
            break;
    }

    // Output the result
    alert(result);
    console.log(result);
});