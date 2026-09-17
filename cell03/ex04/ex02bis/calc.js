$(document).ready(function() {
    setInterval(function() { alert('Please, use me...'); }, 30000);

    $('#submitBtn').click(function() {
        // jQuery uses .val() to get input values
        const leftInput = $('#leftMember').val();
        const rightInput = $('#rightMember').val();
        const operator = $('#operator').val();

        if (!/^\d+$/.test(leftInput) || !/^\d+$/.test(rightInput)) {
            alert('Error :('); console.log('Error :('); return;
        }

        const numLeft = parseInt(leftInput, 10);
        const numRight = parseInt(rightInput, 10);

        if (numRight === 0 && (operator === '/' || operator === '%')) {
            alert("It's over 9000!"); console.log("It's over 9000!"); return;
        }

        let result;
        switch (operator) {
            case '+': result = numLeft + numRight; break;
            case '-': result = numLeft - numRight; break;
            case '*': result = numLeft * numRight; break;
            case '/': result = numLeft / numRight; break;
            case '%': result = numLeft % numRight; break;
        }
        alert(result); console.log(result);
    });
});