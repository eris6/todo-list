import { projectList } from "./index.js";
import { project } from "./project.js";
import { manager } from "./manager.js";

import plusButtonPath from "./icons/plus-circle-outline.svg";
import sisyphusPath from "./icons/sisyphus.svg";
import deletePath from "./icons/delete-1-svgrepo-com.svg";
import editPath from "./icons/edit-tool-pencil-svgrepo-com.svg";
import checkPath from "./icons/checkbox-unchecked-svgrepo-com.svg";


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


    for (let i = 0; i < projectList.length; i++){
    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project-head");
    projectHeader.textContent = projectList[i].name;
    projectDom.appendChild(projectHeader);

    projectHeader.addEventListener('click', () =>{

        manager.setActiveProject(projectList[i]);

        let activeProject = manager.getActiveProject();


        let projectChildren = projectDom.children;

        for (let i = 0; i < projectChildren.length - 1; i++){
            projectChildren[i].style.backgroundColor="#2E236C"; 
        }
        projectHeader.style.backgroundColor="#433D8B";
        
        

              

        const taskDom = document.querySelector("#tasks");
        taskDom.innerHTML = '';


        
        

        let clickedProjectTasks = projectList[i].toDoList;

        if (clickedProjectTasks.length > 0){
            clickedProjectTasks.forEach((task) => generateTasks(task));
            
        }
        else{
            const taskDom = document.querySelector("#tasks");
            taskDom.innerHTML = '';
            
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
        console.log("New Project Clicked !!");
        projectDom.appendChild(newProjectName);
        projectDom.appendChild(newProjecConfirm);

        newProjecConfirm.appendChild(confirmProject);
        newProjecConfirm.appendChild(cancelProject);
        projectInput.focus();
    })

    cancelProject.addEventListener('click', () =>{
        console.log("cancel clciked");

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
    })
}


export function generateTasks(task){
    if (task.title !== ""){
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
    checkImage.src = checkPath;
    checkImage.alt = "Icon of checkbox button";
    checkImage.height = 50;
    checkImage.style.width="auto";
    editButton.appendChild(checkImage);
    }
  }
  






