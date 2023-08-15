 // When the user clicks on <div>, open the popup
 function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

var myData = localStorage.getItem('myData');
var myTasks = JSON.parse(myData); // Parse the JSON data into an array

var taskTable = document.getElementById('taskTable');

for (var i = 0; i < myTasks.length; i++) {
  var taskRow = document.createElement('tr');
  
  var taskNameCell = document.createElement('td');
  taskNameCell.textContent = myTasks[i].name;
  
  var taskDateCell = document.createElement('td');
  taskDateCell.textContent = myTasks[i].date;
  
  taskRow.appendChild(taskNameCell);
  taskRow.appendChild(taskDateCell);
  
  taskTable.appendChild(taskRow);
}
var todayTasks = [];

var currentDate = new Date();
var currentDay = currentDate.getDate();
var currentMonth = currentDate.getMonth() + 1; // January is 0
var currentYear = currentDate.getFullYear();

for (var i = 0; i < myTasks.length; i++) {
  var taskDate = new Date(myTasks[i].date);
  var taskDay = taskDate.getDate();
  var taskMonth = taskDate.getMonth() + 1; // January is 0
  var taskYear = taskDate.getFullYear();

  if (
    taskDay === currentDay &&
    taskMonth === currentMonth &&
    taskYear === currentYear
  ) {
    todayTasks.push(myTasks[i]);
  }
}

var todayEvents = document.getElementById('todayEvents');

if (todayTasks.length > 0) {
  var todayHeader = document.createElement('h3');
  todayHeader.style.color = "red";
  todayHeader.textContent = "Today's Events:";
  todayEvents.appendChild(todayHeader);

  var todayList = document.createElement('ul');

  var line = document.createElement('hr');
    todayList.appendChild(line);

  for (var i = 0; i < todayTasks.length; i++) {
    var taskItem = document.createElement('li');
    taskItem.textContent = todayTasks[i].name;
    todayList.appendChild(taskItem);
  }

  todayEvents.appendChild(todayList);
}
