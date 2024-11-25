import { projectList } from "./index.js";
import { project } from "./project.js";

export const manager = function () {
    const allProjects = [];
    let activeProject = null;

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
        if (activeProject === null){
            activeProject = allProjects[0];
            console.log(activeProject.name);
        }
        console.log("Active Project: " + activeProject.name);
        return activeProject;
    }


    const setActiveProject = (project) => {
        activeProject = project;
        getActiveProject();
    }


    return {addProject, listProjects, getActiveProject, setActiveProject};



}();

