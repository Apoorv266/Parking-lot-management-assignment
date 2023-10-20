import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home';
import ParkingLot from './Components/parkingLot';
import Navbar from './Components/Navbar'
import ParkingForm from './Components/ParkingForm';
import Bookings from './Components/Bookings';
function App() {

  return (
    <>
       <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/parking-lots" element={<ParkingLot/>}/>
      <Route path="/parking-form" element={<ParkingForm/>}/>
      <Route path="/bookings" element={<Bookings/>}/>
    </Routes>
    </>
  );
}

export default App;
