import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavVar } from './NavVar';
import { Footer } from './Footer'; 
import { LogIn } from './LogIn';
import { Register } from './Register'
import './App.css'
import {ContVideo} from './Video'
import { RegisterValidation } from './RegisterValidation';
import { RoutesBoats} from './Routes';
import {BoatContainer} from './BoatContainer';
import { NauticalCharter } from './NauticalCharter';

// Header images for each category (swap these for the real images you want)
import NoLicenceImg from './fleetCards/AIBoatContainer.png';
import LicenceImg   from './fleetCards/AIBoat.png';
import SailingImg   from './fleetCards/AIsailBoat.png';
import YatchImg     from './fleetCards/AIYatch.png';

function App() {
  return (
    <BrowserRouter>
      <NavVar /> 
      
      {/*Aquí cambia el contenido según la URL */}
      <Routes>
        <Route path="/" element={<ContVideo />} />
        <Route path="/login" element={<div className="container" style={{paddingTop: '100px'}}><LogIn /></div>} />
        <Route path="/register" element={<div className="container" style={{paddingTop: '100px'}}><Register /></div>} />
        <Route path='/RegisterValidation' element={<div className="container" style={{paddingTop: '100px'}}><RegisterValidation /></div>} />
        <Route path='/Routes' element={<div className="Container-Rouetes" style={{paddingTop: '100px'}}><RoutesBoats /></div>} />
        <Route path='/nautical-charter' element={<NauticalCharter />} />

        {/* ══ 4 boat category pages — same template, different props ══ */}
        <Route path='/boats/no-licence' element={
          <BoatContainer headerImage={NoLicenceImg} title="WITHOUT LICENCE"  category="no_licence" />
        } />
        <Route path='/boats/licence' element={
          <BoatContainer headerImage={LicenceImg}   title="WITH LICENCE"     category="licence" />
        } />
        <Route path='/boats/sailing' element={
          <BoatContainer headerImage={SailingImg}    title="SAIL BOATS"       category="sailing" />
        } />
        <Route path='/boats/yatch' element={
          <BoatContainer headerImage={YatchImg}      title="YATCH"            category="yatch" />
        } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App
