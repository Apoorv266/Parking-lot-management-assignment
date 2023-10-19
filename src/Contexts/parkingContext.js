import React, { createContext, useReducer } from 'react'
import { initialData, reducerFunc } from '../Reducers/parkingReducer'

export const contextData = createContext()

const ParkingContextWrapper = ({children}) => {
    const [initialState, dispatch] = useReducer(reducerFunc, initialData )

    return (
    <contextData.Provider value={{dispatch,initialState }}>{children}</contextData.Provider>
  )
}

export default ParkingContextWrapper