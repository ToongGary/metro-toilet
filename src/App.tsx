import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import ToiletInfo from "./ToiletInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/toilet/:id" element={<ToiletInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
