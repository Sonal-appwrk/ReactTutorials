import React, { Component } from "react";

class FormHandling extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
    };
  }
  changeNameField = (event) => {
    this.setState({ name: event.target.value});
  };
  changeEmailField = (event) => {
    this.setState({  lastName: event.target.value });
  };
  submit = () => {
    console.log(this.state.name);
  };
  render() {
    return (
      <div>
        <h1>form component</h1>
        <label>First name:</label>
        <br />
        <input
          type="text"
          name="fname"
          value={this.state.name}
          onChange={this.changeNameField}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          type="text"
          name="lname"
          value={this.state.lastName}
          onChange={this.changeEmailField}
        />
        <br />
        <input type="button" value="Submit" onClick={this.submit} />
      </div>
    );
  }
}

export default FormHandling;
