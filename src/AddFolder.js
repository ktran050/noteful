/*
Create a new component AddFolder that implements a form to capture the name of a new folder from the user. 
This form should submit the name of the new folder to the POST /folders endpoint on the server.
Ensure that any errors are properly handled. Add a button to the navigation to invoke the new form.
*/

import React from "react";

class AddFolder extends React.Component {
  render() {
    return (
      <form>
        <input type="text" required />
      </form>
    );
  }
}

export default AddFolder;
