import React from "react";
import UserInfo, { CountUser } from "./UserInfo";
import Search from "./Search";
import "../App.css"
function Admin(props) {
  return (
    <div className="App">
      <h1>Welcome to The Admin page</h1>
      <Search />
      <CountUser />
      <UserInfo urlParameter={props} />
      
    </div>
  );
}

export default Admin;
