import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, userIndex) => {
        return (
          <Card
            key={robots[userIndex].id} // key prob is needed when doing a loop in react because if we delete an element without a key react wont know which element was and it will have to redraw the complete component while if it had the key prop it will delete just that one
            // key prop should be something that doesnt change for example in this case the id
            id={robots[userIndex].id}
            name={robots[userIndex].name}
            email={robots[userIndex].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
