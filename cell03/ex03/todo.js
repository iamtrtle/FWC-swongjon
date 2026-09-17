const ft_list = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

// 1. Load TO DOs from cookies when the page opens
window.onload = function() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    
    if (todoCookie) {
        // Decode and parse the JSON string back to an array
        const todos = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        
        // Add them to the DOM in the exact order they were saved
        todos.forEach(task => {
            addTodoToDOM(task, false); 
        });
    }
};

// 2. Function to save current TO DOs to cookies
function saveTodos() {
    const tasks = [];
    const taskElements = ft_list.children;
    
    // Read all tasks from top to bottom
    for (let i = 0; i < taskElements.length; i++) {
        tasks.push(taskElements[i].textContent);
    }
    
    // Convert array to a string and encode it to store safely in a cookie
    const jsonString = JSON.stringify(tasks);
    const encodedString = encodeURIComponent(jsonString);
    
    // Set cookie to expire in 1 year
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = "todos=" + encodedString + ";expires=" + d.toUTCString() + ";path=/";
}

// 3. Function to create a TO DO element and add it to the DOM
function addTodoToDOM(text, isNew = true) {
    const div = document.createElement('div');
    div.textContent = text;
    
    // Handle Click to Remove
    div.onclick = function() {
        // Open confirmation window
        if (confirm('Do you want to remove this TO DO?')) {
            this.remove(); // Remove permanently from DOM
            saveTodos();   // Update the cookie after removal
        }
    };

    if (isNew) {
        // If it's a newly created task, put it at the TOP
        ft_list.insertBefore(div, ft_list.firstChild);
    } else {
        // If we are loading from cookies, just append it to keep the order
        ft_list.appendChild(div);
    }
}

// 4. Handle 'New' button click
newBtn.onclick = function() {
    const text = prompt('Enter a new TO DO:');
    
    // Check if the input is not empty or just spaces
    if (text && text.trim() !== '') {
        addTodoToDOM(text.trim(), true);
        saveTodos(); // Update the cookie after adding
    }
};