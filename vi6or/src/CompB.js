import { Component } from "react";
import CompC from "./CompC";
class CompB extends Component {
  render() {
    return (
      <>
        <div>inB</div>
        <div>
          {this.props.data.k1},{this.props.data.k2},{this.props.data.k3}
        </div>
        <CompC data={this.props.data} />
        <button onClick={this.props.button_click}>
          "This is a button" In CompB, add a button that when clicked updates
          the state variable of CompA such that two of the keys' values are
          updated, the other keys' values remain the same.
        </button>
      </>
    );
  }
}

export default CompB;
