import React from 'react'

const ParkingLotRender = ({lotDetails}) => {
  return (
    <div className='park-lot-container'>
    {lotDetails.map((item) => {
      return (
        <div className="container-square" key={item.parkinglotId}>

          {item.vehicleData.map((itemVal) => itemVal.name === "car" ? <div className={`square ${itemVal.isAssigned && "assigned"}`} /> : <div className={`circle ${itemVal.isAssigned && "assigned"}`} />)}

        </div>
      )
    })}
  </div>
  )
}

export default ParkingLotRender