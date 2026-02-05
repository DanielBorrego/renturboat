import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavVar } from './NavVar';
import { Footer } from './Footer'; 
import { LogIn } from './LogIn';
import './App.css'
import {ContVideo} from './Video'

function App() {
  return (
    <BrowserRouter>
      <NavVar /> 
      
      {/*Aquí cambia el contenido según la URL */}
      <Routes>
        <Route path="/" element={<ContVideo />} />
        <Route path="/login" element={<div className="container" style={{paddingTop: '100px'}}><LogIn /></div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App
