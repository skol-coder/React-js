import { Component } from "react";

class CompC extends Component {
  render() {
    return (
      <>
        <div>inC</div>
        <div>
          {this.props.data.k1},{this.props.data.k2},{this.props.data.k3}
        </div>
      </>
    );
  }
}

export default CompC;
