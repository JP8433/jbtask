import React, { Component } from "react";
import "./styles.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-value">{this.state.count}</h1>
        <div className="counter-buttons">
          <button className="increment-button" onClick={this.increment}>
            Increment
          </button>
          <button className="decrement-button" onClick={this.decrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
