// Wait for the DOM content to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage when the page loads
  loadTasks();

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Retrieve tasks from Local Storage
    storedTasks.forEach((taskText) => addTask(taskText, false)); // Add each task to the list without saving again
  }

  // Function to add tasks to the list
  function addTask(taskText, save = true) {
    // Create a new list item (li) element
    const li = document.createElement("li");
    li.textContent = taskText; // Set text of li to the task text

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set button text
    removeButton.className = "remove-btn"; // Add class for styling

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      taskList.removeChild(li); // Remove the li from the task list when clicked
      removeTaskFromLocalStorage(taskText); // Remove the task from Local Storage
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li element to the task list (ul)
    taskList.appendChild(li);

    // Save task to Local Storage if specified
    if (save) {
      saveTaskToLocalStorage(taskText); // Save task to Local Storage
    }

    // Clear the task input field for the next task
    taskInput.value = "";
  }

  // Function to save a task to Local Storage
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Retrieve existing tasks
    storedTasks.push(taskText); // Add the new task
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); // Save the updated tasks
  }

  // Function to remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]"); // Retrieve existing tasks
    storedTasks = storedTasks.filter((task) => task !== taskText); // Filter out the removed task
    localStorage.setItem("tasks", JSON.stringify(storedTasks)); // Update Local Storage
  }

  // Attach event listeners
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Get and trim the input value
    if (taskText !== "") {
      addTask(taskText); // Add task if input is not empty
    } else {
      alert("Please enter a task."); // Alert the user if empty
    }
  });

  // Allow adding tasks by pressing the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Check if the key pressed is "Enter"
      const taskText = taskInput.value.trim(); // Get and trim the input value
      if (taskText !== "") {
        addTask(taskText); // Add task if input is not empty
      } else {
        alert("Please enter a task."); // Alert the user if empty
      }
    }
  });
});
