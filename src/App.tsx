import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavVar } from './NavVar';
import { Footer } from './Footer'; 
import { LogIn } from './LogIn';
import { Register } from './Register'
import './App.css'
import {ContVideo} from './Video'
import { RegisterValidation } from './RegisterValidation';
import { RoutesBoats} from './Routes';

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
        <Route path='/Routes' element={<div className="container" style={{paddingTop: '100px'}}><RoutesBoats /></div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App
