import React from "react";
import Listrendenring from "./Listrendenring";
const styles={
    fontSize :"30px",
    color: "yellow"
}////////////////inline Styling
function childcomponent(props) {
  return (
    <div>
      Counter:{props.count}
      <button onClick={props.clickcount}>Child</button>
      <Listrendenring />
    </div>
  );
}
export function Listcomponent({ person }) {
  console.log({ person });
  return (
    <div>
      <h1 className="error">{person.id}</h1>
      <h1  style={styles}>{person.name}</h1>
      <h1 >{person.name}</h1>
      <h1 >{person.email}</h1>
    </div>
  );
}
export default childcomponent;
