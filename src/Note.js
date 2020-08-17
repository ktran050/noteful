import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/note/${this.props.id}`}>
          <header>
            <h3>{this.props.name}</h3>
          </header>
        </Link>
        <p>{this.props.modified}</p>
      </div>
    );
  }
}

export default Note;
