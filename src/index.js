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

  function addDate(date, addedDays){
    const add = addDays(new Date(date), addedDays)
    let addedDate = format(add,'EEEE, MMMM dd');
    return format(addedDate,'EEEE, MMMM dd');
  }

function getDate(month, date, year){
    month -= 1;
    let result = format(
        new Date(year, month, date),
        'EEEE, MMMM dd'
      )
      return result;
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
}

console.log(localStorage.length);
// localStorage.clear();


function projectLocalStorage(){
  for (let i = 0; i < manager.allProjects.length; i++){
    manager.allProjects[i].printToDoItems();

  }
  localStorage.setItem("projects", JSON.stringify(manager.allProjects));
}


  manager.addProject(allTasks);
  manager.addProject(todayProject);
  manager.addProject(upcomingProjects);
  manager.addProject(completedProjects);

  const defaultTaskOne = toDo("Identify the planets", "Research the planets visible tonight and check which ones you can spot with the naked eye. Mark them on a stargazing map.", addDate(currentDate, 1), "HIGH", false);
  const defaultTaskTwo = toDo("Learn the Phases of the Moon", "Study the different phases of the moon. Track the current phase and update your lunar calendar.", currentDate, "LOW", false);
  const defaultTaskThree = toDo("Spot a Constellation", " Pick a constellation to learn about. Use a stargazing app to help you locate it in the sky tonight.", addDate(currentDate, 2), "MEDIUM", false);

  allTasks.addToDo(defaultTaskOne);
  allTasks.addToDo(defaultTaskTwo);
  allTasks.addToDo(defaultTaskThree);

  todayProject.addToDo(defaultTaskTwo);
  upcomingProjects.addToDo(defaultTaskOne);
  upcomingProjects.addToDo(defaultTaskThree);

  generateProjects();
