import React from 'react'
import { parkingLotData } from "../Data/parkingLotData"
import ParkingLotRender from './parkingLotRender'

const ParkingLot = () => {
  return (
    <>
     <div className='park-lot-wrapper'>
       
{Object.keys(parkingLotData).map(item => {
    return <ParkingLotRender lotDetails={parkingLotData[item]}/>
})}

      
       
      </div>
    </>
  )
}

export default ParkingLot