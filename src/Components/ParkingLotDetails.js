import React, { useContext } from 'react'
import "../Styles/ParkingLotDetails.css"
import { contextData } from '../Contexts/parkingContext'
const ParkingLotDetails = () => {
    const { initialState } = useContext(contextData)
    const {currSlot} = initialState
  return (
    <div className='detail-main'>
<div>
<h3>Total Vehicles : </h3>
<h3>Total cars: </h3>
<h3>Total bikes: </h3>
<h3>Total vacant spots : </h3>
</div>

<div>
    <h1>Selected Slot : {currSlot.slotId ?? "None"} </h1>
    <h2>Type : {currSlot.name ?? "None"}  </h2>
</div>
    </div>
  )
}

export default ParkingLotDetails