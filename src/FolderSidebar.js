import React from "react";
import Folders from "./Folders";

class FolderSidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" className="style-container">
        <header>
          <h2>Folders</h2>
        </header>
        <Folders />
      </div>
    );
  }
}

export default FolderSidebar;
