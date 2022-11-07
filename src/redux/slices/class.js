import {createSlice} from "@reduxjs/toolkit";
let initialState = {show:" ",background:""};
const DataSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {
     show(state, {payload}){
        state.show = payload;
     },
     changBackground(state, {payload}){
      state.background = payload;
   }
    },
  })

export const { show,changBackground} = DataSlice.actions
export default DataSlice.reducer