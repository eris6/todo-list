import { project } from "./project.js";

export const manager = function () {
    const allProjects = [];
    let activeProject = null;
    const addProject = (project) => {
        if (typeof project.addToDo === 'function'){
            allProjects.push(project);
        }
    }

    const deleteProject = (project) => {
        if (typeof project.addToDo === 'function'){
            const allProjectsIdx = allProjects.indexOf(project);
            if (allProjectsIdx > -1){
                allProjects.splice(allProjectsIdx, 1);
            }
        }
    }

    const listProjects = () => {
        console.log("Listed Projects")
        allProjects.forEach((project) => {
            console.log("------------");
            console.log(project.name);
            project.printToDoItems();
        })

    }

    const getActiveProject = () => {
        if (activeProject === null){
            activeProject = allProjects[0];
        }
        return activeProject;
    }


    const setActiveProject = (project) => {
        activeProject = project;
        getActiveProject();
    }


    return {addProject, listProjects, getActiveProject, setActiveProject, allProjects, deleteProject};



}();

