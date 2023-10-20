import React, { useContext } from 'react'
import "../Styles/Bookings.css"
import { contextData } from '../Contexts/parkingContext'
const Bookings = () => {
    const {initialState} = useContext(contextData)
    const {orders} = initialState

    const getDateFunc = (str) =>{
        const dateObject = new Date('Fri Oct 20 2023 16:47:09 GMT+0530 (India Standard Time)');
        return {date : dateObject.getDate() , month : dateObject.getMonth() + 1}
    }
    return (
        <div className='booking-wrapper'>
            <div className='booking-amount'>
                <h1>  Due amount : $123</h1>
                <button>Pay</button>
            </div>
{orders?.map((item) =>{
    return (
<div className='booking-container' key={item.id}>
                <div className='booking-details'>
                    <div>
                        <p>Recipient name : {item.name}</p>
                        <p>Recipient email : {item.email}</p>
                        <p>Vechile number : {item.no}</p>
                        <p>Vehicle type : {item.type}</p>
                        <p>Parking slot id : {item.slot}</p>
                        <p>Checkin Time  : {getDateFunc(item.time).date}/{getDateFunc(item.time).month} </p>
                    </div>


                    <div className='booking-timer'>
                        <h1>Parked since : 4:00 Minutes</h1>
                    </div>


                </div>
                <button>Check out</button>
            </div>
    )
})}
            
        </div>
    )
}

export default Bookings