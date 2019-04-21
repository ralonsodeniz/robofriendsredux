import React from "react";

const Scroll = props => {
  // every component has intrinsic props and one of them is children, children is the elements that the component wraps, in this case the component CardList
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px"
      }}
    >
      {props.children}
    </div>
  );
};
// in jsx to add styles we first say we are adding js expresion with {} and inside we inser an object with another curly brackets {}

export default Scroll;
