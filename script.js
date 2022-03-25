const inputBox = document.querySelector(".textArea");
const addButt = document.querySelector(".addtd");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = () => {
   let userData = inputBox.value;
   if (userData.trim() != 0) {
      addButt.classList.add("active");
   } else {
      addButt.classList.remove("active");
   }
};

addButt.onclick = () => {
   let userData = inputBox.value;
   let getLocalStorage = localStorage.getItem("New Todo");
   if (getLocalStorage == null) {
      listArr = [];
   } else {
      listArr = JSON.parse(getLocalStorage);
   }
   listArr.push(userData);
   localStorage.setItem("New Todo", JSON.stringify(listArr));
   addButt.classList.remove("active");
   showList();
};

function showList() {
   let getLocalStorage = localStorage.getItem("New Todo");
   if (getLocalStorage == null) {
      listArr = [];
   } else {
      listArr = JSON.parse(getLocalStorage);
   }
   let newLi = "";
   listArr.forEach((element, index) => {
      newLi += `<li><input id="chek" type="checkbox" /><span id="text">${element}</span><span onclick = "delScr(${index})"; class="del"></span></li>`;
   });
   todoList.innerHTML = newLi;
   inputBox.value = "";
}

function delScr(index) {
   let getLocalStorage = localStorage.getItem("New Todo");
   listArr = JSON.parse(getLocalStorage);
   listArr.splice(index, 1);
   localStorage.setItem("New Todo", JSON.stringify(listArr));
   showList();
}
