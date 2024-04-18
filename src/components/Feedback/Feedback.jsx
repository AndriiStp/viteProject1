import React from "react";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (option) => {
    this.setState((state) => ({
      [option]: state[option] + 1,
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave Feedback</h1>
        <button type="button" onClick={this.handleClick}>
          Good
        </button>
        <button type="button" onClick={this.handleClick}>
          Neutral
        </button>
        <button type="button" onClick={this.handleClick}>
          Bad
        </button>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:</p>
          <p>Positive Feedback:</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
