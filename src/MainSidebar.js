import React from "react";
import Folders from "./Folders";
import AddButtons from "./AddButtons";

class MainSidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="style-container">
        <header>
          <h2>Folders</h2>
        </header>

        <Folders folders={this.props.folders} />

        <AddButtons />
      </div>
    );
  }
}

export default MainSidebar;
