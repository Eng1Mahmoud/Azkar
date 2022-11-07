import {createSlice} from "@reduxjs/toolkit";
let initialState = {currunt:{}};
const CuruntData = createSlice({
    name: 'curuntData',
    initialState,
    reducers: {
     ChangeData(state, {payload}){
        state.currunt = payload;
     }
    },
  })

export const { ChangeData} = CuruntData.actions
export default CuruntData.reducer