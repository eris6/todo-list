export function project(name){
    const toDoList = [];

    function addToDo(toDoItem){
        toDoList.push(toDoItem);
    }

    function printToDoItems(){
        toDoList.forEach((toDoItem) => toDoItem.printItem());
    }

    return {name, toDoList, addToDo, printToDoItems}
}