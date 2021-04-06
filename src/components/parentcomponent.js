import React, { Component } from "react";
import Childcomponent from "./childcomponent";
class parentcomponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  clickcount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <Childcomponent clickcount={this.clickcount} count={this.state.count} />
       
      </div>
    );
  }
}

export default parentcomponent;
