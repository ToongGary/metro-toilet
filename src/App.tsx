import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import ToiletInfo from "./ToiletInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function App() {
  const isPc = useMediaQuery({
    query: "(min-width:720px)",
  });

  const WebSize = isPc ? "급퉁pc" : "급퉁phone";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/toilet/:id" element={<ToiletInfo />} />
        </Routes>
      </BrowserRouter>
      <div>{WebSize}</div>
    </div>
  );
}

export default App;
