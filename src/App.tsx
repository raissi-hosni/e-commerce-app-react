
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Sign from './pages/Sign';
import Location from './pages/location';
import Nopath from './pages/Nopath';
function App() {

  return (
   <div>
     <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Nopath />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
