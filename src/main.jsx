// import React from "react";
// import ReactDom from "react-dom";

// import {BrowserRouter} from "react-dom/client";


// import App from "./App";
// import "./index.css";
// import { StrictMode } from "react";

// ReactDom.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// )
// import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
