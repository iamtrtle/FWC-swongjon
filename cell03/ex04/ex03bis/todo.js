$(document).ready(function() {
    // 1. Load tasks from Cookie on startup
    loadCookies();

    // 2. Add new task
    $('#newBtn').click(function() {
        const task = prompt("Enter a new TO DO:");
        if (task && task.trim() !== "") {
            addTodoToDOM(task);
            saveCookies();
        }
    });

    // 3. Delete task on click (Event Delegation for dynamic elements)
    $('#ft_list').on('click', '.todo-item', function() {
        if (confirm("Do you want to delete this TO DO?")) {
            $(this).remove(); // jQuery method to remove element
            saveCookies();
        }
    });

    // --- Helper Functions ---
    function addTodoToDOM(text) {
        // jQuery .prepend() adds to the top
        const div = $('<div></div>').text(text).addClass('todo-item');
        $('#ft_list').prepend(div);
    }

    function saveCookies() {
        const tasks = [];
        $('.todo-item').each(function() {
            tasks.push($(this).text());
        });
        // Save array as a JSON string in cookies
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/";
    }

    function loadCookies() {
        const name = "todo=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        
        for (let i = 0; i < cookieArray.length; i++) {
            let c = cookieArray[i].trim();
            if (c.indexOf(name) === 0) {
                const tasks = JSON.parse(c.substring(name.length, c.length));
                // Loop backwards because prepend adds to the top
                for (let j = tasks.length - 1; j >= 0; j--) {
                    addTodoToDOM(tasks[j]);
                }
            }
        }
    }
});