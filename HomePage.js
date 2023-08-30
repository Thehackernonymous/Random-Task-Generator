const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const employeeInput = document.getElementById("employeeInput");
const employeeList = document.getElementById("employeeList");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const generateTaskBtn = document.getElementById("generateTaskBtn");
const randomTaskDisplay = document.getElementById("randomTask");

const employees = [];
const tasks = [];

// Add Employee button 
addEmployeeBtn.addEventListener("click", () => {
  const employeeName = employeeInput.value.trim();
  if (employeeName !== "") {
    employees.push(employeeName);
    updateEmployeeList();
    employeeInput.value = "";
  }
});

// Add Task button
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();                                                                  
  if (task !== "") {
    tasks.push(task);
    updateTaskList();
    taskInput.value = "";
  }
});

var input = document.getElementById("employeeInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addEmployeeBtn").click();
  }
});

var input = document.getElementById("taskInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addTaskBtn").click();
  }
});

// Generate Task button
generateTaskBtn.addEventListener("click", () => {
    if (tasks.length === 0 || employees.length === 0) {
      randomTaskDisplay.textContent = "No tasks or employees available.";
      return;
    }
  
    const randomTaskIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomTaskIndex];
    tasks.splice(randomTaskIndex, 1);
  
    const randomEmployeeIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomEmployeeIndex];
    employees.splice(randomEmployeeIndex, 1);
  
    updateTaskList();
    updateEmployeeList();
  
    randomTaskDisplay.textContent = `${randomEmployee} should do: ${randomTask}`;
  });
  

// update employee list
function updateEmployeeList() {
  employeeList.innerHTML = "";
  employees.forEach(employee => {
    const listItem = document.createElement("li");
    listItem.textContent = employee;
    employeeList.appendChild(listItem);
  });
}

// update task list
function updateTaskList() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
  });
}



  




