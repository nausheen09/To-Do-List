var list = document.getElementById("numbered-list");
function addToList() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = userInput;
        list.appendChild(listItem);

        document.getElementById("user-input").value = ""; 

      
        var deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete";
    
    
        
        deleteBtn.setAttribute("onclick","removelist(event)")
        deleteBtn.setAttribute("type","button")
        deleteBtn.className="space"
      
        
        var editBtn = document.createElement("button")
        editBtn.setAttribute("type","button")
        editBtn.setAttribute("onclick","edit(event)")
        editBtn.innerHTML = "Edit"

        listItem.appendChild(deleteBtn)
        listItem.appendChild(editBtn)
        list.appendChild(list)
    }


    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Write something",
      
          });
    }
}

function dltAll() {
    list.innerHTML = ""
}

function removelist(event){
  event.target.parentNode.remove()
}

function edit(event){
  var updated = prompt("updated task",event.target.parentNode.firstChild.nodeValue)
  event.target.parentNode.firstChild.nodeValue = updated
}
