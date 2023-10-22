import { addTaskToList, deleteTaskFromList } from './utils.js';

const addTaskBtn = document.getElementById('add-task');
addTaskBtn.onclick = function (event) {
  event.preventDefault(); // Prevent form submission
  addTaskToList();
  const addTaskForm = document.getElementById('add-task-form');
  addTaskForm.reset();

  const deleteTaskBtn = document.querySelectorAll('.delete-task');
  deleteTaskBtn.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission
      deleteTaskFromList(
        item.parentNode.parentNode.parentNode,
        item.parentNode.parentNode,
      );
    });
  });
};
