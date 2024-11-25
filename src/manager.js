import { projectList } from "./index.js";

export const manager = function () {
    const allProjects = [];
    let activeProject;

    const addProject = (project) => {
        if (typeof project.addToDo === 'function'){
            allProjects.push(project);
            projectList.push(project);
        }
        
    }

    const listProjects = () => {
        allProjects.forEach((project) => {
            console.log(project.name);
            project.printToDoItems();
        })
    }

    const getActiveProject = () => {
        console.log("Active Project: " + activeProject.name);
    }


    const assignActiveProject = (projectName) => {
        for (let i = 0; i < allProjects.length; i++){
            if (allProjects[i].name === projectName){
                activeProject = allProjects[i];
            }
            else{
                if (allProjects.length > 0){
                    activeProject = allProjects[0];
                } 
            }
        }
        getActiveProject();
    }


    return {addProject, listProjects, assignActiveProject, getActiveProject};



}();

