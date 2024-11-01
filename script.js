// Function to add a new task
document.getElementById("addTaskBtn").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a task!");
    }
});

function addTask(taskText) {
    const taskList = document.getElementById("taskList");

    // Create list item
    const li = document.createElement("li");

    // Create task text
    const taskTextNode = document.createTextNode(taskText);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Mark task as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Append task text and delete button to list item
    li.appendChild(taskTextNode);
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);
}