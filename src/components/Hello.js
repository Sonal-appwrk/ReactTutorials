import React, { Component } from "react";
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.name,
    };
  }
  changeName() {
    this.setState({
        message:"sonal"
    });
  }

  render() {

    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>state {this.state.message}</h2>
        <button onClick={()=>this.changeName()}>button</button>
      </div>
    );
  }
}
export default Hello;
