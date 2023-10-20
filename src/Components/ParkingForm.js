import React, { useContext, useEffect, useState } from 'react'
import "../Styles/Form.css"
import { Link } from 'react-router-dom'
import { contextData } from '../Contexts/parkingContext'
const ParkingForm = () => {
    const { initialState } = useContext(contextData)
    const {currSlot} = initialState
    const [form, setForm] = useState(JSON.parse(localStorage.getItem('form')) || {
        name: "",
        email: "", 
        no : "", 
        type : "null", 
        slot: ""
    })

    useEffect(() => {
     if (currSlot) {
        setForm((state) => ({...state, "slot" : currSlot.slotId}))
     }else{
        setForm((state) => ({...state, "slot": ""}))
     }

    
    }, [])

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(form));
      }, [form]);
    

    const inputFunc = (e) =>{
setForm((state) => ({...state, [e.target.name] : e.target.value}))
    }

    const testFunc = () =>{
        console.log(form)
    }
    return (
        <div className='form-main'>
            <div className='form-body'>

                <label>Name : </label>
                <input type='text' onChange={inputFunc} name='name' value={form.name}/>

                <label>Email : </label>
                <input type='text' onChange={inputFunc} name='email' value={form.email}/>

                <label>Vehicle Number : </label>
                <input type='text' onChange={inputFunc} name='no' value={form.no}/>

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


                <button className='book-btn' onClick={testFunc}>Confirm slot ! </button>
            </div>

        </div>
    )
}

export default ParkingForm