import React from 'react'
import "../Styles/ParkingLotDetails.css"
const ParkingLotGuide = () => {
    return (
        <div className='guide-main'>
            <div className='guide-txt'><div className="square-outline "/> <p> - Car</p></div>

            <div className='guide-txt'><div className="circle-outline" /> <p> - Bike</p></div>
            
            <div className='guide-txt'><div className={`square`} /> / <div className={`circle`} /> <p> - Not occupied</p> </div>
            <div className='guide-txt'><div className={`square prebooked`} />/<div className={`circle prebooked`} /> <p> - Booked by others</p></div>
            <div className='guide-txt'><div className={`square booked`} />/<div className={`circle booked`} /> <p> - Assigned/booked by user</p></div>
        </div>
    )
}

export default ParkingLotGuide