import React from "react";
import { Link } from "react-router-dom";

class FolderSidebar extends React.Component {
  render() {
    const folders = this.props.folders.map((folder, index) => {
      if (this.props.match.match.params.folderId === folder.id) {
        return (
          <div className="folder active style-target" key={folder.id + index}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </div>
        );
      } else {
        return (
          <div className="folder style-target" key={folder.id + index}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </div>
        );
      }
    });
    return (
      <div id="sidebar" className="style-container">
        <header>
          <h2>Folders</h2>
        </header>
        <div id="folder-list">{folders}</div>
      </div>
    );
  }
}

export default FolderSidebar;
