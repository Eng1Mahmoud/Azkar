import { createSlice } from "@reduxjs/toolkit";
let initialState = {audio:""};
const Audio = createSlice({
  name: "audio",
  initialState,
  reducers: {
    changeAudio(state, { payload }) {
      state.audio = payload;
    },
  },
});

export const { changeAudio } = Audio.actions;
export default Audio.reducer;
