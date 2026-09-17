// $(document).ready ensures the page is fully loaded before running the script
$(document).ready(function() {
    
    // Select the button using jQuery ($) and listen for a click
    $('#colorButton').click(function() {
        
        // Generate a random hex color code
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        // Use jQuery's .css() method to change the background color of the body
        $('body').css('background-color', color);
    });

});