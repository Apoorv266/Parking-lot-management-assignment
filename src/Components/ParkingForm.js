import React, { useContext, useEffect, useState } from 'react'
import "../Styles/Form.css"
import { Link } from 'react-router-dom'
import { contextData } from '../Contexts/parkingContext'
const ParkingForm = () => {
    const { initialState , dispatch} = useContext(contextData)

    const formData = {
        name: "",
        email: "", 
        no : "", 
        type : "null", 
        slot: ""
    }
    const [form, setForm] = useState(JSON.parse(localStorage.getItem('form')) ||formData )

    useEffect(() => {
     if (initialState?.currSlot) {
        setForm((state) => ({...state, "slot" : initialState?.currSlot?.slotId}))
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

    const isFormEmpty =  ()=>{
       return Object.values(form).find((item) => item === "" || item === null)
    }

    const testFunc = () =>{
        if (isFormEmpty()) {
            console.log("form is empty")
        }else{
            dispatch({type : "ADD_ORDER" , payload: form})
            setForm(formData)
        }
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


                <button className='book-btn' onClick={testFunc} disabled={!initialState?.currSlot?.slotId && true}>Confirm slot ! </button>
            </div>

        </div>
    )
}

export default ParkingForm