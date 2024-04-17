import { Component } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;

// class Counter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = { value: this.props.initialValue };

//   handleInc = () => {
//     this.setState((prevState) => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleIDec = () => {
//     this.setState((prevState) => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     return (\
//     )
//   }
// }

class Dropdown extends Component {
  state = {
    visible: false,
  };

  show = () => {
    this.setState({
      visible: true,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown-toggle" onClick={this.show}>
          Show
        </button>
        <button type="button" className="Dropdown-toggle" onClick={this.hide}>
          HIDE
        </button>
        <div>MENU</div>
      </div>
    );
  }
}
