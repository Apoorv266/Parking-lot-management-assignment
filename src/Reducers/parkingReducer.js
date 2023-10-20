import { parkingLotData } from "../Data/parkingLotData";
import { addOrderFunc, checkoutFunc, reserveSlotFunc } from "../Utils/Utils";

export const initialData = {
    parkingLotData: parkingLotData,
    currSlot: {},
    orders: [],
    totalAmount: 0
}

export const reducerFunc = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case "RESERVE_SLOT":

            let assignedData = reserveSlotFunc(state.parkingLotData, payload)
            return { ...state, parkingLotData: assignedData }

        case "ADD_CURRENT_SLOT":
            return state.currSlot.slotId === payload.slotId ? { ...state, currSlot: {} } : { ...state, currSlot: payload }

            case "EMPTY_CURRENT_SLOT":
            return  { ...state, currSlot: {} } 
        case "ADD_ORDER":

            const updatedOrderData = addOrderFunc(state.parkingLotData, state.currSlot.slotId)

            const obj = { ...payload, time: new Date(), id: state.orders.length + 1 }
            
            return { ...state, parkingLotData: updatedOrderData, currSlot: {}, orders: [...state.orders, obj] }

        case "ADD_TOTAL":
            console.log(payload)
            if (payload.type === "car") {
                let value = state.totalAmount + (payload.hour * 50)
                return { ...state, totalAmount: value }
            } else {
                return { ...state, totalAmount: state.totalAmount + (payload.hour * 30) }
            }


        case "CHECKOUT_BOOKING":
            let newArr = state.orders.filter((item) => item.id !== payload.orderId)

            let updatedData = checkoutFunc(state.parkingLotData, payload.lotId)
            console.log("updatedData", updatedData)
            return { ...state, orders: newArr, parkingLotData: updatedData }
        default:
            break;
    }
}