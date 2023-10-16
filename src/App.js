import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Atlas from './Pages/Atlas';
import Dinning from './Pages/Dinning';
import Travel from './Pages/Travel';
import Card from './Pages/Card';
import Concierge from './Pages/Concierge';
import Benefits from './Pages/Benefits';
import Visa from './Pages/Visa';
import Header from "./Components/Header/Header";
import AppPage from "./Pages/AppPage";

function App() {
  const headerStyle = {
    position: 'sticky',
    top: 0,
    margin:0,
    padding:0,
    zIndex: '100', 
  };

  return (
    <BrowserRouter>
    <div style={headerStyle}>
      <Header className='app-header' />
    </div>
    <Routes>
      <Route path="/" element={<Atlas />} />
      <Route path="/dinning" element={<Dinning />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/card" element={<Card />} />
      <Route path="/app" element={<AppPage />} />
      <Route path="/concierge" element={<Concierge />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/visa" element={<Visa />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
