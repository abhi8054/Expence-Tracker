import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./Slicers/expenseSlice"
import updateReducer from "./Slicers/updateSlice"

const store = configureStore({
    reducer:{
      expense:expenseReducer,
      status:updateReducer,  
    },
})

export default store