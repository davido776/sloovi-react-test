import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "../slices/displaySlice";
import taskReducer from "../slices/taskSlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    task:taskReducer,
  },
});
