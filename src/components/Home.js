import React from "react";
import UserInfo from "./UserInfo";
import Search from "./Search";
function Home(props) {
  return (
    
      <div>
        <h1>Welcome to the home page</h1>

        <Search/>
        <UserInfo urlParameter={props} />
      </div>
    
  );
}

export default Home;
