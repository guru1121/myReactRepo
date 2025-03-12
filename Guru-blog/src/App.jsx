import { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Counter from "./Counter";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
        <Counter />
      </div>
    </>
  );
};

export default App;
