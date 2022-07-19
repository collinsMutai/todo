// function addTodos(title, description, date) {
//   (this.title = title), (this.description = description), (this.date = date);
//   const todos = [];

const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");
//   let todoArray = [];
let todoarray = [];
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  todoarray.push({ title, description, date });
  console.log(todoarray);
  getTodos();
});
// }
// console.log(todoarray);
// addTodos();
// if (title.length > 0) {
//   let objectData = {};

//   Object.assign(objectData, { title, description, date });

//   // console.log('object data',objectData);
//   const newtodos = [...todos, objectData];
//   todos.push(objectData);
//   console.log(todos);

//   const storeTodo = localStorage.setItem("todolist", JSON.stringify(todos));

//   //  const returned = localStorage.getItem(JSON.parse('todolist'))
//   const returned = JSON.parse(localStorage.getItem("todolist"));
//   console.log("returned from local storage", returned);

//       returned.forEach((v, k) => {
//         let htmlCode = `

//      <table>
//      <thead>
//          <td>Completed</td>
//          <td>Title</td>
//          <td>Description</td>
//          <td>Completion Date</td>
//          <td> Edit</td>
//          <td>Delete</td>
//      </thead>
//      <tbody>
//          <tr id="todos" class="incomplete">
//              <td><input id="checkItem" type="checkbox" name="checkbox" /></td>
//              <td id="titleText">${title}</td>
//              <td id="descriptionText" >${description}</td>
//              <td id="dateText">${date}</td>
//              <td><button id="editBtn">Edit</button></td>
//              <td><button id="deleteBtn">Delete</button></td>
//          </tr>
//      </tbody>
//  </table>
//  `;
function getTodos() {
  let currentText = "";
  todoarray.map((item, index) => {
    currentText += item.title + "\n";
  });
  const h2 = document.createElement("h2");
  h2.innerText = currentText;
  const list = document.getElementById("listBox");
  list.innerHTML = "";
  list.appendChild(h2);
  return;
  // todoarray.map((item, i) => {
  //   const h2 = document.createElement("h2");
  //   const list = document.getElementById("listBox");
  //     h2.innerHTML = " ";
  //   h2.innerText += `${item.title}`;
  //   list.appendChild(h2);
  //   // list.insertAdjacentHTML("afterbegin", htmlCode);
  //   console.log("Item inserted");

  //   // document.getElementById("form").reset();
  // });
}

// getTodos();
// });

// delete todo item
// this.deleteTodo = function deleteTodo() {
//   const deleteItem = document.getElementById("deleteBtn");
//   deleteItem.addEventListener("click", (e) => {
//     console.log("btn delete clicked");
//     const task =
//       e.target.parentElement.parentElement.parentElement.parentElement;
//     task.remove();
//   });
// };

//       this.completeTodo = function completeTodo() {
//         const checkItem = document.getElementById("checkItem");
//         checkItem.addEventListener("click", (e) => {
//           const task = e.target.parentElement.parentElement;
//           task.classList.toggle("completed");

//           // currentDate = new Date().toLocaleString();

//           // const dateText = document.getElementById("dateText");
//           // dateText.innerHTML = currentDate;
//         });
//       };

//       // deleteTodo();
//       completeTodo();
//     }
//   });
// })

// addTodos();
