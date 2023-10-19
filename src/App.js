import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home';
import ParkingLot from './Components/parkingLot';
import Navbar from './Components/Navbar'
import ParkingForm from './Components/ParkingForm';
function App() {

  return (
    <>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/parking-lots" element={<ParkingLot/>}/>
      <Route path="/parking-form" element={<ParkingForm/>}/>
    </Routes>
    </>
  );
}

export default App;
