import React from "react";
import Note from "./Note";

class FolderPage extends React.Component {
  render() {
    const notes = this.props.notes.map((note, index) => {
      if (note.folderId === this.props.match.match.params.folderId) {
        return (
          <Note
            key={note.id + index}
            name={note.name}
            modified={note.modified}
            id={note.id}
          />
        );
      }
    });
    return (
      <div id="page">
        <header>
          <h2>Notes</h2>
        </header>
        <div id="note-list">{notes}</div>
      </div>
    );
  }
}

export default FolderPage;
