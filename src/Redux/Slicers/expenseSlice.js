import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    expenseItems :[]
}

const expenseSlice = createSlice({
    name:"expense",
    initialState,
    reducers:{
        addExpense:(state,action) =>{
            state.expenseItems = [...state.expenseItems , action.payload]
        },
        emptyState : (state) =>{
            state.expenseItems  = []
        },
    } 
})


export const {addExpense,emptyState} = expenseSlice.actions
export default expenseSlice.reducer