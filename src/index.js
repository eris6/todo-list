import "./styles.css"
import { toDo } from "./todo.js";
import { project } from "./project.js";
import { manager } from "./manager.js";
import { format } from 'date-fns';
import { generateProjects, generateTasks } from "./interface.js";
import deletePath from "./icons/delete-1-svgrepo-com.svg";
import editPath from "./icons/edit-tool-pencil-svgrepo-com.svg";
import checkPath from "./icons/checkbox-unchecked-svgrepo-com.svg";


// Set up default projects
const allTasks = project("All Tasks");
const todayProject = project("Today");
const upcomingProjects = project("Upcoming");
const completedProjects = project("Completed");


const projectList = [];



//Get today's date
let currentDate = format(
    new Date(),
    'EEEE, MMMM dd'
  )

function getDate(month, date, year){
    month -= 1;
    let result = format(
        new Date(year, month, date),
        'EEEE, MMMM dd'
      )
      return result;
}


// const exampleProjectOne = project("Example Project One");

const exampleToDoOne = toDo("Read Up to Pg. 56 of Crime & Punishment", "Make sure to highlight", currentDate, "HIGH");
const exampleToDoTwo = toDo("Read Up to Pg. 107 of Crime & Punishment", "Annotate closely", currentDate, "MEDIUM");
const exampleToDoThree = toDo("I DON'T BELIEVE IN YOU", "ANYWAY YOU PLAY IT", currentDate, "MEDIUM");








const newProject = document.querySelector("#add-project");
newProject.addEventListener('click', () => {
    console.log('Add New project clicked!');
})





manager.addProject(allTasks);
manager.addProject(todayProject);
manager.addProject(upcomingProjects);
manager.addProject(completedProjects);

console.log("---------Listed Projects-----------");
manager.listProjects();


console.log('----figuring out active project issue--------------');
// manager.setActiveProject(upcomingProjects);
manager.getActiveProject();
manager.setActiveProject(todayProject);
manager.setActiveProject(upcomingProjects);

allTasks.addToDo(exampleToDoOne);
allTasks.addToDo(exampleToDoTwo);
todayProject.addToDo(exampleToDoThree);
generateProjects();

// allTasks.toDoList.forEach((task) => generateTasks(task));


// generateTasks(exampleToDoOne);
// generateTasks(exampleToDoTwo);
// generateTasks(exampleToDoThree);

// manager.assignActiveProject(allTasks);
//  manager.getActiveProject();

export { projectList };



