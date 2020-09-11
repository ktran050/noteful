import React from "react";
import { Link } from "react-router-dom";

class NotePage extends React.Component {
  onApiDelete = (id) => {
    this.props.onApiDelete(id);
    this.props.match.history.push("/");
  };
  render() {
    const notes = this.props.notes
      .filter((note) => note.id === this.props.match.match.params.noteId)
      .map((note, index) => {
        const noteID = note.id;
        return (
          <div key={index}>
            <Link to={`/note/${note.id}`}>
              <header>
                <h3>{note.name}</h3>
              </header>
            </Link>
            <p>{note.modified}</p>
            <p>{note.content}</p>
            <button
              onClick={() => {
                this.onApiDelete(noteID);
              }}
            >
              Delete Note
            </button>
          </div>
        );
      });
    return (
      <div id="page" className="style-target">
        <header>
          <h2>Notes</h2>
        </header>
        <div id="note-list">{notes}</div>
      </div>
    );
  }
}

export default NotePage;
