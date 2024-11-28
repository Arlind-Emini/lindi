// Sample JavaScript code for dynamic content generation

// Sample function to fetch client projects from server
function fetchClientProjects() {
    // Placeholder for AJAX request to fetch client projects
    // In a real application, this would be replaced with an actual AJAX call
    return [
        { name: "Client Project 1", description: "Description of Client Project 1" },
        { name: "Client Project 2", description: "Description of Client Project 2" },
        { name: "Client Project 3", description: "Description of Client Project 3" }
    ];
}

// Sample function to fetch tasks for a specific client project from server
function fetchTasksForProject(projectId) {
    // Placeholder for AJAX request to fetch tasks for a specific client project
    // In a real application, this would be replaced with an actual AJAX call
    return [
        { name: "Task 1", description: "Description of Task 1" },
        { name: "Task 2", description: "Description of Task 2" },
        { name: "Task 3", description: "Description of Task 3" }
    ];
}

// Sample function to render client projects on the dashboard
function renderClientProjects() {
    const clientDashboard = document.getElementById('client-dashboard');
    const projects = fetchClientProjects();
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h2>${project.name}</h2>
            <p>${project.description}</p>
        `;
        clientDashboard.appendChild(projectElement);
    });
}

// Sample function to render tasks for a specific client project
function renderTasksForProject(projectId) {
    const taskManagement = document.getElementById('task-management');
    taskManagement.innerHTML = ''; // Clear previous tasks
    const tasks = fetchTasksForProject(projectId);
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>${task.description}</p>
        `;
        taskManagement.appendChild(taskElement);
    });
}

// Initial rendering of client projects
renderClientProjects();

// Sample event listener to handle click on a client project
document.getElementById('client-dashboard').addEventListener('click', function(event) {
    if (event.target.tagName === 'H2') {
        // Assume project id is stored as data attribute or obtained from server
        const projectId = event.target.dataset.projectId;
        // Render tasks for the clicked project
        renderTasksForProject(projectId);
    }
});
