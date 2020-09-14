import React from "react";
import { Route, Switch } from "react-router-dom";

import Heading from "./Heading";
import HISTORY from "./history";

import Context from "./Context";

import MainPage from "./MainPage";
import FolderPage from "./FolderPage";
import NotePage from "./NotePage";

import MainSidebar from "./MainSidebar";
import FolderSidebar from "./FolderSidebar";
import NoteSidebar from "./NoteSidebar";

import "./App.css";

class App extends React.Component {
  state = { folders: [], notes: [] };
  buildURL = (option) => {
    const base = "http://localhost:9090/";
    if (option === 0) return base + "folders";
    else if (option === 1) return base + "notes";
    else return base;
  };

  /* Helper Functions */
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
  };

  /* Lifecycle methods */
  componentDidMount() {
    this.updateFolders();
    this.updateNotes();
  }
  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      handleApiDelete: this.handleApiDelete,
      history: HISTORY,
      match: {},
    };
    {
      console.log(contextValue);
    }
    return (
      <Context.Provider value={contextValue} className="App">
        <Heading />

        <main id="container">
          <div id="sideContent">
            <Switch id="sidebar">
              <Route exact path="/" component={MainSidebar} />
              <Route
                path="/folder/:folderId"
                render={(match) => (
                  <Context.Provider
                    value={Object.assign(contextValue, { match: match })}
                  >
                    <FolderSidebar />
                  </Context.Provider>
                )}
              />
              <Route path="/note/:noteId" component={NoteSidebar} />
            </Switch>
          </div>
          <div id="mainContent" className="style-container">
            <Switch id="main">
              <Route exact path="/" component={MainPage} />
              <Route
                path="/folder/:folderId"
                render={(match) => (
                  <Context.Provider
                    value={Object.assign(contextValue, { match: match })}
                  >
                    <FolderPage />
                  </Context.Provider>
                )}
              />
              <Route
                path="/note/:noteId"
                render={(match) => (
                  <Context.Provider
                    value={Object.assign(contextValue, { match: match })}
                  >
                    <NotePage />
                  </Context.Provider>
                )}
              />
            </Switch>
          </div>
        </main>
      </Context.Provider>
    );
  }
}

export default App;

// TODO: Reloading with react methods (maybe rerender without page reload)
