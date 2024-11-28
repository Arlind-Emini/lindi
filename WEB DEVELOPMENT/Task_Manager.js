// Task data
let tasks = [];

// Function to add a new task
function addTask(title, description, dueDate, priority, category, subtasks) {
    const newTask = {
        id: tasks.length + 1,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        category: category,
        subtasks: subtasks,
        status: "Backlog",
        comments: [],
        attachments: []
    };
    tasks.push(newTask);
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    const taskListSection = document.getElementById("task-list");
    taskListSection.innerHTML = ""; // Clear previous content

    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <h2>${task.title}</h2>
            <p>Description: ${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <p>Category: ${task.category}</p>
            <p>Status: ${task.status}</p>
            <button onclick="updateTaskStatus(${task.id}, 'In Progress')">Start</button>
            <button onclick="updateTaskStatus(${task.id}, 'Done')">Complete</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        
        // Subtasks
        if (task.subtasks.length > 0) {
            const subtasksList = document.createElement("ul");
            task.subtasks.forEach(subtask => {
                const subtaskItem = document.createElement("li");
                subtaskItem.textContent = subtask;
                subtasksList.appendChild(subtaskItem);
            });
            taskElement.appendChild(subtasksList);
        }

        // Comments
        const commentsSection = document.createElement("section");
        commentsSection.innerHTML = `
            <h3>Comments:</h3>
            <textarea id="comment-${task.id}" placeholder="Add a comment"></textarea>
            <button onclick="addComment(${task.id})">Add Comment</button>
            <ul id="comments-${task.id}"></ul>
        `;
        task.comments.forEach(comment => {
            const commentItem = document.createElement("li");
            commentItem.textContent = comment;
            commentsSection.querySelector(`#comments-${task.id}`).appendChild(commentItem);
        });
        taskElement.appendChild(commentsSection);

        // Attachments
        const attachmentsSection = document.createElement("section");
        attachmentsSection.innerHTML = `
            <h3>Attachments:</h3>
            <input type="file" id="attachment-${task.id}" accept="image/*, .pdf">
            <button onclick="attachFile(${task.id})">Attach File</button>
            <ul id="attachments-${task.id}"></ul>
        `;
        task.attachments.forEach(attachment => {
            const attachmentItem = document.createElement("li");
            attachmentItem.textContent = attachment;
            attachmentsSection.querySelector(`#attachments-${task.id}`).appendChild(attachmentItem);
        });
        taskElement.appendChild(attachmentsSection);

        taskListSection.appendChild(taskElement);
    });
}

// Function to update task status
function updateTaskStatus(taskId, newStatus) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].status = newStatus;
        displayTasks();
    }
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    displayTasks();
}

// Function to add a comment to a task
function addComment(taskId) {
    const commentText = document.getElementById(`comment-${taskId}`).value;
    if (commentText.trim() !== "") {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].comments.push(commentText);
            displayTasks();
        }
    }
}

// Function to attach a file to a task
function attachFile(taskId) {
    const fileInput = document.getElementById(`attachment-${taskId}`);
    const file = fileInput.files[0];
    if (file) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].attachments.push(file.name);
            displayTasks();
        }
    }
}

// Sample usage
addTask("Task 1", "Description of task 1", "2024-06-10", "High", "Work", ["Subtask 1", "Subtask 2"]);
addTask("Task 2", "Description of task 2", "2024-06-15", "Medium", "Personal", ["Subtask A", "Subtask B"]);

// Display tasks
displayTasks();
