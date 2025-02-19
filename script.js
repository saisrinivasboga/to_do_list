let tasks = [];

function showTasks() {
    const taskList = document.getElementById('taskList');
    const emptyMessage = document.getElementById('emptyMessage');
    
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
        
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <button onclick="removeTask(${index})" class="delete-btn">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task !== '') {
        tasks.push(task);
        taskInput.value = '';
        showTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    showTasks();
}

// Allow adding tasks with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Initial display
showTasks();