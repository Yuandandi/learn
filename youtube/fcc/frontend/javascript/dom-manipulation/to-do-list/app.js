// variable

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// event listeners or add button;

addTask.addEventListener('click', function() {
  let task = document.createElement('div'); // add functionality add and delete button
  task.classList.add('task');
  
  let li = document.createElement('li');
  li.innerText = '$(inputTask.value)';
  task.appendChild(li);
  
  let checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa-solic fa-check></i>"';
  checkButton.classList.add('checkTask');
  task.appendChild(checkButton);

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solic fa-trash-can></i>"';
  deleteButton.classList.add('deleteTask');
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = ""; // remove the text inside the input task

  checkButton.parentElement.style.textDecoration = "line-through"
  
  deleteButton.addEventListener('click', function(e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });

})
