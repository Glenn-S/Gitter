import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/*
Simple hookup of react to allow electron to be rendered using react.
*/
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);