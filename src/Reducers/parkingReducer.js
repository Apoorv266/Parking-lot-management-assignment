import { parkingLotData } from "../Data/parkingLotData";

export const initialData = {
    parkingLotData : parkingLotData, 
    selectedSlot : [], 
    allowEntry : true
}

export const reducerFunc = (state, action) =>{
    const {type, payload} = action
    switch (type) {
        case "ADD_SLOT_DETAILS":
            if (state.allowEntry) {
              return {...state, selectedSlot :[...state.selectedSlot, payload],allowEntry: false  }
            }else{
              return state
            }
    
        default:
            break;
    }
}