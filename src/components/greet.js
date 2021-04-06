import React from "react";

function greet(props) {
  const {name,children,arr}=props ///destructuring
  return (
    <div>
      <h1>hello Good morning {name}</h1>
      {children}
      {arr}
    </div>
  );
}
export const Greet1 = greet; //in this export . Import name should be same as export
// but in default export . Import name can be anything , without use {} this bracket It will point defaultS
