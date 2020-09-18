import React, { Component } from "react";

class MyInfo extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.state);
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    return (
      <div>
        <p>You are logged {this.state.isLoggedIn ? "in" : "out"}</p>
        <button onClick={this.onClick}>Log {this.state.isLoggedIn ? "out" : "in"}</button>
      </div>
    );
  }
}

export default MyInfo;
