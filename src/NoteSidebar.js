import React from "react";
import { withRouter } from "react-router-dom";

class NoteSidebar extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.history.push("/");
          window.location.reload(false);
        }}
        className="style-container"
      >
        <header>
          <h2>Back</h2>
        </header>
      </div>
    );
  }
}

export default withRouter(NoteSidebar);
