import React from "react";
import { NavLink } from "react-router-dom";

class Folder extends React.Component {
  render() {
    return (
      <div className="folder">
        <NavLink to={`/folder/${this.props.id}`}>{this.props.name}</NavLink>
      </div>
    );
  }
}

export default Folder;
