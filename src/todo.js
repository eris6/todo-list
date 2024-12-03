export function toDo(title, description, dueDate, priority, completed){
    let _title = title;
    let _description = description;
    let _dueDate = dueDate;
    let _priority;

    if (priority === 'LOW' || priority === 'MEDIUM' || priority === 'HIGH'){
        _priority = priority;
    }
    let _completed = completed;

    return {
        get title(){
            return _title;
        },
        set title(newTitle){
            if (typeof newTitle === 'string'){
                _title = newTitle;
            }
            else{console.log("Title must be a string!")}
        },
        get description(){
            return _description;
        },
        set description(newDescription){
            if (typeof newDescription === 'string'){
                _description = newDescription;
            }
            else{console.log("Description must be a string!")}
        },

        get dueDate(){
            return _dueDate;
        },
        set dueDate(newDate){
            if (typeof newDate === 'string'){
                _dueDate = newDate;
            }
            else{console.log("Due date must be a string!")}
        },

        get priority(){
            return _priority;
        },
        set priority(newPriority){
            if (typeof newPriority === 'string'){
                if (newPriority === 'LOW' || newPriority === 'MEDIUM' || newPriority === 'HIGH'){
                    _priority = newPriority;
                }
            }
            else{console.log("Priority must be a string of LOW, MEDIUM, or HIGH")}
        },
        get completed(){
            return _completed;
        },
        set completed(newCompleted){
            if (newCompleted === false || newCompleted === true){
                _completed = newCompleted; 
            }
            else{console.log("Completed attribute must be a boolean!")}
        },
        printItem(){
            console.log("-------------------------")
            console.log("Title: " + _title);
            console.log("Description: " + _description);
            console.log("Due Date: " + _dueDate);
            console.log("Priority: " + _priority);
            console.log("Completed: " + _completed);
        }
    }
}