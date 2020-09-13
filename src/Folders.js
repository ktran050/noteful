import React from "react";
import Folder from "./Folder";
import Context from "./Context";

class Folders extends React.Component {
  drawFolders(value) {
    const folders = value.map((folder, index) => (
      <Folder key={folder.id + index} name={folder.name} id={folder.id} />
    ));
    return folders;
  }
  render() {
    return (
      <Context.Consumer id="folder-list">
        {(value) => this.drawFolders(value.folders)}
      </Context.Consumer>
    );
  }
}

export default Folders;
