import React from "react";
import Context from "./Context";
import Note from "./Note";

class Notes extends React.Component {
  drawNotes(value) {
    const notes = value.notes.map((note, index) => (
      <Note
        key={note.id + index}
        name={note.name}
        modified={note.modified}
        id={note.id}
        onApiDelete={value.handleApiDelete}
      />
    ));

    return notes;
  }
  render() {
    return (
      <Context.Consumer id="note-list">
        {(value) => this.drawNotes(value)}
      </Context.Consumer>
    );
  }
}

export default Notes;
