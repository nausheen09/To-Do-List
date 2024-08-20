function addToList() {
    const userInput = document.getElementById("user-input").value;
    const list = document.getElementById("numbered-list");

    if (userInput.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = userInput;
        list.appendChild(listItem);

        document.getElementById("user-input").value = ""; 
    }
}
