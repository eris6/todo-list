import { projectList } from "./index.js";
import { project } from "./project.js";
import plusButtonPath from "./icons/plus-circle-outline.svg";
import sisyphusPath from "./icons/sisyphus.svg"

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
        console.log(projectList[i].name);
        projectList[i].printToDoItems();
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
            projectList.push(addedProject);

            for (let i = 0; i < projectList.length; i++){
                console.log(projectList[i].name);
                
            }
        }

        
        generateProjects();
    })



}