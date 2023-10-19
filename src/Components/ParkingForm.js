import React from 'react'
import "../Styles/Form.css"
import { Link } from 'react-router-dom'
const ParkingForm = () => {
    return (
        <div className='form-main'>
            <div className='form-body'>

                <label>Name : </label>
                <input type='text' />

                <label>Email : </label>
                <input type='text' />

                <label>Vehicle Number : </label>
                <input type='text' />

                <label>Choose Vehicle type : </label>
                <select defaultValue={"null"}>
                    <option value="null" disabled>Choose Vehicle</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                </select>

                <label>Choose Slot : </label>
                <div className='slot-input'>
                    <input type='text' disabled value={"s"} />
                    <Link to={"/parking-lots"}>
                        <button className='choose-btn'>Choose a slot</button>
                    </Link>
                </div>


                <button className='book-btn'>Book slot ! </button>
            </div>

        </div>
    )
}

export default ParkingForm