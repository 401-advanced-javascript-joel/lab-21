import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  onButtonClick = (action, payload) => {
    switch (action) {
      case "inc":
        this.setState({ ...this.state, count: payload.count + 1 });
        break;
      case "dec":
        this.setState({ ...this.state, count: payload.count - 1 });
        break;
      default:
        this.setState({ ...this.state });
    }
  };

  onInputChange = e => {
    let count = parseInt(e.target.value, 10);
    this.setState({ ...this.state, count });
  };

  render() {
    const countClass =
      this.state.count >= 0 ? "count_current" : "count_current red";
    return (
      <div className="counter">
        <button
          className="counter_button btn dec"
          type="Button"
          onClick={() => {
            this.onButtonClick("dec", { count: this.state.count });
          }}
        >
          Minus
        </button>
        <div className="count">
          <p className="count_heading">
            <em>CURRENT COUNT:</em>
          </p>
          <input
            type="number"
            className={countClass}
            value={this.state.count}
            onChange={this.onInputChange}
          />
        </div>
        <button
          className="counter_button btn inc"
          type="Button"
          onClick={() => {
            this.onButtonClick("inc", { count: this.state.count });
          }}
        >
          Plus
        </button>
      </div>
    );
  }
}
