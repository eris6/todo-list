import "./styles.css"
import { toDo } from "./todo.js";
import { project } from "./project.js";
import { manager } from "./manager.js";
import { format } from 'date-fns';
import { generateProjects, generateTasks, addTaskDialog } from "./interface.js";


// Set up default projects
const allTasks = project("All Tasks");
const todayProject = project("Today");
const upcomingProjects = project("Upcoming");
const completedProjects = project("Completed");

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

const exampleToDoOne = toDo("Read Up to Pg. 56 of Crime & Punishment", "Make sure to highlight", currentDate, "HIGH", true);
const exampleToDoTwo = toDo("Read Up to Pg. 107 of Crime & Punishment", "Annotate closely", currentDate, "LOW", false);
const exampleToDoThree = toDo("I DON'T BELIEVE IN YOU", "ANYWAY YOU PLAY IT", currentDate, "MEDIUM", false);
const exampleToDoFour = toDo("Cock", "ANYWAY YOU PLAY IT", currentDate, "MEDIUM", false);


const newProject = document.querySelector("#add-project");
newProject.addEventListener('click', () => {
    console.log('Add New project clicked!');
})

manager.addProject(allTasks);
manager.addProject(todayProject);
manager.addProject(upcomingProjects);
manager.addProject(completedProjects);

console.log("---------Listed Projects-----------");

allTasks.addToDo(exampleToDoOne);
allTasks.addToDo(exampleToDoTwo);
todayProject.addToDo(exampleToDoThree);

// manager.listProjects();


console.log('Here it is normally: ')
allTasks.printToDoItems();


console.log("Now deleting: !!!");
// allTasks.removeToDo(exampleToDoTwo);
allTasks.printToDoItems();
generateProjects();
addTaskDialog();




