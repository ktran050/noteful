import React from "react";
import Context from "./Context";
import Note from "./Note";

class NotePage extends React.Component {
  draw(value) {
    const notes = value.notes
      .filter((note) => note.id === value.match.match.params.noteId)
      .map((note, index) => {
        return (
          <Note
            key={note.id + index}
            name={note.name}
            modified={note.modified}
            id={note.id}
            onApiDelete={(id) => {
              value.handleApiDelete(id);
              value.history.push("/");
            }}
            history={value.history}
          />
        );
      });
    return notes;
  }
  render() {
    return (
      <div id="page">
        <header>
          <h2>Notes</h2>
        </header>
        <Context.Consumer>{(value) => this.draw(value)}</Context.Consumer>
      </div>
    );
  }
}

export default NotePage;
