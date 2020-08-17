import React from "react";
import { withRouter } from "react-router-dom";

class NoteSidebar extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.history.goBack();
        }}
      >
        <header>
          <h2>Back</h2>
        </header>
      </div>
    );
  }
}

export default withRouter(NoteSidebar);
