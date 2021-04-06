import React, { Component } from "react";

class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  async increment() {
    await this.setState({ count: this.state.count  + 1 }); //will change the Ui also if you use setState
    console.log(this.state.count);
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        Counter - {count}
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

export default counter;
