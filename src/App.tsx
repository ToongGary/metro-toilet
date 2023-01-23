import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { Detail } from './pages/detail';
import { StationsContextProvider } from './commons/contexts/stations.context';
import { StationToiletContextProvider } from './commons/contexts/station-toilet.context';
import './App.css';

function App() {
  return (
    <StationsContextProvider>
      <StationToiletContextProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/toilet/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </div>
      </StationToiletContextProvider>
    </StationsContextProvider>
  );
}

export default App;
