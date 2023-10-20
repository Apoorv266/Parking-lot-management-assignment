import React, { useContext, useEffect, useState } from 'react'
import "../Styles/Bookings.css"
import { contextData } from '../Contexts/parkingContext'
import { ToastComponent, toastFunc } from './ToastContainer'
const Bookings = () => {
    const { initialState, dispatch } = useContext(contextData)
    const { orders } = initialState
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let intervalID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);


        return () => {
            clearInterval(intervalID);
        };
    }, []);


    const getDateFunc = (str) => {
        const dateObject = new Date(str);
        return { date: dateObject.getDate(), month: dateObject.getMonth() + 1 }
    }

    const parkingTimeFunc = (str) => {
        const date2 = new Date(str);

        // Calculates the time difference in milliseconds
        const timeDifferenceMs = currentTime - date2;

        // Calculates the time difference in minutess
        const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);
        const timeDifferenceHours = timeDifferenceMs / (1000 * 60 * 60);
        return { minutes: timeDifferenceMinutes.toFixed(0), hours: timeDifferenceHours.toFixed(0) }
    }

    const bookingBtn = (hour, type, orderId, lotId) => {
        if (hour <= 1) {
            dispatch({ type: "ADD_TOTAL", payload: { type: type, hour: 1 } })
        } else {
            dispatch({ type: "ADD_TOTAL", payload: { type: type, hour: hour } })
        }
        dispatch({ type: "CHECKOUT_BOOKING", payload: { lotId: lotId, orderId: orderId } })
        toastFunc("Successfully checked out !")
    }
    return (
        <div className='booking-wrapper'>
            <div className='booking-amount'>
                <h1>  Due amount : ${initialState.totalAmount}</h1>
                {/* <button>Pay</button> */}
            </div>
            {orders?.map((item) => {
                return (
                    <div className='booking-container' key={item.id}>
                        <div className='booking-details'>
                            <div>
                                <p>Recipient name : {item.name}</p>
                                <p>Recipient email : {item.email}</p>
                                <p>Vehicle number : {item.no}</p>
                                <p>Vehicle type : {item.type}</p>
                                <p>Parking slot id : {item.slot}</p>
                                <p>Checkin Time  : {getDateFunc(item.time).date}/{getDateFunc(item.time).month} </p>
                            </div>


                            <div className='booking-timer'>
                                <h1>Parked since : {parkingTimeFunc(item.time).hours} Hour {parkingTimeFunc(item.time).minutes} Minutes</h1>
                            </div>


                        </div>
                        <button className='checkout-btn' onClick={() => bookingBtn(parkingTimeFunc(item.time).hours, item.type, item.id, item.slot)}>Check out</button>
                    </div>
                )
            })}
<ToastComponent/>
        </div>
    )
}

export default Bookings