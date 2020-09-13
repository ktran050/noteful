import React from "react";

class AddButtons extends React.Component {
  render() {
    return (
      <div className="button-container">
        <button className="style-target">Add Folder</button>
        <button className="style-target">Add Note</button>
      </div>
    );
  }
}

export default AddButtons;
