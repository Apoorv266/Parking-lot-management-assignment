import React, { useContext } from 'react'
import ParkingLotRender from './parkingLotRender'
import { contextData } from '../Contexts/parkingContext'
import "../Styles/parkingLot.css"
import { Link } from 'react-router-dom'
import ParkingLotDetails from './ParkingLotDetails'
import ParkingLotGuide from './ParkingLotGuide'
const ParkingLot = () => {
  const { initialState } = useContext(contextData)
  const { parkingLotData } = initialState

  const cancelBtn = () =>{
    localStorage.removeItem("form");
  }
  return (
    <>
    <ParkingLotDetails/>
    <ParkingLotGuide/>
      <div className='park-lot-wrapper'>
        {Object.keys(parkingLotData)?.map(item => {
          return (
            <ParkingLotRender lotDetails={parkingLotData[item]} floorDetail={item} key={item} />
          )
        })}
      </div>
      <div className='selected-btn'>
        <Link to={"/parking-form"}><button className='select-btn'>Book this spot</button></Link>
        <Link to={"/"}>
      <button className='cancel-btn' onClick={cancelBtn}>Cancel</button>
      </Link>
      </div>
       
    </>
  )
}

export default ParkingLot