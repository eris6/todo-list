import { projectList } from "./index.js";
import plusButtonPath from "./icons/plus-circle-outline.svg";


export function generateProjects(){
    const projectDom = document.querySelector("#projects");

    for (let i = 0; i < projectList.length; i++){
    const projectHeader = document.createElement("div");
    projectHeader.classList.add("project-head");
    projectHeader.textContent = projectList[i].name;
    projectDom.appendChild(projectHeader);

    projectHeader.addEventListener('click', () =>{
        console.log(projectList[i].name);
        projectList[i].printToDoItems();
        console.log('booba');
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

    addProject.addEventListener('click', () =>{
        console.log("New Project Clicked !!");
    })

}