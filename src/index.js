import "./styles.css"
import { toDo } from "./todo.js";
import { project } from "./project.js";
import { manager } from "./manager.js";

const exampleToDoOne = toDo("Read Up to Pg. 56 of Crime & Punishment", "Make sure to highlight", new Date(2024, 10, 21), "HIGH");
const exampleToDoTwo = toDo("Read Up to Pg. 107 of Crime & Punishment", "Annotate closely", new Date(2024, 10, 22), "MEDIUM");

const exampleProjectOne = project("Example Project One");
exampleProjectOne.addToDo(exampleToDoOne);
exampleProjectOne.addToDo(exampleToDoTwo);
exampleProjectOne.printToDoItems();


const exampleProjectTwo = project("Example Project 2")

manager.addProject(exampleProjectOne);
manager.addProject(exampleProjectTwo);

manager.listProjects();


manager.assignActiveProject("Example Project 2");