export const checkoutFunc = (state, lotId) => {
   let newStateVal = {}
   const filterFunc = (data) => {
      return data.map((item) => {
         if (item.vehicleId === lotId) {
            return { ...item, isBooked: false }
         } else {
            return item
         }
      })
   }

   const toggleFunc = (data) => {
      return data.map((item) => {
         return { ...item, vehicleData: filterFunc(item.vehicleData) }
      })
   }

   Object.keys(state).forEach((item) => {
      let obj = { [item]: toggleFunc(state[item]) }
      newStateVal = { ...newStateVal, ...obj }
   })

   return newStateVal
}


export const reserveSlotFunc = (state, id) =>{
   let newState = {}
   const filterFunc = (data) => {
       return data.map((item) => {
           if (item.vehicleId === id) {
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

   Object.keys(state).forEach((item) => {
       let obj = { [item]: toggleFunc(state[item]) }
       newState = { ...newState, ...obj }
   })

   return newState
}

export const addOrderFunc = (state, currSlotId) =>{
   let newStateVal = {}
   const filterFun = (data) => {
       return data.map((item) => {
           if (currSlotId === item.vehicleId) {
               return { ...item, isAssigned: false, isBooked : true } 
           }else{
               return { ...item, isAssigned: false }
           }
       })
   }

   const toggleFun = (data) => {
       return data.map((item) => {
           return { ...item, vehicleData: filterFun(item.vehicleData) }
       })
   }

   Object.keys(state).forEach((item) => {
       let obj = { [item]: toggleFun(state[item]) }
       newStateVal = { ...newStateVal, ...obj }
   })

   return newStateVal
}