import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks:[],
  currentTask:null
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state,action) =>{
      console.log(action.payload)
      state.tasks = action.payload
    },

    addTask: (state, action) => {
      state.tasks = [action.payload, ...state.tasks]
    },

    editTask:(state,action) => {
       const taskIndex = state.tasks.findIndex(t => t.id === action.payload.id)
       state.tasks[taskIndex] = action.payload;
    },
    removeTask : (state,action) => {
        state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },
    setCurrentTask : (state,action) =>{
        const task = state.tasks.find(t => t.id === action.payload)
        state.currentTask = task;
    },
    clearCurrentTask : (state,action) => {
      state.currentTask = initialState.currentTask
    }
  },
});

export const { addTask,editTask,setTasks,setCurrentTask,clearCurrentTask,removeTask } = taskSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const tasksList = (state) => state.task.tasks;
export const currentTask = (state) => state.task.currentTask;

export default taskSlice.reducer;
