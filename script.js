// Add Tasks

function addPlan() {
  const plan = document.getElementById('input').value;
  if (plan !== '' && plan != null) {
    const listContainer = document.getElementById('listContainer');
    let listItem = document.createElement('div');
    listItem.setAttribute('class', 'listItem');
    let output =
      '<img src="./assets/icons8-unchecked-checkbox-80.png" style="width: 30px; height: 30px;" onclick="toggleCheck(this)">';
    output += '<h4 ondblclick="editTask(this)">' + plan + '</h4>';
    output +=
      '<button class="removeBtn" onclick="removeTask(this)">Remove</button>';
    listItem.innerHTML = output;
    listContainer.appendChild(listItem);
    document.getElementById('input').value = '';
    saveData();
  }
}

// Set Tasks Done or unDone

function toggleCheck(element) {
  element.parentNode.classList.toggle('checked');
  saveData();
}

// Remove Tasks

function removeTask(element) {
  const task = element.parentNode.getElementsByTagName('h4')[0].innerHTML;
  if (confirm('Do you want delete ' + task)) element.parentNode.remove();
  saveData();
}

// Edit Tasks

function editTask(element) {
  document.getElementById('input').value = element.innerHTML;
  element.parentNode.remove();
}

// Dark Mode

window.addEventListener('load', (event) => {
  const body = document.getElementsByTagName('body')[0];
  const todoList = document.getElementById('todoList');

  if (localStorage.getItem('dark-mode') === 'enabeld') {
    body.setAttribute('class', 'dark');
    todoList.style.backgroundColor = '#94bbe9';
  }
});

function darkMode() {
  const body = document.getElementsByTagName('body')[0];
  const todoList = document.getElementById('todoList');

  if (
    localStorage.getItem('dark-mode') == 'disabled' ||
    localStorage.getItem('dark-mode') == ''
  ) {
    body.setAttribute('class', 'dark');
    localStorage.setItem('dark-mode', 'enabeld');
    todoList.style.backgroundColor = '#94bbe9';
  } else if (localStorage.getItem('dark-mode') == 'enabeld') {
    body.removeAttribute('class', 'dark');
    localStorage.setItem('dark-mode', 'disabled');
    todoList.style.backgroundColor = '#faebd7';
  }
}

// OnLoad
window.onload = function () {
  const listContainer = document.getElementById('listContainer');
  listContainer.innerHTML = localStorage.getItem('data');
  if (listContainer.innerHTML !== '') {
    const listItem = document.getElementsByClassName('listItem')[0];
    if (
      listItem.getElementsByTagName('h4')[0].style.textDecoration ===
      'line-through'
    ) {
      listItem.getElementsByTagName('input')[0].checked = true;
    }
  }
};

// Save Data

function saveData() {
  const listContainer = document.getElementById('listContainer');
  localStorage.setItem('data', listContainer.innerHTML);
}
