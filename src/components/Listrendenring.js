import React from "react";
import {Listcomponent} from './childcomponent';
function Listrendenring() {
  const person = [
    {
      id: 1,
      name: "sonal",
      email: "123@malllinator.com",
    },
    {
      id: 2,
      name: "sim",
      email: "123@malllinator.com",
    },
    {
      id: 3,
      name: "ajay",
      email: "123@malllinator.com",
    },
    {
      id: 4,
      name: "dev",
      email: "123@malllinator.com",
    },
    {
      id: 5,
      name: "manoj",
      email: "123@malllinator.com",
    },
  ];
  const personlist = person.map((person1,index)=><Listcomponent person = {person1} key={index}/>)
  
  return <div>{personlist} </div>;
}

export default Listrendenring;
