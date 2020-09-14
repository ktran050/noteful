import React from "react";
import { Link } from "react-router-dom";

class Folder extends React.Component {
  draw() {
    console.log("active: ", this.props.active);
    if (this.props.active === true) {
      return (
        <Link to={`/folder/${this.props.id}`} className="style-target active">
          <div className="folder">{this.props.name} </div>
        </Link>
      );
    } else {
      return (
        <Link to={`/folder/${this.props.id}`} className="style-target">
          <div className="folder">{this.props.name} </div>
        </Link>
      );
    }
  }
  render() {
    return this.draw();
  }
}

export default Folder;
