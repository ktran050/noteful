import React from "react";
import Folder from "./Folder";
import Context from "./Context";

class Folders extends React.Component {
  drawFolders(value) {
    const folders = value.folders.map((folder, index) => {
      if (value.match.match) {
        if (value.match.match.params.folderId === folder.id) {
          return (
            <Folder
              active={true}
              key={folder.id + index}
              name={folder.name}
              id={folder.id}
            />
          );
        } else
          return (
            <Folder key={folder.id + index} name={folder.name} id={folder.id} />
          );
      } else {
        return (
          <Folder key={folder.id + index} name={folder.name} id={folder.id} />
        );
      }
    });
    return folders;
  }

  render() {
    return (
      <Context.Consumer id="folder-list">
        {(value) => this.drawFolders(value)}
      </Context.Consumer>
    );
  }
}

export default Folders;
