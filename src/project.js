export function project(name){
    const toDoList = [];

    function addToDo(toDoItem){
        toDoList.push(toDoItem);
    }

    function removeToDo(toDoItem){
        const index = toDoList.indexOf(toDoItem);

        if (index > -1){
            toDoList.splice(index, 1);
        }
    }

    function printToDoItems(){
        toDoList.forEach((toDoItem) => toDoItem.printItem());
    }

    return {name, toDoList, addToDo, removeToDo, printToDoItems}
}