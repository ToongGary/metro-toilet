import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import ToiletInfo from './ToiletInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import ToongBar from './components/ToongBar';
import './components/ToongBarStyle.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<ToongBar />]} />
          <Route path="/toilet/:id" element={<ToiletInfo />} />
          <Route path="/toilet_between/:id1/:id2" element={<ToiletInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
