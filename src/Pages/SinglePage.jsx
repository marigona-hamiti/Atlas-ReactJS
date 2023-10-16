import { BrowserRouter, Routes, Route } from "react-router-dom";
import Atlas from './Atlas';
import Dinning from './Dinning';
import Travel from './Travel';
import Card from './Card';
import Concierge from './Concierge';
import Benefits from './Benefits';
import Visa from './Visa';
import Header from "../Components/Header/Header";
import './single.scss'

const SinglePage = () => {
    const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: '100', 
  };

  return (
    <BrowserRouter>
      <div>
      <div style={headerStyle}>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Atlas />} />
        <Route path="/dinning" element={<Dinning />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/card" element={<Card />} />
        <Route path="/concierge" element={<Concierge />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/visa" element={<Visa />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default SinglePage
