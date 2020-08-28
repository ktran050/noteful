import React from "react";
import Note from "./Note";
import Context from "./Context";

class MainPage extends React.Component {
  render() {
    const notes = this.props.notes.map((note, index) => (
      <Context.Consumer>
        {(value) => (
          <Note
            key={note.id + index}
            name={note.name}
            modified={note.modified}
            id={note.id}
            onApiDelete={value.handleApiDelete}
          />
        )}
      </Context.Consumer>
    ));
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

export default MainPage;
