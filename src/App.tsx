import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import { useMediaQuery } from "react-responsive"


function App() {
  const isPc = useMediaQuery({
    query: "(min-width:720px)"
  })

  const WebSize = isPc ? "급퉁pc" : "급퉁phone"


  return (
    <div className="App">
      <Search />
      <div>
        {WebSize}
      </div>
    </div>
  );


}

export default App;
