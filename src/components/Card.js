import React from "react"; //even if it seems we are not using react, we are, all the virtual dom is referring to react elements to draw in the html dom

const Card = ({ name, email, id }) => {
  // so we dont have to use props.name ... and just use name ...
  return (
    // In the virtual dom we return 1 thing as any function so everything has to be wrapped in a div
    // curly brackets {} for everything that is a js expression
    <div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${id}?set=set4`} alt="robots" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
