import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main';
import { Detail } from './pages/detail';
import { StationsContextProvider } from './commons/contexts/stations.context';
import './App.css';

function App() {
  return (
    <StationsContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/toilet/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StationsContextProvider>
  );
}

export default App;
