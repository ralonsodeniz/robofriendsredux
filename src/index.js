import React from "react"; // react core
import ReactDOM from "react-dom"; // robot library used for drawing in dom (html)
import "./index.css"; // react allows us to load css not just in one file but for each element
import App from "./App"; // /. means that the file is in the same folder, if a file has no extension it assumes by default that is .js
// this is to import the default export from a file, if what we import is not the default the syntax is import { item } form "source"
// starndar says that components have to be capitalized, thats why it is Hello and not hello
import * as serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root")); // this calls ReactDOM package and uses the method render to send to the dom what we have in this line, in this case the class App
// we can add props to the render and use them inside the rendered component in this case the greeting (they can have whatever name) property in which we add in curly brackets the js code we want
// props are in the end parameters of a function called

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // makes our app to be faster
