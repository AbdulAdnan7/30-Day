const input = document.querySelector('.todo-input input');
const addBtn = document.querySelector('.todo-input button');
const listContainer = document.querySelector('.todo-list');


function addTask() {
    if(input.value === "") {
        alert("Write Something First!")
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&times;";
        li.appendChild(span);
    }

    input.value = "";
    saveData();
}

addBtn.addEventListener("click", function() {
    addTask();
    saveData()
});

input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
    addTask();
    saveData()
    }
})

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    } 
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
};

 function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
 }

 showTask();