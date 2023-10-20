import React, { useContext, useEffect, useState } from 'react'
import "../Styles/Form.css"
import { Link } from 'react-router-dom'
import { contextData } from '../Contexts/parkingContext'
import { ToastComponent, errorToastFunc, toastFunc } from './ToastContainer'
import { isFormEmpty } from '../Utils/Utils'
const ParkingForm = () => {
    const { initialState, dispatch } = useContext(contextData)
    const { currSlot } = initialState
    const formData = {
        name: "",
        email: "",
        no: "",
        type: "null",
        slot: ""
    }
    const [form, setForm] = useState(JSON.parse(localStorage.getItem('form')) || formData)

    useEffect(() => {
        if (Object.keys(initialState?.currSlot).length > 0) {
            setForm((state) => ({ ...state, "slot": initialState?.currSlot?.slotId }))
        } else {
            setForm((state) => ({ ...state, "slot": "" }))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));
    }, [form]);


    const inputFunc = (e) => {
        setForm((state) => ({ ...state, [e.target.name]: e.target.value }))
    }


    const submitFormFunc = () => {
        if (isFormEmpty(form)) {
            errorToastFunc(`One or more field is empty!`)
        } else {
            if (form.type !== currSlot.name) {
                errorToastFunc(`Please choose slot suitable for ${form.type} !`)
            } else {
                dispatch({ type: "ADD_ORDER", payload: form })
                setForm(formData)
                toastFunc("Parking spot booked successfully !")
                dispatch({ type: "EMPTY_CURRENT_SLOT" })
            }
        }
    }
    return (
        <div className='form-main'>
            <div className='form-body'>

                <label>Name : </label>
                <input type='text' onChange={inputFunc} name='name' value={form.name} />

                <label>Email : </label>
                <input type='text' onChange={inputFunc} name='email' value={form.email} />

                <label>Vehicle Number : </label>
                <input type='text' onChange={inputFunc} name='no' value={form.no} />

                <label>Choose Vehicle type : </label>
                <select onChange={inputFunc} name='type' value={form.type}>

                    <option value="null" >Choose Vehicle</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>

                </select>

                <label>Choose Slot : </label>
                <div className='slot-input'>
                    <input type='text' disabled value={form.slot} />

                    <Link to={"/parking-lots"}>
                        <button className='choose-btn'>Choose a slot</button>
                    </Link>
                </div>


                <button className='book-btn' onClick={submitFormFunc} disabled={!initialState?.currSlot?.slotId && true}>Confirm slot ! </button>
            </div>
            <ToastComponent />
        </div>
    )
}

export default ParkingForm