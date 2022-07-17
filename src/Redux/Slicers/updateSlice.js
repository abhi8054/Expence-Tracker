import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    flag : false,
    id:0, 
}

const updateSlice = createSlice({
    name:"status",
    initialState,
    reducers:{
        handleTab:(state,action) =>{
            state.flag = action.payload
        },
        handleId:(state,action) =>{
            state.id = action.payload
        }
    } 
})


export const {handleTab,handleId} = updateSlice.actions
export default updateSlice.reducer