import React from "react";

import Home from "./pages/Home";
import { store } from "./app/store";
import { Provider } from "react-redux";
function App() {

  return (
    <>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </>
  );
}

export default App;
