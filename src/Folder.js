import React from "react";
import { Link } from "react-router-dom";

class Folder extends React.Component {
  render() {
    return (
      <Link to={`/folder/${this.props.id}`} className="style-target">
        <div className="folder">{this.props.name} </div>
      </Link>
    );
  }
}

export default Folder;
