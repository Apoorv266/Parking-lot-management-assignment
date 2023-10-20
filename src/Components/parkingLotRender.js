import React, { useContext } from 'react'
import "../Styles/parkingLot.css"
import { contextData } from '../Contexts/parkingContext'
const ParkingLotRender = ({ lotDetails, floorDetail }) => {

    const { initialState, dispatch } = useContext(contextData)

    const handleSlotClick = (itemVal) => {
        if (!itemVal.isalreadyBooked) {
            dispatch({ type: "RESERVE_SLOT", payload :itemVal.vehicleId})
            dispatch({ type: "ADD_CURRENT_SLOT", payload :{slotId : itemVal.vehicleId, name : itemVal.name}})
        }
    }


    return (
        <div className='park-lot-head'>
            <h1>{floorDetail} Floor</h1>

            <div className='park-lot-container'>

                {lotDetails.map((item) => {
                    return (
                        <div className="container-square" key={item.parkinglotId}>

                            {item.vehicleData.map((itemVal) => itemVal.name === "car" ? <div key={itemVal.vehicleId} className={`square ${itemVal.isalreadyBooked && "prebooked"} ${itemVal.isAssigned && "booked"}`} onClick={() => handleSlotClick(itemVal)} />

                                :

                                <div key={itemVal.vehicleId} className={`circle ${itemVal.isalreadyBooked && "prebooked"} ${itemVal.isAssigned && "booked"}`} onClick={() => handleSlotClick(itemVal)} />)}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ParkingLotRender