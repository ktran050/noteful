import React from "react";
import Notes from "./Notes";

class FolderPage extends React.Component {
  render() {
    return (
      <div id="page">
        <header>
          <h2>Notes</h2>
        </header>
        <Notes />
      </div>
    );
  }
}

export default FolderPage;
