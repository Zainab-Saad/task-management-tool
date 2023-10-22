const addTaskToList = () => {
  const title = document.querySelector('.task-title');
  const description = document.querySelector('.task-description');

  if (title.value === '' || description.value === '') {
    alert('Ensure that you add a title or atleast description to your task');
  } else {
    const listGroup = document.getElementsByClassName('list-group')[0];

    const listGroupItem = document.createElement('div');
    listGroupItem.className = `list-group-item list-group-item-action flex-column align-items-start`;

    const listGroupItemHeading = document.createElement('div');
    listGroupItemHeading.className = 'd-flex justify-content-between';

    const heading5 = document.createElement('h5');
    heading5.textContent = title.value;
    heading5.className = 'mb-1';

    const para = document.createElement('p');
    para.textContent = description.value;
    para.className = 'mb-1';

    const btnRightDiv = document.createElement('div');
    btnRightDiv.className = 'btn-right';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm mt-3 btn-danger delete-task';

    const deleteBtnAnchor = document.createElement('a');
    deleteBtnAnchor.className = 'nav-link';
    deleteBtnAnchor.textContent = 'Delete';
    deleteBtn.appendChild(deleteBtnAnchor);
    btnRightDiv.appendChild(deleteBtn);
    listGroupItemHeading.appendChild(heading5);
    listGroupItem.appendChild(listGroupItemHeading);
    listGroupItem.appendChild(para);
    listGroupItem.appendChild(btnRightDiv);
    listGroup.appendChild(listGroupItem);
  }
};

const deleteTaskFromList = (listGroup, listItem) => {
  if (listGroup !== null) {
    listGroup.removeChild(listItem);
  }
};

export { addTaskToList, deleteTaskFromList };
