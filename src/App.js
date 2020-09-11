import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import FolderPage from "./FolderPage";
import NotePage from "./NotePage";
import Heading from "./Heading";
import MainSidebar from "./MainSidebar";
import FolderSidebar from "./FolderSidebar";
import NoteSidebar from "./NoteSidebar";
import AddFolder from "./AddFolder";
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
  navigate(path) {
    this.props.history.push(path);
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
            <div id="sideContent">
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
              <button
                onClick={(event) => this.navigate("/add-folder")}
                className="style-target"
              >
                Add Folder
              </button>
              <button className="style-target">Add Note</button>
            </div>
            <div id="mainContent" className="style-container">
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
                <Route
                  exact
                  path="/add-folder"
                  component={() => <AddFolder />}
                />
              </Switch>
            </div>
          </div>
        </Context.Provider>
      </div>
    );
  }
}

export default App;

// TODO: FIX ROUTE DIRECTING. Review how to push history/accessing history. Fix go back on notesidebar going to home then refreshing?
