import { project } from "./project.js";
import { manager } from "./manager.js";

import plusButtonPath from "./icons/plus-circle-outline.svg";
import sisyphusPath from "./icons/sisyphus.svg";
import deletePath from "./icons/delete-1-svgrepo-com.svg";
import editPath from "./icons/edit-tool-pencil-svgrepo-com.svg";
import uncheckPath from "./icons/checkbox-unchecked-svgrepo-com.svg";
import checkPath from "./icons/checkbox-check-svgrepo-com.svg"

export function generateProjects(){
    const projectDom = document.querySelector("#projects");

    const header = document.createElement('div');
    header.id = 'header';

    const headerName = document.createElement('div');
    headerName.className = 'header-name';
    headerName.textContent = 'Sisyphus';

    const logo = document.createElement('img');
    logo.src = sisyphusPath;
    logo.alt = 'A stick drawing of Sisyphus rolling up his boulder, always in constant agony as he realizes the futility of living';
    logo.className = 'sisyphus-logo';

    header.appendChild(headerName);
    header.appendChild(logo);

    projectDom.appendChild(header);


    for (let i = 0; i < manager.allProjects.length; i++){
    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project-head");
    projectHeader.textContent = manager.allProjects[i].name;
    projectDom.appendChild(projectHeader);

    if (manager.getActiveProject().name === manager.getActiveProject().name){
        let projectChildren = projectDom.children;

        projectChildren[0].style.backgroundColor="#2E236C"; 
        
        const taskDom = document.querySelector("#tasks");
        taskDom.innerHTML = ''; 

    }

        const allTasksProject = manager.allProjects.find(p => p.name === manager.getActiveProject().name);
        if (allTasksProject) {
            manager.setActiveProject(allTasksProject);
    
            let projectChildren = projectDom.children;
            for (let i = 0; i < projectChildren.length - 1; i++) {
                projectChildren[i].style.backgroundColor = "#2E236C";
            }
            const allTasksHeader = Array.from(projectDom.children).find(header => header.textContent === manager.getActiveProject().name);
            if (allTasksHeader) {
                allTasksHeader.style.backgroundColor = "#433D8B";
            }
    
            const taskDom = document.querySelector("#tasks");
            taskDom.innerHTML = ''; 
    
            let allTasks = allTasksProject.toDoList;
    
            if (allTasks.length > 0) {
                allTasks.forEach((task) => generateTasks(task));
                generateAddTaskButton();
            }
        }
        

    projectHeader.addEventListener('click', (event) =>{

        manager.setActiveProject(manager.allProjects[i]);

        let projectChildren = projectDom.children;

        for (let i = 0; i < projectChildren.length - 1; i++){
            projectChildren[i].style.backgroundColor="#2E236C"; 
        }
        projectHeader.style.backgroundColor="#433D8B";
        
        const taskDom = document.querySelector("#tasks");
        taskDom.innerHTML = ''; 

        let clickedProjectTasks = manager.allProjects[i].toDoList;

        if (clickedProjectTasks.length > 0){
            clickedProjectTasks.forEach((task) => generateTasks(task));
            generateAddTaskButton();
            
        }
        else{
            generateAddTaskButton();

            if (manager.getActiveProject().name !== 'Upcoming' && manager.getActiveProject().name !== 'Completed'
        && manager.getActiveProject().name !== 'All Tasks' && manager.getActiveProject().name !== 'Today'){
            genereateDeleteProjectButton();
        }
        }

        
    })
    }

    const addProject = document.createElement("div");
    addProject.classList.add("add-project");
    addProject.textContent="New Project";

    const plusButton = document.createElement("img");
    plusButton.src = plusButtonPath;
    plusButton.alt = "icon of a plus button inside a circle";
    plusButton.height=36;
    plusButton.style.width="auto"
    plusButton.classList.add('add-project-button');
   
    addProject.appendChild(plusButton);
    projectDom.appendChild(addProject);


    const newProjectName = document.createElement("div");
    newProjectName.classList.add("new-project-name");
    const projectInput = document.createElement("input");
    projectInput.classList.add("project-input");
    projectInput.type="text";
    projectInput.placeholder="Stargazing";

    newProjectName.appendChild(projectInput);


    const newProjecConfirm = document.createElement("div");
    newProjecConfirm.classList.add("new-project-confirm");

    const confirmProject = document.createElement("div");
    confirmProject.classList.add("confirm-project");
    confirmProject.textContent="ADD";
    


    const cancelProject = document.createElement("div");
    cancelProject.textContent="CANCEL";
    cancelProject.classList.add("cancel-project");


    addProject.addEventListener('click', () =>{
        projectDom.appendChild(newProjectName);
        projectDom.appendChild(newProjecConfirm);

        newProjecConfirm.appendChild(confirmProject);
        newProjecConfirm.appendChild(cancelProject);
        projectInput.focus();
    })

    cancelProject.addEventListener('click', () =>{
        projectDom.removeChild(newProjectName);
        projectDom.removeChild(newProjecConfirm);

        newProjecConfirm.removeChild(confirmProject);
        newProjecConfirm.removeChild(cancelProject);
    })

    confirmProject.addEventListener('click', () =>{
        console.log("Add project clicked!!!");
        projectDom.innerHTML = "";

        if (projectInput.value !== ""){
            const addedProject = project(projectInput.value);
            manager.addProject(addedProject);

            manager.listProjects();
        }
        generateProjects();

        const recentProject = manager.allProjects[manager.allProjects.length - 1];

        if (recentProject){
            manager.setActiveProject(recentProject);
            let recentChildren = projectDom.children;
            for (let i = 0; i < recentChildren.length - 1; i++) {
                recentChildren[i].style.backgroundColor = "#2E236C";
            }

            const recentProjectHeader = Array.from(projectDom.children).find(header => header.textContent === recentProject.name);
            if (recentProjectHeader){
                recentProjectHeader.style.backgroundColor = "#433D8B";
            }

            const taskDom = document.querySelector("#tasks");
            taskDom.innerHTML = '';
            generateAddTaskButton();
            genereateDeleteProjectButton();
        }
    })

    
}

function generateAddTaskButton(){
    const taskDom = document.querySelector("#tasks");
    const addTask = document.createElement("div");
    addTask.classList.add("add-task");

    const addTaskButton = document.createElement("div");
    addTaskButton.id = 'add-task-button';
    addTaskButton.textContent = "New Task";

    addTask.appendChild(addTaskButton);

    const plusButton = document.createElement("img");
    plusButton.src = plusButtonPath;
    plusButton.alt = "icon of a plus button inside a circle";
    plusButton.height=50;
    plusButton.style.width="auto"

    addTask.appendChild(plusButton);
    taskDom.appendChild(addTask);

    addTask.addEventListener('click', () =>{
        console.log("booba");

    })
}

function genereateDeleteProjectButton(){
    const taskDom = document.querySelector("#tasks");

    const deleteProjectButton = document.createElement("div");
    deleteProjectButton.classList.add("delete-project");

    const deleteProjectText = document.createElement("div");
    deleteProjectText.classList.add("delete-project-text");
    deleteProjectText.textContent = "Delete Project"
    deleteProjectButton.appendChild(deleteProjectText);

    taskDom.appendChild(deleteProjectButton);
}



export function generateTasks(task){
    const taskDom = document.querySelector("#tasks");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    
    taskDom.appendChild(taskItem);
    
    const itemCloser = document.createElement("div");
    itemCloser.classList.add("item-closer");
    taskItem.appendChild(itemCloser);
    
    const deleteButton = document.createElement("img");
    deleteButton.src = deletePath;
    deleteButton.alt = "icon for the minimize button";
    deleteButton.height=36;
    deleteButton.style.width="auto";

    deleteButton.addEventListener('click', () =>{
        const projectDom = document.querySelector("#projects");
        let currProject = manager.getActiveProject();
        currProject.removeToDo(task);
        currProject.printToDoItems();
        projectDom.innerHTML = '';
        generateProjects();
        

        if (taskDom.children.length === 0){
            generateAddTaskButton();
        }
        

    })

    itemCloser.appendChild(deleteButton);
    
    
    const itemTitle = document.createElement("div");
    itemTitle.classList.add("task-item-title");
    itemTitle.textContent = task.title;
    taskItem.appendChild(itemTitle);
    
    const itemDescription = document.createElement("div");
    itemDescription.classList.add("task-item-description");
    itemDescription.textContent = task.description;
    taskItem.appendChild(itemDescription);
    
    
    const bottomRow = document.createElement("div");
    bottomRow.classList.add("task-item-bottom-row");
    taskItem.appendChild(bottomRow);
    
    const priorityButton = document.createElement("div");
    priorityButton.classList.add("priority-button");
    bottomRow.appendChild(priorityButton);


    if (task.priority === "LOW"){
        priorityButton.style.backgroundColor = "#00ab41";
        priorityButton.style.color="white";
        
    }
    else if (task.priority === "MEDIUM"){
        priorityButton.style.color="black";
        priorityButton.style.backgroundColor = "#FDFD96";

    }
    else if (task.priority === "HIGH"){
        priorityButton.style.backgroundColor = "#e06666ff";
        priorityButton.style.color = "white";
        
    }


    priorityButton.addEventListener('click', () =>{
        if (task.priority === "LOW"){
            task.priority = "MEDIUM";
            priorityButton.style.color="black";
            priorityButton.style.backgroundColor = "#FDFD96";            
        }
        else if (task.priority === "MEDIUM"){
            task.priority = "HIGH";
            priorityButton.style.backgroundColor = "#e06666ff";
            priorityButton.style.color = "white";
        }
        else if (task.priority === "HIGH"){
            task.priority = "LOW";
            priorityButton.style.backgroundColor = "#00ab41";
            priorityButton.style.color="white";
        }
})
    
    const priorityDate = document.createElement("div");
    priorityDate.classList.add("complete-by-text");
    priorityButton.appendChild(priorityDate);
    priorityDate.textContent=task.dueDate;
    
    
    const editCheckButtons = document.createElement("div");
    editCheckButtons.classList.add("edit-check-buttons");
    bottomRow.appendChild(editCheckButtons);
    
    
    const editButton = document.createElement("div");
    editButton.classList.add("edit-button");
    editCheckButtons.appendChild(editButton);
    
    const editImage = document.createElement("img");
    editImage.src = editPath;
    editImage.alt = "Icon of edit button";
    editImage.height = 50;
    editImage.style.width="auto";
    editButton.appendChild(editImage);
    
    
    const checkImage = document.createElement("img");
    if (task.completed === false){
        checkImage.src = uncheckPath;
    }
    else{
        checkImage.src = checkPath;
    }

    let completedProject;

        for (let i = 0; i < manager.allProjects.length; i++){
            if (manager.allProjects[i].name === 'Completed'){
                completedProject = manager.allProjects[i];

                if (task.completed === true){
                    if (!completedProject.toDoList.includes(task)){
                        completedProject.addToDo(task); 
                    }
                }
                else{
                    completedProject.removeToDo(task);
                }
        }
    }
    

    
    checkImage.alt = "Icon of checkbox button";
    checkImage.height = 50;
    checkImage.style.width="auto";
    editButton.appendChild(checkImage);

    
    checkImage.addEventListener('click', () => {
        if (task.completed === true){
            task.completed = false;
            checkImage.src = uncheckPath;
            
        }
        else{
            task.completed = true;
            checkImage.src = checkPath;
        }

        let completedProject;

        for (let i = 0; i < manager.allProjects.length; i++){
            if (manager.allProjects[i].name === 'Completed'){
                completedProject = manager.allProjects[i];

                if (task.completed === true){
                    completedProject.addToDo(task); 
                }
                else{
                    completedProject.removeToDo(task);
                }
        }

        
        // if (task.completed === false){
        //     task.completed = true;
        //     checkImage.src = uncheckPath;
        //     // let completedProject;
        //     // for (let i = 0; i < manager.allProjects.length; i++){
        //     //     if (manager.allProjects[i].name === 'Completed'){
        //     //         completedProject = manager.allProjects[i];
                    
        //     //         if (!completedProject.toDoList.includes(task)){
        //     //             completedProject.addToDo(task);
        //     //         }

                    
        //     //         const projectDom = document.querySelector("#projects");
        //     //         projectDom.innerHTML = "";
        //     //         generateProjects();
        //     //     }
        //     // } 
        // }
        // else{
        //     task.completed = false;
        //     checkImage.src = checkPath;
            
            
        // }

        // else{
        //     task.completed = false;
        //     checkImage.src = checkPath;
            

            
        // }

        
        // if (checkImage.src === checkPath){
        //     checkImage.src = uncheckPath;
        // }
    }
    })
}