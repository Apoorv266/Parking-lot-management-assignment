import React, { useContext } from 'react'
import "../Styles/ParkingLotDetails.css"
import { contextData } from '../Contexts/parkingContext'
const ParkingLotDetails = () => {
    const { initialState, sumFunc } = useContext(contextData)
    const {currSlot} = initialState
    const {car, bike, isalreadyBooked, isAssigned}  = sumFunc()
  return (
    <div className='detail-main'>
<div>
<h3>Total Vehicles : {car + bike}</h3>
<h3>Total cars: {car}</h3>
<h3>Total bikes: {bike}</h3>
<h3>Total booked spots : {isalreadyBooked}</h3>
<h3>Total Vacant spots : {((car + bike) - isalreadyBooked) - isAssigned}</h3>
</div>

<div>
    <h1>Selected Slot : {currSlot.slotId ?? "None"} </h1>
    <h2>Type : {currSlot.name ?? "None"}  </h2>
</div>
    </div>
  )
}

export default ParkingLotDetails