import React from "react";

export default React.createContext({
  notes: [],
  folders: [],
  handleApiDelete: (id) => {},
  history: {},
  match: {},
});
