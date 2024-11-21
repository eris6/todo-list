import "./styles.css"
import { toDo } from "./todo.js";
import { project } from "./project.js";
import { manager } from "./manager.js";
import { format } from 'date-fns';

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


const exampleProjectOne = project("Example Project One");

const exampleToDoOne = toDo("Read Up to Pg. 56 of Crime & Punishment", "Make sure to highlight", currentDate, "HIGH");
// const exampleToDoTwo = toDo("Read Up to Pg. 107 of Crime & Punishment", "Annotate closely", currentDate, "MEDIUM");

exampleProjectOne.addToDo(exampleToDoOne);
// exampleProjectOne.addToDo(exampleToDoTwo);
exampleProjectOne.printToDoItems();

exampleToDoOne.dueDate = getDate(11, 24, 2024);

exampleProjectOne.printToDoItems();



const exampleProjectTwo = project("Example Project 2")

manager.addProject(exampleProjectOne);
manager.addProject(exampleProjectTwo);


const newProject = document.querySelector("#add-project");
newProject.addEventListener('click', () => {
    console.log('Add New project clicked!');
})


