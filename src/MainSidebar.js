import React from "react";
import Folder from "./Folder";

class MainSidebar extends React.Component {
  render() {
    const folders = this.props.folders.map((folder, index) => (
      <Folder key={folder.id + index} name={folder.name} id={folder.id} />
    ));
    return (
      <div id="sidebar">
        <header>
          <h2>Folders</h2>
        </header>
        <div id="folder-list">{folders}</div>
      </div>
    );
  }
}

export default MainSidebar;
