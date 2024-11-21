import "./styles.css"
import {toDo} from "./todo.js";
import { project } from "./project.js";










const exampleToDoOne = toDo("Read Up to Pg. 56 of Crime & Punishment", "Make sure to highlight", new Date(2024, 10, 21), "HIGH");

const exampleProjectOne = project("Example Project One");
exampleProjectOne.addToDo(exampleToDoOne);
console.log(exampleProjectOne);