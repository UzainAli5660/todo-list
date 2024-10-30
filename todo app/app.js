function addTodo() {
    var todoParent = document.getElementById("todoParent")
    var todoInput = document.getElementById("todoInput")
    if (todoInput.value.length < 3) {
        alert("Enter correct TO DO value")
        return
    }

    
    var li = document.createElement("li")
 
    li.innerHTML = todoInput.value

    var editBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"
    editBtn.setAttribute("onClick", "editTodo(this)")

    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    deleteBtn.setAttribute("onClick", "delTodo(this)")

    console.log("deleteBtn", deleteBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)


    todoParent.appendChild(li)
    todoInput.value = ""
}


function deleteAll() {
    var todoParent = document.getElementById("todoParent")
    console.log(todoParent.innerHTML)
    todoParent.innerHTML = ""
}

function delTodo(ele) {
    console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()
}  


function editTodo(ele) {
    var editVal = prompt("Enter value", ele.previousSibling.nodeValue)
    console.log(editVal)
    ele.previousSibling.nodeValue = editVal
}
