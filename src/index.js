import React from "react"; // react core
import ReactDOM from "react-dom"; // robot library used for drawing in dom (html)
import "./index.css"; // react allows us to load css not just in one file but for each element
// /. means that the file is in the same folder, if a file has no extension it assumes by default that is .js
// this is to import the default export from a file, if what we import is not the default the syntax is import { item } form "source"
import App from "./containers/App";
// standar says that components have to be capitalized, thats why it is Hello and not hello
import * as serviceWorker from "./serviceWorker";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));
// this is mounting, the start of the app, when we get root and we render there the app

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // makes our app to be faster
