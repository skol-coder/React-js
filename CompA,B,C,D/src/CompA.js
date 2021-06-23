import { Component } from "react";
import "./styles.css";
import CompB from "./CompB";
import CompD from "./CompD";
class CompA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: {
        k1: "1",
        k2: "10",
        k3: "100"
      }
    };
  }

  button_click = () => {
    this.setState({
      s: {
        k1: "2",
        k2: "20",
        k3: "100"
      }
    });
  };

  render() {
    return (
      <>
        <div>CompA</div>
        <div>
          k1:{this.state.s.k1}, k2:{this.state.s.k2}, k3:{this.state.s.k3}
        </div>
        <hr></hr>
        <CompB button_click={this.button_click} data={this.state.s} />
        <CompD data={this.state.s} />
      </>
    );
  }
}

export default CompA;
