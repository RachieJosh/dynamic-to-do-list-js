// Wait for the DOM content to fully load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add tasks to the list
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim the input value

    if (taskText === "") {
      // Check if the input is empty
      alert("Please enter a task."); // Alert the user if empty
      return;
    }

    // Create a new list item (li) element
    const li = document.createElement("li");
    li.textContent = taskText; // Set text of li to the task text
    li.classList.add("task-item"); // Add a class for styling (optional)

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set button text
    removeButton.className = "remove-btn"; // Add class for styling

    // Assign an onclick event to the remove button
    removeButton.onclick = function () {
      taskList.removeChild(li); // Remove the li from the task list when clicked
    };

    // Append the remove button to the li element
    li.appendChild(removeButton);

    // Append the li element to the task list (ul)
    taskList.appendChild(li);

    // Clear the task input field for the next task
    taskInput.value = "";
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask); // Add task when button is clicked

  // Allow adding tasks by pressing the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Check if the key pressed is "Enter"
      addTask(); // Call the addTask function
    }
  });
});
