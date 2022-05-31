import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./react-select.scss";
import Store from "./store/store";

interface State {
  store: Store;
}

export const store = new Store();

export const Context = createContext<State>({
  store,
});


const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <Context.Provider
    value={{
      store,
    }}
  >
    <App />
  </Context.Provider>
);
