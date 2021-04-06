import React, { Component } from "react";
export class Classclick extends Component {
  constructor() {
    super();
    this.state = {
      message: "previous state",
    };
  }
  buttonClick() {
    this.setState({ message: "next state" });
  }
  buttonClickwithoutstate() {
    console.log("I am here");
  }
  buttonClickbyarrow = () => {
    this.setState({ message: "previous state" });
    
  };
  render() {
    return (
      <div>
        <p>state: {this.state.message}</p>
        <button onClick={buttonClick}>clickme</button>
        <button onClick={this.buttonClickwithoutstate}>
          buttonClick without change state
        </button>
        <button onClick={this.buttonClick.bind(this)}>
          Button click with state
        </button>
        {/* if you use the property on the given function you have to use bind for use the state in our function */}

        <button onClick={this.buttonClickbyarrow}>
          I used arraow function
        </button>
      </div>
    );
  }
}
function Functionclick() {
  return (
    <div>
      <button onClick={buttonClick}>click</button>
    </div>
  );
}
function buttonClick() {
  console.log("clicked");
}

export default Functionclick;
