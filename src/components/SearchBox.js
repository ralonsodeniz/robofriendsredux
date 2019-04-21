import React from "react";

const SearchBox = ({ searchChange }) => {
  // as the parameter we use the props name in the parent when the child is called
  //we are using destructuring here ({...}) it allows us to grab the props object and grab its propertie
  return (
    <div className="pa2">
      <input
        className="tc pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search Robots..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
