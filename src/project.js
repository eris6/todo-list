export function project(name) {
    const toDoList = [];
  
    function addToDo(toDoItem) {
      toDoList.push(toDoItem);
    }
  
    function removeToDo(toDoItem) {
      const index = toDoList.indexOf(toDoItem);
  
      if (index > -1) {
        toDoList.splice(index, 1);
      }
    }
  
    function printToDoItems() {
      toDoList.forEach((toDoItem) => toDoItem.printItem());
    }
  
    function getToDoItems() {
      let arr = [];
      toDoList.forEach((toDoItem) => {
        const toDoObject = {
          title: toDoItem.title,
          description: toDoItem.description,
          priority: toDoItem.priority,
          dueDate: toDoItem.dueDate,
          completed: toDoItem.completed,
        };
        arr.push(toDoObject);
      });
      return arr;
    }
  
    return { name, toDoList, addToDo, removeToDo, printToDoItems, getToDoItems };
  }
  