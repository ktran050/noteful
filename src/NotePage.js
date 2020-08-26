import React from "react";
import { Link } from "react-router-dom";

class NotePage extends React.Component {
  render() {
    const notes = this.props.notes.map((note, index) => {
      if (note.id === this.props.match.match.params.noteId) {
        return (
          <div key={index}>
            <Link to={`/note/${note.id}`}>
              <header>
                <h3>{note.name}</h3>
              </header>
            </Link>
            <p>{note.modified}</p>
            <p>{note.content}</p>
            <button>Delete Note</button>
          </div>
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

export default NotePage;
