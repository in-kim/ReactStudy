import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Count from "./components/count";
// import Hello from "./components/hello";
// import Props from "./components/ex-props";
// import Count from "./components/lifeCycle";
// import ReactHookCount from "./components/reactHookCount";
import ReactHookInfo from "./components/reactHookInfo";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  //   <Props message="hellow world" />
  // </React.StrictMode>,
  <ReactHookInfo />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
