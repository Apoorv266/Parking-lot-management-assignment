import React, { createContext, useEffect, useReducer } from 'react'
import { initialData, reducerFunc } from '../Reducers/parkingReducer'

export const contextData = createContext()

const ParkingContextWrapper = ({ children }) => {
  const [initialState, dispatch] = useReducer(reducerFunc, initialData)
  

  const sumFunc = () => {
    const initialValue = {
      car: 0,
      bike: 0,
      isalreadyBooked: 0,
      isAssigned: 0
    };

    const totals = Object.values(initialState.parkingLotData).reduce((acc, parkingLots) => {
      parkingLots.forEach(parkingLot => {
        parkingLot.vehicleData.forEach(vehicle => {
          if (vehicle.name === "car") {
            acc.car++;
          } else if (vehicle.name === "bike") {
            acc.bike++;
          }
          if (vehicle.isalreadyBooked)  {
            acc.isalreadyBooked++;
          }
          if (vehicle.isAssigned) {
            acc.isAssigned++
          }
        });
      });
      return acc;
    }, initialValue);

    return totals
  }


  return (
    <contextData.Provider value={{ dispatch, initialState, sumFunc }}>{children}</contextData.Provider>
  )
}

export default ParkingContextWrapper