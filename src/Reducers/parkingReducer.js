import { parkingLotData } from "../Data/parkingLotData";

export const initialData = {
    parkingLotData: parkingLotData,
    currSlot: {}
}

export const reducerFunc = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "RESERVE_SLOT":
            let newState = {}
            console.log(payload)
            const filterFunc = (data) => {
                return data.map((item) => {
                    if (item.vehicleId === payload) {
                        return { ...item, isAssigned: !item.isAssigned }
                    } else {
                        return { ...item, isAssigned: false }
                    }
                })
            }

            const toggleFunc = (data) => {
                return data.map((item) => {
                    return { ...item, vehicleData: filterFunc(item.vehicleData) }
                })
            }

            Object.keys(state.parkingLotData).forEach((item) => {
                let obj = { [item]: toggleFunc(state.parkingLotData[item]) }
                newState = { ...newState, ...obj }
            })
            return { ...state, parkingLotData: newState }

        case "ADD_CURRENT_SLOT":
            return { ...state, currSlot: payload }
        default:
            break;
    }
}