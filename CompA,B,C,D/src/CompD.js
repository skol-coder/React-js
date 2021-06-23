import { Component } from "react";

class CompD extends Component {
  render() {
    return (
      <>
        <div>inD</div>
        <div>
          {this.props.data.k1},{this.props.data.k2},{this.props.data.k3}
        </div>
      </>
    );
  }
}

export default CompD;
