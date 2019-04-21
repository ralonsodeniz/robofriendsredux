import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  // App is a smart component because it has state and thats because is a react.Component
  // react.Components have something called lifecycle methods that will be triggered once the app is loaded on the website
  constructor() {
    super();
    this.state = {
      // inside the constructor this.setState is not used, is used this.state and we put the initial values
      // state is the description of your app, is simple an object that describes the application and its state | props are things that come out of state that a parent feeds the child to have information
      // the child cannot change the state of the property, the parent says the children the state of the prop
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    // since this is part of react we don't have to use arrow function with this as we have to do with the methods we create
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch catches something from a place we tell | it's a tool that comes with all brosers to request something
      .then(response => response.json())
      // then when we catch what we want we have save it on response and transform it into json
      .then(users => this.setState({ robots: users }));
    // after transforming it we save what is returned in users and set it to the state robots
  } // this is a promise, its code that is executed once the previous part of the promise is completed using callback functions
  // If this takes too long to fetch and process we can make a conditional to show something meanwhile in the render part

  onSearchChange = event => {
    this.setState({ searchField: event.target.value }); // this is a method that cames with react to update the state, any prop of it, you don't do this.state.searchField = "whatever"
    // we deconstruct the state object and assing the props we want the new value
    // we always have to use arrow function when we create a method inide a component because the this of the arrow function is always the context where it was created in this case App. If we don't do that, this will refert to the context where it is called and thats the searchbox in this case and this does not have state there and it will return an error. other way to solve is to bind this value with a different value but its easier with the arrow function
    // event.target.value returns the value of what is changed in the event, in this case the writing
  };

  render() {
    const { robots, searchField } = this.state; // destructuring this.state so we don't have to be repeating it all the time and be able to use robots and searchField directly
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); // we do the toLowerCase so it is easear to compare two strings not having to worry about the lower and upper cases
    });
    return !robots.length ? (
      <h1 className="f1 tc">roboFriends list is Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
