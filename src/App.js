// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { Store } from "./JS/Store";
import TaskList from "./Components/TaskList";

const App = () => (
  <Provider store={Store}>  {/* Corrected here */}
    <div className="m-0 p-0">
      <TaskList />
    </div>
  </Provider>
);

export default App;
