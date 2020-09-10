import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import FolderPage from "./FolderPage";
import NotePage from "./NotePage";
import Heading from "./Heading";
import MainSidebar from "./MainSidebar";
import FolderSidebar from "./FolderSidebar";
import NoteSidebar from "./NoteSidebar";
import "./App.css";
import Context from "./Context";

class App extends React.Component {
  state = { folders: [], notes: [] };
  buildURL = (option) => {
    const base = "http://localhost:9090/";
    if (option === 0) return base + "folders";
    else if (option === 1) return base + "notes";
    else return base;
  };

  updateFolders = () => {
    fetch(this.buildURL(0))
      .then((result) => {
        if (!result.ok) console.log("ERROR: fetch failed; result is not ok");
        else return result.text();
      })
      .then((result) => {
        const parsedResults = JSON.parse(result);
        this.setState({ folders: parsedResults });
      });
  };
  updateNotes = () => {
    fetch(this.buildURL(1))
      .then((result) => {
        if (!result.ok) console.log("ERROR: fetch failed; result is not ok");
        else return result.text();
      })
      .then((result) => {
        const parsedResults = JSON.parse(result);
        this.setState({ notes: parsedResults });
      });
  };
  handleApiDelete = (id) => {
    const url = `http://localhost:9090/notes/${id}`;
    fetch(url, { method: "DELETE" });
    window.location.reload(false);
  };
  componentDidMount() {
    // call api for folders
    this.updateFolders();
    // call api for notes
    this.updateNotes();
  }
  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      handleApiDelete: this.handleApiDelete,
    };
    return (
      <div className="App">
        <Heading />
        <Context.Provider value={contextValue}>
          <div id="container">
            <Switch id="sidebar">
              <Route
                exact
                path="/"
                component={() => (
                  <Context.Consumer>
                    {(value) => <MainSidebar folders={value.folders} />}
                  </Context.Consumer>
                )}
              />
              <Route
                path="/folder/:folderId"
                component={(match) => (
                  <Context.Consumer>
                    {(value) => (
                      <FolderSidebar match={match} folders={value.folders} />
                    )}
                  </Context.Consumer>
                )}
              />
              <Route path="/note/:noteId" render={() => <NoteSidebar />} />
            </Switch>
            <Switch id="main">
              <Route
                exact
                path="/"
                component={() => (
                  <Context.Consumer>
                    {(value) => (
                      <MainPage
                        notes={value.notes}
                        onApiDelete={this.handleApiDelete}
                      />
                    )}
                  </Context.Consumer>
                )}
              />
              <Route
                path="/folder/:folderId"
                component={(match) => (
                  <Context.Consumer>
                    {(value) => (
                      <FolderPage
                        match={match}
                        notes={value.notes}
                        onApiDelete={this.handleApiDelete}
                      />
                    )}
                  </Context.Consumer>
                )}
              />
              <Route
                path="/note/:noteId"
                component={(match) => (
                  <Context.Consumer>
                    {(value) => (
                      <NotePage
                        match={match}
                        notes={value.notes}
                        onApiDelete={value.handleApiDelete}
                      />
                    )}
                  </Context.Consumer>
                )}
              />
            </Switch>
          </div>
        </Context.Provider>
      </div>
    );
  }
}

export default App;

/*
Requirements

There are 3 routes to build: the main route, the dynamic folder route, and a dynamic note route. We'll supply you with 3 wireframes for each of these pages and you'll then need to create the semantic (accessible) HTML for these as well as basic styling.

Each route should have a header, main section, and a sidebar section

Every route will have the same header section, the app's title should be a link to the main route

The state will be supplied below in a JSON object and contains an array of folders and an array of notes

Set the state inside the main App component (we'll use an API call to populate this state in a future checkpoint)
The main route:

Should be displayed when the path is /
The main section will display all of the available notes
Each note should show its name and modified date
The sidebar will display a list of folders with none selected
The dynamic folder route:

Should be displayed when the path is /folder/<with-a-folder-id-here>
The folder-id will reference an id of one of the folders in state
The main section should display only the notes that are "in" the selected folder
The sidebar should display the folder list with the selected folder highlighted
The dynamic note route:

Should be displayed when the path is /note/<with-a-note-id-here>
The note-id will reference an id of one of the notes in state
The main section should display the currently selected notes name, modified date and content
The sidebar should display the folder of the currently selected note as well as a "back" button.
This assignment is the biggest one for your React journey so far and should take about 4 hours to complete. If you're having trouble, attend a Q&A session or reach out on Slack for help.


*/

/*

Hints

Hints for the App component:

Use sets of Route components: one set for the main content and another set for the sidebar. Each set of routes can be configured using the same paths, but different components. For example:

In order to pass props into components for specific routes, you'll need to use the render prop on Route components in a similar way to when we added programmatic navigation to the bookmarks app. For example:

The main route and the folder route could use the same component with a different list of notes passed in as props.
The folder route:

Instead of using Link components in the sidebar for each folder, you can use the React-Router NavLink component that will automatically add a className of "active" when appropriate.
You'll need to filter for the notes that contain a matching folderId to the folder that's selected when deciding which notes to display.

*/
