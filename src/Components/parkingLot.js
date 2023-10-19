import React, { useContext } from 'react'
import ParkingLotRender from './parkingLotRender'
import { contextData } from '../Contexts/parkingContext'
import "../Styles/parkingLot.css"
const ParkingLot = () => {
  const { initialState } = useContext(contextData)
  const { parkingLotData } = initialState
  return (
    <>
      <div className='park-lot-wrapper'>
        {Object.keys(parkingLotData).map(item => {
          return (
            <ParkingLotRender lotDetails={parkingLotData[item]} floorDetail={item} key={item} />
          )
        })}
      </div>
      <div className='selected-btn'>
      <button className='select-btn'>Done selection</button>
      <button className='cancel-btn'>Cancel</button>
      </div>
       
    </>
  )
}

export default ParkingLot