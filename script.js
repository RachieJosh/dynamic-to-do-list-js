document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add tasks
  function addTask() {
    const taskText = taskInput.value.trim(); // Retrieve and trim the input value

    if (taskText === "") {
      // Check if input is empty
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li) element
    const li = document.createElement("li");
    li.textContent = taskText; // Set text to input value

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set button text to "Remove"
    removeButton.className = "remove-btn"; // Add class for styling

    // Add event listener to remove the task when clicked
    removeButton.onclick = function () {
      taskList.removeChild(li); // Remove the task from the list
    };

    // Append the remove button to the list item (li)
    li.appendChild(removeButton);

    // Append the list item (li) to the task list (ul)
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
  }

  // Add event listener for the "Add Task" button click
  addButton.addEventListener("click", addTask);

  // Add event listener for the "Enter" key to add tasks
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Check if the Enter key is pressed
      addTask();
    }
  });
});
