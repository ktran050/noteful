import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  onApiDelete = (id) => {
    this.props.onApiDelete(id);
  };
  render() {
    const noteID = this.props.id;
    return (
      <div className="style-target">
        <Link to={`/note/${this.props.id}`}>
          <header>
            <h3>{this.props.name}</h3>
          </header>
        </Link>
        <p>{this.props.modified}</p>
        <button
          onClick={() => {
            this.onApiDelete(noteID);
          }}
        >
          Delete Note
        </button>
      </div>
    );
  }
}

export default Note;
