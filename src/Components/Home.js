import React from 'react'
import "../Styles/Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className='home-main'>
        <h1>Revolutionizing your parking experience !</h1>
        <Link to={"/parking-form"}>
        <button className='home-btn'>Book your slot !</button>
        </Link>
    </div>
    </>
  )
}

export default Home