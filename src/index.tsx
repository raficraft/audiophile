import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./designSystem.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";
import { BrowserRouter } from "react-router-dom";
import UI_provider from "./core/context/UI_Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UI_provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UI_provider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
