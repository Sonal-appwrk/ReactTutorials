import React, { useState, useEffect } from "react";
import { Button, Layout, Menu } from "antd";
import Signup from "./Signupform";
import Login from "./Login";
import Home from "./Home";

import  { SpecificUserInfo } from "./UserInfo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header } = Layout;

export default function Nabvar() {
  const [login, setLogin] = useState(false);
  const loggedIn = () => {
    setLogin(true);
  };
  const loggedOff = () => {
    setLogin(false);
  };

  return (
    <div>
      <Header>
        <div className="logo" />
        <Router>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/home">Home</Link>
            </Menu.Item>

            {!login && (
              <Menu.Item key="2" style={{ float: "right" }}>
                <Link to="/signup">SignUp</Link>
              </Menu.Item>
            )}
            {!login && (
              <Menu.Item key="3" style={{ float: "right" }}>
                <Link to="/login">LogIn</Link>
              </Menu.Item>
            )}
            {login && (
              <Menu.Item key="4" style={{ float: "right" }}>
                <Button onClick={loggedOff}>Logout</Button>
              </Menu.Item>
            )}
          </Menu>
          <br />

          <Route exact path="/home" component={Home}></Route>
          <Route path="/signup" component={Signup}></Route>

          <Route path="/login">
            <Login isLogin={login} Logged={loggedIn} />
          </Route>
          <Route path="/user/:id" component={SpecificUserInfo}></Route>
        </Router>
      </Header>
    </div>
  );
}
