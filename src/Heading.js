import React from "react";
import Context from "./Context";
class Heading extends React.Component {
  handleClick(value) {
    console.log("value: ", value);
    value.history.push("/");
    window.location.reload(false);
  }
  render() {
    return (
      <Context.Consumer>
        {(value) => (
          <header onClick={() => this.handleClick(value)}>
            <h1>Noteful</h1>
          </header>
        )}
      </Context.Consumer>
    );
  }
}

export default Heading;
