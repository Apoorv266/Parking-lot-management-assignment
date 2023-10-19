import React, { useContext } from 'react'
import "../Styles/parkingLot.css"
import { contextData } from '../Contexts/parkingContext'
const ParkingLotRender = ({ lotDetails, floorDetail }) => {

    const { initialState, dispatch } = useContext(contextData)

    const handleSlotClick = (id, name) => {
        dispatch({ type: "ADD_SLOT_DETAILS", payload: { vehicleId: id, name: name } })
    }

    const bookedSlot = (currId) => {
        return initialState.selectedSlot.find(item => item.vehicleId === currId)
    }
    return (
        <div className='park-lot-head'>
            <h1>{floorDetail} Floor</h1>

            <div className='park-lot-container'>

                {lotDetails.map((item) => {
                    return (
                        <div className="container-square" key={item.parkinglotId}>

                            {item.vehicleData.map((itemVal) => itemVal.name === "car" ? <div key={itemVal.vehicleId} className={`square ${itemVal.isAssigned && "assigned"} ${bookedSlot(itemVal.vehicleId) && "booked"}`} onClick={() => handleSlotClick(itemVal.vehicleId, itemVal.name)} />

                                :

                                <div key={itemVal.vehicleId} className={`circle ${itemVal.isAssigned && "assigned"} ${bookedSlot(itemVal.vehicleId) && "booked"}`} onClick={() => handleSlotClick(itemVal.vehicleId, itemVal.name)} />)}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ParkingLotRender