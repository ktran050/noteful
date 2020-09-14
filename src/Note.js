import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  onApiDelete = (event) => {
    event.preventDefault();
    this.props.onApiDelete(this.props.id);
    window.location.reload(false);
  };
  render() {
    return (
      <div className="style-target">
        <Link to={`/note/${this.props.id}`}>
          <header>
            <h3>{this.props.name}</h3>
          </header>
        </Link>
        <p>{this.props.modified}</p>
        <button
          onClick={(event) => {
            this.onApiDelete(event);
          }}
        >
          Delete Note
        </button>
      </div>
    );
  }
}

export default Note;
