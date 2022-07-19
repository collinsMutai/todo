const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");

const form = document.getElementById("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const date = document.getElementById("date");
// console.log(title, description, date);
let todoArray = [];

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (title.value === "") {
    alert("Title is required");
    return;
  }

  if (description.value === "") {
    alert("Description is required");
    return;
  }

  if (date.value === "") {
    alert("Date is required");
    return;
  }

  todoArray.push({
    title: title.value,
    description: description.value,
    date: date.value,
    completed: false,
  });
  form.reset();
  // console.log(todoArray);
  // storeTodo(todoArray);
  addHtml(todoArray);
  console.log(todoArray);
});

const paintHtmlToDom = (data, id) => {
  const html = data
    .map((item, index) => {
      let htmlCode = `
          <div class="todo-items">
          <ul style="list-style: none;">
              <li id="taskDone">
                  <span  id="checkmark" style="padding-right: 10px;">
                    <input ${
                      data.completed ? "checked" : ""
                    } onchange="completeTask(this, ${index})" type="checkbox" />
                  </span>
                  <span style="padding-right: 10px;" id="titleText">${
                    item.title
                  }</span>
                  <span id="descriptionText">${item.description}</span>
                  <span id="dateText">${item.date}</span>
                  <span id="editBtn" style="padding-left: 10px;">
                  <button id="editBtn" onclick="editTask(${index})" type="submit">Edit</button>
                  </span><span><button onclick="deleteTask(${index})" id="deleteBtn" type="submit">Delete </button>
                  </span>
              </li>
          </ul>
      </div>
      `;
      return htmlCode;
    })
    .join("");

  const parentDiv = document.getElementById(id);

  if (parentDiv) {
    parentDiv.innerHTML = html;
  }
};

function addHtml() {
  const completedTodos = todoArray.filter((todo) => todo.completed);
  const notCompletedTodos = todoArray.filter((todo) => !todo.completed);

  paintHtmlToDom(notCompletedTodos, "tasksList");
  paintHtmlToDom(completedTodos, "completedTodos");
  // const taskContainer = document.getElementById("tasksList");
  // values = values.join("");
  // taskContainer.innerHTML = "";
  // taskContainer.insertAdjacentHTML("beforeend", values);
}

function editTask(id) {
  const item = getTaskById(id);

  console.log({ item });

  title.value = item.title;
  description.value = item.description;
  date.value = item.date;

  addBtn.style.display = "none";
  editBtn.style.display = "block";

  const clickHandler = (event) => {
    event.preventDefault();
    updateTask(id, {
      title: title.value,
      description: description.value,
      date: date.value,
    });
    editBtn.removeEventListener("click", clickHandler)
    addHtml();
  };
  editBtn.addEventListener("click", clickHandler);
}

function deleteTask(id) {
  const item = getTaskById(id);

  todoArray.splice(item, 1);
  console.log(todoArray);
  addHtml();
}

function completeTask(target, id) {
  console.log(id);
  const item = getTaskById(id);
  console.log(item);
  taskDone = document.getElementById("taskDone");

  item.completed = target.checked;

  todoArray.splice(id, 1, item);
  addHtml();
  // taskDone.children[id].classList = ["completed"];

  // if (target.checked) {
  //   target.parentElement.parentElement.classList.add("completed");
  // } else {
  //   target.parentElement.parentElement.classList.remove("completed");
  // }
  // console.log(taskDone.children[id]);
  // console.log(id);
}

function updateTask(id, newt) {
  todoArray.splice(id, 1, newt);

  addHtml();
  form.reset();
  editBtn.style.display = "none";
  addBtn.style.display = "block";
}

function getTaskById(id) {
  return todoArray.find((element, index) => index === id);
}
