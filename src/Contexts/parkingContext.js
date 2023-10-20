import React, { createContext, useReducer } from 'react'
import { initialData, reducerFunc } from '../Reducers/parkingReducer'

export const contextData = createContext()

const ParkingContextWrapper = ({children}) => {
    const [initialState, dispatch] = useReducer(reducerFunc, initialData )

    function countCarOccurrences(total, parkingLot) {
      return total + parkingLot.vehicleData.reduce((count, vehicle) => {
        if (vehicle.name === "car") {
          return count+=1
        }else{
          return count
        }
      }, 0);
  }
  
  // Use reduce to iterate through each category (Ground, First, Second)
  const totalCarOccurrences = Object.values(initialState.parkingLotData).reduce((total, category) => {
      return total + category.reduce(countCarOccurrences, 0);
  }, 0);
  
  console.log("Total number of 'car' occurrences:", totalCarOccurrences);
    return (
    <contextData.Provider value={{dispatch,initialState }}>{children}</contextData.Provider>
  )
}

export default ParkingContextWrapper