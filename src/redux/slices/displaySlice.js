import { createSlice } from "@reduxjs/toolkit";
import {TASKLIST,CREATETASK} from "../commons/constants";

const initialState = {
  display:CREATETASK,
  edit:false
};

export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    changeDisplay: (state, action) => {
       state.display = action.payload
    },
    toggleEdit: (state,action) =>{
       state.edit = action.payload
    }
    
  },
});

export const { changeDisplay,toggleEdit } = displaySlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const currentDisplay = (state) => state.display.display;
export const editMode = (state) => state.display.edit;

export default displaySlice.reducer;
