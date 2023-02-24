function addToDo() {
    let todolist = []
    let textbox = document.getElementsByClassName("textbox").item(0).value;
    if (textbox != ""){
        todolist.push(textbox);
        let z = document.createElement("li")
        let check = document.createElement("input")
        check.type = "checkbox"
        z.innerHTML = todolist[0]
        let bottomdiv = document.getElementById("bottomdiv");
        bottomdiv.appendChild(z);
        bottomdiv.appendChild(check)
        document.getElementsByClassName("textbox").item(0).value = ""

    }
   


    
}

document.addEventListener("keydown", e=> {
    if (e.key === "Enter") {
        addToDo()
    }
})




