import "./styles.css"
import { toDo } from "./todo.js";
import { project } from "./project.js";
import { manager } from "./manager.js";
import { format, addDays } from 'date-fns';
import { generateProjects, generateTasks, addTaskDialog } from "./interface.js";

const allTasks = project("All Tasks");
const todayProject = project("Today");
const upcomingProjects = project("Upcoming");
const completedProjects = project("Completed");

//Get today's date
let currentDate = format(
    new Date(),
    'EEEE, MMMM dd'
  )

  const addOneDay = format(
    addDays(new Date(), 1),
    'EEEE, MMMM dd'
  );

  const addTwoDays = format(
    addDays(new Date(), 3),
    'EEEE, MMMM dd'
  );

console.log(localStorage.length);

manager.addProject(allTasks);
manager.addProject(todayProject);
manager.addProject(upcomingProjects);
manager.addProject(completedProjects);

const defaultTaskOne = toDo("Identify the planets", "Research the planets visible tonight and check which ones you can spot with the naked eye. Mark them on a stargazing map.", addOneDay, "HIGH", false);
const defaultTaskTwo = toDo("Learn the Phases of the Moon", "Study the different phases of the moon. Track the current phase and update your lunar calendar.", currentDate, "LOW", false);
const defaultTaskThree = toDo("Spot a Constellation", " Pick a constellation to learn about. Use a stargazing app to help you locate it in the sky tonight.", addTwoDays, "MEDIUM", false);

allTasks.addToDo(defaultTaskOne);
allTasks.addToDo(defaultTaskTwo);
allTasks.addToDo(defaultTaskThree);

todayProject.addToDo(defaultTaskTwo);
upcomingProjects.addToDo(defaultTaskOne);
upcomingProjects.addToDo(defaultTaskThree);

if (localStorage.length === 0){
  generateProjects();
  localStorage.setItem('placeholder', 1);
}
else{  
  
  function saveProjectsToLocal(){
    let projectArr = [];
    for (let i = 0; i < manager.allProjects.length; i++){
      let stringProject = (manager.allProjects[i]);
      projectArr.push(stringProject);
      }
      localStorage.setItem('projects', JSON.stringify(projectArr));
  }
  
  function readProjectsFromLocal(){
    let unParsedProjectList = localStorage.getItem('projects');
    let projectListObject = JSON.parse(unParsedProjectList);
    console.log(projectListObject);
    return projectListObject;
  }

readProjectsFromLocal();  
let projectListObj = readProjectsFromLocal();
 

if (projectListObj){ 

  for (let i = 0; i < projectListObj.length; i++){
    const currProject = project(projectListObj[i].name);

    if (projectListObj[i].name !== 'All Tasks' && projectListObj[i].name !== 'Today'
      && projectListObj[i].name !== 'Upcoming' && projectListObj[i].name !== 'Completed'){
        manager.addProject(currProject);
    }
    if (projectListObj[i].name === 'All Tasks'){
      manager.deleteProject(allTasks)
      manager.addProject(currProject);
    }
    if (projectListObj[i].name === 'Today'){
      manager.deleteProject(todayProject);
      manager.addProject(currProject);
    }
    if (projectListObj[i].name === 'Upcoming'){
      manager.deleteProject(upcomingProjects);
      manager.addProject(currProject);
    }
    if (projectListObj[i].name === 'Completed' ){
      manager.deleteProject(completedProjects);
      manager.addProject(currProject);
    }

        const currTaskList = projectListObj[i].toDoList;
        for (let i = 0; i < currTaskList.length; i++){
          const currTask = toDo(currTaskList[i].title, currTaskList[i].description, currTaskList[i].dueDate, currTaskList[i].priority, currTaskList[i].completed)
          currProject.addToDo(currTask);
        }
      }
}
  generateProjects();

}